const router = require('express').Router();
const User = require('../models/user');
const Counselor = require('../models/counselor')
const bcrypt = require('bcrypt');
const counselor = require('../models/counselor');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// const maxAge = 3 * 24 * 60 * 60;

const credentials = {
   email:'admin@gmail.com',
   password:'123'
}

module.exports = {

    userSignup : async(req,res)=>{
     
         try{
           const userFind = await User.findOne({$or: [{email:req.body.email},{phone:req.body.phone}]});
           if(userFind){
              res.json({userExist:true})
           }else{
           const salt = await bcrypt.genSalt(10);
           const hashedPassword = await bcrypt.hash(req.body.password, salt)
           console.log(hashedPassword)
     
           //create new user
           const newUser = new User({
              username: req.body.fullname,
              email:req.body.email,
              phone:req.body.phone,
              password:hashedPassword,
              dob: req.body.dob,
              status: 'Active'
            })
     
            console.log('user methos')
     
           //save and respond
           const user = await newUser.save();
           res.status(200).json(user)
         }
           }
           catch(err){
              console.log(err);
            }
     },

     userLogin : async(req,res)=>{

        try{
           const user = await User.findOne({email:req.body.email});
           if(!user){
              console.log('not found')
              return res.json({notFound:true})
           }
     
           const validPassword = await bcrypt.compare(req.body.password, user.password)
           if(!validPassword){
              console.log('password not matching')
              return res.json({passwordNotMatch:true})
           }
           if(user.status === 'Blocked'){
              console.log('user restricted')
              return res.json({userRestricted:true})
           }

           //create JWT

           const { password, ...others } = user._doc
     
          const accessToken = jwt.sign(
            {
               "userInfo": {
                    others              
                  }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1m' }
           
          );
          
          const refreshToken = jwt.sign(
           { "username" : user.username },
           process.env.REFRESH_TOKEN_SECRET,
           { expiresIn: '1d' }
          );
          console.log('refreshToken login');
          console.log(refreshToken)

          user.refreshToken = refreshToken;
          const result = await user.save();
          console.log(result)

           res.cookie('jwt', refreshToken, { 
               httpOnly: true,
               // secure: true,
               sameSite: 'None',
               maxAge: 7 * 24 * 60 * 60 * 1000
            });

         //   res.json({ accessToken });
         res.json({accessToken, refreshToken})
     
        }
        catch(err){
           res.status(500).json(err)
        }
     },

     adminLogin : async(req,res)=>{

        try{
     
           if(credentials.email != req.body.email){
              console.log('not found')
              return res.json({notFound:true})
           }
     
           if(credentials.password != req.body.password){
              console.log('password not matching')
              return res.json({passwordNotMatch:true})
           }
           res.status(200).json(credentials)
     
        }
        catch(err){
           res.status(500).json(err)
        }
     },

     counselorRegistration : async(req,res)=>{
   
       
        let data = 'success'
       
         try{
           const userFind = await Counselor.findOne({$or: [{email:req.body.email},{phone:req.body.phone}]});
           if(userFind){
              res.json({userExist:true})
           }else{
           const salt = await bcrypt.genSalt(10);
           const hashedPassword = await bcrypt.hash(req.body.password, salt)
           console.log(hashedPassword)
     
           //create new user
           const newCounselor = new Counselor({
              fullname: req.body.fullname,
              email:req.body.email,
              phone:req.body.phone,
              password:hashedPassword,
              qualification:req.body.qualification,
              medicalRegNum:req.body.medicalRegNum,
              experience:req.body.experience,
              specializations:req.body.specializations,
              about: req.body.about,
              languages: req.body.languages,
              status:'requested'
            })
     
           //save and respond
           const counselor = await newCounselor.save();
           res.status(200).json(data)
         }
           }
           catch(err){
              console.log(err);
            }
     },

     counselorLogin : async(req,res)=>{
       
        const user = await Counselor.findOne({email:req.body.email});
           if(!user){
              console.log('not found')
              return res.json({notFound:true})
           } 
           const validPassword = await bcrypt.compare(req.body.password, user.password)
           if(!validPassword){
              console.log('password not matching')
              return res.json({passwordNotMatch:true})
           } else if( user.status === 'requested'){
            console.log('requested');
              return res.json(user)
           } else if( user.status === 'rejected'){
            console.log('rejected');
              return res.json(user)
           }

           const { password, ...others } = user._doc
     
          const accessToken = jwt.sign(
            {
               "userInfo": {
                    others              
                  }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1m' }
           
          );
          
          const refreshToken = jwt.sign(
           { "fullname" : user.fullname },
           process.env.REFRESH_TOKEN_SECRET,
           { expiresIn: '1d' }
          );
          console.log('refreshToken login');
          console.log(refreshToken);

          user.refreshToken = refreshToken;
          const result = await user.save();
          console.log('result');
          console.log(result)

           res.cookie('jwt', refreshToken, { 
               httpOnly: true,
               // secure: true,
               sameSite: 'None',
               maxAge: 7 * 24 * 60 * 60 * 1000 
            });

         res.json({ accessToken, refreshToken })
     
     }

}