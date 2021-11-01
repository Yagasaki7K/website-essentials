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
                    <Link href="https://discord.gg/nyTRNSV"><a>Discord</a></Link>
                    <div className="break"/>
                    <Link href="https://github.com/ApertureLaboratory/webessentials"><a>Github</a></Link>
                    <div className="break"/>
                    <Link href="https://twitter.com/Yagasaki7K"><a>Twitter</a></Link>
                </SocialMedia>
            </Grid>
        </>
    )
}

export default Leftbar