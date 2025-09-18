"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string|null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setResult("Message sent successfully!");
        setName(""); setEmail(""); setMessage("");
      } else {
        setResult(data.message || "Failed to send message.");
      }
    } catch (err) {
      setResult("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      className="section flex-col relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.0 }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
    >
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">
          Let&apos;s <span className="text-[var(--accent)]">Connect</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-blue-400 mx-auto mb-8 rounded-full" />
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let&apos;s discuss your next project.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="bg-gradient-to-br from-[var(--gray)] to-[#0f0f0f] rounded-2xl p-8 border border-[var(--accent)]/20">
            <h3 className="text-2xl font-bold text-[var(--accent)] mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-[var(--foreground)] font-medium">jmguerra015@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.72z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-[var(--foreground)] font-medium">john-michael-guerra-228353341</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="https://www.linkedin.com/in/john-michael-guerra-228353341/"
              target="_blank"
              rel="noopener"
              className="flex-1 bg-gradient-to-r from-[var(--gray)] to-[#0f0f0f] rounded-2xl p-6 border border-[var(--accent)]/20 hover:border-[var(--accent)]/60 transition-all duration-300 text-center group"
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 255, 208, 0.1)" }}
            >
              <svg className="w-8 h-8 text-[var(--accent)] mx-auto mb-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.72z" />
              </svg>
              <p className="text-[var(--foreground)] font-medium">LinkedIn</p>
            </motion.a>
            
            <motion.a
              href="mailto:janmic@email.com"
              className="flex-1 bg-gradient-to-r from-[var(--gray)] to-[#0f0f0f] rounded-2xl p-6 border border-[var(--accent)]/20 hover:border-[var(--accent)]/60 transition-all duration-300 text-center group"
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 255, 208, 0.1)" }}
            >
              <svg className="w-8 h-8 text-[var(--accent)] mx-auto mb-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
              </svg>
              <p className="text-[var(--foreground)] font-medium">Email</p>
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          className="bg-gradient-to-br from-[var(--gray)] to-[#0f0f0f] rounded-2xl p-8 border border-[var(--accent)]/20 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-bold text-[var(--accent)] mb-6">Send Message</h3>
          <div className="space-y-4">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-[var(--accent)]/20 bg-[#0f0f0f] text-[var(--foreground)] rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all duration-300"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-[var(--accent)]/20 bg-[#0f0f0f] text-[var(--foreground)] rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all duration-300"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full border border-[var(--accent)]/20 bg-[#0f0f0f] text-[var(--foreground)] rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all duration-300 resize-none"
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[var(--accent)] to-blue-400 text-black font-bold rounded-xl px-8 py-4 text-lg transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(0, 255, 208, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
          {result && (
            <div className={`mt-4 text-center font-semibold ${result.includes("success") ? "text-green-400" : "text-red-400"}`}>{result}</div>
          )}
        </motion.form>
      </div>
    </div>
  </motion.section>
  );
};

export default ContactSection;
