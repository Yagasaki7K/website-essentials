import styled from 'styled-components';

let black = 'rgba(0, 0, 0, 0.25)';

export const Card = styled.div`
    width: 150px;
	height: 200px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	background-color: ${props => props.theme.colors.bgheader};
	box-shadow: 1px 3px 9px ${black};
	border-radius: 12px;

	cursor: pointer;

	transition: 0.5s;
	transition: 0.3s;
`;

export default Card