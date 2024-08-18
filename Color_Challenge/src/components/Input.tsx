const Input = ({ colorValue , setColorValue } : { colorValue: any , setColorValue: any }) => {
  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text"
          required
          autoFocus
          onChange={(e) => setColorValue(e.target.value)}
          value={colorValue}
          placeholder="Add Color Value"
        />
      </form>
    </main>
  )
}

export default Input
