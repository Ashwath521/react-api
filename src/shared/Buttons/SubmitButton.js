export default function SubmitButton({ type, label }) {
  return (
    <div className="flex items-center justify-center mt-4 mb-2">
      <button
        type={type}
        className="p-1  w-28 text-center rounded-md bg-orange-500 text-white font-normal text-xl"
      >
        {label}
      </button>
    </div>
  );
}
