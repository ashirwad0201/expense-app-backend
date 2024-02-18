const Expense = require('../models/expense');

exports.insertExpense = (req, res, next) => {
    let myObj = req.body
    req.user.createExpense(myObj)
    .then(result=>{
      console.log('Created expense');
      res.redirect('/get-expense')
    })
    .catch(err => {
      console.log(err)
    })
  };

exports.deleteExpense = (req,res,next)=>{
    const id=req.params.id;
     Expense.destroy({
        where: {
          id: id,
          userdetailId: req.user.id
        },
      })
    .then((result)=>{
        console.log(result);
        res.redirect('/get-expense')
    })
    .catch(err=>console.log(err));
}

exports.getExpense =(req,res,next)=>{
    req.user.getExpenses()
    .then((result)=>{
        res.json(result)
    })
    .catch(err=>console.log(err));
};