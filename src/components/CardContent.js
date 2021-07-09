import React from 'react';
/* eslint-disable @next/next/no-img-element */

import ColumnDetails from './ColumnDetails'
import CardDetails from './CardDetails'
import TitleDetails from './TitleDetails.js'
import SubTitleDetails from '../components/SubTitleDetails'

export const CardContent = (props) => {
    return (
        <ColumnDetails>
            <CardDetails href={props.url} target="_blank">
                <img src={props.img} alt={props.name}/>
                <TitleDetails>{props.name}</TitleDetails>
                <SubTitleDetails>{props.corporation}</SubTitleDetails>
            </CardDetails>
        </ColumnDetails>
    )
}

export default CardContent;