import React from 'react';

type Props = {
    size?: number;
    color?: string;
    [key: string]: string | number;
};

const Chat = ({ color, size = 16, ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 18.106 18.116"
            >
                <g
                    id="Group_16"
                    data-name="Group 16"
                    transform="translate(-137.067 -12.525)"
                >
                    <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M151.217,15.455v6.39a2.435,2.435,0,0,1-2.43,2.44H144.4l-6.83,2.81V15.455a2.433,2.433,0,0,1,2.43-2.43h8.79A2.433,2.433,0,0,1,151.217,15.455Z"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <path
                        id="Path_5"
                        data-name="Path 5"
                        d="M141.769,26.577c.242.585,1.094.775,1.805.775h4.343l6.756,2.564V19.3a2.313,2.313,0,0,0-2.339-2.217"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <line
                        id="Line_1"
                        data-name="Line 1"
                        x2="6.49"
                        transform="translate(141.211 17.479)"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <line
                        id="Line_2"
                        data-name="Line 2"
                        x2="4.707"
                        transform="translate(141.211 20.06)"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Chat;
