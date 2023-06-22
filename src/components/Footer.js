export default function Footer({ number1, showFinalResult }) {
    const isValidNumber = /^[1-8]\d*(\d)(?!\1)\d{2}$/.test(number1);

    const calculatedValue = showFinalResult && isValidNumber ? (
        <span>
            <span className='calculated-sum'>Calculated sum:</span>{' '}
            <span className='sum gradient-border'>
                {(parseInt(number1) + 199998).toLocaleString()}
            </span>
        </span>
    ) : null;

    return <h2>{number1 === '' ? '' : calculatedValue}</h2>;
}
