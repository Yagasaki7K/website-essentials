import React from 'react';
import Link from 'next/link'

import DefaultLayout from '../src/components/DefaultLayout';
import items from '../src/items/utility';
import CardContent from '../src/components/CardContent';
import ContainerDetails from '../src/components/ContainerDetails'

export function Entertainment(){
    return(
        <>
            <DefaultLayout/>
            <ContainerDetails>
                {items.map((item) => (
                    <Link href={item.url} key={item}>
                        <a>
                            <CardContent name={item.name} corporation={item.corporation} 
                            img={item.img}/>
                        </a>
                    </Link>
                ))}
            </ContainerDetails>
        </>
    )
}

export default Entertainment