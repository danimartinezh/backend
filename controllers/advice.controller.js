const config = require('../config')

adviceModel = require('../models/advice.model')
const adviceController = {}

adviceController.getAdvice = (req, res)=>{
    adviceModel.getAdvice((err, advice)=>{
        res.json(advice);
    }, req.query.id);
}

/* adviceController.getAnswers = (req, res)=>{
    adviceModel.getAnswers((err, answer)=>{
        res.json(answer);
    });
} */

/* adviceController.add = (req, res)=>{
    const answerdata = {
        iIdQuestion : req.body.id,
        iIdAnswer : req.body.idA,
        iIdSession : req.body.cookie,
        idTypeResult : req.body.result
    }
    adviceModel.add((err, answer)=>{
        res.json(answer);
    }, answerdata);
} */

module.exports = adviceController;