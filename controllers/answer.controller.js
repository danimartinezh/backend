const config = require('../config')

answerModel = require('../models/answer.model')
const answerController = {}

answerController.getAnswers = (req, res)=>{
    answerModel.getAnswers((err, answer)=>{
        res.json(answer);
    });
}

answerController.add = (req, res)=>{
    const answerdata = {
        iIdQuestion : req.body.id,
        iIdAnswer : req.body.idA,
        iIdSession : req.body.cookie
    }
    console.log(answerdata);
    answerModel.add((err, answer)=>{
        res.json(answer);
    }, answerdata);
}

module.exports = answerController;