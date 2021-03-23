import styled from "styled-components";

const StyledHeader = styled.header`
	background-color: ${props => props.theme.color.neutral};
	font-size: ${props => props.theme.fontSize.large};
	display: flex;
	padding: 1rem;
	align-items: center;
	
	a {
        color: ${props => props.theme.color.black};
	}
	a:first-of-type {
		flex-grow: 1;
	}

	img {
		width: 50px;
		height: 50px;
        border: ${props => props.theme.borderWidth.regular + " solid " + props.theme.color.accentOne};
        border-radius: ${props => props.theme.borderRadius.round}
	}
`;

export default StyledHeader;
