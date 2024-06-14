import { where } from "sequelize";
import { models } from "../../models/index.js";
const { biller,biller_category_master,country,source_of_bill,currency} = models;

export const addNewBiller =async (req,res)=>{
    try {
        const {biller_code, 
            biller_name,
            upi_trailer,
            bill_data_location,
            bill_data_feed_type,
            bill_amount_type
        
         } = req.body;

        const billCategory=  await biller_category_master.findOne({where:{customer_type:biller_code}});
        const country_id = await country.findOne({where:{country_name:bill_data_location}})
        const sourceOfBill = await source_of_bill.findOne({where:{source_of_bill_code:bill_data_feed_type}});
        const amountType = await currency.findOne({where:{currency_code:bill_amount_type}});

        biller.create({
            biller_code,
            biller_name,
            biller_category:billCategory.customer_type,
            country_id:country_id.country_id,
            source_of_bill_code:sourceOfBill.source_of_bill_code,
            upi_trailer,
            
        });
        res.status(200).json({
            message: "Biller added successfully",
        });
        
    } catch (error) {
        console.log(error.message);
    }
}