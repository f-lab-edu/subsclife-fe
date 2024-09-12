import { PropsWithChildren } from "react";

import globalStore from "@/store/global";

import * as Icons from "@/assets/icons";
import * as Styled from "./Modal.styled";

const Modal = ({ children }: PropsWithChildren) => {
  const { isModalOpen, changeModal, toggleModal } = globalStore();

  return (
    isModalOpen && (
      <Styled.Container>
        <Icons.CloseCircleIcon
          onClick={() => {
            toggleModal(false);
            changeModal(() => <></>);
          }}
        />
        {children}
      </Styled.Container>
    )
  );
};

export default Modal;