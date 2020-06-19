const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Product'
  });
};

exports.create = async (req, res) => {};