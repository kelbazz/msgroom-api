import { MRClient } from "./types/client";

/**
 * Represents the global configuration.
 */
declare namespace GLOB_CONFIG {
    /**
     * The server URL.
     */
    let serverUrl: string;

    /**
     * Gets or sets the maximum time (in ms) for requests to complete.
     */
    let opTimeout: number;
}

export {
    MRClient,
    GLOB_CONFIG
}