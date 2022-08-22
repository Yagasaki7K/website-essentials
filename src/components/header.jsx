import React, {useContext} from 'react';
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
                <a>
                    <ImgDetails src="/Logo.png" alt="Web Essentials"/>
                </a>
            </Link>
            <NavItems>
                <p>
                    <Link href="https://www.paypal.com/donate?business=BGK9ZCFE6G4C8&no_recurring=0&currency_code=BRL">
                    <a target="_blank"><i class="uil uil-bitcoin-circle"></i></a></Link>
                </p>
                <p>
                    <Link href="https://twitter.com/KalifyInc">
                    <a target="_blank"><i class="uil uil-twitter"></i></a></Link>
                </p>
                <p>
                    <Link href="https://github.com/Yagasaki7K/website-essentials">
                    <a target="_blank"><i class="uil uil-github"></i></a></Link>
                </p>
                <p>
                    <Link href="https://discord.gg/CFhzRE6ztp">
                    <a target="_blank"><i class="uil uil-comment-question"></i></a></Link> |
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