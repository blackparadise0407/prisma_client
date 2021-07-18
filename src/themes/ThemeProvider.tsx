import { SupportedTheme } from 'features/preferences/preferencesSlice';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    themeMode?: SupportedTheme;
};

const ThemeProvider = ({ children, themeMode = 'default' }: Props) => {
    return <div className={`theme theme--${themeMode}`}>{children}</div>;
};

export default ThemeProvider;
