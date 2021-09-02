import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Wow = ({ color, size = 16, borderColor = '#fff', ...rest }: Props) => {
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
                        id="wow"
                        x1="0.5"
                        y1="-0.393"
                        x2="0.5"
                        y2="-1.393"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%" stopColor="#f5ee67" />
                        <stop offset="35.6%" stopColor="#f5ec52" />
                        <stop offset="69.6%" stopColor="#fcda19" />
                        <stop offset="95.8%" stopColor="#fcd30c" />
                    </linearGradient>
                </defs>
                <g transform="translate(-6.903 -1.574)">
                    <circle
                        cx="39.98"
                        cy="39.98"
                        r="39"
                        transform="translate(6.903 1.574)"
                        fill="url(#wow)"
                        stroke={borderColor}
                        strokeWidth="3"
                    />
                    <path
                        d="M35.623,318.2H23.3a3.483,3.483,0,0,1-3.48-3.48v-.49a3.482,3.482,0,0,1,3.48-3.48h12.32a3.482,3.482,0,0,1,3.48,3.48v.49A3.47,3.47,0,0,1,35.623,318.2Z"
                        transform="translate(-0.9 -274.968)"
                        fill="#fabe3e"
                    />
                    <path
                        d="M59.943,318.2h12.32a3.482,3.482,0,0,0,3.48-3.48v-.49a3.482,3.482,0,0,0-3.48-3.48H59.943a3.482,3.482,0,0,0-3.48,3.48v.49A3.47,3.47,0,0,0,59.943,318.2Z"
                        transform="translate(-0.9 -274.968)"
                        fill="#fabe3e"
                    />
                    <path
                        d="M27.793,310.052v-12.31a3.483,3.483,0,0,1,3.48-3.48h.49a3.483,3.483,0,0,1,3.48,3.48v12.32a3.482,3.482,0,0,1-3.48,3.48h-.49A3.485,3.485,0,0,1,27.793,310.052Z"
                        transform="translate(-0.9 -274.968)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M60.313,297.742v12.32a3.482,3.482,0,0,0,3.48,3.48h.49a3.482,3.482,0,0,0,3.48-3.48v-12.32a3.483,3.483,0,0,0-3.48-3.48h-.49A3.47,3.47,0,0,0,60.313,297.742Z"
                        transform="translate(-0.9 -274.968)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M61.173,328.592a15.149,15.149,0,0,1-3.18,9.36,13.156,13.156,0,0,0-20.74,0,15.149,15.149,0,0,1-3.18-9.36c0-8.04,6.06-14.55,13.55-14.55S61.173,320.552,61.173,328.592Z"
                        transform="translate(-0.9 -274.968)"
                        fill="#3e3b61"
                    />
                    <path
                        d="M57.993,337.952a12.955,12.955,0,0,1-20.74,0,13.156,13.156,0,0,1,20.74,0Z"
                        transform="translate(-0.9 -274.968)"
                        fill="#e777ae"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Wow;
