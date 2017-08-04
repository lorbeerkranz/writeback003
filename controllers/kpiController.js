var mongoose = require("mongoose");
var Kpi = require("../models/Kpi");

var kpiController = {};

// Show list of kpis
kpiController.list = function (req, res) {
  Kpi.find({}).exec(function (err, kpis) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("../views/kpis/index", {
        kpis: kpis
      });
    }
  });
};

// Create new kpi
kpiController.create = function (req, res) {
  res.render("../views/kpis/create");
};

// Save new kpi
kpiController.save = function (req, res) {
  var kpi = new Kpi(req.body);

  kpi.save(function (err) {
    if (err) {
      console.log(err);
      // res.render("../views/kpis/create");
    } else {
      console.log("Successfully created a kpi.");
      res.redirect("/kpis");
      // res.redirect("/kpis/show/"+kpi._id);
    }
  });
};

// Update an kpi
kpiController.update = function (req, res, next) {
  Kpi.findByIdAndUpdate(req.params.id, {
    $set: {
      active: req.body.active,
      ID: req.body.ID,
      type: req.body.type,
      name: req.body.name,
      formula: req.body.formula,
      division: req.body.division,
      executive: req.body.executive,
      tags: req.body.tags,
      updated_at: Date.now()
    }
  },
    { new: true },
    function (err, kpi) {
    if (err) {
      console.log(err);
    }
    res.redirect("/kpis");
  });
};

// for (var i = 0; i < req.body.length; i++) {
//   new_arr.push(new mongodb.ObjectID(req.body[i]));
//   console.log(new_arr[i])
// }


// Update all kpi
kpiController.updatemany = function (req, res, next) {
  for (var i = 0; i < Kpi.length; i++) {
    console.log(Kpi(ID) + '                   ')
  }
  // res.redirect("/kpis");
}

//   for (var i = 0; i < req.body.length; i++) {
//     Kpi.findByIdAndUpdate(new_arr[i], {
//       $set: {
//         active: new_arr[i].active,
//         ID: new_arr[i].ID,
//         type: new_arr[i].type,
//         name: new_arr[i].name,
//         formula: new_arr[i].formula,
//         division: new_arr[i].division,
//         executive: new_arr[i].executive,
//         tags: new_arr[i].tags,
//         updated_at: Date.now()
//       }
//     },
//       { new: true },
//       function (err, kpi) {
//       if (err) {
//         console.log(err);
//       }
//       // res.redirect("/kpis");
//     });


//     res.redirect("/kpis");
//   };

  




//   // var col = mongoose.collection("kpis");
//   Kpi.updateMany(
//     {
//       // _id: {
//       //   $in: new_arr
//       // }
//     },
//     {
//       $set: { new_arr
//         // active: req.body.active,
//         // ID: req.body.ID,
//         // type: req.body.type,
//         // name: req.body.name,
//         // formula: req.body.formula,
//         // division: req.body.division,
//         // executive: req.body.executive,
//         // tags: req.body.tags,
//         // updated_at: Date.now() 
//       }
//     },
//     { new: true },
//     function (err, kpi) {
//       if (err) {
//         console.log(err);
//       }
//       res.redirect("/kpis");
  
  
//     });
  
// }



/* - */ 
 
  // col.updateMany(
  //   function (err, kpi) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     res.redirect("/kpis");
  //   }
  // ;
  // var new_arr = [];
  // for (var i = 0; i < req.body.length; i++) {
  //   new_arr.push(new mongodb.ObjectID(req.body[i]))
  // }
  // Kpi.updateMany({ _id: { $in: new_arr } },
  //   { new: true },
  //   function (err, kpi) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   res.redirect("/kpis");
  // });


// Delete an kpi
kpiController.delete = function (req, res) {
  Kpi.remove({
    _id: req.params.id
  }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("kpi deleted!");
      res.redirect("/kpis");
    }
  });
};

module.exports = kpiController;