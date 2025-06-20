import CustomButton from "./CustomButton";

export default function Modal({
  isModalOpen,
  onClose,
  onConfirm,
  content,
  title,
  primaryButtonLabel = "Delete",
}) {
  return (
    <div
      className={`w-screen h-screen bg-[#00000079] flex justify-center items-center absolute inset-0 z-2 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-[600px] h-[200px] bg-white rounded p-4 flex flex-col justify-between">
        <div className="text w-full">
          <div className="flex flex-col gap-4 text-black">
            <h1 className="text-lg font-bold">{title}</h1>
            <p>{content}</p>
          </div>
        </div>
        <div className="button w-full flex justify-end items-center gap-4">
          <CustomButton
            className="w-fit px-2 bg-none bg-white !text-black border"
            type="button"
            label="Cancel"
            onClick={onClose}
          />
          <CustomButton
            className="w-fit px-2 bg-none bg-red-500"
            type="button"
            label={primaryButtonLabel}
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
}
