import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import FirstInput from './components/FirstInput'
import SecondInput from './components/SecondInput'
import ThirdInput from './components/ThirdInput';
import FourthInput from './components/FourthInput';
import FifthInput from './components/FifthInput';
import Reset from './components/Reset';
import Footer from './components/Footer';
export default function App() {

  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [number3, setNumber3] = useState('')
  const [number4, setNumber4] = useState('')
  const [number5, setNumber5] = useState('')
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [buttonText, setButtonText] = useState('Start')

  function handleFirstInput(e) {
    const input1 = document.querySelector('input[name="number1"]');
    const input2 = document.querySelector('input[name="number2"]');
    const arrow1 = document.querySelector('img[name="arrow1"]');
    const arrow2 = document.querySelector('img[name="arrow2"]');
    let value = e.target.value;
    value = value.slice(0, 5);
    setNumber1(value);
    if (value.length === 5) {
      if (!/^[1-8]\d*(\d)(?!\1)\d{2}$/.test(value)) {
        alert('Please enter a valid number');
        setNumber1('')
        input1.focus();
        return;
      } else {
        setIsLoading(true)
        setTimeout(() => {
          setShowResult(true)
          input2.disabled = false;
          input2.focus();
          input1.disabled = true;
          arrow1.style.visibility = 'hidden';
          arrow2.style.visibility = 'visible'
          setIsLoading(false)

        }, 4520);
      }
    }
  }
  function handleSecondInput(e) {
    const input2 = document.querySelector('input[name="number2"]');
    const input4 = document.querySelector('input[name="number4"]');
    let value = e.target.value;
    value = value.slice(0, 5);
    setNumber2(value);
    if (value.length === 5) {
      if (!/^[1-8]\d*(\d)(?!\1)\d{2}$/.test(value)) {
        alert('Please enter a valid number')
        setNumber2('')
        input2.focus();
        return;
      } else {
        let num = 99999 - parseInt(value)
        setIsLoading(true)
        setTimeout(() => {
          input2.disabled = true
          input4.disabled = false
          input4.focus()
          setNumber3(num)
          document.querySelector('img[name="arrow2"]').style.visibility = 'hidden'
          document.querySelector('img[name="arrow3"]').style.visibility = 'visible'
          setIsLoading(false)

        }, 4000)

      }
    }


  }
  function handleFourthInput(e) {
    const input4 = document.querySelector('input[name="number4"]');
    let value = e.target.value;
    value = value.slice(0, 5);
    setNumber4(value);

    if (value.length === 5) {
      if (!/^[1-8]\d*(\d)(?!\1)\d{2}$/.test(value)) {
        setNumber4('');
        alert('Please enter a valid number');
        input4.focus();
        return;
      } else {
        setShowResult(true)
        setIsLoading(true)
        let num = 99999 - parseInt(value);
        setTimeout(() => {
          setNumber5(num);
          input4.disabled = true;
          document.querySelector('img[name="arrow3"]').style.visibility = 'hidden'
          setIsLoading(false)
        }, 4000);
      }
    }
  }
  function handleReset() {
    setNumber1('')
    setNumber2('')
    setNumber3('')
    setNumber4('')
    setNumber5('')
    setShowResult(false)
    setIsLoading(false)
    document.querySelector('input[name="number1"]').disabled = false
    document.querySelector('input[name="number2"]').disabled = false
    document.querySelector('input[name="number3"]').disabled = false
    document.querySelector('input[name="number4"]').disabled = false
    document.querySelector('input[name="number5"]').disabled = false
    document.querySelector('input[name="number1"]').focus()
    document.querySelector('img[name="arrow1"]').style.visibility = 'visible'
    document.querySelector('img[name="arrow2"]').style.visibility = 'hidden'
    document.querySelector('img[name="arrow3"]').style.visibility = 'hidden'
  }

  function toggleModal() {
    setShowModal((prevShowModal) => !prevShowModal);
    setButtonText('Start' ? 'Close' : 'Start');
  }

  return (
    <>
      {showModal ? <div className='modal'>
        <h1>Welcome to the Magic Number Game! Follow these instructions to play:</h1>
        <ol className='list'>
          <li> Enter a five-digit number starting with a digit between 1 and 8. The other four digits can be any number, but they can't be the same as each other.</li>
          <li>The program will magically calculate the sum of the next numbers you enter.</li>
          <li>Enter the next number.</li>
          <li>The program will generate and show another number.</li>
          <li>Repeat steps 3 and 4 for a certain number of iterations.</li>
          <li>Enjoy the game and see how the numbers unfold!</li>
        </ol>
        <button onClick={toggleModal}>{buttonText}</button>
      </div> :
        <div className='container'>
          <Header isLoading={isLoading} number5={number5} />
          <Navbar toggleModal={toggleModal} />
          <FirstInput
            number1={number1}
            handleFirstInput={handleFirstInput}
          />

          <SecondInput number2={number2}

            handleSecondInput={handleSecondInput} />
          <ThirdInput number3={number3}
          />

          <FourthInput handleFourthInput={handleFourthInput}
            number4={number4}
          />
          <FifthInput number5={number5}
          />
          {number1 && <Reset handleReset={handleReset} />}
          <Footer
            showFinalResult={showResult}
            number1={number1} />
        </div>}
    </>
  );
}


















