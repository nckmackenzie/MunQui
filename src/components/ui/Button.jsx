export default function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="cursor-pointer px-6 py-3 border-none rounded-sm bg-red-800 text-white uppercase transition-all hover:bg-red-600"
    >
      {children}
    </button>
  );
}
