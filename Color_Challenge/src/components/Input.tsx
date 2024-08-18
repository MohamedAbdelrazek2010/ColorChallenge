import colorNames  from "colornames"

const Input = ({
  colorValue,
  setColorValue,
  setHex,
}: {
  colorValue: any;
  setColorValue: any;
  setHex: any;
}) => {
  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          required
          autoFocus
          onChange={(e) => {
            setColorValue(e.target.value)
            setHex(colorNames(e.target.value))
          }}
          value={colorValue}
          placeholder="Add Color Value"
        />
      </form>
    </main>
  );
};

export default Input;
