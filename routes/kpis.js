var express = require('express');
var router = express.Router();
var kpi = require("../controllers/kpiController.js");

// Get all kpis
router.get('/', function(req, res) {
  kpi.list(req, res);
});

// Get single kpi by id
router.get('/show/:id', function(req, res) {
  kpi.show(req, res);
});

// Create kpi
router.get('/create', function(req, res) {
  kpi.create(req, res);
});

// Save kpi
router.post('/save', function(req, res) {
  kpi.save(req, res);
});

// Edit kpi
router.get('/edit/:id', function(req, res) {
  kpi.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  kpi.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  kpi.delete(req, res);
});

// Edit update
router.post('/updatemany', function(req, res, next) {
  kpi.updatemany(req, res);
});

module.exports = router;
