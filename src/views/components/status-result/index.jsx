import { useMemo } from 'react';
import clsx from 'clsx';
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

import Button from '@/views/elements/button';
import RenderIf from '@/views/components/render-if';

/**
 * @typedef StatusResultProps
 * @property {('success'|'warning'|'danger')} [type]
 * @property {string} [title]
 * @property {string} [detail]
 * @property {string} [button]
 * @property {string} [href]
 * @property {string} [className]
 * @property {string} [iconClassName]
 * @property {string} [titleClassName]
 * @property {string} [detailClassName]
 * @property {string} [buttonClassName]
 * @property {React.MouseEvent} [onButtonClick]
 */

/**
 * @param {StatusResultProps} props
 */
const StatusResult = ({
    type = 'danger',
    title = 'Title here',
    detail = '',
    button = '',
    href = '',
    className = '',
    iconClassName = '',
    detailClassName = '',
    titleClassName = '',
    buttonClassName = '',
    onButtonClick = () => {}
}) => {
    const Icon = useMemo(() => {
        if (type === 'success')
            return {
                color: 'stroke-green-500',
                element: CheckCircleIcon
            };

        if (type === 'warning')
            return {
                color: 'stroke-yellow-500',
                element: ExclamationTriangleIcon
            };

        if (type === 'danger')
            return { color: 'stroke-red-500', element: ExclamationCircleIcon };
    }, [type]);

    return (
        <section
            className={clsx(
                'flex h-screen w-screen items-center justify-center bg-white',
                className
            )}
        >
            <div className="flex flex-col items-center justify-center">
                <div className="mb-6">
                    <RenderIf
                        when={['danger', 'warning', 'success'].includes(type)}
                    >
                        <Icon.element
                            className={clsx(
                                'aspect-square w-40',
                                Icon.color,
                                iconClassName
                            )}
                        />
                    </RenderIf>
                </div>
                <RenderIf when={title}>
                    <h1
                        className={clsx(
                            'text-3xl font-semibold',
                            titleClassName
                        )}
                    >
                        {title}
                    </h1>
                </RenderIf>
                <RenderIf when={detail}>
                    <p
                        className={clsx(
                            'mt-2 text-base text-slate-500',
                            detailClassName
                        )}
                    >
                        {detail}
                    </p>
                </RenderIf>
                <RenderIf when={button}>
                    <Button
                        href={href}
                        className={clsx('mt-6', buttonClassName)}
                        onClick={onButtonClick}
                    >
                        {button}
                    </Button>
                </RenderIf>
            </div>
        </section>
    );
};

export default StatusResult;
