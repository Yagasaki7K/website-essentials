import styled from 'styled-components';

export const SubTitleDetails = styled.div`
    font-family: Roboto;
	font-style: italic;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;

	color: ${props => props.theme.colors.fontcolor};

	text-align: center;
`;

export default SubTitleDetails;