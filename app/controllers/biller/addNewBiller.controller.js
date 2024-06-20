import { where } from "sequelize";
import { models } from "../../models/index.js";

const { biller,biller_category_master,country,source_of_bill,currency,biller_frequency,agent_details, billing_plan_type} = models;

export const addNewBiller =async (req,res)=>{
    try {
        const {
            biller_code,
            customer_type, 
            biller_name,
            currency_code,
            source_of_bill_code,
            billing_plan_type_code,

          bill_date_of_month,
          early_payment_date,
          discount_per,
            frequency_code,
            
            agent_id
        
         } = req.body;

        const billCategory=  await biller_category_master.findOne({where:{customer_type}});
        const country_id = await country.findOne({where:{currency_code:currency_code}})
        // ------- add new biller 
        const billPlan = await billing_plan_type.findOne({where:{billing_plan_type_code}})
        const sourceOfBill = await source_of_bill.findOne({where:{source_of_bill_code}});
        const amountType = await currency.findOne({where:{currency_code}});
        const billFrequency = await biller_frequency.findOne({where:{frequency_code}});
        let agentId ;
if(agent_id){
     agentId = await agent_details.findOne({where:{agent_id}});
}

if(!billCategory || !country_id || ! billPlan || !sourceOfBill || !amountType || !billFrequency){
    return res
    .status(404)
    .json({ success: true, message: "Invalid data", data: null });
}
// -------------------- create new table 

       await  biller.create({
            biller_code,
            biller_name,
            biller_category:billCategory.id,
            country_id:country_id.country_id,
            source_of_bill_file:sourceOfBill.source_of_bill_id,
            bill_currency_id:amountType.bill_amount_id,
            bill_freq_id:billFrequency.bill_freq_id,
            agent_id:agentId?.agent_id,
            billing_plan_type_id:billPlan.billing_plan_type_id,
            
            
        });
        res.status(200).json({
            message: "Biller added successfully",
        });
        
    } catch (error) {
        console.log(error.message);
        return res
        .status(404)
        .json({ success: true, message: "internal error", data: null });
    }
}