import styled from 'styled-components';

let purple = '#5e3bd1'

export const NavItems = styled.div`
    display: flex;
    justify-content: end;
    position: absolute;
    right: 50px;
    top: -0.5rem;
    width: 23rem;
    
    p {
        font-size: 2rem;
        font-weight: 400;
        margin: 28px 10px 0 0;

        a {
            color: ${props => props.theme.colors.essentials};
        }

        a:hover {
            transition: 2s;
	        color: ${purple};
        }
    }

    span {
            color: ${props => props.theme.colors.fontcolor};
            margin-top: 40px;
    }
    `;

export default NavItems