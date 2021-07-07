import React, { ReactNode } from 'react';
import { Theme } from 'schema';

type Props = {
    children: ReactNode;
    themeMode?: Theme;
};

const ThemeProvider = ({ children, themeMode = 'default' }: Props) => {
    return <div className={`theme theme--${themeMode}`}>{children}</div>;
};

export default ThemeProvider;
