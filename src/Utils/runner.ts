import {Result} from "./Result";
import {matchingMode} from "./matchingmode";
import {generate} from "../onion/generate";

export function createSpecificAddress(patternToMatch: string, mode: matchingMode): Result {
    const pattern = patternToMatch.toLowerCase();
    while(true){
        const result = generate();
        if(evaluateResult(result, pattern, mode)){
            return result;
        }
    }
}

function evaluateResult(result: Result, pattern: string, mode: matchingMode): boolean{
    switch (mode){
        case matchingMode.contains:
            return result.address.includes(pattern);

        case matchingMode.startsWith:
            return result.address.startsWith(pattern);

        case matchingMode.endsWith:
            return result.address.endsWith(pattern);

    }
}

