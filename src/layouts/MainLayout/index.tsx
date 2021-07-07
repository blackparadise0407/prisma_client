import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

type Props = {
    children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return <div>O lala {children}</div>;
};

export default MainLayout;
