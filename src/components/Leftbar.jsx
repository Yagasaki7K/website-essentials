import React from 'react';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import navitems from '../navitems';
import SocialMedia from './SocialMedia'

import TextDetails from './TextDetails'

export function Leftbar(){
    return(
        <>
            <Grid container spacing={2} direction="column" style={{marginTop: '80px'}}>
                {navitems.map((item) => (
                    <Grid item key={item.id}>
                        <TextDetails>
                            <Link href={item.href} passHref={true}>{item.nome}</Link>
                        </TextDetails>
                    </Grid>
                ))}
                <SocialMedia>
                    <hr/>
                    <Link href="/password"><a>Gerador de Password</a></Link>
                    <hr/>
                    <div className="break"/>
                    <Link href="https://discord.gg/CFhzRE6ztp" target="_blank"><a>Discord</a></Link>
                    <div className="break"/>
                    <Link href="https://github.com/Yagasaki7K/website-essentials" target="_blank"><a>Github</a></Link>
                    <div className="break"/>
                    <Link href="https://twitter.com/KalifyInc" target="_blank"><a>Twitter</a></Link>
                    <div className="break"/>
                    <hr/>
                    <i style={{fontSize: '16px'}}>v22.06</i>
                </SocialMedia>
            </Grid>
        </>
    )
}

export default Leftbar