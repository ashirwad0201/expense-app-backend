const Expense = require('../models/expense');
const Userdetail=require('../models/userdetail');
const sequelize = require('../util/database');

exports.getLeaderBoard=async (req,res,next)=>{
    
    try{
        const leaderboard=await Userdetail.findAll({
            attributes: ['id','username',[sequelize.fn('sum',sequelize.col('expenses.price')),'amount']],
            include: [
                {
                    model: Expense,
                    attributes: []
                }
            ],
            group:['userdetail.id'],
            order:[['amount','DESC']]
        })
        res.status(200).json(leaderboard)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}