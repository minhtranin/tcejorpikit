const BaseControllers = require('../controllers');
const Controller = new BaseControllers();

const router = (url, req, res) => {
    const GET = {
        '/choose': () =>  Controller.get(req, res),
        default: () => 'notfound',
    };
    const POST = {
        '/choose': () =>  Controller.get(req, res),
        default: () => 'notfound',
    }

    return {
        'GET': () => (GET[url] || GET.default)(),
        'POST': () => (POST[url] || POST.default)(),
    }[req.method]();
};
module.exports = router;