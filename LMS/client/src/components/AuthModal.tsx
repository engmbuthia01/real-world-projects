import { XIcon } from "lucide-react";

const AuthModal = () => {
  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <img src="/logo.svg" alt="logo" className="h-8 w-full mb-10 mt-6" />
        <button>
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
