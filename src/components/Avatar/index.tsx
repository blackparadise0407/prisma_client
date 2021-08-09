import { IMAGES } from 'assets';
import clsx from 'clsx';
import React from 'react';
import './styles.scss';

type Props = {
    size?: number;
    borderColor?: string;
    backgroundColor?: string;
    className?: string;
    src: string;
};

const Avatar = ({
    size,
    backgroundColor = '#fff',
    borderColor = '#efefef',
    className,
    src,
}: Props) => {
    const _size = `${size}rem`;
    return (
        <div
            className={clsx('avatar-wrapper', className)}
            style={{ width: _size, height: _size, backgroundColor }}
        >
            <div
                className="avatar"
                style={{
                    width: _size,
                    height: _size,
                    backgroundColor: borderColor,
                }}
            >
                <div
                    className="avatar-inner"
                    style={{ width: _size, height: _size, backgroundColor }}
                >
                    <div
                        className="avatar-inner2"
                        style={{ width: _size, height: _size, backgroundColor }}
                    >
                        <img src={src ?? IMAGES.mockCover} alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Avatar);
