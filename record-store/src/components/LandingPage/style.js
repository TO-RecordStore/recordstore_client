import styled from 'styled-components';

const StyledLP = styled.main`
  position: relative;
  height: calc(100vh - 7rem);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .illustrations-credits-container {
    position: absolute;
    bottom: 2rem;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .credits-author {
    padding: 1rem 2rem;
    font-weight: 600;
    background-color: ${({ theme }) => theme.color.neutral};
    color: ${({ theme }) => theme.color.black};
    border-radius: 25px;
  }
`;

export default StyledLP;
