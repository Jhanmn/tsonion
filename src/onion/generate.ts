import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha2.js';
import { sha3_256 } from '@noble/hashes/sha3.js';
import {base32Encode} from "../Utils/base32";

export function createOnionAddress(publicKey: Uint8Array, checkSum: Uint8Array): string {
    // onion_address = base32(pubkey || checksum || version)
    const onionAddressBytes = concatBytes(
        publicKey,
        checkSum.slice(0, 2),
        new Uint8Array([0x03])
    );

    return base32Encode(onionAddressBytes).toLowerCase();
}

export function createCheckSum(publicKey: Uint8Array): Uint8Array {
    // checksum = H(".onion checksum" || pubkey || version)
    const encoder = new TextEncoder();
    const checksumBytes = concatBytes(
        encoder.encode(".onion checksum"),
        publicKey,
        new Uint8Array([0x03])
    );

    return sha3_256(checksumBytes);
}

export function concatBytes(...arrays: Uint8Array[]): Uint8Array {
    const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const arr of arrays) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}

export function createKeyPair(): { secretKey: Uint8Array; publicKey: Uint8Array } {
    ed.hashes.sha512 = sha512;
    return ed.keygen();
}
