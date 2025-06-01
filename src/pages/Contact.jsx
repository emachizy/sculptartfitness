import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-10">
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Join SculptArtFitness
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Ready to transform your body and mind? Reach out and let’s get
          started.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
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
      </motion.div>
    </div>
  );
}

export default Contact;
