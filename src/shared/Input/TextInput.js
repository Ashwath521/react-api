export default function TextInput({
  label,
  type,
  placeholder,
  id,
  value,
  onChange,
  name,
}) {
  return (
    <div className="flex mb-2 mt-8">
      <label
        htmlFor={id}
        className="mr-16 basis-24 font-sans text-xl text-left"
      >
        {label}
      </label>
      <input
        className="w-80 h-12 border-2 border-gray-200 shadow-md text-center text-gray-700 focus:border-none rounded-md "
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
