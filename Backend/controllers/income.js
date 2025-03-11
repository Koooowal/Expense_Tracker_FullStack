const IncomeSchema = require("../models/incomeModel")

exports.addIncome=async(req, res) => {
    const {title,amount,category,description,date} = req.body
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        if(!title||!description||!date||!category){
            return res.status(400).json({message:"All fields required!"})
        }
        if(amount<=0 ||!amount === 'number'){
            return res.status(400).json({message:"Amount must be a positive integer!"})
        }
        await income.save()
        res.status(200).json({message:"Income added successfully"})
    }catch(e){
        res.status(500).json({message:"Server Error"})
    }
    console.log(income)
}

exports.getIncomes=async(req, res) => {
    try{
        const incomes = await IncomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }catch(e){
        res.status(500).json({message:"Server Error"})
    }
}

exports.deleteIncome=async(req, res) => {
    const {id} = req.params
    IncomeSchema.findByIdAndDelete(id)
        .then(income => {
            res.status(200).json({message:"Income deleted successfully"})
        })
        .catch(e => {
            res.status(500).json({message:"Server Error"})
        })
}