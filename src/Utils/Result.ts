export class Result {

    private _privateKey : string = "";
    private _publicKey : string = "";
    private _address : string = "";

    constructor(privateKey: string, publicKey: string, address: string) {
        this._privateKey = privateKey;
        this._publicKey = publicKey;
        this._address = address;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
    get publicKey(): string {
        return this._publicKey;
    }

    set publicKey(value: string) {
        this._publicKey = value;
    }
    get privateKey(): string {
        return this._privateKey;
    }

    set privateKey(value: string) {
        this._privateKey = value;
    }

    toFullAddress(): string{
        return `${this._address}.onion`
    }
}