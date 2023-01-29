import React from 'react'

const About = ({heading}) => {
  return (
      <>
      <h1 className='heading'>{heading}</h1>
    <section className='about'>
        <img src={require( "../.././../Assets/moonsky.jpg")} alt="" />
        <div className="content">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates impedit facilis facere cum, sunt dolor laudantium blanditiis eligendi quaerat error assumenda ad ipsam, sit adipisci molestias non atque dolorum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel expedita accusantium fuga quasi neque totam beatae veritatis illum laborum provident voluptas, accusamus commodi quia? Fuga doloribus perferendis architecto necessitatibus.</p>
        </div>
    </section>
      </>
  )
}

export default About