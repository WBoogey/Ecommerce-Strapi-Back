module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/product-categories',
      handler: 'product-category.findAll',
    },
    {
      method : 'GET',
      path: '/product-categories/:id',
      handler:'product-category.findOne'
    }
  ],
};