const counselor = require('../models/counselor');
const User = require('../models/user');
const Session = require('../models/session')
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = {

    deleteUser: async (req, res) => {
        if (req.body.userId === req.params.id) {

            try {
                const user = await User.findByIdAndDelete(req.params.id);
                res.status(200).json("account has been deleted")
            }
            catch (err) {
                return res.status(404).json(err)
            }
        } else {
            return res.status(403).json("it is not your account");
        }
    },

    counselorProfile: async (req, res) => {

        try {

            let data = await counselor.findById(req.params.id);
            console.log(data);
            res.status(200).json(data);

        } catch (err) {

            console.log(err);
            res.status(400).json(err);
        }
    },

    bookSession: async (req, res) => {

        try {
            function parseJwt(token) {
                return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
            }

            const moment = require('moment');
            const today = moment().format('MMMM Do YYYY');
            const tomorrow = moment().add(1, 'days').format('MMMM Do YYYY');

            console.log('date:')
            console.log(tomorrow);
            console.log(today);


            let userDetails = parseJwt(req.body.user);
            let userFind = await User.findById(userDetails.userInfo.others._id);

            const newSession = new Session({
                userId: userFind._id,
                counselorId: req.body.counselor._id,
                timeSlot: req.body.time,
                plan: req.body.plan.plan,
                sessionDate: tomorrow,
                bookedDate: today
            })

            //save and respond

            const session = await newSession.save();
            res.status(200).json(session);

        } catch (err) {
            console.log(err);
            res.status(400).json(err)
        }


    },

    getSession: async (req, res) => {

        try {

            function parseJwt(token) {
                return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
            }

            let data = parseJwt(req.params.id)
            let userData = await Session.find({ userId: data.userInfo.others._id })
            console.log(userData);
            res.json(userData);

        } catch (err) {
            console.log(err);
            res.status(400).json(err)
        }
    },

    userProfile: async (req, res) => {

        try {

            function parseJwt(token) {
                return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
            }
            let userDetails = parseJwt(req.params.id);
            const user = await User.findOne({ email: userDetails.userInfo.others.email })
            res.status(200).json(user);

        } catch (err) {
            console.log(err);
            res.status.json(err);
        }

    },

    updateProfile: async (req, res) => {

        try {
            const user = await User.findOne({ email: req.body.email, _id: { $ne: req.body._id } })
            if (user) {
                console.log('already email exists');
                return res.json({ emailExists: true });
            }

            await User.findByIdAndUpdate(req.body._id, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    phone: req.body.phone,
                    dob: req.body.dob
                }
            })
            res.json({ success: true })

        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }

    },

    deleteAccount: async (req, res) => {

        try {
            await User.findOne({ _id: req.params.id }).remove().exec();
            res.json({ deleted: true })
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    changePassword: async (req, res) => {

        try {

            let user = await User.findById(req.body._id)
            console.log(user);

            const validPassword = await bcrypt.compare(req.body.currentPassword, user.password)
            if (!validPassword) {
                console.log('password not matching')
                return res.json({ passwordNotMatch: true })
            }
            console.log('password matching');
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.newPassword, salt)
            await user.updateOne({
                $set: {
                    password: hashedPassword
                }
            })
            console.log('password changed successfully');
            res.json({ success: true });

        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }


    }

}