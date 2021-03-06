import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Like = ({ color, size = 16, borderColor = '#fff', ...rest }: Props) => {
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
                        id="like"
                        x1="0.5"
                        y1="6.479"
                        x2="0.5"
                        y2="5.479"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%" stopColor="#8ed4dd" />
                        <stop offset="27.5%" stopColor="#7ccfdd" />
                        <stop offset="62.3%" stopColor="#53c6d6" />
                        <stop offset="100%" stopColor="#0abcd5" />
                    </linearGradient>
                </defs>
                <g transform="translate(-7.803 -1.823)">
                    <circle
                        cx="39.98"
                        cy="39.98"
                        r="39"
                        transform="translate(7.803 1.823)"
                        fill="url(#like)"
                        stroke={borderColor}
                        strokeWidth="3"
                    />
                    <circle
                        cx="39.98"
                        cy="39.98"
                        r="39.98"
                        transform="translate(7.803 1.823)"
                        fill="url(#like)"
                    />
                    <path
                        d="M40.963,44.573l1.63-1.26a1.8,1.8,0,0,0,.2-.19c.68-.8,5.08-6.06,6.07-9.41a1.487,1.487,0,0,0,.05-.36v-5.41a1.8,1.8,0,0,1,.72-1.44,3.669,3.669,0,0,1,4.15-.32,1.468,1.468,0,0,1,.5.46,18.715,18.715,0,0,1,2.19,5.23,5.241,5.241,0,0,1,.07,2.05l-1.09,6.32a.23.23,0,0,0,.22.27h10.99a2.754,2.754,0,0,1,2.71,2.15,4.249,4.249,0,0,1,.1.92,2.985,2.985,0,0,1-1.65,2.84.387.387,0,0,0-.09.63,2.729,2.729,0,0,1,.85,1.99,3.39,3.39,0,0,1-1.39,2.49.262.262,0,0,0-.04.38,2.871,2.871,0,0,1,.68,1.91,3.41,3.41,0,0,1-1.52,2.6.417.417,0,0,0-.12.57,3.962,3.962,0,0,1,.55,2.09,3.208,3.208,0,0,1-3.21,2.94H44.443a1.38,1.38,0,0,1-.59-.14l-2.69-1.34a1.315,1.315,0,0,1-.72-1.17V45.6A1.279,1.279,0,0,1,40.963,44.573Z"
                        fill="#fff"
                    />
                    <path
                        d="M35.653,62.053h-8.81a1.171,1.171,0,0,1-1.17-1.17V45.853a1.172,1.172,0,0,1,1.17-1.17h8.81a1.172,1.172,0,0,1,1.17,1.17v15.04A1.176,1.176,0,0,1,35.653,62.053Z"
                        fill="#fff"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Like;
