function Button({ name, onClick }) {
  return (
    <>
      <button
        type="button"
        className="bg-blue-400 rounded cursor-pointer mx-3 w-20 h-10"
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
}

export default Button;
