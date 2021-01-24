// Need typescript to ensure function args are correct on build
let _routes = {}

class Router {
    constructor() {
        return new Proxy(this, {
            get: (obj, key, value) => {
                    return _routes[key]
                        || ((res, data) => {
                                res.setHeader('Content-Type', 'application/json');
                                res.writeHead(404);
                                res.end(JSON.stringify({}))
                            });
                    },
            set: (obj, key, val) => _routes[key] = val,
        });
    }
}

let router = new Router();

router.addHandler = ({path, handlerFunc, callback}) => {
    if (typeof(handlerFunc) !== "function") {
        throw new TypeError(`${path} Handler Function is not a function`)
    }
    if (typeof(callback) === 'undefined') {
       callback = defaultJSONcallback
    } else if (typeof(callback) !== "function") {
        throw new TypeError(`${path} Handler's callback is not a function`)
    }
    eval(`router.${path} = (res, data) => {
        const { statusCode, payload } = handlerFunc(res, data);
        callback(res, statusCode, payload);
    }`);
};

router.clearProgramability = () => {
    router.addHandler({
        path: 'addHandler',
        handlerFunc: (res, data) => {
            return {
                statusCode: 404,
                payload: {}
            }
        }
    });
}

const defaultJSONcallback = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(typeof(statusCode) === 'number' ? statusCode : 200);
    res.end(JSON.stringify(typeof(payload) === 'object' ? payload : {}));
};

module.exports = router;



