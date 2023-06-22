export default function Navbar({ toggleModal }) {
    return (
        <nav className='navbar'>
            <button onClick={toggleModal} className="info-btn">&#x2139;</button>
        </nav>
    );
}