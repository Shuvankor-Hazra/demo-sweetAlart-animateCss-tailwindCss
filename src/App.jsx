import './App.css'
import { MdOutlineTouchApp } from "react-icons/md";
import { MdOutlineStart } from "react-icons/md";
import 'animate.css';
import { useRef } from 'react';

function App() {

  const textRef = useRef();

  const handleAnimation = () => {
    console.log(textRef.current);
    textRef.current.classList.add('animate__animated');
    textRef.current.classList.add('animate__heartBeat');
    
    setTimeout(()=>{
      textRef.current.classList.remove('animate__animated');
      textRef.current.classList.remove('animate__heartBeat');

    }, 1000)
  }

  return (
    <div >
      <div ref={textRef}>
        <h1 className='py-5 text-5xl font-bold underline'>Demo SweetAlert AnimateCSS TailwindCSS</h1>
      </div>
      <button onClick={handleAnimation} className='btn btn-success btn-lg text-base-300 text-2xl font-bold mt-20  animate__animated hover:animate__bounce'> <MdOutlineTouchApp className='text-4xl' /> Touch-Me <MdOutlineStart className='text-4xl' /> </button>
    </div>
  )
}

export default App
