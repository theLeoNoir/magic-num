export default function SecondInput({ number2, handleSecondInput }) {
    return <>
        <img src="right.svg" alt="" className="arrow arrow2" name='arrow2' />
        <input type="number"
            name='number2'
            maxLength={5}
            value={number2}
            onChange={handleSecondInput}
            disabled={true} />


    </>
}