import { ReactNode } from "react";
import { create } from "zustand";

interface GlobalStoreType {
  // header: ReactNode;
  // footer: ReactNode;
  // changeHeader: (el: ReactNode) => void;
  // changeFooter: (el: ReactNode) => void;
  isModalOpen: boolean;
  modal: () => ReactNode;
  toggleModal: (toggle: boolean) => void;
  changeModal: (modal: () => ReactNode) => void;
}

const globalStore = create<GlobalStoreType>((set) => ({
  // header: <></>,
  // footer: <></>,
  // changeHeader: (header) => set({ header }),
  // changeFooter: (footer) => set({ footer }),
  isModalOpen: false,
  modal: () => <></>,
  toggleModal: (toggle) => set({ isModalOpen: toggle }),
  changeModal: (modal) => set({ modal }),
}));

export default globalStore;
