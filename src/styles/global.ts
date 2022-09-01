import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

&:focus {
  outline: 0;
}

html {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }

  @media(max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-300"]};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

button{
  cursor: pointer;
}

.react-modal-overlay {
  background: rgba(0, 0, 0, 0.15);
  
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  }

.react-modal-content {
  width: 100%;
  max-width: 576px;
  background: ${(props) => props.theme.white};
  padding: 3rem;
  position: relative;
  border-radius: 8px;
  }
    
.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;

  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme["red-700"]};

  cursor: pointer;

  &:hover {
      filter: brightness(0.8);
      color: ${(props) => props.theme["red-500"]};
  }
  }
`;
