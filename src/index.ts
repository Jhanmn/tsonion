import {Result} from "./Utils/Result";
import {generate} from "./onion/generate";
import {createSpecificAddress} from "./Utils/runner";
import {matchingMode} from "./Utils/matchingmode";

/**
 * Computes one random onion v3 address
 * @returns an instance of Result containing all necessary information
 */
export function create(): Result {
    return generate();
}

/**
 * Computes on onion v3 address matching the provided pattern
 * @param pattern the sequence the address has to contain
 * @param mode specifies, how the sequence has to occur
 * @returns an instance of Result
 * */
export function createFor(pattern: string, mode: matchingMode): Result{
    return createSpecificAddress(pattern, mode)
}

console.log("start creating addresses")
console.log(`found ${createFor("mqd", matchingMode.endsWith)}`)