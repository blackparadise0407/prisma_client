import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

type Size = 'middle' | 'large' | 'small';

type Props = {
    size?: Size;
    children: ReactNode;
    className?: string;
    collapsible?: boolean;
    [key: string]: any;
};

const Text = ({
    size = 'middle',
    children,
    className,
    collapsible = false,
    ...rest
}: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsible);
    const { t } = useTranslation();

    const _handleExpand = () => {
        setIsCollapsed(false);
    };

    const _renderChildren = () => {
        if (isCollapsed) {
            if (typeof children === 'string') {
                return children.substring(0, 300);
            }
            return children;
        }
        return children;
    };

    return (
        <div
            className={clsx(
                'text',
                `text--${size}`,
                collapsible && 'text--collapsible',
                className,
            )}
            {...rest}
        >
            {_renderChildren()}
            {collapsible && isCollapsed && (
                <span onClick={_handleExpand}>
                    {t('components.text.see_more')}
                </span>
            )}
        </div>
    );
};

export default React.memo(Text);
