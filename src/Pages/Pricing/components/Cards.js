import React from 'react'
import SingleCard from './SingleCard';

const cards = () => {
    const data = [
        {
            id: 1,
            heading: 'Basic',
            line1: '5 Lakhs',
            line2: 'No unlimited Access!',
            line3: 'No Food',
        },
        {
            id: 2,
            heading: 'Medium',
            line1: '5 Lakhs',
            line2: 'No unlimited Access!',
            line3: 'No Food',
        },
        {
            id: 3,
            heading: 'Premium',
            line1: '5 Lakhs',
            line2: 'No unlimited Access!',
            line3: 'No Food',
        },
    ]
  return (
    <div>
        <h1 className='heading'>Pricing</h1>

<section className="cards">

{
    data.map((item)=>{
        const {id, heading, line1, line2, line3} = item;
        return<>
        <SingleCard
        heading={heading}
        line1={line1}
        line2={line2}
        line3={line3}
        />

        </>
    })
}

</section>

    </div>
  )
}

export default cards