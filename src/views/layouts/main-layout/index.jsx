import clsx from 'clsx';
import Navbar from '@/views/components/navbar';
import Footer from '@/views/components/footer';

/**
 * @typedef MainLayoutProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {string} [containerClassName]
 * @property {boolean} [search]
 * @property {boolean} [screen]
 */

/**
 * @param {MainLayoutProps} props
 */
const MainLayout = ({
    children = null,
    className = '',
    containerClassName = '',
    search = true,
    screen = false
}) => {
    return (
        <div
            className={clsx(
                screen ? 'flex h-screen w-screen flex-col' : '',
                containerClassName
            )}
        >
            <Navbar search={search} />
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
