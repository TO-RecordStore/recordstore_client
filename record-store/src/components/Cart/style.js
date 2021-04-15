import styled from "styled-components";
import StyledMain from "../LoginPage/style";

const StyledCart = styled(StyledMain)`
  flex-direction: column;

  .current-order {
    display: grid;
    grid-template-columns: ${(props) =>
      props.stackSections ? "1fr" : "repeat(2, 1fr)"};
    grid-template-rows: ${(props) =>
      props.stackSections ? "repeat(2, auto)" : "auto"};
    gap: 1.5rem;

    ul {
      display: grid;
      gap: 1.5rem;
    }
  }

  .summary {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};

    > * {
      margin-top: 3rem;
    }

    .order-total {
      display: flex;
      flex-direction: column;
    }

    img {
      width: 15rem;
    }

	button {
		background: ${({theme}) => theme.color.accentOne};
		color: ${({theme}) => theme.color.white};
		:hover {
			background: ${props => props.theme.color.neutralDark};
		}
	}
  }
`;

export default StyledCart;
