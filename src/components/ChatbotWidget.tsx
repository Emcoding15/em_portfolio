import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import MarkdownMessage from './MarkdownMessage';

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  // Close modal on ESC key
  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
  const newMessages: { role: 'user' | 'bot'; text: string }[] = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setLoading(true);
    try {
      // Call semantic search API and display LLM answer, sending full conversation history
      const res = await fetch('/api/semantic-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      const llmAnswer = data.llmAnswer || 'No answer generated.';
      setMessages((msgs) => [
        ...msgs,
        { role: 'bot', text: llmAnswer }
      ]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { role: 'bot', text: 'Error: Could not get response.' }]);
    }
    setInput('');
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 bg-[var(--accent)] hover:bg-blue-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl font-bold transition"
        onClick={() => setOpen(true)}
        aria-label="Open chatbot"
        whileHover={{}}
      >
        <span className="sr-only">Open chatbot</span>
        <motion.img
          src="/chatbot_icon.png"
          alt="Chatbot Icon"
          className="w-10 h-10"
          whileHover={{
            x: [0, -8, 8, -6, 6, -4, 4, 0],
            rotate: [0, -8, 8, -6, 6, -4, 4, 0],
            transition: { duration: 0.5 }
          }}
        />
      </motion.button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl h-[40rem] bg-[#18181b] shadow-2xl rounded-2xl border border-gray-800 flex flex-col animate-fade-in relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-800 flex items-center gap-3 rounded-t-2xl bg-[#23232a]">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/chatbot_icon.png" alt="Chatbot Icon" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-bold text-lg text-white">Em&apos;s Bot</span>
              <button
                className="ml-auto text-gray-400 hover:text-white text-2xl font-bold"
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
              >
                ×
              </button>
            </div>
            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#18181b]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'user' ? (
                    <span className="bg-[var(--accent)] text-white px-5 py-3 rounded-2xl max-w-lg break-words shadow-lg text-base">
                      {msg.text}
                    </span>
                  ) : (
                    <MarkdownMessage
                      content={msg.text}
                      className="bg-[#23232a] border border-gray-800 text-gray-100 px-5 py-3 rounded-2xl max-w-lg break-words shadow-lg text-base"
                    />
                  )}
                </div>
              ))}
              {loading && <div className="text-gray-400 text-base">Bot is typing...</div>}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <div className="p-4 border-t border-gray-800 bg-[#23232a] rounded-b-2xl flex gap-3">
              <input
                className="flex-1 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-base text-gray-100 bg-[#18181b] shadow"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                disabled={loading}
                style={{ minWidth: 0 }}
              />
              <button
                className="bg-[var(--accent)] hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg text-base font-semibold shadow"
                onClick={sendMessage}
                disabled={loading}
                style={{ minWidth: 0 }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
