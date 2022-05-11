import styled from 'styled-components';

export const TextDetails = styled.div`
    font-family: Nunito;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 25px;
    cursor: pointer;
	margin-top: 2.5px;
	color: ${props => props.theme.colors.fontcolor};

	:hover {
		transition: 0.5s;
		color: #8989df;
	}
`;

export default TextDetails;