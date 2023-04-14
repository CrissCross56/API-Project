//contains the code for the collections of the resident collections
import Resident from "../models/Resident.js";

export const getResidents = async (req,res) => {
    try {
        const residents = await Resident.find();
        res.json(residents);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message});
    }
}

export const getResident = async (req,res) => {
    try {
        const {id} = req.params;
        const resident = await Resident.findById(id);
        res.json(resident)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message});
    }
}

// export const getCertainResident = async (req,res) => {
//     try {
//         const {firstName} = req.params;
//         const resident = await Resident.findOne({$name: firstName});
//         res.json(resident);
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({error: error.message});
//     }
// }

export const createResident = async (req,res) => {
    try {
        const resident = new Resident(req.body);
        await resident.save();
        res.status(201).json(resident);   
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message});
    }
}

export const updateResident = async (req,res) => {
   const {id} = req.params;
   const resident = await Resident.findByIdAndUpdate(id, req.body);
   res.status(200).json(resident);
}

export const deleteResident = async (req,res) => {
    try {
        const {id} = req.params;
        const deleted = await Resident.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send("Resident Deleted!");
        }
        else{
            throw new Error("Resident not found");
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message});
    }
}

// export const deleteCertainResident = async (req,res) => {
//     try {
//         const {firstName} = req.params;
//         const deleted = await Resident.findOneAndDelete({$name: firstName});
//         if(deleted){
//             return res.status(200).send("Resident Deleted!");
//         }
//         else{
//             throw new Error("Resident not found");
//         }
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({error: error.message});
//     }
// }