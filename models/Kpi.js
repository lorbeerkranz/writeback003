var mongoose = require('mongoose');

var kpischema = new mongoose.Schema({
  active: Boolean,
  ID: Number,
  type: String,
  name: String,
  formula: String,
  division: String,
  executive: String,
  tags: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('kpi', kpischema);