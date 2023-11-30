import {ConfigServiceInterface} from "./interfaces/config-service.interface.ts";
import {UserServiceInterface} from "./interfaces/user-service.interface.ts";

export type Params = {
    date: Date
    version: string
}

export class App {
    constructor(private readonly userService: UserServiceInterface,
                private readonly configService: ConfigServiceInterface,
                private readonly params: Params){
    }

    async init() {
        const userId = await this.userService.getUserID();
        console.log(userId)
        console.log(this.configService.getConfig())
        console.log(this.params)
    }
}
