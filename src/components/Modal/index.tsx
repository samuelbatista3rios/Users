import { FiX } from "react-icons/fi";
import ReactModal from "react-modal";
import { UserProps } from "../../@types/user";
import { FormUser } from "../FormUser";

type ModalProps = {
  isOpen: boolean;
  handleOpenModal: () => void;
  user: UserProps;
};

export function Modal({ isOpen, handleOpenModal, user }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleOpenModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button className="react-modal-close" onClick={handleOpenModal}>
        <FiX size={22} />
      </button>
      <FormUser user={user} handleOpenModal={handleOpenModal} />
    </ReactModal>
  );
}
