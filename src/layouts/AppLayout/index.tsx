import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
    children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
    return (
        <div className="layout">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default AppLayout;
