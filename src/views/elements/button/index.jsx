import clsx from 'clsx';
import { useMemo } from 'react';

/**
 * @typedef ButtonProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {('primary'|'secondary')} variant
 * @property {JSX.Element} [startIcon]
 * @property {JSX.Element} [endIcon]
 * @property {string} [href]
 * @property {boolean} [disabled]
 * @property {React.MouseEvent} [onClick]
 */

/**
 * @param {ButtonProps} props
 */
const Button = ({
    children = null,
    className = '',
    variant = 'primary',
    type = 'button',
    startIcon = null,
    endIcon = null,
    href = null,
    disabled = false,
    onClick = () => {}
}) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;

    const Element = useMemo(() => (href ? 'a' : 'button'), [href]);

    return (
        <Element
            type={type}
            className={clsx(
                'rounded border border-transparent py-2 px-3 text-sm font-medium transition-all',
                variant === 'primary' &&
                    'bg-purple-700 text-white hover:border-purple-700 hover:bg-white hover:text-purple-700',
                variant === 'secondary' &&
                    'bg-slate-200 text-purple-700 hover:border-purple-700 hover:bg-purple-700 hover:text-white',
                'disabled:bg-gray-300 disabled:hover:border-transparent disabled:hover:text-white',
                className
            )}
            disabled={disabled}
            onClick={onClick}
            href={href}
        >
            {startIcon ? <StartIcon className="mr-2 w-4" /> : null}
            {children}
            {endIcon ? <EndIcon className="ml-2 w-4" /> : null}
        </Element>
    );
};

export default Button;
