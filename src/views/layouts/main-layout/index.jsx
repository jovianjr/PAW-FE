import clsx from 'clsx';
import Navbar from '@/views/components/navbar';
import Footer from '@/views/components/footer';

/**
 * @typedef MainLayoutProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {string} [containerClassName]
 */

/**
 * @param {MainLayoutProps} props
 */
const MainLayout = ({
    children = null,
    className = '',
    containerClassName = '',
    screen = false
}) => {
    return (
        <div
            className={clsx(
                screen ? 'flex h-screen w-screen flex-col' : '',
                containerClassName
            )}
        >
            <Navbar />
            <main
                className={clsx(screen ? 'h-full' : 'min-h-[50vh]', className)}
            >
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
