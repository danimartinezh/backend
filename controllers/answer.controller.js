const config = require('../config')

answerModel = require('../models/answer.model')
const answerController = {}

answerController.getAnswersType = (req, res)=>{
    answerModel.getAnswersType((err, answer)=>{
        res.json(answer);
    }, req.query.id);
}

/* answerController.getAnswers = (req, res)=>{
    answerModel.getAnswers((err, answer)=>{
        res.json(answer);
    });
} */

answerController.add = (req, res)=>{
    const answerdata = {
        iIdQuestion : req.body.id,
        iIdAnswer : req.body.idA,
        iIdSession : req.body.cookie,
        idTypeResult : req.body.result
    }
    answerModel.add((err, answer)=>{
        res.json(answer);
    }, answerdata);
}

module.exports = answerController;