export default function FirstInput({ number1, handleFirstInput }) {
  return (

    <>
      <img src="right.svg" alt="" className="arrow arrow1" name='arrow1' />
      <input
        name='number1'
        type="number"
        maxLength={5}
        onChange={handleFirstInput}
        value={number1}
        autoFocus
        disabled={false}



      />

    </>

  );
}