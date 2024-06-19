import React from 'react';
import contact from '../assets/contact.png'

const ContactUs = () => {
 

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Data Received"))
      .catch((error) => alert(error));
  };

  return (
    <section id='contact' className='flex flex-col md:flex-row bg-secondary px-5 pb-10'>
      <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <div className='w-[300px]'>
          <img src={contact} alt="Contact Us" />
        </div>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl border-b-4 border-primary mb-5 w-[180px] font-bold'>Contact Us</h1>
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit}
            className='flex flex-col w-full max-w-lg'
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className='mb-4'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className='w-full px-3 py-2 text-black leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline' 
                required 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className='w-full px-3 py-2 text-black leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline' 
                required 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                className='w-full px-3 py-2 text-black leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline' 
                required 
              />
            </div>
            <div className='flex items-center justify-between'>
              <button 
                type="submit" 
                className='btn'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
