import styled from 'styled-components';

const StyledImageUpdater = styled.section`
  width: clamp(50%, 500px, 100%);
  padding: 5%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 150px repeat(3, 50px);
  grid-template-rows: auto repeat(3, 50px);
  gap: 6px;
  align-content: baseline;
  justify-content: center;

  header {
    grid-area: 1 / 1 / 2 / -1;
  }
  img {
    width: 100%;
    border: ${(props) =>
      props.theme.borderWidth.regular +
      ' solid ' +
      props.theme.color.accentOne};
    border-radius: ${(props) => props.theme.borderRadius.round};
    outline: 0;

    &:focus {
      border: ${(props) =>
        props.theme.borderWidth.bold + ' solid ' + props.theme.color.accentTwo};
    }
  }
  .profile-image {
    grid-area: 2 / 1 / 5 / 2;
  }
`;

export default StyledImageUpdater;
