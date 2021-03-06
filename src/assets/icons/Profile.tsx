import React from 'react';

type Props = {
    size?: number;
    color?: string;
    [key: string]: string | number;
};

const Profile = ({ color, size = 16, ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 18.175 18.175"
            >
                <g
                    id="Group_10"
                    data-name="Group 10"
                    transform="translate(-68.081 -12.557)"
                >
                    <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="8.588"
                        cy="8.588"
                        r="8.588"
                        transform="translate(68.581 13.057)"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <circle
                        id="Ellipse_4"
                        data-name="Ellipse 4"
                        cx="2.636"
                        cy="2.636"
                        r="2.636"
                        transform="translate(74.533 15.29)"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <g id="Group_4" data-name="Group 4">
                        <path
                            id="Path_15"
                            data-name="Path 15"
                            d="M82.211,26.77V25.365a2.784,2.784,0,0,0-2.784-2.784H74.909a2.785,2.785,0,0,0-2.784,2.784V26.77"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_16"
                            data-name="Path 16"
                            d="M82.211,26.77"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_17"
                            data-name="Path 17"
                            d="M72.125,26.77"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_18"
                            data-name="Path 18"
                            d="M72.125,26.77"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_19"
                            data-name="Path 19"
                            d="M82.211,26.77"
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

export default Profile;
