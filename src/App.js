import { ABC } from './d';
import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-testid="modal"
      style={{
        position: "fixed",
        top: "30%",
        left: "30%",
        width: "300px",
        padding: "20px",
        backgroundColor: "white",
        border: "1px solid black",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <p>This is a modal</p>
      <button onClick={onClose} data-testid="close-button">
        Close
      </button>
    </div>
  );
};

export const ModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} data-testid="open-button">
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
