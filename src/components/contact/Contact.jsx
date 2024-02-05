import React from 'react'
import Back from '../common/back/Back'
import "./contact.css"

const Contact = () => {
  const data = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8131373.45906449!2d-45.275609849999995!3d-5.6555463999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1707161133408!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
        <Back title='Contact Us'/>
        <section className='contact padding'>
            <div className='container shadow flexSB'>
                <div className='left row'>
                    <iframe src={data}></iframe>
                </div>
                <div className='right row'>
                  <h1>Contact Us</h1>
                  <p>Ullam sit neque atque vitae molestias placeat?</p>
                  <div className='items grid2'>
                    <div className='box'>
                      <h4>ADRESS: </h4>
                      <p>198 west 21st street, suite 751 New York NY 10016</p>
                    </div>
                    <div className='box'>
                      <h4>Email: </h4>
                      <p>maykevasco@gmail.com</p>
                    </div>
                    <div className='box'>
                      <h4>FONE: </h4>
                      <p>+55 083 98436-0176</p>
                    </div>
                  </div>
                  <form action=''>
                    <div className='flexSB'>
                      <input type='text' placeholder='Name' />
                      <input type='email' placeholder='Email' />
                    </div>
                    <input type='text' placeholder='Subject' />
                    <textarea cols='30' rows='10'>
                      Create a message here...
                    </textarea>
                    <button className='primary-btn'>SEND MESSAGE</button>
                  </form>
                  <h3>Follow us here</h3>
                  <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact