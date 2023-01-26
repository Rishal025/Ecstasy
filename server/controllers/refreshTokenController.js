const User = require('../models/user')
const Counselor = require('../models/counselor')
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = {
    handleRefreshToken : async(req,res)=>{
        
           const cookies = req.cookies;
           console.log(cookies);
           if(!cookies?.jwt) return res.sendStatus(403);
           const refreshToken = cookies.jwt;
    
           const user = await User.findOne({ refreshToken });
           if( !user ){
            const counselor = await Counselor.findOne({ refreshToken })
            if(!counselor){
                res.sendStatus(403)
            }else{
                const { password, ...others } = counselor._doc 
                jwt.verify(
                    refreshToken,
                    process.env.REFRESH_TOKEN_SECRET,
                     (err) => {
                        if(err) return res.sendStatus(403)
        
                        const accessToken = jwt.sign(
                            {
                                "userInfo": {
                                    others
                                }
                            },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: '1m' }
                        )
        
                        res.json({ accessToken });
                    }
                    
                   )
            }
           }else{
            console.log('user details')
            console.log(user)
            const { password, ...others } = user._doc 
 
            jwt.verify(
             refreshToken,
             process.env.REFRESH_TOKEN_SECRET,
              (err, decoded) => {
                 if(err || user.username !== decoded.username) return res.sendStatus(403)
 
                 const accessToken = jwt.sign(
                     {
                         "userInfo": {
                             others
                         }
                     },
                     process.env.ACCESS_TOKEN_SECRET,
                     { expiresIn: '1m' }
                 )
 
                 res.json({ accessToken });
             }
             
            )
           }
           
     
        }    
}