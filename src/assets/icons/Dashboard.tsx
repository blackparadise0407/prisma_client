import React from 'react';

type Props = {
    size?: number;
    color?: string;
    [key: string]: string | number;
};

const Dashboard = ({ color, size = 16, ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 18.17 18.17"
            >
                <g
                    id="Group_12"
                    data-name="Group 12"
                    transform="translate(-113.508 -22.588)"
                >
                    <g
                        id="Group_1"
                        data-name="Group 1"
                        transform="translate(-2 10.063)"
                    >
                        <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M120.988,18.285v11.91h-3.02a1.957,1.957,0,0,1-1.96-1.96v-9.95Z"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M133.178,18.285v9.95a1.948,1.948,0,0,1-1.95,1.96H128.2V18.285Z"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <rect
                            id="Rectangle_1"
                            data-name="Rectangle 1"
                            width="7.21"
                            height="11.91"
                            transform="translate(120.988 18.285)"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_3"
                            data-name="Path 3"
                            d="M133.178,14.985v3.3h-17.17v-3.3a1.957,1.957,0,0,1,1.96-1.96h13.26A1.948,1.948,0,0,1,133.178,14.985Z"
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

export default Dashboard;
