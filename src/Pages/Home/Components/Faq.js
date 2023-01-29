import React, { useState } from 'react'

const Faq = () => {

    const data = [
        {
            question : "Question 1?",
        answers: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolore, inventore fugiat tempora dignissimos expedita illo sequi eos libero minus, suscipit quia vero ipsa blanditiis! Dignissimos, sequi qui."
        },
        {
            question : "Question 2?",
        answers: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolore, inventore fugiat tempora dignissimos expedita illo sequi eos libero minus, suscipit quia vero ipsa blanditiis! Dignissimos, sequi qui."
        },
        {
            question : "Question 3?",
        answers: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolore, inventore fugiat tempora dignissimos expedita illo sequi eos libero minus, suscipit quia vero ipsa blanditiis! Dignissimos, sequi qui."
        },
        {
            question : "Question 4?",
        answers: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolore, inventore fugiat tempora dignissimos expedita illo sequi eos libero minus, suscipit quia vero ipsa blanditiis! Dignissimos, sequi qui."
        },
        {
            question : "Question 5?",
        answers: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolore, inventore fugiat tempora dignissimos expedita illo sequi eos libero minus, suscipit quia vero ipsa blanditiis! Dignissimos, sequi qui."
        }
    ];

    const[selected, setSelected] = useState(null);


    const handleSelect = (i)=>{
        if (selected ===i) {
            return setSelected(null)
        }
        setSelected(i);
    }
  return (
    <div >
        <h1 className='heading'>FAQs</h1>

        <section className="faq">
            <div className="item">
            {
                data.map((item, i)=>{
                    return(
                        <div className='wrapper' key={i} onClick={()=>{
                            handleSelect(i)
                        }}>
                            <div className='question' >
                                <h3>{item.question}</h3>
                                <img src={require('../../../Assets/down-arrow.png')} alt="" className={selected===i ? 'reverse':""}/>
                            </div>

                            <div className={selected ===i ? 'answers show' : 'answers'}>
                                <p>{item.answers}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    </div>
  )
}

export default Faq