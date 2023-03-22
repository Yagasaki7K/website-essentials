import React from 'react';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import navitems from '../navitems';
import SocialMedia from './SocialMedia'
import styled from 'styled-components';

import TextDetails from './TextDetails'

export function Leftbar() {
    return (
        <LeftBar>
            <Grid container spacing={2} direction="column" style={{ marginTop: '80px' }}>
                {navitems.map((item) => (
                    <Grid item key={item.id}>
                        <TextDetails>
                            <Link href={item.href} passHref={true}>{item.nome}</Link>
                        </TextDetails>
                    </Grid>
                ))}
                <SocialMedia>
                    <hr />
                    <Link href="/password">Gerador de Password</Link>
                    <hr />
                    <div className="break" />
                    <Link href="https://twitter.com/KalifyInc" target="_blank">Twitter</Link>
                    <div className="break" />
                    <hr />
                    <i style={{ fontSize: '16px' }}>v23.03</i>
                </SocialMedia>
            </Grid>
        </LeftBar>
    )
}

const LeftBar = styled.div`
    font-family: 'Poppins', sans-serif;
`

export default Leftbar
