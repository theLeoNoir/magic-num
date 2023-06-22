export default function FourthInput({ handleFourthInput, number4 }) {
  return <>
    <img src="right.svg" alt="" className="arrow arrow3" name='arrow3' />
    <input
      name='number4'
      type="number"
      maxLength={5}
      onChange={handleFourthInput}
      disabled={true}
      value={number4} />

  </>
}