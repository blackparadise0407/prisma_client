import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Laugh = ({ color, size = 16, borderColor = '#fff', ...rest }: Props) => {
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
                        id="laugh"
                        x1="0.5"
                        y1="6.479"
                        x2="0.5"
                        y2="5.479"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%" stopColor="#f5ee67" />
                        <stop offset="35.6%" stopColor="#f5ec52" />
                        <stop offset="69.6%" stopColor="#fcda19" />
                        <stop offset="95.8%" stopColor="#fcd30c" />
                    </linearGradient>
                </defs>
                <g transform="translate(-6.463 -0.996)">
                    <circle
                        cx="39.98"
                        cy="39.98"
                        r="39"
                        transform="translate(6.463 0.996)"
                        fill="url(#laugh)"
                        stroke={borderColor}
                        strokeWidth="3"
                    />
                    <path
                        d="M479.248,47.733a20.751,20.751,0,0,1-7.27,15.5c-2.8-6.18-10.15-10.59-18.79-10.59s-15.99,4.41-18.79,10.59a20.751,20.751,0,0,1-7.27-15.5Z"
                        transform="translate(-406.745 -0.827)"
                        fill="#3f3b61"
                    />
                    <path
                        d="M441.668,43.233h-12.32a3.482,3.482,0,0,1-3.48-3.48v-.49a3.482,3.482,0,0,1,3.48-3.48h12.32a3.483,3.483,0,0,1,3.48,3.48v.49A3.483,3.483,0,0,1,441.668,43.233Z"
                        transform="translate(-406.745 -0.827)"
                        fill="#fabe3e"
                    />
                    <path
                        d="M442.258,29.073l-9.96,9.96-3.54-3.54,6.43-6.42-6.43-6.43,3.54-3.53,6.42,6.42Z"
                        transform="translate(-406.745 -0.827)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M465.278,43.233H477.6a3.483,3.483,0,0,0,3.48-3.48v-.49a3.483,3.483,0,0,0-3.48-3.48h-12.32a3.483,3.483,0,0,0-3.48,3.48v.49A3.47,3.47,0,0,0,465.278,43.233Z"
                        transform="translate(-406.745 -0.827)"
                        fill="#fabe3e"
                    />
                    <path
                        d="M464.688,29.073l9.96,9.96,3.54-3.54-6.43-6.42,6.43-6.43-3.54-3.53-6.42,6.42Z"
                        transform="translate(-406.745 -0.827)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M471.978,63.233a29.066,29.066,0,0,1-37.58,0c2.8-6.18,10.15-10.59,18.79-10.59S469.178,57.053,471.978,63.233Z"
                        transform="translate(-406.745 -0.827)"
                        fill="#e776ae"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Laugh;
