import clsx from 'clsx';
import MainLayout from '@/views/layouts/main-layout';

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
        <MainLayout
            screen
            className={clsx(
                'flex items-center justify-center bg-white',
                className
            )}
        >
            <form
                onSubmit={onSubmit}
                className={clsx(
                    'mx-5 flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-purple-700 bg-white px-4 py-4 shadow-md lg:mx-0 lg:w-[500px] lg:gap-9 lg:py-8 lg:px-10',
                    boxClassName
                )}
            >
                {children}
            </form>
        </MainLayout>
    );
};

export default AuthLayout;
