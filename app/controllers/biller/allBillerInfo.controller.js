import { where } from "sequelize";
import { models } from "../../models/index.js";

const { biller, prod_integration } = models;

export const allBillerInfo = async (req, res) => {
  try {
    //! finding all biller information
    const allBiller = await biller.findAll({
      raw: true,
      attributes: [
        "biller_code",
        "biller_status",
        "biller_name",
        "biller_category",
      ],
    });
    return res.status(200).json({
      success: true,
      data: {
        allBiller,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export const notIntegratedBillerInfo = async (req, res) => {
  try {
    //! finding all biller information
    const allBiller = await biller.findAll({
      raw: true,
      attributes: [
        "biller_code",
        "biller_status",
        "biller_name",
        "biller_category",
      ],
    });

    const allBillers = [];
    await allBiller.forEach(async(element) => {
      let user = await prod_integration.findOne({where:{biller_code:element.biller_code}});
      if(!user){
        allBillers.push(element);
      }
      
    });
    const integratedBiller = await prod_integration.findAll({
      raw: true,
      attributes: ["biller_code"],
    });

    

    return res.status(200).json({
      success: true,
      data: {
        allBiller:allBillers,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
