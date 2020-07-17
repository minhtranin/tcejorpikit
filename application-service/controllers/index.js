const { ValidationError, BusinessError, AuthorizedError } = require('../errors');
const db = require('../db');

class Controller {
    get(req, res) {
        db.query('select * from crawler').then(e => {
            console.log(e);
        });
        throw new AuthorizedError('url isnt allow access');
        return 'choose';
    };
}

module.exports = Controller;