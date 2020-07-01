import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

import { Switcher } from './style';

const ThemeSwitcher = ({ toggleTheme, isDark }) => {
    return(
        <Switcher onClick={() => toggleTheme()}>
            {
                isDark ? 
                <BsSun size={20} /> :
                <BsMoon size={20} />
            }
        </Switcher>
    );
}

export default ThemeSwitcher;