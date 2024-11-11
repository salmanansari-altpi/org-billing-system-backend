import { customer_biller_cref } from "../../models/customer_biller_cref.model.js";
import { models } from "../../models/index.js";

const { biller, prod_integration } = models;

export const totalBiller = async (req, res) => {
  try {
    const { user_type, party_code } = req.user;
    let totalBiller;
    if (user_type !== "PADMIN") {
      totalBiller = await prod_integration.count({
        where: { biller_code: party_code },
      });
    } else {
      totalBiller = await prod_integration.count({});
    }
    res.status(200).json({ success: true, data: totalBiller });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const unboardedBiller = async (req, res) => {
  try {
    const { user_type, party_code } = req.user;
    let count = 0;
    if (user_type !== "PADMIN") {
      const allBillers = await biller.findAll({
        raw: true,
        attributes: ["biller_code"],
        where: { biller_code: party_code },
      });
      for (const element of allBillers) {
        const exists = await prod_integration.count({
          where: { biller_code: element.biller_code },
        });
        if (!exists) count++;
      }
    } else {
      const allBillers = await biller.findAll({});
      for (const element of allBillers) {
        const exists = await prod_integration.count({
          where: { biller_code: element.biller_code },
        });
        if (!exists) count++;
      }
    }
    res.status(200).json({ success: true, data: count });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const billPaid = async (req, res) => {
  try {
    const { user_type, party_code } = req.user;
    let count;

    if (user_type !== "PADMIN") {
      const allBillers = await biller.findAll({
        raw: true,
        attributes: ["biller_id"],
        where: { biller_code: party_code },
      });

      const billerIds = allBillers.map((b) => b.biller_id);

      // Count the related customer_biller_cref entries for the fetched biller_ids
      count = await customer_biller_cref.count({
        where: { biller_id: billerIds },
      });
    } else {
      // Count all customer_biller_cref entries for PADMIN
      count = await customer_biller_cref.count();
    }

    res.status(200).json({ success: true, data: count });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
