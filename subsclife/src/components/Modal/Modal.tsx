import { css as cssStyle, RuleSet } from "styled-components";
import { PropsWithChildren } from "react";

import globalStore from "@/store/global";

import * as Icons from "@/assets/icons";
import * as Styled from "./Modal.styled";

interface ModalProps extends PropsWithChildren {
  size?: "full" | "fit-content";
  css?: RuleSet<object>;
}

const Modal = ({ size = "full", css = cssStyle``, children }: ModalProps) => {
  const { isModalOpen, changeModal, toggleModal } = globalStore();

  return (
    isModalOpen && (
      <Styled.Container $size={size} $css={css}>
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
