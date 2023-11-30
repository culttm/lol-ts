
export class UserNumber2Service {
    async getUserID() {
        return (Math.random() + 1).toString(36).substring(7);
    }

    async getUserEmail() {
        return (Math.random() + 1).toString(36).substring(7) + "@gmail.com";
    }
}
