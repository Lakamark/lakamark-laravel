import type {
    EditorCssClassMap,
    EditorDomInitializer,
    EditorPlugin,
    EditorPreset,
} from '@lakamark/modulo-editor';
import { ModuloEditor } from '@lakamark/modulo-editor';
import { useEffect, useState } from 'react';

interface EditorFieldProps {
    name?: string;
    className?: string;
    classes?: EditorCssClassMap;
    value: string;
    onChange: (value: string) => void;
    plugins?: readonly EditorPlugin[];
    presets?: readonly EditorPreset[];
    domInitializer?: EditorDomInitializer;
}

export function EditorField({name, value, className, classes, onChange, plugins = [], presets = [], domInitializer }: EditorFieldProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setIsClient(true);
        }, 0);

        return () => {
            window.clearTimeout(timer);
        };
    }, []);

    if (!isClient) {
        return (
            <textarea
                name={name}
                value={value}
                className={className}
                onChange={(event) => onChange(event.target.value)}
                suppressHydrationWarning
            />
        );
    }

    return <ModuloEditor
        name={name}
        value={value}
        className={className}
        classes={classes}
        onChange={onChange}
        plugins={plugins}
        presets={presets}
        domInitializer={domInitializer}
    />;
}
