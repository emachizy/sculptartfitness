import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { mobileHeroImg } from "../assets/assets";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ren6j8i",
        "template_ejgfe8j",
        formRef.current,
        "_N7JNtueDJBZFx2Y8"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);

          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send. Try again later.");
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <section>
      <div className="relative h-[30vh] md:h-[60vh] w-full">
        {/* Background Image Slider */}

        <img
          src={mobileHeroImg[0]} // Assuming you want the first image for the background
          alt="contact image"
          className="object-cover w-full h-full"
        />

        {/* Glassmorphism Overlay Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-20 flex items-center justify-center px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/30 shadow-xl rounded-2xl px-6 py-10 text-center text-white max-w-md w-full">
            <p className="text-lg md:text-xl mb-6 font-bold">Contact Us</p>
          </div>
        </motion.div>
      </div>
      <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-10">
        <motion.div
          className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">
            Join SculptArtFitness
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Ready to transform your body and mind? Reach out and let’s get
            started.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Map */}
            <div className="max-w-4xl mx-auto p-4">
              <div className="flex flex-col justify-center items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12343.217281462234!2d3.328819343924709!3d6.64199708727885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEstate%2C%2030B%20Georgius%20Cole%2C%20Off%20College%20Rd%2C%20Ogba%2C%20Lagos!5e1!3m2!1sen!2sng!4v1748910372439!5m2!1sen!2sng"
                  // width="400"
                  // height="300"
                  // style="border:0;"
                  className="w-full h-[300px]"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="">
                      <h3 className="font-bold text-xl pt-5">Address 🏢</h3>
                      <p className="text-gray-500 pt-1.5">
                        Estate, 30B Georgius Cole, Off College Rd, Ogba, Lagos
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl pt-3">Phone 📞</h3>

                      <p className="text-gray-500 pt-1.5"> 0704 134 9431</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm border-t text-center mt-5 md:hidden">
                    Opening Hours: 5:30am - 9:00pm
                  </p>
                </div>
              </div>
            </div>
            {/* Form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6 border-t md:border-none pt-20 md:pt-0 mt-10 md:mt-0"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
                  placeholder="Tell us about your goals or ask a question..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold w-full"
              >
                {loading ? "Sending..." : "Submit"}
              </motion.button>
            </form>
          </div>
          <p className="text-gray-500 text-sm border-t text-center mt-5 hidden md:block">
            Opening Hours: 5:30am - 9:00pm
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
