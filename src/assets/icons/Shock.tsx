import React from 'react';

type Props = {
    size?: number;
    color?: string;
    borderColor?: string;
    [key: string]: string | number;
};

const Chat = ({ color, size = 16, borderColor = '#fff', ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 26 26"
            >
                <g
                    id="Group_9"
                    data-name="Group 9"
                    transform="translate(-487 -320)"
                >
                    <circle
                        id="Ellipse_9"
                        data-name="Ellipse 9"
                        cx="12"
                        cy="12"
                        r="12"
                        transform="translate(488 321)"
                        fill="#ffd54f"
                        stroke={borderColor}
                        stroke-width="2"
                    />
                    <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="2"
                        cy="2"
                        r="2"
                        transform="translate(493 328)"
                        fill="#6d4c41"
                    />
                    <circle
                        id="Ellipse_11"
                        data-name="Ellipse 11"
                        cx="2"
                        cy="2"
                        r="2"
                        transform="translate(503 328)"
                        fill="#6d4c41"
                    />
                    <ellipse
                        id="Ellipse_12"
                        data-name="Ellipse 12"
                        cx="3"
                        cy="3.45"
                        rx="3"
                        ry="3.45"
                        transform="translate(497 335.05)"
                        fill="#e53935"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Chat;
