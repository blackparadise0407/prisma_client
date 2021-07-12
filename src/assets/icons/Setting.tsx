import React from 'react';

type Props = {
    size?: number;
    color?: string;
};

const Setting = ({ color, size = 16, ...rest }: Props) => {
    return (
        <div {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 18.076 18.076"
            >
                <g
                    id="Group_14"
                    data-name="Group 14"
                    transform="translate(-155.802 -12.525)"
                >
                    <g id="Group_2" data-name="Group 2">
                        <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M158.785,17.931l-.361-.711a1.35,1.35,0,0,1,1.753-1.844l.729.324a1.636,1.636,0,0,0,2.22-.987l.249-.758a1.35,1.35,0,0,1,2.543-.064l.286.744a1.637,1.637,0,0,0,2.268.873l.711-.361a1.35,1.35,0,0,1,1.844,1.753l-.324.729a1.636,1.636,0,0,0,.987,2.22l.758.249a1.35,1.35,0,0,1,.064,2.543l-.744.286a1.637,1.637,0,0,0-.873,2.268l.361.712A1.35,1.35,0,0,1,169.5,27.75l-.729-.324a1.636,1.636,0,0,0-2.22.987l-.249.758a1.35,1.35,0,0,1-2.543.065l-.286-.745a1.637,1.637,0,0,0-2.268-.873l-.712.361a1.35,1.35,0,0,1-1.843-1.753l.324-.729a1.636,1.636,0,0,0-.987-2.22l-.758-.249a1.35,1.35,0,0,1-.065-2.543l.745-.286A1.637,1.637,0,0,0,158.785,17.931Z"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="1"
                        />
                        <circle
                            id="Ellipse_1"
                            data-name="Ellipse 1"
                            cx="2.134"
                            cy="2.134"
                            r="2.134"
                            transform="translate(162.706 19.429)"
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

export default Setting;
