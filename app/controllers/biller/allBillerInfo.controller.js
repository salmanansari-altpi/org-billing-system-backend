import { models } from "../../models/index.js";

const {
  biller,
  biller_contact,
  biller_category_master,
  country,
  agent_details,
  bill_frequency,
  source_of_bill,
  billing_plan_type,
} = models;

export const allBillerInfo = async (req, res) => {
  try {
    //! finding all biller information
    const allBiller = await biller.findAll({
      raw: true,
      attributes: [
        "biller_id",
        "biller_code",
        "biller_status",
        "biller_name",
        "biller_category",
        "country_id",
        "agent_id",
        "bill_freq_id",
        "location_of_bill_file",
        "source_of_bill_file",
        "bill_currency_id",
        "billing_plan_type_id",
      ],
    });

    //! finding all biller contact information
    const allBillerContact = await biller_contact.findAll({
      raw: true,
      attributes: [
        "biller_id",
        "address_1",
        "city",
        "state",
        "pin",
        "contact_name_1",
        "mobile_no_1",
        "email_1",
      ],
    });

    //! finding all billerCategoryMaster information
    const allBillerCategoryMaster = await biller_category_master.findAll({
      raw: true,
      attributes: ["customer_type", "description"],
    });

    //! finding all country information
    const countryDetails = await country.findAll({ raw: true });

    //! finding all Agent information
    const allAgent = await agent_details.findAll({
      raw: true,
      attributes: ["agent_id", "agent_name"],
    });

    //! finding all billerFrequency information
    const allFrequency = await bill_frequency.findAll({ raw: true });

    //! finding all biller sourceOfBill information
    const allSourceOfBill = await source_of_bill.findAll({ raw: true });

    //! finding al biller plantypes information
    const billerPlanType = await billing_plan_type.findAll({ raw: true });

    // console.log(allBillerContact);
    allBiller.map(async (biller) => {
      allBillerCategoryMaster.map((category) => {
        if (biller.biller_category === category.customer_type) {
          biller.biller_category_description = category.description;
        }
      });
      countryDetails.map((country) => {
        if (country.country_id === country.country_id) {
          biller.country_name = country.country_name;
          biller.currency_code = country.currency_code;
        }
      });
      allAgent.map((agent) => {
        if (biller.agent_id === agent.agent_id) {
          biller.agent_name = agent.agent_name;
        }
      });
      allFrequency.map((frequency) => {
        if (biller.bill_freq_id === frequency.bill_freq_id) {
          biller.frequency_code = frequency.frequency_code;
          biller.frequency_description = frequency.frequency_description;
        }
      });
      allSourceOfBill.map((sourceOfBill) => {
        if (biller.source_of_bill_file === sourceOfBill.source_of_bill_id) {
          biller.source_of_bill_code = sourceOfBill.source_of_bill_code;
          biller.source_of_bill_description =
            sourceOfBill.source_of_bill_description;
        }
      });
      billerPlanType.map((billerPlan) => {
        if (biller.billing_plan_type_id == billerPlan.billing_plan_type_id) {
          biller.billing_plan_type_code = billerPlan.billing_plan_type_code;
          biller.billing_plan_type_description =
            billerPlan.billing_plan_type_description;
        }
      });

      const contact = allBillerContact.find((billerContact) => {
        if (biller.biller_id == billerContact.biller_id) {
          return billerContact;
        }
      });
      if (contact) {
        biller.contact = contact;
      }

      return biller;
    });

    return res.status(200).json({
      success: true,
      data: {
        allBiller,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "internal server error" });
  }
};
