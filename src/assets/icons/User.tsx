import React from 'react';

type Props = {
    size?: number;
    color?: string;
    [key: string]: string | number;
};

const User = ({ color, size = 16, ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 15.749 17.29"
            >
                <g
                    id="Group_11"
                    data-name="Group 11"
                    transform="translate(-93.964 -12.668)"
                >
                    <circle
                        id="Ellipse_3"
                        data-name="Ellipse 3"
                        cx="3.854"
                        cy="3.854"
                        r="3.854"
                        transform="translate(97.985 13.168)"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <g id="Group_3" data-name="Group 3">
                        <path
                            id="Path_10"
                            data-name="Path 10"
                            d="M109.213,29.958V27.905a4.071,4.071,0,0,0-4.071-4.071H98.535a4.071,4.071,0,0,0-4.071,4.071v2.053"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_11"
                            data-name="Path 11"
                            d="M109.213,29.958"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_12"
                            data-name="Path 12"
                            d="M94.464,29.958"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_13"
                            data-name="Path 13"
                            d="M94.464,29.958"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_14"
                            data-name="Path 14"
                            d="M109.213,29.958"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default User;
