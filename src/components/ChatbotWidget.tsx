import React, { useState } from 'react';
import MarkdownMessage from './MarkdownMessage';

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setLoading(true);
    try {
      // Call semantic search API and display LLM answer
      const res = await fetch('/api/semantic-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
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
      <button
        className="fixed bottom-8 right-8 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl font-bold transition"
        onClick={() => setOpen(true)}
        aria-label="Open chatbot"
      >
        💬
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="w-150 h-150 bg-white shadow-2xl rounded-xl border border-gray-200 flex flex-col animate-fade-in relative">
            <div className="p-4 border-b border-gray-100 font-bold text-lg text-gray-800 rounded-t-xl bg-gray-50 flex justify-between items-center">
              <span>Em's Bot</span>
              <button
                className="text-gray-400 hover:text-gray-700 text-xl font-bold ml-2"
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
              >
                ×
              </button>
            </div>
            <div className="flex-1 p-2 overflow-y-auto space-y-2">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'user' ? (
                    <span className="bg-blue-500 text-white px-3 py-2 rounded-2xl max-w-xs break-words shadow">
                      {msg.text}
                    </span>
                  ) : (
                    <MarkdownMessage
                      content={msg.text}
                      className="bg-gray-200 text-gray-800 px-3 py-2 rounded-2xl max-w-xs break-words shadow"
                    />
                  )}
                </div>
              ))}
              {loading && <div className="text-gray-400 text-sm">Bot is typing...</div>}
            </div>
            <div className="p-2 border-t border-gray-100 bg-gray-50 rounded-b-xl flex gap-1">
              <input
                className="flex-1 border border-gray-300 rounded-lg px-1 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs text-gray-800 bg-white"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Type..."
                disabled={loading}
                style={{ minWidth: 0 }}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 transition text-white px-2 py-1 rounded-lg text-xs font-semibold shadow"
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
