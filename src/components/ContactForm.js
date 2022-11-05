import React from 'react'
import '../App.css';
import { useState } from 'react';

export default function ContactForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    checkbox: ""
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]:value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    setIsSubmit(true);
    setFormValues(initialValues);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "Please enter your first name!";
    }
    if (!values.lastName) {
      errors.lastName = "Please enter your last name!";
    }
    if (!values.email) {
      errors.email = "Please enter your email!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Please enter a message!";
    } 
    return errors;
  }

  const handleClick = () => {
    setIsSubmit(false);
  }

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success-modal top-0 bg-black left-0 flex justify-center opacity-90 h-screen w-screen absolute items-center">
          <div className='text-white flex flex-col'>
            <div>
              <span className='text-4xl font-bold text-green-500'>Message Sent</span>
            </div>
            <div className='mt-8'>
              <button onClick={handleClick} className="bg-red-600 rounded-full font-semibold mr-4 px-5 py-3 text-2xl hover:bg-red-400 transtion duration-300">CLOSE</button>
              <button className='bg-lime-500 rounded-full font-semibold mr-4 px-5 py-3 text-2xl hover:bg-lime-300 transtion duration-300'>
                <a href="/">Go Back</a>
              </button>
            </div>
          </div>
        </div>
      ) : (
      <form onSubmit={handleSubmit} className="mb-20">
        <div className="names sm:flex sm:justify-between">
          <div className="sm:w-[45%] firstname flex flex-col mb-7">
            <label className='text-base font-medium mb-0.5'>First name</label>
            <input
              className='px-2 py-2 rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-[#84CAFF] focus:text-black'
              id='first_name'
              name='firstName'
              placeholder='Enter your first name'
              value={formValues.firstName}
              onChange={handleChange}
              type="text" />
              <p className='text-red-600 mt-2 font-medium'>{ formErrors.firstName }</p>
          </div>

          <div className="sm:w-[45%] lastname flex flex-col mb-7">
            <label className='text-base font-medium mb-0.5'>Last name</label>
            <input
              className='px-2 py-2 rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-[#84CAFF] focus:text-black'
              id='last_name'
              name='lastName'
              placeholder='Enter your last name'
              // required
              type="text"
              // value={lastName}
              // onChange={event => setLastName(event.target.value)}
              value={formValues.lastName}
              onChange={handleChange} />
              <p className='text-red-600 mt-2 font-medium'>{ formErrors.lastName }</p>
          </div>
        </div>

        <div className="email flex flex-col mb-7">
          <label className='text-base font-medium mb-0.5'>Email</label>
          <input
            className='px-2 py-2 rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-[#84CAFF] focus:text-black'
            id='email'
            name='email'
            placeholder='yourname@email.com'
            type="text"
            value={formValues.email}
            onChange={handleChange} />
            <p className='text-red-600 mt-2 font-medium'>{ formErrors.email }</p>
        </div>

        <div className="message flex flex-col mb-7">
          <label className='text-base font-medium mb-0.5'>Send a message</label>
          <input
            className='pt-1 px-2 pb-20 rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-[#84CAFF] focus:text-black'
            id='message'
            name='message'
            placeholder="Send me a message and I'll reply you as soon as possible..."
            type="text"
            value={formValues.message}
            onChange={handleChange} />
            <p className='text-red-600 mt-2 font-medium'>{ formErrors.message }</p>
        </div>

        <div className="aggreement-checkbox flex">
          <input
            className="mt-1 mr-2 rounded-lg border border-gray-300 focus:ring-blue-500 outline-none  focus:text-black"
            required
            type="checkbox"
            value={formValues.checkbox}
            onChange={handleChange} />
          <p className='text-base text-gray-500'>
            You agree to providing your data to Techkid who may contact you.
          </p>
        </div>

        <button 
          className='cursor-pointer text-white border-0 rounded-lg bg-[#175CD3] hover:bg-[#1570EF] py-3 transition outline-none focus:border-2 focus:border-[#84CAFF] focus:text-black font-medium w-full mt-5 disabled:cursor-not-allowed disabled:opacity-25' 
          id='btn__submit'
          disabled={!formValues.firstName || !formValues.lastName}
          // disabled={initialValues}
        >Send message</button>
      </form>)}
    </>
  )
}
