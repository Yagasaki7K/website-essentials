import React from 'react';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import navitems from '../navitems';
import SocialMedia from './SocialMedia'

import TextDetails from './TextDetails'

export function Leftbar(){
    return(
        <>
            <Grid container spacing={2} direction="column">
                {navitems.map((item) => (
                    <Grid item key={item.id}>
                        <TextDetails>
                            <Link href={item.href} passHref={true}>{item.nome}</Link>
                        </TextDetails>
                    </Grid>
                ))}
                <SocialMedia>
                    <hr/>
                    <Link href="/password"><a>Password Tool</a></Link>
                    <hr/>
                    <Link href="https://github.com/Yagasaki7K/website-essentials" target="_blank"><a>Github</a></Link>
                    <Link href="https://twitter.com/KalifyInc" target="_blank"><a>Twitter</a></Link>
                </SocialMedia>
            </Grid>
        </>
    )
}

export default Leftbar