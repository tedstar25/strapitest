'use strict';

/**
 * test-db router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-db.test-db');
