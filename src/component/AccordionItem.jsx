import React, { useState } from 'react'
import "./accordion.css"

const AccordionItem = ({ question, answer, num, curOpen, setCurOpen }) => {
  // const [isOpen, setIsOpen] = useState(false) // within component mainting with usestate

  const isOpen = num === curOpen

  function handleClick() {
    // setIsOpen((isOpen) => !isOpen)
    setCurOpen(num)
  }

  return (
    <div>
      <div onClick={handleClick} className='item'>
        <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className='title'>{question}</p>
        <p className='icon'>{isOpen == true ? "-" : "+"}</p>
      </div>
      {isOpen && <div className='text'>{answer}</div>}
    </div>
  )
}

export default AccordionItem