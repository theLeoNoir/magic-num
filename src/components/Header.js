export default function Header({ isLoading, number5 }) {
    return (
        <header>
            {number5 ? (<h1 className='header-text'>The <span>END</span></h1>) : isLoading ? (<h1 className='header-text'>
                Calculating<span className="loader" id="loader"></span>
            </h1>) : <h1 className='header-text'>
                Enter a five-digit <span>number</span>
            </h1>}
        </header>
    );
}