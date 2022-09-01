import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  label {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${(props) => props.theme["gray-900"]};

    input {
      padding: 0.2rem 0.5rem;
      background: ${(props) => props.theme["gray-100"]};
      border: 1px solid ${(props) => props.theme["gray-300"]};
      border-radius: 8px;
      color: ${(props) => props.theme["gray-900"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 0 auto; */
    padding: 0.5rem;
    width: fit-content;
    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};

    text-transform: uppercase;

    &:hover {
      background: ${(props) => props.theme["green-300"]};
      transition: background-color 0.2s ease-in-out;
    }
  }
`;
