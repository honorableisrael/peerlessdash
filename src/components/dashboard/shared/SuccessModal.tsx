import React from "react";
import { motion } from "framer-motion";

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white p-6 rounded-lg w-[300px] shadow-xl text-center"
      >
        <h2 className="text-xl font-bold text-green-600">Success!</h2>
        <p className="text-gray-600 mt-2">{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
          onClick={onClose}
        >
          OK
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessModal;
