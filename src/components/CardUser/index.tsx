import { useCallback, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { UserProps } from "../../@types/user";
import { deleteUserAction } from "../../store/actions";
import { Modal } from "../Modal";
import {
  ButtonContainer,
  CardUserContainer,
  OptionButtonsContainer,
} from "./styles";

type Props = {
  user: UserProps;
};

export function CardUser({ user }: Props) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const date = useSelector((state) => state);

  function handleOpenModal() {
    setIsOpen((state) => !state);
  }

  const handleDeleteUser = useCallback(
    (user: UserProps) => {
      console.log("user will be delected", user);
      dispatch(deleteUserAction(user));
    },
    [dispatch]
  );
  console.log(date);
  return (
    <CardUserContainer>
      <OptionButtonsContainer>
        <ButtonContainer
          variant="trash"
          type="button"
          onClick={() => handleDeleteUser(user)}
        >
          <FiTrash2 />
        </ButtonContainer>
        <ButtonContainer onClick={handleOpenModal}>
          <FiEdit2 />
        </ButtonContainer>
      </OptionButtonsContainer>
      <ul>
        <li>{user.name.lastname + " " + user.name.firstname}</li>
        <li>{user.phone}</li>
        <li>{user.email}</li>
        <li>{user.address.city}</li>
      </ul>
      <Modal user={user} isOpen={isOpen} handleOpenModal={handleOpenModal} />
    </CardUserContainer>
  );
}
