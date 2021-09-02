import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Dislike = ({
    color,
    size = 16,
    borderColor = '#fff',
    ...rest
}: Props) => {
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
                        id="dislike"
                        x1="0.5"
                        y1="6.479"
                        x2="0.5"
                        y2="5.479"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%" stopColor="#908fc5" />
                        <stop offset="35.5%" stopColor="#8080bd" />
                        <stop offset="69.6%" stopColor="#5f65ae" />
                        <stop offset="95.8%" stopColor="#4255a5" />
                    </linearGradient>
                </defs>
                <g transform="translate(-5.378 -1.275)">
                    <circle
                        cx="39.98"
                        cy="39.98"
                        r="39"
                        transform="translate(5.378 1.275)"
                        fill="url(#dislike)"
                        stroke={borderColor}
                        strokeWidth="3"
                    />
                    <path
                        d="M309.374,42.923l1.63,1.26a1.8,1.8,0,0,1,.2.19c.68.8,5.08,6.06,6.07,9.41a1.487,1.487,0,0,1,.05.36v5.41a1.8,1.8,0,0,0,.72,1.44,3.669,3.669,0,0,0,4.15.32,1.468,1.468,0,0,0,.5-.46,18.715,18.715,0,0,0,2.19-5.23,5.242,5.242,0,0,0,.07-2.05l-1.09-6.32a.23.23,0,0,1,.22-.27h10.99a2.754,2.754,0,0,0,2.71-2.15,4.249,4.249,0,0,0,.1-.92,2.985,2.985,0,0,0-1.65-2.84.387.387,0,0,1-.09-.63,2.729,2.729,0,0,0,.85-1.99,3.39,3.39,0,0,0-1.39-2.49.262.262,0,0,1-.04-.38,2.871,2.871,0,0,0,.68-1.91,3.41,3.41,0,0,0-1.52-2.6.417.417,0,0,1-.12-.57,3.962,3.962,0,0,0,.55-2.09,3.208,3.208,0,0,0-3.21-2.94h-19.08a1.38,1.38,0,0,0-.59.14l-2.69,1.34a1.315,1.315,0,0,0-.72,1.17v13.75A1.308,1.308,0,0,0,309.374,42.923Z"
                        transform="translate(-270.625 -0.548)"
                        fill="#fff"
                    />
                    <path
                        d="M304.064,25.663h-8.81a1.171,1.171,0,0,0-1.17,1.17v15.04a1.171,1.171,0,0,0,1.17,1.17h8.81a1.172,1.172,0,0,0,1.17-1.17V26.823A1.163,1.163,0,0,0,304.064,25.663Z"
                        transform="translate(-270.625 -0.548)"
                        fill="#fff"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Dislike;
