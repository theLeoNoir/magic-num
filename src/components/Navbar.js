export default function Navbar({ toggleModal }) {
    return (
        <nav className='navbar'>
            <button onClick={toggleModal}>&#x2139;</button>
        </nav>
    );
}