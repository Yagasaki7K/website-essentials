import React from 'react';
import Leftbar from './Leftbar';

import ContainerDetails from './ContainerDetails'
import ContentDetails from './ContentDetails';

const DefaultLayout = () => {
    return (
        <>
            <ContainerDetails>
                <ContentDetails>
                    <Leftbar />
                </ContentDetails>
            </ContainerDetails>
        </>
    )
}

export default DefaultLayout;