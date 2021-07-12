import React from 'react';

type Props = {
    size?: number;
    color?: string;
};

const Notification = ({ color, size = 16, ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 16.269 17.894"
            >
                <g
                    id="Group_15"
                    data-name="Group 15"
                    transform="translate(-175.821 -12.615)"
                >
                    <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M191.125,26.335H176.787l.783-1.108a6.189,6.189,0,0,0,1.134-3.571V18.582a5.393,5.393,0,0,1,4.848-5.45,5.249,5.249,0,0,1,5.656,5.233v3.291a6.189,6.189,0,0,0,1.134,3.571Z"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="1"
                    />
                    <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M186.269,27.695a2.313,2.313,0,1,1-4.626,0"
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

export default Notification;
