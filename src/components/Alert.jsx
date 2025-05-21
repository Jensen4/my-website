import { BsX } from "react-icons/bs";

function Alert({ text, onClose }) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-sans text-[25px]">{text}</p>
      <BsX className="h-6 w-6" onClick={onClose} />
    </div>
  );
}

export default Alert;
