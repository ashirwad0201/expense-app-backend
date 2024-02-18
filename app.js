const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const cors = require('cors');
const adminRoutes = require('./routes/admin');
const expenseRoutes = require('./routes/expense');
const UserDetail = require('./models/userdetail');
const Expense = require('./models/expense')
const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use(adminRoutes);
app.use(expenseRoutes);

UserDetail.hasMany(Expense);
Expense.belongsTo(UserDetail);

//sequelize.sync({force:true})
sequelize.sync()
.then(result=>{
    //console.log(result);
    app.listen(5000);
})
.catch(err=>console.log(err));