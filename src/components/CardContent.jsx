import React from 'react';
import Image from 'next/image'

import ColumnDetails from './ColumnDetails'
import CardDetails from './CardDetails'
import TitleDetails from './TitleDetails'
import SubTitleDetails from '../components/SubTitleDetails'

export const CardContent = (props) => {
    return (
        <ColumnDetails>
            <CardDetails href={props.url} target="_blank">
                <Image src={props.img} width={64} height={64} alt={props.name}/>
                <TitleDetails>{props.name}</TitleDetails>
                <SubTitleDetails>{props.corporation}</SubTitleDetails>
                {props?.browser ? <Image src={props?.browser} width={20} height={20} alt={props.name}/> : null }
            </CardDetails>
        </ColumnDetails>
    )
}

export default CardContent;