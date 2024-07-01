import { models } from "../../models/index.js";
const { switch_master } = models;


export const createSwitch = async(req, res) => {
    try {
        const {switch_code,
            switch_name,
            switch_status,   //1 - Live | 2 - Suspended | 3 - Test |8 - Boarded|9 - Deleted
            switch_note}= req.body;

        await switch_master.create({switch_code: switch_code,
            switch_name:switch_name,
            switch_status:switch_status,   //1 - Live | 2 - Suspended | 3 - Test |8 - Boarded|9 - Deleted
            switch_note:switch_note});

        return res.status(200).json({
            success: true,
            message: "switch created"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Unable to create switch"
        })
    }
}

