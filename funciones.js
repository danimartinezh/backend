
/* let funcionVuemovies = {};

//Verificar JsonWebToken
funcionVuemovies.verificarToken = (req, res, next)=>{
    //Authorization: Bearer <token>
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports = funcionVuemovies;

 */