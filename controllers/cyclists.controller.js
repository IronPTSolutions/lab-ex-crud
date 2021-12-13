const Cyclist = require("../models/cyclist.model");

module.exports.list = (req, res, next) => {
  Cyclist.find()
    .then((cyclists) => {
      res.render("cyclists/list", { cyclists });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports.create = (req, res, next) => {
  res.render("cyclists/create");
};

module.exports.doCreate = (req, res, next) => {
  Cyclist.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      res.render("cyclists/create", {
        cyclist: req.body,
        errors: error.errors,
      });
    });
};

module.exports.detail = (req, res, next) => {
  Cyclist.findById(req.params.id)
    .then((cyclist) => {
      if (cyclist) {
        res.render("cyclists/detail", { cyclist });
      } else {
        res.redirect("/");
      }
    })
    .catch((error) => {
      next(error);
    });
};

module.exports.edit = (req, res, next) => {
  Cyclist.findById(req.params.id)
    .then((cyclist) => {
      if (cyclist) {
        res.render("cyclists/edit", { cyclist });
      } else {
        res.redirect("/");
      }
    })
    .catch((error) => {
      next(error);
    });
};


module.exports.doEdit = (req, res, next) => {
  Cyclist.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
  .then((cyclist) => {
    if(cyclist) {
      res.redirect( `${cyclist.id}`)
    } else {
      res.redirect("/");
    }
  })
  .catch((error) => {
    const cyclist = req.body;
    cyclist.id = req.paramas.id;
    
    res.render("cyclists/edit", {
      cyclist,
      error: error.errors,
    });
  });
};

module.exports.delete = (req, res, next) => {
  Cyclist.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/");
  })
  .catch((error) => {
    next(error)
  })
}