# tsonion

Simple Typescript lib for v3 .onion address generation.

Implementation generates one random .onion address and provides it public and private key and its fully qualified address, ending in .onion. Lib also contain a simple "Runner" file, that runs the generation in a loop, till a vanity address with a matching pattern is found.

## Note
This lib is currently not available on NPM and other package sources. This will happen sometime in the feature. Till then, please manually load it to you project.

## References

Please visit the [torspec](https://github.com/torproject/torspec/blob/12271f0e6db00dee9600425b2de063e02f19c1ee/rend-spec-v3.txt#L2136-L2158) repository to learn how v3 .onion addresses are made.
Please also have a look in this [repository](https://github.com/paulmillr/noble-ed25519) which provides the underlying ed25519 implementation.
