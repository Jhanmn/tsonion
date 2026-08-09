# tsonion

***Simple Typescript lib for v3 .onion address generation.***

## Modes
**tsonion** spports the following to modes to generate addresses:
- creation of vanity addresses
- single random address generation

## Install
Just pull from npm using:
> `npm i @jhanmn/tsonion`

Native deno support might come in the future.

## Usage
To create a simple .onion address, just call the create method.
```js
import {create } from "@jhanmn/tsonion";

const result = create();
```

For vanity addresses, use the createFor method, passing the pattern to match and a setting to tell the package how to match the pattern.

```js
import {createFor, matchingMode } from "@jhanmn/tsonion";

const vanityResult = createFor("abc", matchingMode.startsWith);
```
Possible options for how to match the pattern:
```js
export enum matchingMode{
    /**
     * pattern must be detected at a random place. position does not matter.
     *
     * this will take significant less time to compute
     */
    contains,
    /**
     * pattern must be detected at the start of the sequence - this is most likely what you want
     *
     * YOURPATTERN[...].onion
     */
    startsWith,
    /**
     * pattern must be detected on the end of the sequence, before ".onion"
     *
     * [...]YOURPATTERN.onion
     *
     * endsWith MUST end on 'q'
     */
    endsWith,
}
```

Both ways will return a Result object defined like this:
```js
class Result {
    privateKey: string;
    publicKey: string;
    address: string;

    /**
     * returns the address property of this result class with an appended ".onion" string
     */
    getFullAddress():string {
        return `${this.address}.onion`;
    }
}
```

## References

Please visit the [torspec](https://github.com/torproject/torspec/blob/12271f0e6db00dee9600425b2de063e02f19c1ee/rend-spec-v3.txt#L2136-L2158) repository to learn how v3 .onion addresses are made.
Please also have a look in this [repository](https://github.com/paulmillr/noble-ed25519) which provides the underlying ed25519 implementation.
