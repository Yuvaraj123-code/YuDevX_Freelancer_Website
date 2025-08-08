// SignInModal.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Signin from './Signin';

const SignInModal = ({ open, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close sign in">✕</button>
        {/* Pass onClose down so the SignIn page can call it if needed */}
        <Signin onClose={onClose} />
      </div>

      <style>{`
        .modal-overlay{
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          padding: 1rem;
        }
        .modal-dialog{
          width: 100%;
          max-width: 520px;
          max-height: 92vh;
          overflow: auto;
          border-radius: 16px;
          background: transparent; /* SignIn component already has white card */
          position: relative;
        }
        .modal-close{
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255,255,255,0.92);
          border: none;
          font-size: 18px;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          cursor: pointer;
          z-index: 10;
        }
        .modal-close:focus { outline: 2px solid #2563eb; }
        @media (max-width:480px){
          .modal-dialog { max-width: 92vw; }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default SignInModal;