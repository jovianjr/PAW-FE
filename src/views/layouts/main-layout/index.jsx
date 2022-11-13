import clsx from 'clsx';
import Navbar from '@/views/components/navbar';
import Footer from '@/views/components/footer';

/**
 * @typedef MainLayoutProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * @param {MainLayoutProps} props
 */
const MainLayout = ({ children = null, className = '' }) => {
    return (
        <div>
            <Navbar />
            <main className={clsx('min-h-[50vh]', className)}>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
