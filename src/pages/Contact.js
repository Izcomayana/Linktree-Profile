import React from 'react'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  
  return (
    <>
      <div className="contact pt-6 w-11/12 mx-auto sm:w-3/5">
        <h1 className='text-4xl font-semibold sm:font-bold'>Contact Me</h1>
        <p className='text-lg my-6 text-gray-500 sm:mb-10'>
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}
