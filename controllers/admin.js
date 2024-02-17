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
