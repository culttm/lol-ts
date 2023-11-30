import {App} from "./app.ts";
import {ConfigService} from "./services/config.service.ts";
import {UserService} from "./services/user.service.ts";

const configService = new ConfigService()
const userService = new UserService(configService)

const p = {
    date: new Date(),
    version: "1.0.0",
}

const app = new App(userService, configService, p)

app.init()
