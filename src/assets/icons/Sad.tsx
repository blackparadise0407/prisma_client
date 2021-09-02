import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Sad = ({ color, size = 16, borderColor = '#ffffff', ...rest }: Props) => {
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
                        id="sada"
                        x1="0.5"
                        y1="-0.435"
                        x2="0.5"
                        y2="-1.435"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%" stopColor="#7cd1e5" />
                        <stop offset="35.5%" stopColor="#57caf0" />
                        <stop offset="64.8%" stopColor="#49b0e3" />
                        <stop offset="95.8%" stopColor="#4590ce" />
                    </linearGradient>
                    <linearGradient
                        id="sadb"
                        x1="0.5"
                        y1="-1209.152"
                        x2="0.5"
                        y2="-1209.772"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%" stopColor="#cfecf5" />
                        <stop offset="99.9%" stopColor="#bce5f0" />
                    </linearGradient>
                    <linearGradient
                        id="sadc"
                        x1="0.5"
                        y1="-5.922"
                        x2="0.5"
                        y2="-6.922"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%." stopColor="#e5f4f7" />
                        <stop offset="20.7%" stopColor="#e2f3f7" />
                        <stop offset="0.44.5%" stopColor="#c8e9f3" />
                        <stop offset="7.2%" stopColor="#c3e7f2" />
                        <stop offset="99.9%" stopColor="#bce5f0" />
                    </linearGradient>
                </defs>
                <g transform="translate(-7.134 -6.795)">
                    <circle
                        cx="39.98"
                        cy="39.98"
                        r="39"
                        transform="translate(7.134 6.795)"
                        fill="url(#sada)"
                        stroke={borderColor}
                        strokeWidth="3"
                    />
                    <path
                        d="M318.443,314.872v-10.21a3.239,3.239,0,0,1,3.24-3.24h.98a3.239,3.239,0,0,1,3.24,3.24v10.21a3.239,3.239,0,0,1-3.24,3.24h-.98A3.239,3.239,0,0,1,318.443,314.872Z"
                        transform="translate(-292.46 -271.427)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M358.553,314.872v-10.21a3.239,3.239,0,0,0-3.24-3.24h-.98a3.239,3.239,0,0,0-3.24,3.24v10.21a3.239,3.239,0,0,0,3.24,3.24h.98A3.239,3.239,0,0,0,358.553,314.872Z"
                        transform="translate(-292.46 -271.427)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M326.653,329.742h-12.32a3.483,3.483,0,0,1-3.48-3.48v-.49a3.483,3.483,0,0,1,3.48-3.48h12.32a3.482,3.482,0,0,1,3.48,3.48v.49A3.47,3.47,0,0,1,326.653,329.742Z"
                        transform="translate(-292.46 -271.427)"
                        fill="#67cef4"
                    />
                    <path
                        d="M350.963,329.742h12.32a3.483,3.483,0,0,0,3.48-3.48v-.49a3.483,3.483,0,0,0-3.48-3.48h-12.32a3.483,3.483,0,0,0-3.48,3.48v.49A3.483,3.483,0,0,0,350.963,329.742Z"
                        transform="translate(-292.46 -271.427)"
                        fill="#67cef4"
                    />
                    <path
                        d="M353.393,333.372v.12h-.03Z"
                        transform="translate(-292.46 -271.427)"
                        fill="url(#sadb)"
                    />
                    <path
                        d="M354.713,336.462a24.867,24.867,0,0,0-16.41-5.7c-6.58,0-12.47,2.21-16.4,5.7a16.8,16.8,0,0,1,32.81,0Z"
                        transform="translate(-292.46 -271.427)"
                        fill="#3e3b61"
                    />
                    <path
                        d="M365.5,335.042a8.617,8.617,0,0,1-1.7,5.35,6.193,6.193,0,0,1-4.86,2.63c-3.61,0-6.54-3.57-6.54-7.98a5.846,5.846,0,0,1,.04-.73v-.12a17.542,17.542,0,0,1,1.6-4.91c.23-.58.46-1.16.68-1.74.41-1.08.72-2.2,1.1-3.3a2.95,2.95,0,0,1,2.3-1.92,3.018,3.018,0,0,1,3.36,1.67c.41,1.07.87,2.14,1.22,3.23.75,2.32,2.29,4.48,2.71,6.91C365.453,334.432,365.483,334.732,365.5,335.042Z"
                        transform="translate(-292.46 -271.427)"
                        fill="url(#sadc)"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Sad;
