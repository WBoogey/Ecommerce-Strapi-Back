'use strict';

/**
 * ligne-de-commande router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ligne-de-commande.ligne-de-commande');
