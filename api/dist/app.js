"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use("/", express_1.default.static(path_1.default.join(__dirname, '../../web/build')));
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../web/build', 'index.html'));
});
exports.default = app;
//# sourceMappingURL=app.js.map