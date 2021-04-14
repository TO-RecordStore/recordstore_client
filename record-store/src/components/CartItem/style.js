import styled from 'styled-components'

const StyledCartItem = styled.li`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 100px 1fr;
		gap: 2rem;
    padding: 2rem;
    background: ${props => props.className="current-item" ? props.theme.color.black : props.theme.color.accentTwo };

    img {
      grid-row: 1 / 3;
      width: 100%;
    }
		.info {
      display: flex;
      flex-direction: column;
		}
		.controls, .total-price {
			grid-row: 2 / 3;
			grid-column: 2 / 3;
		}
		.controls {
			justify-self: start;
			visibility: ${props => props.className="current-item" ? "visible" : "hidden" };
		}
		.total-price {
			justify-self: end;
            visibility: ${props => props.className="current-item" ? "hidden" : "visible"};
		}
`

export default StyledCartItem;