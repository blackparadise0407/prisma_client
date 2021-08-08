import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Sad = ({ color, size = 16, borderColor = '#ffffff', ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 26 26"
            >
                <g
                    id="Group_10"
                    data-name="Group 10"
                    transform="translate(-385 -320)"
                >
                    <g id="Group_6" data-name="Group 6">
                        <circle
                            id="Ellipse_4"
                            data-name="Ellipse 4"
                            cx="12"
                            cy="12"
                            r="12"
                            transform="translate(386 321)"
                            fill="#ffd54f"
                            stroke={borderColor}
                            strokeWidth="2"
                        />
                        <g
                            id="Group_2"
                            data-name="Group 2"
                            transform="translate(386 321)"
                        >
                            <circle
                                id="Ellipse_5"
                                data-name="Ellipse 5"
                                cx="2"
                                cy="2"
                                r="2"
                                transform="translate(5 7)"
                                fill="#6d4c41"
                            />
                            <circle
                                id="Ellipse_6"
                                data-name="Ellipse 6"
                                cx="2"
                                cy="2"
                                r="2"
                                transform="translate(15 7)"
                                fill="#6d4c41"
                            />
                            <path
                                id="Path_4"
                                data-name="Path 4"
                                d="M14.75,19.639a.744.744,0,0,1-.53-.22,3.214,3.214,0,0,0-4.439,0A.75.75,0,1,1,8.72,18.358a4.639,4.639,0,0,1,6.56,0,.75.75,0,0,1-.53,1.28Z"
                                fill="#6d4c41"
                            />
                        </g>
                    </g>
                    <path
                        id="Path_5"
                        data-name="Path 5"
                        d="M18.617,12.074a.779.779,0,0,0-1.234,0A7.435,7.435,0,0,0,16,15a2,2,0,1,0,4,0,7.435,7.435,0,0,0-1.383-2.926Z"
                        transform="translate(386 321)"
                        fill="#00bcd4"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Sad;
