import styled from 'styled-components'

const StyledImageUpdater = styled.section`
	display: grid;
	grid-template-columns: 150px repeat(3, 50px);
	grid-template-rows: auto repeat(3, 50px);
		header {
			grid-area: 1 / 1 / 2 / -1;
		}
		.profile-image {
			grid-area: 2 / 1 / 5 / 2;
		}
		img {
			width: 100%;
		}
`

export default StyledImageUpdater