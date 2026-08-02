import {create} from "../index";
import {Result} from "./Result";
import {matchingMode} from "./matchingmode";

export function createSpecificAddress(patternToMatch: string, mode: matchingMode): Result {
    const pattern = patternToMatch.toLowerCase();
    while(true){
        const result = create();
        console.log(result);
        switch (mode){
            case matchingMode.contains:
                if(result.address.includes(pattern)){
                    return result;
                }
                continue;
            case matchingMode.startsWith:
                if(result.address.startsWith(pattern)){
                    return result;
                }
                continue;
            case matchingMode.endsWith:
                if(result.address.endsWith(pattern)){
                    return result;
                }
        }
    }
}

