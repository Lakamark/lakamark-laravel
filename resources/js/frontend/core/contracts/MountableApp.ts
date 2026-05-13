/**
 * Represents an application that can be mounted
 * and destroyed by a kernel.
 */
export interface MountableApp {
    /**
     * Mounts the application.
     */
    mount(): void;

    /**
     * Destroys the application.
     */
    destroy(): void;
}
