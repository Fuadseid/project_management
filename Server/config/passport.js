const {Strategy:jwtStrategy,ExtractJwt,} = require('passport-jwt');


const config = require('./config')
const {tokenType} = require('./token')
const {getUserByid} = require('../services/user.service')
const jwtOption ={
    secretOrKey:config.jwt.secret,
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),

};

const jwtverify=(payload,done)=>{
 try {
    if(payload.type != tokenType.ACCESS){
     throw Error("Invalid Token type")
    }
  const user =  getUserByid(payload.sub);
  if(!user){
    done(null,false)
  } 
  done(null,user)
 } catch (error) {
    done(error,false)
 }
}


const passportjwtStrategy = new jwtStrategy(jwtOption,jwtverify)
module.exports = {
   passportjwtStrategy 
}