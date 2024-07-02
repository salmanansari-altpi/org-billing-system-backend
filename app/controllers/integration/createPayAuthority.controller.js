
import { models } from '../../models/index.js';

const  { pay_authority } =models;

export const createPayAuthority = async (req, res) => {
    try {
        const {
            // payAuthority_id,
            payAuthority_code,
            // payAuthority_description,
            payAuthority_name,
            payAuthority_note,
            payAuthority_status,  //1 - Live | 2 - Suspended | 3 - Test |8 - Boarded|9 - Deleted
        } = req.body;
        console.log(req.body);

            await pay_authority.create(
                { 
                payAuthority_code:payAuthority_code,
                payAuthority_description:payAuthority_name,
              
                payAuthority_note:payAuthority_note,
                payAuthority_status:payAuthority_status 
            }
            );
            res.status(200).json({success:true,msg:'Pay Authority created Successfully!' })
            // res.status(200).json({success:true,msg:'Pay Authority created Successfully!',data:records })
    }
    catch (error) {
        console.log(error);
    }
};
