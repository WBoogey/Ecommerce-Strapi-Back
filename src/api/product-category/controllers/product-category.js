'use strict';

const { filter } = require('../../../../config/middlewares');

/**
 * product-category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product-category.product-category', ({strapi}) =>({
  async findAll(ctx) {
    const query = {
      ...ctx.query,
      publishedAt : {$ne : null}
    }
    const entity = await strapi.db.query('api::product-category.product-category').findMany({
      filters : query,
      populate: {
        produits: {
          fields : true
        }
      }
    });
    const sanitizedResults = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedResults);
  },
  async findOne (ctx){
    const {id} = ctx.params
    const query = {
      ...ctx.query,
      publishedAt : {$ne : null}
    }
    const entity = await strapi.db.query('api::product-category.product-category').findOne({
      where:{
        id,
      },
      filters : query,
      populate: {
        produits: {
          fields : true
        }
      }
    })

    const sanitizedResults = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedResults);
  }
}));
