function NumberInput({ number, setNumber }) {
    const changeHandler = (e) => setNumber(e.target.valueAsNumber);

    return (
        <input type="number" value={number} onChange={changeHandler} />
    )
}

export default NumberInput;