import { where } from "sequelize";
import { models } from "../../models/index.js";
const { biller,biller_category_master,country,source_of_bill,currency,biller_frequency,agent_details} = models;

export const addNewBiller =async (req,res)=>{
    try {
        const {customer_type, 
            biller_name,
            currency_code,
            billing_plan_type_code,
          bill_date_of_month,
          early_payment_date,
          discount_per,
            frequency_code,
            biller_plan_code,
            agent_id
        
         } = req.body;

        const billCategory=  await biller_category_master.findOne({where:{customer_type}});
        const country_id = await country.findOne({where:{currency_code:currency_code}})
        // ------- add new biller 
        const sourceOfBill = await source_of_bill.findOne({where:{source_of_bill_code:bill_data_feed_type}});
        const amountType = await currency.findOne({where:{currency_code:bill_amount_type}});
        const billFrequency = await biller_frequency.findOne({where:{frequency_code:bill_frequency}});
        const agentId = await agent_details.findOne({where:{agent_name:agent}});


        biller.create({
            biller_code,
            biller_name,
            biller_category:billCategory.customer_type,
            country_id:country_id.country_id,
            source_of_bill_code:sourceOfBill.source_of_bill_code,
            bill_amount_id:amountType.bill_amount_id,
            bill_freq_id:billFrequency.bill_freq_id,
            agent_id:agentId.agent_id,
             upi_trailer,
            
        });
        res.status(200).json({
            message: "Biller added successfully",
        });
        
    } catch (error) {
        console.log(error.message);
    }
}