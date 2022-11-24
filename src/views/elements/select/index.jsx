import clsx from 'clsx';
import { useMemo } from 'react';
import { Controller, useController } from 'react-hook-form';
import Select from 'react-select';

import RenderIf from '@/views/components/render-if';

/**
 * @typedef InputSelectProps
 * @property {Control<TFieldValues>} control
 * @property {string[]} options
 * @property {string} name
 * @property {string} [fieldName]
 * @property {string} [placeholder]
 * @property {string} [className]
 * @property {object} [rules]
 * @property {boolean} [isClearable]
 * @property {boolean} [isMulti]
 */

/**
 * @param {InputSelectProps} props
 */
const InputSelect = ({
    control,
    options = [],
    name = '',
    fieldName = 'oke',
    placeholder = 'select',
    className = '',
    rules = null,
    isClearable = true,
    isMulti = false
}) => {
    const { field, fieldState } = useController({
        control,
        name,
        rules,
        defaultValue: ''
    });

    const currentValue = useMemo(() => {
        if (!field.value) return null;

        if (isMulti)
            return options.filter(option => field.value.includes(option.value));

        return options.find(option => option.value === field.value);
    }, [field.value]);

    return (
        <Controller
            control={control}
            defaultValue={[]}
            name={name}
            rules={rules}
            render={() => (
                <div className="flex flex-col gap-1">
                    <Select
                        inputRef={field.ref}
                        value={currentValue}
                        onChange={val => {
                            if (isMulti) {
                                field.onChange(val.map(c => c.value));
                                return;
                            }

                            field.onChange(val);
                        }}
                        options={options}
                        placeholder={placeholder}
                        className={clsx(
                            fieldState.error && '!border-b !border-red-500',
                            className
                        )}
                        classNamePrefix="react-select"
                        isClearable={isClearable}
                        isMulti={isMulti}
                    />
                    <RenderIf
                        when={
                            !!fieldState.error &&
                            fieldState.error.type === 'required'
                        }
                    >
                        <p className="float-end text-end text-xs text-red-500 lg:text-sm">
                            {fieldName ?? name} is required
                        </p>
                    </RenderIf>
                </div>
            )}
        />
    );
};

export default InputSelect;
