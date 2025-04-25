import React,{useContext} from 'react';
import { Star, Phone, Mail } from 'lucide-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios'; // Add axios
import MainContext from '../context/main';
import hero from "../assets/design.jfif"
const Contact = () => {
  const {SERVER_URL} = useContext(MainContext)
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    type: Yup.string().required('Please select a type'),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    type: '',
    message: '',
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(`${SERVER_URL}/api/contact/submit`, values);
      console.log('Contact form response:', response.data);
      toast.success('Your message has been sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50 font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            We're here to assist you on your Quran learning journey. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Form */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-serif font-bold mb-2 text-emerald-900">Ask a Question</h2>
              <div className="w-16 h-1 bg-amber-500 mb-6"></div>
              <p className="text-gray-600 mb-8">
              </p>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    {/* Form fields remain unchanged */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-1/2">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Your Name"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      <div className="w-full md:w-1/2">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="text"
                          id="phone"
                          name="phone"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Your Phone"
                        />
                        <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-1/2">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Your Email"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      <div className="w-full md:w-1/2">
                        <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
                          Type <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="select"
                          id="type"
                          name="type"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="" disabled>Select Type</option>
                          <option value="General Information">General Information</option>
                          <option value="Technical Error Reporting">Technical Error Reporting</option>
                          <option value="Complaint">Complaint</option>
                        </Field>
                        <ErrorMessage name="type" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        rows="5"
                        placeholder="Your Message"
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <div className="bg-indigo-900 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="text-lg font-semibold">Call Us 24/7</h3>
                      <p>
                        <a href="tel:+919821518350" className="text-amber-400 hover:text-amber-300 transition-colors">
                        +91 9821518350
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="text-lg font-semibold">Mail Us</h3>
                      <p>
                        <a href="mailto:digital.rhombus.technical.ca@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                        digital.rhombus.technical.ca@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;