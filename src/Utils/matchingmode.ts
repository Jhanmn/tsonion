/**
 * defines how the Runner performs the sequence matching
 */
export enum matchingMode {
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
