const config = require('../config')

questionModel = require('../models/question.model')
const questionController = {}

questionController.getQuestions = (req, res)=>{
    questionModel.getQuestions((err, questions)=>{
        res.json(questions);
    });
}

questionController.add = (req, res)=>{
    const questionData = {
        iIdQuestion : req.body.id.trim(),
        stext : req.body.sText.trim()
    }
    questionModel.add((err, result)=>{
        res.json(result);
    }, questionData);
}

questionController.delete = (req, res)=>{
    const questionData = {
        iIdQuestion : req.body.id.trim()
    }
    questionModel.delete((err, result)=>{
        res.json(result);
    }, questionData);
}

questionController.putQuestion = (req, res)=>{
    const questionData = {
        stext : req.body.sText.trim()
    }
    questionModel.actualizar((err, result)=>{
        res.json(result);
    }, questionData, req.body.id.trim());
}



module.exports = questionController;