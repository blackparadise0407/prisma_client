import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Love = ({ color, size = 16, borderColor = '#fff', ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={size}
                height={size}
                viewBox="0 0 79.96 79.96"
            >
                <defs>
                    <linearGradient
                        id="love"
                        x1="0.5"
                        y1="6.401"
                        x2="0.5"
                        y2="5.401"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%" stopColor="#ef4b8c" />
                        <stop offset="35.5%" stopColor="#ee4179" />
                        <stop offset="69.6%" stopColor="#ee324f" />
                        <stop offset="95.8%" stopColor="#ec2631" />
                    </linearGradient>
                </defs>
                <g transform="translate(-2.374 -4.909)">
                    <circle
                        cx="39.98"
                        cy="39.98"
                        r="39"
                        transform="translate(2.374 4.909)"
                        fill="url(#love)"
                        stroke={borderColor}
                        strokeWidth="3"
                    />
                    <g transform="translate(-140.169)">
                        <path
                            d="M201.113,44.749l-4.81,5.26-13.78,15.08-13.79-15.08-4.81-5.26a9.244,9.244,0,0,1-2.48-6.25,9.4,9.4,0,0,1,3.75-7.44,11.18,11.18,0,0,1,14.86,1.17l2.47,2.7,2.47-2.7a11.154,11.154,0,0,1,14.85-1.16A9.184,9.184,0,0,1,201.113,44.749Z"
                            fill="#fffcf6"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Love;
