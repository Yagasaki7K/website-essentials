import React from 'react';
import Link from 'next/link'
import DefaultLayout from '../src/components/DefaultLayout';
import items from '../src/items/extension';
import CardContent from '../src/components/CardContent';
import ContainerDetails from '../src/components/ContainerDetails'

export function Extension() {
    return (
        <>
            <DefaultLayout />
            <ContainerDetails>
                {items.map((item) => (
                    <Link href={item.url} key={item} target="_blank">
                        <CardContent name={item.name} corporation={item.corporation}
                            img={item.img} browser={item.browser} />
                    </Link>
                ))}
            </ContainerDetails>
        </>
    )
}

export default Extension