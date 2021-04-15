import styled from "styled-components";

const StyledButton = styled.button`
	padding: .5rem 1rem;
	font-family: inherit;
	font-size: ${props => props.theme.fontSize.medium};
	font-weight: 700;
	border: none;
	border-radius: ${props => props.theme.borderRadius.rounded};
	background-color: none;
    transition: .3s;
	cursor: pointer;

	:hover {
		background: ${props => props.theme.color.neutralDark};
		color: ${props => props.theme.color.white};
	}
`;

export default StyledButton;
