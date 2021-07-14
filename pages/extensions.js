import React from 'react';
import Link from 'next/link'
import DefaultLayout from '../src/components/DefaultLayout';
import items from '../src/items/extensions';
import CardContent from '../src/components/CardContent';
import ContainerDetails from '../src/components/ContainerDetails'

export function Extensions(){
    return(
        <>
            <DefaultLayout/>
            <ContainerDetails>
                {items.map((item) => (
                    <Link href={item.url} key={item}>
                        <a target="_blank">
                            <CardContent name={item.name} corporation={item.corporation} 
                            img={item.img} url={item.url}/>
                        </a>
                    </Link>    
                ))}
            </ContainerDetails>
        </>
    )
}

export default Extensiosns;