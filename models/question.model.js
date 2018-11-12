const questionModel = {}

questionModel.getQuestions = (callback)=>{
    if(connection){
        connection.query('SELECT q.iIdQuestion, q.sText as "sQuestion", a.* FROM tblQuestion AS q LEFT JOIN tblAnswer AS a ON q.iIdQuestion = a.iIdQuestion ORDER BY q.iOrder', (err, rows)=>{
            if(err) callback(null,null)
            else callback(null, rows)
        })
    }
}

questionModel.add = (callback, userData)=>{
    console.log(userData);
    if(connection){
        connection.query('INSERT INTO tblQuestion SET ? ', userData, (err, rows)=>{
            if(err) callback(null,err)
            else callback(null, rows)
        })
    }
}

questionModel.actualizar = (callback, userData, id)=>{
    if(connection){
        connection.query('UPDATE tblQuestion SET ? WHERE iIdQuestion = ?', [userData, id], (err, rows)=>{
            if(err) callback(null, err)
            else callback(null, rows)
        })
    }
}

questionModel.delete = (callback, userData)=>{
    if(connection){
        connection.query('DELETE FROM tblQuestion WHERE ?', userData, (err, rows)=>{
            if(err) callback(null, err)
            else callback(null, rows)
        })
    }
}

module.exports = questionModel;