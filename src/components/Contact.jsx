import { useState } from "react";
import likedinImg from "../assets/linkedin-brands-solid.svg";
import emailjs from "@emailjs/browser"

export const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function getData(event) {
    setForm((prevData)=>({...prevData,[event.target.name]:event.target.value}))
    console.log(form)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await emailjs.send('service_r7qapuo','template_xyw4k3x',
        {
          from_name:form.name,
          to_name:'Abhishek',
          from_email:form.email,
          to_email:'dhallaniaabhishek@gmail.com',
          message:form.message
        },
        'qj4mguiDuwxJOJJYF'
      )
        alert('message sent successfully')
        setForm({
          name: "",
          email: "",
          message: "",
        })
    } catch (error) {
      console.log(error)
      alert("Something went wrong")
    }
  }

  return (
    <div className=" py-20" id="contact">
      <div className="conatiner mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-red-500 to-blue-500 mb-4">
              Lets Talk
            </h3>
            <p>
              I'm always open to discussing web development projects or new
              partnership opportunities.
            </p>
            <div className="mb-4 mt-4">
              <a
                href="mailto:dhallaniaabhishek@gmail.com"
                className="hover:underline"
              >
                dhallaniaabhishek@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <span>
                <a
                  href="https://www.linkedin.com/in/abhishek-dhallania-011b41216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <img className="h-6 inline-block" src={likedinImg} alt="" />{" "}
                  LinkedIn
                </a>
              </span>
            </div>
            <div className="mb-4">
              <span>Uttar Pradesh, India</span>
            </div>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={getData}
                  required
                  placeholder="Enter your name"
                  className="w-full border bg-inherit border-gray-600 p-2 rounded "
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={getData}
                  required
                  placeholder="Enter your email"
                  className="w-full border bg-inherit border-gray-600 p-2 rounded"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  value={form.message}
                  onChange={getData}
                  required
                  className="w-full border bg-inherit
                     border-gray-600 p-2 rounded"
                  name="message"
                  id="message"
                ></textarea>
                <button className="bg-gradient-to-tr from-red-500 to-blue-500 text-white px-8 py-2 rounded">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
