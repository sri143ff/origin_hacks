export default function Input({ placeholder, onChange }) {
  return (
    <input
      className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}