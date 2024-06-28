import { models } from "../../models/index.js";

const { product } = models;

export const getProducts = async (req, res) => {
  try {
    const data = await product.findAll({
      raw: true,
      attributes: { exclude: ["product_id"] },
    });
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.log("Error while fetching products:- ", err);
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
};
