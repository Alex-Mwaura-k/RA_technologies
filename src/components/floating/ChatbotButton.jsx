import React, { useState, useRef, useEffect } from 'react';
import { SITE_CONFIG } from '../../constants/siteConfig';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hello! 👋 Welcome to ${SITE_CONFIG.brandName}. How can we help you today?`,
      sender: 'bot',
    },
  ]);

  const messagesEndRef = useRef(null);
  
  // Use the phone number from config. For WhatsApp, strip any non-digit characters.
  const phoneNumber = SITE_CONFIG.contact.phone;
  const whatsAppNumber = SITE_CONFIG.contact.whatsapp || SITE_CONFIG.contact.phone.replace(/\D/g, '');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: inputText.trim(), sender: 'user' },
    ]);
    setInputText('');
    setIsBotTyping(true);

    setTimeout(() => {
      setIsBotTyping(false);
      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now(), 
          text: "Thanks for reaching out! One of our engineers will be with you shortly.", 
          sender: 'bot' 
        },
      ]);
    }, 2000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isBotTyping]);

  return (
    <div className="fixed bottom-6 left-4 md:left-[max(1.5rem,calc((100vw-1300px)/4-1.5rem))] z-50 flex flex-col items-start">
      
      {/* Chat Window */}
      <div 
        className={`bg-slate-50 shadow-2xl rounded-2xl w-80 sm:w-96 overflow-hidden transition-all duration-300 ease-in-out origin-bottom-left mb-4 flex flex-col ${
          isOpen 
            ? 'opacity-100 scale-100 visible h-[360px]' 
            : 'opacity-0 scale-90 invisible h-0'
        }`}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-3.5 flex justify-between items-center shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-xs">
              {SITE_CONFIG.brandShort}
            </div>
            <div>
              <h3 className="font-semibold text-sm">{SITE_CONFIG.brandShort} Support</h3>
              <p className="text-xs text-slate-300">Typically replies instantly</p>
            </div>
          </div>
          <button 
            onClick={toggleChat} 
            className="text-white hover:text-slate-200 focus:outline-none"
            aria-label="Close chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        {/* Messages Area */}
        <div className="flex-grow p-4 bg-slate-50 flex flex-col gap-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {messages.map((msg, index) => (
            <React.Fragment key={msg.id}>
              {/* Message Bubble */}
              <div
                className={
                  msg.sender === 'user'
                    ? "bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[85%] text-sm shadow-sm break-words"
                    : "bg-white border border-slate-200/70 text-slate-700 p-3 rounded-2xl rounded-tl-sm self-start max-w-[85%] text-sm shadow-sm break-words"
                }
              >
                {msg.text}
              </div>

              {/* Direct Action Buttons */}
              {index === 0 && msg.sender === 'bot' && (
                <div className="flex gap-2 self-start mb-2">
                  <a 
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Us
                  </a>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Typing Indicator */}
          {isBotTyping && (
            <div className="bg-white border border-slate-200/70 p-3 rounded-2xl rounded-tl-sm self-start shadow-sm flex items-center gap-1.5 h-[42px] mt-1">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-3 bg-slate-50 border-t border-slate-200/80 flex gap-2 items-center">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..." 
            className="flex-grow bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
          />
          <button 
            type="submit"
            aria-label="Send message"
            className="w-9 h-9 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors focus:outline-none shadow-sm flex-shrink-0 flex items-center justify-center pl-0.5"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Chat Trigger Button */}
      <button
        onClick={toggleChat}
        aria-label="Open chat"
        className={`w-12 h-12 flex items-center justify-center text-white rounded-full shadow-2xl border-2 border-slate-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-slate-300 ${
          isOpen ? 'bg-slate-700 rotate-90 scale-90 opacity-0 absolute pointer-events-none' : 'bg-slate-900 hover:bg-slate-800 rotate-0 scale-100 opacity-100 relative'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
      </button>
      
    </div>
  );
};

export default ChatbotButton;