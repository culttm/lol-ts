import {ConfigServiceInterface} from "../interfaces/config-service.interface.ts";

export class ConfigService implements ConfigServiceInterface {
    getConfig(): Record<string, string> {
        return {
            host: "localhost",
        };
    }
}
