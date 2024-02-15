import React from 'react'
import styled from 'styled-components';

const MobileWarning = () => {
    return (
        <ContainerDetails>Essentials é exclusivo para uso do Desktop!</ContainerDetails>
    )
}

export default MobileWarning

export const ContainerDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    color: var(--purple);
`;