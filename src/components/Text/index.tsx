import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

type Size = 'middle' | 'large' | 'small';

type Props = {
    size?: Size;
    children: string;
    className?: string;
    collapsible?: boolean;
};

const Text = ({
    size = 'middle',
    children,
    className,
    collapsible = false,
}: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsible);
    const { t } = useTranslation();

    const handleExpand = () => {
        setIsCollapsed(false);
    };
    return (
        <div
            className={clsx(
                'text',
                `text--${size}`,
                collapsible && 'text--collapsible',
                className,
            )}
        >
            {isCollapsed ? children.substring(0, 300) + '...' : children}
            {collapsible && isCollapsed && (
                <span onClick={handleExpand}>
                    {t('components.text.see_more')}
                </span>
            )}
        </div>
    );
};

export default React.memo(Text);
