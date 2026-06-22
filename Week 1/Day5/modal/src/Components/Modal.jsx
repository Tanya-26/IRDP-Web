import { useState } from 'react';
import MyModal from './ShowModal';
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button className='modal-btn' onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && <MyModal closeModal={closeModal} />}
    </div>
  );
};

export default Modal;