import { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"
function Contact(){
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .send(
            'service_4p2cdoo', // Replace with your EmailJS service ID
            'template_xqdqg1o', // Replace with your EmailJS template ID
            formData,
            'l5zkLrbCvQL1cuFPr' // Replace with your EmailJS public key
          )
          .then(
            (result) => {
              alert('Message sent successfully!');
              setFormData({ username: '', email: '', message: '' });
            },
            (error) => {
              alert('Failed to send message. Please try again later.');
            }
          );
      };
    
      return (
        <form onSubmit={handleSubmit} className=" mt-10 flex flex-col items-center p-6">
          <h2 className="text-4xl mb-4">Contact Me</h2>
          <input
            id='name'
            type="text"
            name="username"
            placeholder="Your Name"
            value={formData.username}
            onChange={handleChange}
            className="mb-4 p-2 border rounded w-full max-w-md"
            required
          />
          <input
            id='email'
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 p-2 border rounded w-full max-w-md"
            required
          />
          <textarea
            id='message'
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="mb-4 p-2 border rounded w-full max-w-md"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      );
}
export default Contact