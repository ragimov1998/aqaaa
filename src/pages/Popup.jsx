import React, { useState } from 'react';
import Modal from 'react-modal';

function MyComponent() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Modal Aç</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Pop-up İçeriği"
      >
        <h1>Pop-up İçeriği</h1>
        <button onClick={closeModal}>Kapat</button>
      </Modal>
    </div>
  );
}
