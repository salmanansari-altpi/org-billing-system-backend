import { models } from "../../models/index.js";
const {billing_plan_type} = models

export const billerPlanType = async(req,res)=>{
    try {
        const data = await billing_plan_type.findAll({attributes:["billing_plan_type_code","billing_plan_type_description"]});
       return res.status(200).json({sucess:true,data:data}) 
        
    } catch (error) {
        return res
        .status(404)
        .json({ success: true, message: "internal error", data: null });

        
    }
}