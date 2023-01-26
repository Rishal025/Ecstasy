const router = require('express').Router();
const counselor = require('../models/counselor')


module.exports = {

    timeSlot: async (req, res) => {

        try {
            const id = req.body[1].id
            console.log(id);
            await counselor.findByIdAndUpdate(id, {
                $set: {
                    timeSlot: req.body[0]
                }
            }, { upsert: true })

            res.status(200).json('successful');

        } catch (err) {
            console.log(err);
            res.status(200).json(err)
        }
    },

    counselorList: async (req, res) => {

        try {
            let data = await counselor.find({ status: 'accepted' }).limit(3)
            console.log(data);
            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            res.status(400).json(err)
        }
    }

}