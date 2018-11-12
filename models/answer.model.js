const answerModel = {}

answerModel.getAnswers = (callback)=>{
    if(connection){
        connection.query('', (err, rows)=>{
            if(err) callback(null,null)
            else callback(null, rows)
        })
    }
}

answerModel.add = (callback, data)=>{
    if(connection){
        connection.query('call spSubmitFormAnswers(?,?,?)', [data.iIdQuestion, data.iIdAnswer, data.iIdSession], (err, rows)=>{
            if(err) callback(null, err)
            else callback(null, rows)
        })
    }
}

module.exports = answerModel;