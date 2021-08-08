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
                viewBox="0 0 26 26"
            >
                <g
                    id="Group_5"
                    data-name="Group 5"
                    transform="translate(-394 -360)"
                >
                    <circle
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx="12"
                        cy="12"
                        r="12"
                        transform="translate(395 361)"
                        fill="#ffd54f"
                        stroke={borderColor}
                        strokeWidth="2"
                    />
                    <g
                        id="Group_1"
                        data-name="Group 1"
                        transform="translate(395 361)"
                    >
                        <circle
                            id="Ellipse_2"
                            data-name="Ellipse 2"
                            cx="2"
                            cy="2"
                            r="2"
                            transform="translate(5 8)"
                            fill="#6d4c41"
                        />
                        <circle
                            id="Ellipse_3"
                            data-name="Ellipse 3"
                            cx="2"
                            cy="2"
                            r="2"
                            transform="translate(15 8)"
                            fill="#6d4c41"
                        />
                        <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M17.25,19.675a.744.744,0,0,1-.53-.22,6.675,6.675,0,0,0-9.44,0,.75.75,0,0,1-1.061-1.061,8.175,8.175,0,0,1,11.561,0,.75.75,0,0,1-.53,1.28Z"
                            fill="#6d4c41"
                        />
                        <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M9.25,7.333a.751.751,0,0,1-.416-.126L6.334,5.54a.75.75,0,0,1,.832-1.248l2.5,1.667A.75.75,0,0,1,9.25,7.333Z"
                            fill="#6d4c41"
                        />
                        <path
                            id="Path_3"
                            data-name="Path 3"
                            d="M14.75,7.333a.75.75,0,0,1-.417-1.374l2.5-1.667a.75.75,0,1,1,.832,1.248l-2.5,1.667a.735.735,0,0,1-.415.126Z"
                            fill="#6d4c41"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Anger;
