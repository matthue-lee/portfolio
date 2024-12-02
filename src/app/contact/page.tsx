'use client'; // Required for client-side rendering
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
  
    // Use type guard to narrow down to HTMLInputElement for "checked"
    if (type === 'checkbox' && 'checked' in e.target) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked, // Explicit cast to HTMLInputElement
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  

  // Handle form submission with proper typing
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          topic: '',
          message: '',
          newsletter: false,
        });
      } else {
        setStatusMessage('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Contact Form */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-red-600">Get in touch</h1>
          <p className="mt-4 text-gray-600">Get in touch and let me know what I can do for you</p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-100 border-0 border-b-2 border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none text-gray-800 placeholder-gray-400"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-100 border-0 border-b-2 border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none text-gray-800 placeholder-gray-400"
                  placeholder="janedoe@gmail.com"
                  required
                />
              </div>
            </div>

            {/* Topic */}
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-100 border-0 border-b-2 border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none text-gray-800 placeholder-gray-400"
                required
              >
                <option value="">Select a topic</option>
                <option>Web Development</option>
                <option>Business Consulting</option>
                <option>Software Engineering</option>
                <option>Modelling</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-100 border-0 border-b-2 border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none text-gray-800 placeholder-gray-400"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>

            {/* Checkbox */}
            {/* <div className="flex items-start">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                checked={formData.newsletter}
                onChange={handleChange}
                className="h-4 w-4 text-red-600 border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                Please sign me up for the Physica newsletter
              </label>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
          </form>

          {/* Status Message */}
          {statusMessage && (
            <p className="mt-4 text-center text-sm text-gray-700">{statusMessage}</p>
          )}
        </div>

        {/* Right Column: Illustration */}
        <div className="hidden lg:block">
          <img
            src="/images/main3.jpeg" // Replace with your image path
            alt="Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Footer Links */}
      {/* <div className="mt-12 text-center lg:text-left">
        <p className="text-sm text-gray-500">
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>{' '}
          |{' '}
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>{' '}
          |{' '}
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
        <p className="mt-4 text-xs text-gray-400">© 2023 All Rights Reserved</p>
      </div> */}
    </section>
  );
}
