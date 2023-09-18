// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

Category.belongsTo(Product, {
  foreignKey: 'product_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsto(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: { 
    model: ProductTag, 
    foreignKey: 'product_tag',
    unique: false,
  },
  as: ''
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: { 
    model: ProductTag, 
    foreignKey: 'product_tag',
    unique: false,
    },
    as: ''
  });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
