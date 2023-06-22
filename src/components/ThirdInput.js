export default function ThirdInput({ number3 }) {
    return <>

        <input
            name='number3'
            type="number"
            maxLength={5}
            value={number3}
            disabled={true} />
    </>
}
