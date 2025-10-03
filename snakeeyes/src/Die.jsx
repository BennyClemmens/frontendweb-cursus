export default function Die({ eye, onRoll }){
  return (
    <button
      className="snakeEye"
      onClick={onRoll}
      disabled={eye === 1}
    >
      {eye}
    </button>
  );
}