import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: clamp(50%, 500px, 100%);
  padding: 5%;
  margin: auto;

  .name-group {
    flex-direction: column;
    width: 100%;
  }
  div {
    display: flex;
    margin-bottom: 1rem;

    input {
      font-family: ${({ theme }) => theme.fontFamily.sansSerifMain};
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
    .MuiFormControl-root:first-child {
      margin-right: 0px;
    }

    .MuiFormLabel-root {
      font-family: ${({ theme }) => theme.fontFamily.sansSerifMain};
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.neutralDark};
    }
    .MuiInput-underline:before,
    .MuiInput-underline:after {
      border-bottom: ${({ theme }) =>
        theme.borderWidth.regular + ' solid ' + theme.color.black};
    }
    .MuiFormHelperText-root {
      font-family: ${({ theme }) => theme.fontFamily.sansSerifMain};
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  button {
    margin: 3rem 0 3rem auto;
    display: block;
  }

  small {
    margin-top: 2rem;

    .ultimate-user {
      color: ${({ theme }) => theme.color.accentOne};
      font-weight: bold;
      cursor: pointer;
    }
  }

  a {
    font-weight: bold;
  }
  a:hover {
    color: ${({ theme }) => theme.color.neutralDark};
  }

  @media screen and (min-width: 500px) {
    .name-group {
      flex-direction: row;
      & > div {
        width: 50%;
      }

      .MuiFormControl-root:first-child {
        margin-right: 10px;
      }
    }
  }
`;

export default StyledForm;
