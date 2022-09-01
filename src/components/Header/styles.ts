import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 2rem;
    }
  }
`;
