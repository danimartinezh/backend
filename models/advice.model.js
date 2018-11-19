const adviceModel = {}

adviceModel.getAdvice = (callback, reqid)=>{
    if(connection){
        connection.query('SELECT sText FROM tblAdvice WHERE iIdType = ?', reqid, (err, rows)=>{
            if(err) callback(null, err)
            else callback(null, rows)
        })
    }
}

/* adviceModel.getAnswers = (callback)=>{
    if(connection){
        connection.query('', (err, rows)=>{
            if(err) callback(null,null)
            else callback(null, rows)
        })
    }
} */

// adviceModel.add = (callback, data)=>{
//     if(connection){
//         connection.query('call spSubmitFormAnswers(?,?,?,?)', [data.iIdQuestion, data.iIdAnswer, data.idTypeResult, data.iIdSession], (err, rows)=>{
//             if(err) callback(null, err)
//             else callback(null, rows)
//         })
//     }
// }

module.exports = adviceModel;