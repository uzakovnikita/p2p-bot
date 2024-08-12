"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var router_api_1 = require("./router-api");
var app = (0, express_1.default)();
var port = 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/api', router_api_1.routerApi);
app.listen(port, '0.0.0.0', function () {
    // eslint-disable-next-line no-console
    console.log("Admin app listening on port ".concat(port));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXdCO0FBQ3hCLG9EQUE4QjtBQUU5QiwyQ0FBeUM7QUFFekMsSUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNCQUFTLENBQUMsQ0FBQztBQUUzQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDMUIsc0NBQXNDO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQStCLElBQUksQ0FBRSxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDLENBQUMifQ==