import React from 'react'

const Form = () => {
  return (
    <div>
        <h1 className='heading'>Contact Us</h1>
        <section className="container">
        <form>
            <div className="field">
                <p>Name</p>
                <input type="text" name="" id="" />
            </div>
            <div className="field">
                <p>Email</p>
                <input type="email" name="" id="" />
            </div>
            <div className="field">
                <p>Phone Number</p>
                <input type="tel" name="" id="" />
            </div>

            <div className="form-button">
                <button>Submit</button>
            </div>
        </form>
        </section>
    </div>
  )
}

export default Form