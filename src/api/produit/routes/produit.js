module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/produits',
      handler: 'produit.findAll',
    },
  ],
};