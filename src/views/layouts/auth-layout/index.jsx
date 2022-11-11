import clsx from 'clsx';

/**
 * @typedef AuthLayoutProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {string} [boxClassName]
 */

/**
 * @param {AuthLayoutProps} props
 */
const AuthLayout = ({
    children = null,
    className = '',
    boxClassName = '',
    onSubmit = () => {}
}) => {
    return (
        <section
            className={clsx(
                'flex h-screen w-screen items-center justify-center bg-white',
                className
            )}
        >
            <form
                onSubmit={onSubmit}
                className={clsx(
                    'flex w-[500px] flex-col items-center justify-center gap-9 rounded-2xl border border-purple-700 bg-white py-8 px-10 shadow-md',
                    boxClassName
                )}
            >
                {children}
            </form>
        </section>
    );
};

export default AuthLayout;
