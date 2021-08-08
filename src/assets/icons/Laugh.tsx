import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Laugh = ({ color, size = 16, borderColor = '#fff', ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 26 26"
            >
                <g
                    id="Group_7"
                    data-name="Group 7"
                    transform="translate(-418 -320)"
                >
                    <circle
                        id="Ellipse_7"
                        data-name="Ellipse 7"
                        cx="12"
                        cy="12"
                        r="12"
                        transform="translate(419 321)"
                        fill="#ffd54f"
                        stroke={borderColor}
                        strokeWidth="2"
                    />
                    <path
                        id="Path_6"
                        data-name="Path 6"
                        d="M19.537,7.723a.751.751,0,0,0-.643.211L7.934,18.894a.75.75,0,0,0,.181,1.194A8.86,8.86,0,0,0,20.088,8.115a.749.749,0,0,0-.551-.392Z"
                        transform="translate(419 321)"
                        fill="#e53935"
                    />
                    <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M6.61,15.639c-.518.749-2.2,3.291-2.2,4.569a2.821,2.821,0,0,0,5.642,0c0-1.279-1.687-3.82-2.2-4.569a.749.749,0,0,0-1.234,0Z"
                        transform="translate(419 321)"
                        fill="#00bcd4"
                    />
                    <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M20.208,4.406c-1.278,0-3.82,1.687-4.569,2.2a.749.749,0,0,0,0,1.234c.748.518,3.29,2.2,4.569,2.2a2.821,2.821,0,0,0,0-5.642Z"
                        transform="translate(419 321)"
                        fill="#00bcd4"
                    />
                    <g
                        id="Group_3"
                        data-name="Group 3"
                        transform="translate(419 321)"
                    >
                        <path
                            id="Path_9"
                            data-name="Path 9"
                            d="M7.581,15.005a.75.75,0,0,1-1.269-.66l.344-1.95-1.95.344a.749.749,0,1,1-.261-1.476l3.005-.53a.75.75,0,0,1,.869.869l-.53,3.005a.749.749,0,0,1-.208.4Z"
                            fill="#6d4c41"
                        />
                        <path
                            id="Path_10"
                            data-name="Path 10"
                            d="M15.005,7.581a.74.74,0,0,1-.4.207L11.6,8.319a.75.75,0,0,1-.869-.869l.53-3.005a.749.749,0,1,1,1.476.261l-.344,1.95,1.95-.344a.751.751,0,0,1,.662,1.269Z"
                            fill="#6d4c41"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Laugh;
