import clsx from 'clsx';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

import RenderIf from '@/views/components/render-if';

/**
 * @typedef DropdownProps
 * @property {React.ReactNode} children
 * @property {string[]} [options]
 * @property {('left'|'right')} position
 * @property {string} [currentItem]
 * @property {string} [className]
 * @property {string} [panelClassName]
 * @property {string} [itemClassName]
 * @property {string} [activeClassName]
 * @property {boolean} [overlay]
 * @property {React.MouseEvent} [onClick]
 * @property {React.ReactNode} [ExtendedOptions]
 */

/**
 * @param {DropdownProps} props
 */
const Dropdown = ({
    children = null,
    options = [],
    position = 'right',
    currentItem = '',
    className = '',
    panelClassName = '',
    itemClassName = '',
    activeClassName = '',
    overlay = false,
    closeOnClick = false,
    onClick = () => {},
    ExtendedOptions = () => {}
}) => {
    return (
        <Popover className="relative h-full">
            {({ open, close }) => (
                <>
                    <Popover.Button className={clsx('h-full', className)}>
                        {children}
                    </Popover.Button>
                    <Transition
                        show={open && overlay}
                        enter="transition-opacity duration-250"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Popover.Overlay className="absolute right-0 z-10 h-screen w-screen bg-black opacity-30 transition-all" />
                    </Transition>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            className={clsx(
                                'absolute z-10 w-max',
                                position === 'left' && 'left-0',
                                position === 'right' && 'right-0',
                                'flex flex-col rounded border border-slate-300 bg-white',
                                panelClassName
                            )}
                        >
                            {options.map((val, index) => {
                                const Tag = false ? 'a' : 'button';
                                return (
                                    <Tag
                                        key={index}
                                        className={clsx(
                                            'flex items-center gap-2 stroke-slate-900 px-4 py-4 text-start hover:bg-slate-200',
                                            currentItem === val.name
                                                ? activeClassName
                                                : '',
                                            itemClassName,
                                            val.className
                                        )}
                                        onClick={() => {
                                            if (closeOnClick) close();
                                            onClick(val, index, close);
                                        }}
                                    >
                                        <RenderIf when={!!val.icon}>
                                            {!!val.icon ? (
                                                <val.icon className="h-5 w-5 stroke-inherit" />
                                            ) : null}
                                        </RenderIf>
                                        {val.text}
                                    </Tag>
                                );
                            })}
                            <ExtendedOptions {...{ close }} />
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default Dropdown;
