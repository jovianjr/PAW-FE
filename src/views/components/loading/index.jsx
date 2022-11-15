import { Transition } from '@headlessui/react';

/**
 * @typedef LoadingProps
 * @property {boolean} [when]
 */

/**
 * @param {LoadingProps} props
 */
const Loading = ({ when = false }) => {
    return (
        <Transition
            show={when}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="relative z-[1000]"
        >
            <div className="fixed z-[1000] flex h-screen w-screen flex-col items-center justify-center gap-10 bg-white/100">
                <img
                    src="/images/logo.png"
                    alt="PAW Icon"
                    className="aspect-square w-20 animate-[loading-spin_1.25s_cubic-bezier(0,0,0.2,1)_infinite] lg:w-40"
                />
                <p className="animate-pulse text-sm font-bold text-black lg:text-base">
                    Loading
                </p>
            </div>
        </Transition>
    );
};

export default Loading;
