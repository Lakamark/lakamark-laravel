/**
 * Controls the frontend application lifecycle.
 *
 * A kernel is responsible for deciding when the application
 * should mount, remount or stop depending on the runtime
 * environment.
 *
 * Different implementations may integrate with different
 * environments or rendering strategies such as Turbo,
 * a classic browser lifecycle or a custom runtime.
 *
 * A kernel must not contain feature logic.
 * Feature behavior belongs to application modules.
 */
export interface AppKernel {
    /**
     * Starts the application lifecycle.
     *
     * This method usually registers listeners and mounts
     * the application for the first time.
     */
    boot(): void;

    /**
     * Stops the application lifecycle.
     *
     * This method should remove listeners and cleanup
     * resources owned by the kernel.
     */
    stop(): void;
}