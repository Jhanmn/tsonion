import {Result} from "./Utils/Result";
import {createCheckSum, createKeyPair, createOnionAddress} from "./onion/generate";

/**
 * Computes one random onion v3 address
 * @returns an instance of Result containing all necessary information
 */
export function create(): Result {
    //https://github.com/torproject/torspec/blob/12271f0e6db00dee9600425b2de063e02f19c1ee/rend-spec-v3.txt#L2136-L2158
    const keyPair = createKeyPair();
    const checkSum = createCheckSum(keyPair.publicKey);
    const address = createOnionAddress(keyPair.publicKey, checkSum);

    return new Result(keyPair.publicKey.toString(), keyPair.secretKey.toString(), address);
}