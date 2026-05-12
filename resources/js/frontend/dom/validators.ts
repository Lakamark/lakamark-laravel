/**
 * Determines whether a value is a plain object-like record.
 */
export function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Ensures a configuration value is a string.
 *
 * @throws Error
 */
export function assertString(value: unknown, key: string): string {
    if (typeof value !== 'string') {
        throw new Error(`Invalid config value for "${key}".`);
    }

    return value;
}

/**
 * Ensures a configuration value is a boolean.
 *
 * @throws Error
 */
export function assertBoolean(value: unknown, key: string): boolean {
    if (typeof value !== 'boolean') {
        throw new Error(`Invalid config value for "${key}".`);
    }

    return value;
}

/**
 * Ensures a configuration value is either a number or null.
 *
 * @throws Error
 */
export function assertNullableNumber(
    value: unknown,
    key: string,
): number | null {
    if (value !== null && typeof value !== 'number') {
        throw new Error(`Invalid config value for "${key}".`);
    }

    return value;
}

/**
 * Ensures a configuration value is either a string or null.
 *
 * @throws Error
 */
export function assertNullableString(
    value: unknown,
    key: string,
): string | null {
    if (value !== null && typeof value !== 'string') {
        throw new Error(`Invalid config value for "${key}".`);
    }

    return value;
}
