import React from 'react';
import Link from 'next/link'
import DefaultLayout from '../src/components/DefaultLayout';
import items from '../src/items/development';
import CardContent from '../src/components/CardContent';
import ContainerDetails from '../src/components/ContainerDetails'

export function Development() {
    return (
        <>
            <DefaultLayout />
            <ContainerDetails>
                {items.map((item) => (
                    <Link href={item.url} key={item} target="_blank">
                        <CardContent name={item.name} corporation={item.corporation} img={item.img} />
                    </Link>
                ))}
            </ContainerDetails>
        </>
    )
}

export default Development