import styled from "styled-components";

export const UserListContainer = styled.div`
  max-width: 75rem;
  margin: 8rem auto;
  display: flex;
  gap: 1.5rem;
  flex: 1;
  flex-wrap: wrap;
`;

export const ButtonShowListUser = styled.button`
  padding: 1rem 1.5rem;
  font-size: 2rem;
  border: 0;
  color: ${(props) => props.theme["gray-100"]};
  background: ${(props) => props.theme["gray-900"]};
  text-transform: uppercase;
  border-radius: 8px;

  &:hover {
    background: ${(props) => props.theme["gray-600"]};
    filter: brightness(0.7);
    transition: all 0.2s ease-in-out;
  }
`;
