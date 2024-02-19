const Expense = require('../models/expense');
const Userdetail=require('../models/userdetail');

exports.getLeaderBoard=(req,res,next)=>{
    Expense.findAll()
    .then(expenses=>{
        const expenseMap=new Map();
        const leaderBoard=[];
        
        expenses.forEach(expense => {
            const userId=expense.userdetailId;
            const amount=expense.price;
            if(expenseMap.has(userId)){
                expenseMap.set(userId, expenseMap.get(userId)+amount);
            } else{
                expenseMap.set(userId,amount);
            }
        });
        Userdetail.findAll()
        .then(users=>{
            users.forEach(user=>{
                leaderBoard.push({"name":user.username,"amount":expenseMap.get(user.id)})
            });
            console.log(leaderBoard);
            return res.json(leaderBoard);
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
}