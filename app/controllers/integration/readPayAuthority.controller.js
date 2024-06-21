
import { models } from '../../models/index.js';

const  { pay_authority } =models;


export const readPayAuthority = async (req, res) => {
    try {
        const records = await pay_authority.findAll();
        res.status(200).json({success:true,msg:'Pay Authority Read Successfully!',data:records });
    }
    catch (error) {
        console.log(error);
    }
};