import React from 'react';
import DefaultLayout from '../src/components/defaultLayout';
import items from '../src/items/system';
import CardContent from '../src/components/CardContent';
import ContainerDetails from '../src/components/ContainerDetails'

export function System(){
    return(
        <>
            <DefaultLayout/>
            <ContainerDetails>
                {items.map((item) => (
                    <CardContent key={item} name={item.name} corporation={item.corporation} 
                    img={item.img} url={item.url}/>
                ))}
            </ContainerDetails>
        </>
    )
}

export default System