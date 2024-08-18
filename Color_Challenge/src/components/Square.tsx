const Square = ({ colorValue, hex }: { colorValue: any; hex: any }) => {
  return (
    <main>
      <div
        className="Square"
        style={{
          backgroundColor: `${colorValue}`,
          color: colorValue === "black" ? "white" : "black"
        }}
      >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hex ? hex : null}</p>
      </div>
    </main>
  );
};

export default Square;
