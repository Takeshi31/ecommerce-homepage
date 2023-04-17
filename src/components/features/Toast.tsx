import { FC, useState } from 'react';
import './toast.scss';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: FC<ToastProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div className={`toast ${visible ? 'show' : ''}`}>
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
