"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
// import user_routes from './handlers/user';
// import product_routes from './handlers/product';
// import order_routes from './handlers/order';
var app = (0, express_1["default"])();
var address = "0.0.0.0:3001";
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// user_routes(app);
// product_routes(app);
// order_routes(app);
app.listen(3000, function () {
    console.log("starting app on: " + address);
});
exports["default"] = app;
