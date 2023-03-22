import React, { useContext } from 'react';
import Link from 'next/link'

import HeaderDetails from './HeaderDetails';
import ImgDetails from './ImgDetails';

import NavItems from './NavItems';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';

export function Header(props) {
    const { colors, title } = useContext(ThemeContext);
    return (
        <HeaderDetails>
            <Link href="/">
                <ImgDetails src="/Logo.png" alt="Web Essentials" />
            </Link>
            <NavItems>
                <p>
                    <Link href="https://twitter.com/KalifyInc" target="_blank">
                        <i className="uil uil-twitter-alt"></i>
                    </Link>
                </p>
                <p>
                    <Link href="https://github.com/Yagasaki7K/website-essentials" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </Link>
                </p>
                <p>
                    <Link href="https://www.paypal.com/donate?business=BGK9ZCFE6G4C8&no_recurring=0&currency_code=BRL" target="_blank">
                        <i className="uil uil-paypal"></i>
                    </Link>
                </p>
                <p>
                    <Link href="/download">
                        <i className="uil uil-download-alt"></i>
                    </Link> |
                </p>
                <span>
                    <Switch onChange={props.toggleTheme} checked={title === 'dark'}
                        checkedIcon={false} uncheckedIcon={false} offHandleColor={colors.switch}
                        onHandleColor={colors.switch} onColor={colors.switchOn}
                    />
                </span>
            </NavItems>
        </HeaderDetails>
    )
}

export default Header
