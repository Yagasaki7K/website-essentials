import styled from 'styled-components';

export const SocialMedia = styled.div`
    display:block;
    font-family: Nunito;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 25px;
    cursor: pointer;
    margin-left: 0.5rem;
	color: #8989df;

    hr {
        width: 8rem;
        margin: 1rem 0 1rem 0;
    }

    a::after {
	content: "";
	display: block;
	width: 1%;
	height: 1px;
    }

    a:hover::after {
	width: 10%;
	height: 1px;
	background: #8989df;
	transition: width 175ms ease-in-out;
    }

	:hover {
		transition: 0.5s;
		color: #8989df;
	}

    .break {
        flex-basis: 100%;
        height: 0;
        margin: 0.5rem 0 1rem 0;
    }
`;

export default SocialMedia;