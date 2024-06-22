import React, { useState } from 'react';
import Swal from 'sweetalert2';
import contact from '../assets/contact.png';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const data = {
      name,
      email,
      message
    };

    try {
      const response = await fetch('https://portfolio-contact-form-33088-default-rtdb.firebaseio.com/contacts.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setLoader(false);
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been submitted 👍',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(()=>{
        window.location.reload();
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoader(false);
      Swal.fire({
        title: 'Error!',
        text: 'There was a problem submitting your message.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id='contact' className='flex flex-col md:flex-row bg-secondary px-5 pb-10'>
      <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <div className='w-[300px]'>
          <img src={contact} alt="Contact Me " />
        </div>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl border-b-4 border-primary mb-5 w-[180px] font-bold'>Contact Me</h1>
          <form Name="form" onSubmit={handleSubmit} className='flex flex-col w-full max-w-lg'>
            <div className='mb-4'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor="name">Name</label>
              <input
                placeholder="Name"
                value={name}
                className='w-full px-3 py-2 text-black leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor="name">Email</label>
              <input
                placeholder="Email"
                value={email}
                className='w-full px-3 py-2 text-black leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor="name">Message</label>
              <textarea
                placeholder="Message"
                value={message}
                className='w-full px-3 py-2 text-black leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className='flex items-center justify-between'>
              <button
                type="submit"
                className='btn'
                style={{ background: loader ? "#ccc" : "rgb(2, 2, 110)" }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
