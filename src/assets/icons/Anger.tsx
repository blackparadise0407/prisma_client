import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Anger = ({ color, size = 16, borderColor = '#fff', ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 79.96 79.96"
            >
                <defs>
                    <linearGradient
                        id="a"
                        x1="0.5"
                        y1="-0.435"
                        x2="0.5"
                        y2="-1.435"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#f7ea46" />
                        <stop offset="35.5%" stopColor="#fabe2f" />
                        <stop offset="61.9%" stopColor="#f79124" />
                        <stop offset="85.9%" stopColor="#f26924" />
                        <stop offset="95.8%" stopColor="#f26424" />
                    </linearGradient>
                </defs>
                <g transform="translate(-9.652 -6.513)">
                    <circle
                        cx="39.98"
                        cy="39.98"
                        r="39.98"
                        transform="translate(9.652 86.473) rotate(-90)"
                        fill="url(#a)"
                    />
                    <path
                        d="M187.8,318.622l-3.16,3.16L163.85,303.5l5.67-5.66Z"
                        transform="translate(-142.178 -271.708)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M171.82,323.072v-12.32a3.482,3.482,0,0,1,3.48-3.48h.49a3.483,3.483,0,0,1,3.48,3.48v12.32a3.483,3.483,0,0,1-3.48,3.48h-.49A3.47,3.47,0,0,1,171.82,323.072Z"
                        transform="translate(-142.178 -271.708)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M196.53,318.622l3.15,3.16,20.79-18.28-5.67-5.66Z"
                        transform="translate(-142.178 -271.708)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M212.5,323.072v-12.32a3.482,3.482,0,0,0-3.48-3.48h-.49a3.482,3.482,0,0,0-3.48,3.48v12.32a3.482,3.482,0,0,0,3.48,3.48h.49A3.47,3.47,0,0,0,212.5,323.072Z"
                        transform="translate(-142.178 -271.708)"
                        fill="#3f3c60"
                    />
                    <path
                        d="M179.66,338.192H167.34a3.482,3.482,0,0,1-3.48-3.48v-.49a3.482,3.482,0,0,1,3.48-3.48h12.32a3.482,3.482,0,0,1,3.48,3.48v.49A3.482,3.482,0,0,1,179.66,338.192Z"
                        transform="translate(-142.178 -271.708)"
                        fill="#ed6624"
                    />
                    <path
                        d="M203.97,338.192h12.32a3.482,3.482,0,0,0,3.48-3.48v-.49a3.482,3.482,0,0,0-3.48-3.48H203.97a3.482,3.482,0,0,0-3.48,3.48v.49A3.482,3.482,0,0,0,203.97,338.192Z"
                        transform="translate(-142.178 -271.708)"
                        fill="#ed6624"
                    />
                    <path
                        d="M204.77,334.462H179.29a3.73,3.73,0,0,0-3.73,3.73h0a3.73,3.73,0,0,0,3.73,3.73h25.48a3.73,3.73,0,0,0,3.73-3.73h0A3.73,3.73,0,0,0,204.77,334.462Z"
                        transform="translate(-142.178 -271.708)"
                        fill="#3f3c60"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Anger;
