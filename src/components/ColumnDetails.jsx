import styled from 'styled-components';

const ColumnDetails = styled.div`
    width: 13rem;
	height: 200px;
    margin-top: 1.6rem;

	justify-content: center;
	display: flex;

	color: ${props => props.theme.colors.fontcolor};
`;

export default ColumnDetails