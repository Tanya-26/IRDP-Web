import { useEffect } from "react";

const MyModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>STAY TUNED</h2>
        <p>Do you agree to accept all cookies from our website?</p>
        <button className="modal-btn" onClick={closeModal}>
          Accept It
        </button>
      </div>
    </>
  );
};
export default MyModal;
