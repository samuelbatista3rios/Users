import styled from "styled-components";

export const CardUserContainer = styled.div`
  background: ${(props) => props.theme["gray-600"]};
  padding: 1rem;
  border-radius: 1rem;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const OptionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;
interface ButtonsProps {
  variant?: "trash" | "edit";
}

export const ButtonContainer = styled.button<ButtonsProps>`
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) =>
    props.variant === "trash" ? props.theme["red-500"] : props.theme.white};

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.2s ease-out;
  }
`;
