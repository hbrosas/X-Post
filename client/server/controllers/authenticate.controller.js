var jwt = require('jsonwebtoken');

module.exports.authenticate  = function(req,res){
    var user = {
      username: 'only_flaw';
      password : 'test123';
    }
    var token = jwt.sign(user,process.env.SECRET_KEY, {
        expriesin: 4000

    });
    res.json({
      success: true,
      token: token
    })
}
