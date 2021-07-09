import styled from 'styled-components';

export const TitleDetails = styled.div`
    font-family: Roboto;
	font-style: normal;
	font-weight: normal;

	width: 100px;
	font-size: 18px;
	line-height: 21px;

	color: ${props => props.theme.colors.fontcolor};

	text-align: center;
`;

export default TitleDetails