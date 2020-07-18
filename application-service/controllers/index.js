const { ValidationError, BusinessError, AuthorizedError } = require('../errors');
const db = require('../db');

class Controller {
    async get(req, res) {
        const data = await db.query('select * from crawler').then(e => {
            return e.rows;
        });

        // throw new BusinessError('cant found data ware house for these products');
        return data;
        throw new AuthorizedError('url isnt allow access');
    };
}

module.exports = Controller;