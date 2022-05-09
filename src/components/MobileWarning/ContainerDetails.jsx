import styled from 'styled-components';

export const ContainerDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    color: ${props => props.theme.colors.essentials}
`;

export default ContainerDetails