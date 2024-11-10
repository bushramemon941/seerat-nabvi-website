"use client"
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name && email && message) {
      setSuccessMessage(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccessMessage(false), 3000); // hide message after 3 seconds
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center p-4 ">
      <h2 className="text-2xl font-bold mb-4 uppercase underline">Contact Us</h2>
      <form onSubmit={handleSubmit} id="contact-form" className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        <label htmlFor="name" className="block font-semibold">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="email" className="block font-semibold">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="message" className="block font-semibold">Message:</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button type="submit" className="w-full bg-blue-400 text-white p-2 rounded-lg hover:bg-pink-400 transition duration-200">
          Send Message
        </button>
      </form>
      {successMessage && <p className="mt-4 text-green-500" id="success-message">Thank you for reaching out to us!</p>}
    </section>
  );
};

export default ContactForm;
