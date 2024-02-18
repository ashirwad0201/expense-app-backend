const Userdetail=require('../models/userdetail');
const bcrypt=require('bcrypt');

exports.insertUser = (req, res, next) => {
  var myObj=req.body;
  console.log(myObj)
  console.log('hi')
  
  const saltrounds=10;
  bcrypt.hash(myObj.password,saltrounds, (err,hash)=>{
    if(!err){
      myObj.password=hash;
      Userdetail.create(myObj)
      .then(result=>{
        console.log('user created');
      })
      .catch(err => {
        console.log(err)
      })
    }
  })
  };

exports.getUser=(req,res,next)=>{
    const email=req.params.email;
    console.log(email);
    Userdetail.findAll({
        where:{
            email : email
        }
    })
    .then(userdetail=>{
        console.log('Got user details');
        console.log(userdetail[0])
        res.json(userdetail[0])
    })
    .catch(err=>console.log(err))
}

exports.loginUser = (req, res, next) => {
  var myObj=req.body;
  console.log(myObj)
  console.log('hi')
   
  Userdetail.findAll({
    where:{
        email : myObj.email
    }
  })
  .then(userdetail=>{
      var result=userdetail[0];
      console.log('Got user details');
      var response="";
      console.log(result)
      if(result==undefined){
        res.status(404);
        response="User doesn't exist";
        return res.json(response)
      }
      else{
          var pass=result.password;
          bcrypt.compare(myObj.password,pass,(err,result)=>{
            if(err){
              res.status(500);
              response="Something went wrong";
            }
            if(result===true){
              res.status(200);
              response="Logged in successfully";
            }
            else{
              res.status(401)
              response="Password incorrect!";
            }
            return res.json(response)
          })
      }      
  })
  .catch(err=>console.log(err))
 };