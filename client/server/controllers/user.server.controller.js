exports.getAll = function(req, res) {

    var data = [ {
      firstName : "Eugene",
      lastName : "Lim",
      username : "only_flaw",
      email_Add : "eugene_lim@dlsu.edu.ph",
      password : "Test",
      birthday : "05/19/1996",
      gender : "Male"
    }];

    res.status(200).json(data);
}
