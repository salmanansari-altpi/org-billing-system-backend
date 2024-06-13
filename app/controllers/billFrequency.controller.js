
 import biller_category_master from "../models/biller_category_master.model";
import { biller_bills } from "../models/Biller_Bills";


const getAllCategories = async (req, res) => {
  try {

    // const { customer_type } = req.query;

    //finding all the categories
    const allCategories = await biller_category_master.findAll({

        where: {
            customer_type: "TELCOM",
          },
    });
    console.log(allCategories);
  
    return res
      .status(200)
      .json({ data: { getAllCategories } });
  } catch (error) {
    console.log(error);
  }
};
export default getAllCategories;




  
