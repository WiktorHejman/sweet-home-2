import { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-forest-950/90 backdrop-blur-sm" />
      <div
        className="relative z-10 inline-block"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
