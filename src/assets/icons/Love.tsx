import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Love = ({ color, size = 16, borderColor = '#fff', ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 26 26"
            >
                <g
                    id="Group_11"
                    data-name="Group 11"
                    transform="translate(-453 -320)"
                >
                    <circle
                        id="Ellipse_8"
                        data-name="Ellipse 8"
                        cx="12"
                        cy="12"
                        r="12"
                        transform="translate(454 321)"
                        fill="#ffd54f"
                        stroke={borderColor}
                        stroke-width="2"
                    />
                    <g
                        id="Group_4"
                        data-name="Group 4"
                        transform="translate(454 321)"
                    >
                        <path
                            id="Path_11"
                            data-name="Path 11"
                            d="M19.361,14.316A.749.749,0,0,0,18.75,14H5.25a.751.751,0,0,0-.708,1,7.906,7.906,0,0,0,14.916,0,.751.751,0,0,0-.1-.682Z"
                            fill="#e53935"
                        />
                        <path
                            id="Path_12"
                            data-name="Path 12"
                            d="M17.815,6a2.273,2.273,0,0,0-1.315.414A2.273,2.273,0,0,0,15.185,6,2.125,2.125,0,0,0,13,8.054c0,1.723,2.564,3.551,3.079,3.9a.751.751,0,0,0,.842,0C17.436,11.605,20,9.777,20,8.054A2.125,2.125,0,0,0,17.815,6Z"
                            fill="#e53935"
                        />
                        <path
                            id="Path_13"
                            data-name="Path 13"
                            d="M8.815,6A2.273,2.273,0,0,0,7.5,6.414,2.273,2.273,0,0,0,6.185,6,2.125,2.125,0,0,0,4,8.054c0,1.723,2.564,3.551,3.079,3.9a.751.751,0,0,0,.842,0C8.436,11.605,11,9.777,11,8.054A2.125,2.125,0,0,0,8.815,6Z"
                            fill="#e53935"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Love;
