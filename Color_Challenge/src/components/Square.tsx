const Square = ({ colorValue }: { colorValue: any }) => {
  return (
    <main>
      <div
        className="Square"
        style={{
          backgroundColor: `${colorValue}`,
        }}
      >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
      </div>
    </main>
  );
};

export default Square;
