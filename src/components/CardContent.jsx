import React from 'react';
import Image from 'next/image'

import ColumnDetails from './ColumnDetails'
import CardDetails from './CardDetails'
import TitleDetails from './TitleDetails.js'
import SubTitleDetails from '../components/SubTitleDetails'

export const CardContent = (props) => {
    return (
        <ColumnDetails>
            <CardDetails href={props.url} target="_blank">
                <Image src={props.img} width={64} height={64} alt={props.name}/>
                <TitleDetails>{props.name}</TitleDetails>
                <SubTitleDetails>{props.corporation}</SubTitleDetails>
            </CardDetails>
        </ColumnDetails>
    )
}

export default CardContent;