/**
 * Recursively makes all properties optional.
 *
 * Useful for test fixtures and partial configuration overrides.
 */
export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
