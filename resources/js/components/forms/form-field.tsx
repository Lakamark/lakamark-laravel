import type {
    InputHTMLAttributes,
    ReactNode,
    TextareaHTMLAttributes,
} from 'react';

/**
 * Generic form field wrapper.
 *
 * Responsibilities:
 * - Render a field label
 * - Associate the label with a form control
 * - Provide consistent spacing/layout
 *
 * This component is intentionally minimal and
 * reusable across dashboard forms.
 */
type FormFieldProps = {
    /**
     * Unique form control identifier.
     */
    id: string;

    /**
     * Human-readable field label.
     */
    label: string;

    /**
     * Form control element.
     */
    children: ReactNode;
};

/**
 * Generic reusable form field wrapper.
 */
export function FormField({ id, label, children }: FormFieldProps) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium">
                {label}
            </label>

            {children}
        </div>
    );
}

/**
 * Reusable text input component.
 */
type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    /**
     * Unique input identifier.
     */
    id: string;

    /**
     * Human-readable field label.
     */
    label: string;
};

/**
 * Reusable input form field component.
 */
export function FormInput({ id, label, ...props }: FormInputProps) {
    return (
        <FormField id={id} label={label}>
            <input
                id={id}
                name={id}
                {...props}
                className="w-full rounded-md border px-3 py-2"
            />
        </FormField>
    );
}

/**
 * Reusable textarea component.
 */
type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    /**
     * Unique textarea identifier.
     */
    id: string;

    /**
     * Human-readable field label.
     */
    label: string;
};

/**
 * Reusable textarea form field component.
 */
export function FormTextarea({ id, label, ...props }: FormTextareaProps) {
    return (
        <FormField id={id} label={label}>
            <textarea
                id={id}
                name={id}
                {...props}
                className="min-h-32 w-full rounded-md border px-3 py-2"
            />
        </FormField>
    );
}
