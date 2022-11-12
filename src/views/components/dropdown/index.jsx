import clsx from 'clsx';
import { Popover } from '@headlessui/react';

import RenderIf from '@/views/components/render-if';

/**
 * @typedef DropdownProps
 * @property {React.ReactNode} children
 * @property {string[]} [options]
 * @property {('left'|'right')} position
 * @property {string} [panelClassName]
 * @property {string} [itemClassName]
 * @property {React.MouseEvent} [onClick]
 */

/**
 * @param {DropdownProps} props
 */
const Dropdown = ({
    children = null,
    options = [],
    position = 'right',
    panelClassName = '',
    itemClassName = '',
    onClick = () => {}
}) => {
    return (
        <Popover className="relative h-full">
            <Popover.Button className="h-full">{children}</Popover.Button>

            <Popover.Panel
                className={clsx(
                    'absolute z-10 w-max',
                    position === 'left' && 'left-0',
                    position === 'right' && 'right-0',
                    'flex flex-col gap-2 rounded border border-slate-300 bg-white',
                    panelClassName
                )}
            >
                {options.map((val, index) => {
                    const Tag = false ? 'a' : 'button';
                    return (
                        <Tag
                            key={index}
                            className={clsx(
                                'flex items-center gap-2 px-4 py-2 text-start hover:bg-slate-200',
                                itemClassName
                            )}
                            onClick={() => onClick(val)}
                        >
                            <RenderIf when={val.icon}>
                                <val.icon className="h-5 w-5 text-inherit" />
                            </RenderIf>
                            {val.text}
                        </Tag>
                    );
                })}
            </Popover.Panel>
        </Popover>
    );
};

export default Dropdown;
