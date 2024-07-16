export default function Button({ onClick, style, text }) {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
}
