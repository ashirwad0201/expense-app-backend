const Userdetail=require('../models/userdetail');

exports.insertUser = (req, res, next) => {
   var myObj=req.body;
   console.log(myObj)
   console.log('hi')
    
    Userdetail.create(myObj)
    .then(result=>{
      console.log('user created');
    //   res.redirect('/get-user')
    })
    .catch(err => {
      console.log(err)
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
      }
      else{
          var pass=result.password;
          if(pass===myObj.password){
            res.status(200);
            response="Logged in successfully";
          }
          else{
            res.status(401)
              response="Password incorrect!";
          }
      }      
      console.log(response)
      res.json(response)
  })
  .catch(err=>console.log(err))
 };