/**
 * represents on key pair and its corresponding .onion v3 address
 */
export class Result {
    privateKey: string;
    publicKey: string;
    address: string;

    constructor(privateKey: string, publicKey: string, address: string) {
        this.privateKey = privateKey;
        this.publicKey = publicKey;
        this.address = address;
    }

    /**
     * returns the address property of this result class with an appended ".onion" string
     */
    getFullAddress():string {
        return `${this.address}.onion`;
    }
}
