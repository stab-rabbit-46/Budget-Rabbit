const path = require('path');
const db = require('../models/transactionsModel')
const transactionController = {};

//middleware goes here to handle db queries


//MIDDLEWARE TO ADD A TRANSACTION TO DB
transactionController.addTransaction = (req, res, next) => {
    //req.body is going to contain transaction name, amount, and category
    const addTransQuery = `INSERT INTO public.transactions (name, amount, date, category_id) VALUES ($1, $2, $3, $4) RETURNING *`; 
    const values = [req.body.name, req.body.amount, req.body.date, req.body.category_id]

    db.query(addTransQuery, values)
        .then(data => {
            return next();
        })
        .catch( err => {
            console.log('query error', err);
            return next(err);
        });
};

//MIDDLEWARE FOR RETRIEVING TRANSACTION DATA FOR FRONTEND DISPLAY
transactionController.getTransaction = (req, res, next) => {
    const getTransQuery = `SELECT transactions.*, categories.category as category 
    FROM transactions 
    LEFT OUTER JOIN categories ON categories._id = transactions.category_id`;
    db.query(getTransQuery)
        .then(data => {
            res.locals.data = data.rows;
            return next();
        })
        .catch(err => {
            console.log('get query error', err);
            return next(err);
        });
};

// postgres://fefrvybx:D0xjzhQ5Jt7EQ4LoGRvqEVB3e5UH9D8x@fanny.db.elephantsql.com/fefrvybx


//MIDDLEWARE FOR DELETING A TRANSACTION
transactionController.deleteTransaction = (req, res, next) => {
    const deleteQuery = `DELETE FROM transactions WHERE _id=${req.body.id}`;

    //receive transaction_id from the request on req.body.id
    
    db.query(deleteQuery)
        .then(data => {
            return next();
        })
            .catch(err => {
            console.log('delete error', err);
            return next(err);
        })
};

//MIDDLEWARE FOR CALCULATING RUNNING TOTAL OF TRANSACTIONS
transactionController.getTotal = (req, res, next) => {
    //res.locals.data should have all our transactions
    const transactions = res.locals.data;
    let total = 0;
        
    transactions.forEach( obj => {
        total += Number(obj.amount);
    })

    res.locals.total = total;
    return next();
};

// MIDDLEWARE FOR GETTING DEFAULT BUDGETS
transactionController.getBudgets = (req, res, next) => {
    const getBudgetQuery = `SELECT * FROM budgets`;
    db.query(getBudgetQuery)
        .then(data => {
            // console.log('data inside getBudgets', data);
            res.locals.budgets = data.rows;
            return next();
        })
        .catch(err => {
            console.log('get query error', err);
            return next(err);
        });
};

// MIDDLEWARE FOR EDITING BUDGETS
// transactionController.editBudgets = async (req, res, next) => {
//     const getBudgetQuery = `UPDATE budgets
//     SET amount = ${req.body.amount}
//     WHERE budget_name = '${req.body.budget_name}'`;
//     await db.query(getBudgetQuery);
//     console.log('req.body inside of controlller.editBudgets: ', req.body);


//     const getAllBudgetQuery = `SELECT * FROM budgets`;
//     await db.query(getAllBudgetQuery)
//         .then(data => {
//             // console.log('data inside editBudgets', data);
//             res.locals.budget = data.rows;
//             // res.locals.bigBudgetAmount = data.rows[0];
//             return next();
//         })
//         .catch(err => {
//             console.log('get query error', err);
//             return next(err);
//         });
// };

transactionController.editBudgets = async (req, res, next) => {
    const getBudgetQuery = `UPDATE budgets
    SET amount = ${req.body.amount}
    WHERE budget_name = '${req.body.budget_name}'`;
    await db.query(getBudgetQuery)
        .then(() => {
            return next();
        })
        .catch(err => {
            console.log('get query error', err);
            return next(err);
        });
};


module.exports = transactionController;