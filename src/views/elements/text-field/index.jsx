import clsx from 'clsx';
import { useController } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/solid';

/**
 * @typedef TextFieldProps
 * @property {Control<TFieldValues>} control
 * @property {object} [rules]
 * @property {string} [className]
 * @property {string} [inputClassName]
 * @property {string} [label]
 * @property {string} name
 * @property {string} [placeholder]
 * @property {('text'|'number'|'date'|'password')} type
 * @property {JSX.Element} [icon]
 * @property {boolean} [disabled]
 * @property {function} [resetField]
 */

/**
 * @param {TextFieldProps} props
 */
const TextField = ({
	control,
	rules = {},
	className = '',
	inputClassName = '',
	label = 'aasd',
	name = '',
	placeholder = '',
	type = 'text',
	icon = null,
	disabled = false,
	resetField = null,
}) => {
	const Icon = icon;

	const { field, fieldState } = useController({
		control,
		name,
		rules,
		defaultValue: '',
	});

	const showPicker = (e) => {
		return e.target.showPicker();
	};

	const Label = () => {
		if (!label) return null;
		return (
			<label className="flex justify-start px-0 text-sm font-semibold text-neutral-900 lg:text-base">
				{label}
			</label>
		);
	};

	return (
		<div className={clsx('', className)}>
			<Label />
			<div className="relative w-full">
				{icon && <Icon className="h-4 w-4 text-slate-900" />}
				<input
					type={type}
					placeholder={placeholder}
					className={clsx(
						'w-full rounded-lg border border-slate-300 bg-slate-100 py-3 px-4 text-slate-900 placeholder:font-light placeholder:text-slate-400 focus:outline-slate-400',
						fieldState.error && 'text-red-500 focus:!outline-red-500',
						Icon && 'pl-10',
						inputClassName
					)}
					name={name}
					ref={field.ref}
					value={field.value}
					onChange={(e) => field.onChange(e)}
					onClick={type === 'date' ? showPicker : undefined}
					disabled={disabled}
				/>
				{field.value && resetField ? (
					<div
						className="absolute top-1/2 right-0 flex -translate-y-1/2 pr-4"
						onClick={() => resetField(name)}
					>
						<XMarkIcon className="h-4 w-4 cursor-pointer text-neutral-800" />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default TextField;
