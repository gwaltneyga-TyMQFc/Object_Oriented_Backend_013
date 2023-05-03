// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Define association with Category model
Product.belongsTo(Category);

// Categories have many Products
// Define association with Product model
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)

ProductTag.belongsTo(Product);
ProductTag.belongsTo(Tag);

// Tags belongToMany Products (through ProductTag)
// Define association with Product model through ProductTag model
Tag.belongsToMany(Product, { through: 'ProductTag' });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
