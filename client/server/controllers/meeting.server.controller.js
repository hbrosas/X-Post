exports.getAll = function(req, res) {

    var data = [ {
      name: "Ted",
      project: "Authorization",
      yesterday: "... 昨天",
      today: "... 今天",
      impediment: "... is ????"
    }];

    res.status(200).json(data);
}
