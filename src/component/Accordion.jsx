import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
import "./accordion.css"

let faqs = [{
  question: "What is React",
  answer: "React is Front end library"
}, {
  question: "What is JavaScript",
  answer: "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions"
}, {
  question: "What is AWS",
  answer: "AWS stands for Amazon Web Services. It is a comprehensive and widely-used cloud computing platform offered by Amazon.com"
}]


const Accordion = () => {
  const [curOpen, setCurOpen] = useState(null)

  return (
    <div className='accordion'>
      {
        faqs.map((item, num) => <AccordionItem key={num} num={num} curOpen={curOpen} setCurOpen={setCurOpen} question={item.question} answer={item.answer} />)
      }
    </div>
  )
}

export default Accordion