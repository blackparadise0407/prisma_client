import React from 'react';

type Props = {
    size?: number;
    color?: string;
    [key: string]: string | number;
};

const FriendAdd = ({ color, size = 16, ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 18.175 18.176"
            >
                <g transform="translate(-24.896 -12.475)">
                    <rect
                        width="0.918"
                        height="4.589"
                        rx="0.282"
                        transform="translate(36.993 15.439) rotate(-90)"
                        fill={color}
                    />
                    <rect
                        width="0.918"
                        height="4.589"
                        rx="0.282"
                        transform="translate(38.829 12.685)"
                        fill={color}
                    />
                    <path
                        d="M41.413,17.253a8.572,8.572,0,1,1-4.954-3.916"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <path
                        d="M29.044,23.555a5.323,5.323,0,0,0,9.88,0"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <circle
                        cx="0.54"
                        cy="0.54"
                        r="0.54"
                        transform="translate(29.936 19.334)"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <circle
                        cx="0.54"
                        cy="0.54"
                        r="0.54"
                        transform="translate(36.952 19.334)"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                </g>
            </svg>
        </div>
    );
};

export default FriendAdd;
