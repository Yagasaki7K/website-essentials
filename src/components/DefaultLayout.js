import React from 'react';
import Header from './header';
import Leftbar from './Leftbar';

import ContainerDetails from './ContainerDetails'
import ContentDetails from './ContentDetails';

import { ThemeProvider } from 'styled-components';

import light from '../../styles/theme/light';
import dark from '../../styles/theme/dark';

const DefaultLayout = (props) => {
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