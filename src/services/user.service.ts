import {ConfigServiceInterface} from "../interfaces/config-service.interface.ts";

export class UserService {

    constructor(private configService: ConfigServiceInterface) {
    }
    async getUserID() {
        console.log(this.configService.getConfig())
        return "123456";
    }

    async getUserEmail() {
        return ""
    }
}
