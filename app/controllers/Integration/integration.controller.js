import { models } from "../../models/index.js";

const {
  biller,
  prod_integration,
  switch_master,
  partner_bank,
  product,
  pay_authority,
} = models;

function createUniqueCode() {
  return Math.floor(Math.random() * 1000000)
    .toString()
    .substring(1, 7);
}

export const billerIntegration = async (req, res) => {
  try {
    const {
      prodCode,
      billerCode,
      partnerBankCode,
      switchCode,
      payAuthCode,
      webhook,
      key,
      salt,
    } = req.body;

    if (
      !prodCode ||
      !billerCode ||
      !partnerBankCode ||
      !switchCode ||
      !payAuthCode
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory!" });
    }
    const integrated = await prod_integration.findOne({
      raw: true,
      where: { biller_code: billerCode },
    });

    if (integrated) {
      return res
        .status(400)
        .json({ success: false, message: "Already Integrated!" });
    }

    const integrationCode = createUniqueCode();
    const { biller_id } = await biller.findOne({
      raw: true,
      attributes: ["biller_id"],
      where: { biller_code: billerCode },
    });

    const { product_id } = await product.findOne({
      raw: true,
      attributes: ["product_id"],
      where: { product_code: prodCode },
    });
    const { partner_bank_id } = await partner_bank.findOne({
      raw: true,
      attributes: ["partner_bank_id"],
      where: { partner_bank_code: partnerBankCode },
    });
    const { switch_id } = await switch_master.findOne({
      raw: true,
      attributes: ["switch_id"],
      where: { switch_code: switchCode },
    });

    const { payauthority_id } = await pay_authority.findOne({
      raw: true,
      attributes: ["payauthority_id"],
      where: { payAuthority_code: payAuthCode },
    });

    await prod_integration.create({
      integration_code: integrationCode,
      product_id,
      product_code: prodCode,
      biller_id,
      biller_code: billerCode,
      partner_bank_id,
      partner_bank_code: partnerBankCode,
      switch_id,
      switch_code: switchCode,
      payauthority_id,
      payauthority_trailer: payAuthCode,
      webhook,
      key,
      salt,
    });

    res
      .status(201)
      .json({ success: true, message: "Successfully Integrated!" });
  } catch (err) {
    console.log("Error while integrating biller:-", err);
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
};
