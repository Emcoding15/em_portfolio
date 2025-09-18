"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => (
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
                  <p className="text-[var(--foreground)] font-medium">janmic@email.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-[var(--foreground)] font-medium">@janmic</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/janmic"
              target="_blank"
              rel="noopener"
              className="flex-1 bg-gradient-to-r from-[var(--gray)] to-[#0f0f0f] rounded-2xl p-6 border border-[var(--accent)]/20 hover:border-[var(--accent)]/60 transition-all duration-300 text-center group"
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 255, 208, 0.1)" }}
            >
              <svg className="w-8 h-8 text-[var(--accent)] mx-auto mb-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              <p className="text-[var(--foreground)] font-medium">GitHub</p>
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
        >
          <h3 className="text-2xl font-bold text-[var(--accent)] mb-6">Send Message</h3>
          
          <div className="space-y-4">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-[var(--accent)]/20 bg-[#0f0f0f] text-[var(--foreground)] rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all duration-300"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-[var(--accent)]/20 bg-[#0f0f0f] text-[var(--foreground)] rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all duration-300"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full border border-[var(--accent)]/20 bg-[#0f0f0f] text-[var(--foreground)] rounded-xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all duration-300 resize-none"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[var(--accent)] to-blue-400 text-black font-bold rounded-xl px-8 py-4 text-lg transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(0, 255, 208, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  </motion.section>
);

export default ContactSection;
