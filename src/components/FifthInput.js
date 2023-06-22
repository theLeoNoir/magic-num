export default function FifthInput({ number5 }) {
    return <>

        <input
            name='number5'
            type="number"
            maxLength={5}
            value={number5}
            disabled={true} />
    </>
}