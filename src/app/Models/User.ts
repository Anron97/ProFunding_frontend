export class User {

    private _id: number;
    private _username: string;
    private _login: string;
    private _password: string;

    get id(): number {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return this._password;
    }

    set id(value: number) {
        this._id = value;
    }

    set username(value: string) {
        this._username = value;
    }

    set login(value: string) {
        this._login = value;
    }

    set password(value: string) {
        this._password = value;
    }
}
