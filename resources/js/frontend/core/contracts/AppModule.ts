/**
 * Frontend application module contract.
 */
export interface AppModule {
    /**
     * Mounts the module.
     */
    mount(): void;

    /**
     * Destroys the module.
     */
    destroy(): void;

    /**
     * Returns whether the module is mounted.
     */
    isMounted(): boolean;
}
