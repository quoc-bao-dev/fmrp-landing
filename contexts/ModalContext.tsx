"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext<{
    isAnyModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
} | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [openModals, setOpenModals] = useState(0);

    const openModal = () => setOpenModals((prev) => prev + 1);
    const closeModal = () => setOpenModals((prev) => Math.max(prev - 1, 0));

    useEffect(() => {
        if (openModals > 0) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [openModals]);

    return (
        <ModalContext.Provider value={{ isAnyModalOpen: openModals > 0, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};
