const router = require('express').Router();
const specs = require('../models/specializations');
const counselor = require('../models/counselor');
const User = require('../models/user')
const moment = require('moment')

module.exports = {

  addSpecs: async (req, res) => {

   

    const newSpec = new specs({
      specs: req.body.specs,
      // specLogo:req.body.specLogo
    })

    const data = 'successfully added'
    //save and respond
    await newSpec.save();
    res.status(200).json(data)
  },

  viewSpecs: async (req, res) => {
   
    let data = await specs.find({})
  
    res.status(200).json({ data })
  },

  deleteSpec: async (req, res) => {
   

    try {
      await specs.findByIdAndDelete(req.params.id);
      res.status(200).json()
    }
    catch (err) {
      return res.status(404).json(err)
    }

  },

  counselorReq: async (req, res) => {

    try {
      let data = await counselor.find({});
      console.log({ data });
      res.status(200).json({ data });
    }
    catch (e) {
      console.log(e);
    }
  },

  counselorDetails: async (req, res) => {
    console.log(req.params.id)
    try {
      let data = await counselor.findOne({ _id: req.params.id })
      res.status(200).json(data)
      console.log(data)
    }
    catch (e) {
      console.log(e)
    }
  },

  approveCounselor: async (req, res) => {
    console.log(req.params.id)

    await counselor.findByIdAndUpdate(req.params.id, {
      $set: {
        status: "accepted"
      }
    });

    res.json("updated successfully")
  },

  rejectCounselor: async (req, res) => {
    console.log(req.params.id)

    await counselor.findByIdAndUpdate(req.params.id, {
      $set: {
        status: "rejected"
      }
    });

    res.json("updated successfully")
  },

  getAllUsers: async (req, res) => {
    
    try {
      const users = await User.find({});
      console.log(users);
      res.status(200).json(users);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  blockUser: async(req, res) => {
   
    try {
      await User.findByIdAndUpdate(req.params.userId, {
        $set: {
          status: 'Blocked'
        }
      })
      res.status(200).json('success')

    } catch(err) {
      console.log(err);
      res.status(400).json(err);
    }

},

unBlockUser: async(req, res) => {
   
  try {
    await User.findByIdAndUpdate(req.params.userId, {
      $set: {
        status: 'Active'
      }
    })
    res.status(200).json('success')

  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }

},

getAllCounselors: async(req, res) => {
  
  try {
    const counselors = await counselor.find({ status: 'accepted' });
    res.status(200).json(counselors);

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

}