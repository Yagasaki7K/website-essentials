import styled from 'styled-components';

let black = 'rgba(0, 0, 0, 0.25)';

export const HeaderDetails = styled.div`
    position: fixed;
    height: 90px;
    width: 100%;
    left: 0px;
    top: 0px;

    background: ${props => props.theme.colors.bgheader};
    box-shadow: 0px 2px 23px ${black};
    z-index: 100;

    img {
        position: relative;
        width: 280px;
        left: 50px;
        top: 20px;
    }

`;

export default HeaderDetails