import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPostContent = () => {
  const { id } = useParams(); 

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(342);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleCopyCode = () => {
    const sqlCode = `CREATE TABLE ledger_entries (\n  id UUID PRIMARY KEY,\n  transaction_id UUID NOT NULL,\n  account_id UUID NOT NULL,\n  amount DECIMAL(19, 4) NOT NULL,\n  direction 'CREDIT' | 'DEBIT',\n  created_at TIMESTAMP DEFAULT NOW()\n);`;
    navigator.clipboard.writeText(sqlCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <article className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
        <header className=" text-center w-full max-w-full mx-auto pt-12 overflow-x-hidden">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-extrabold tracking-tight text-[var(--deep-black)] leading-tight mb-8 whitespace-normal lg:whitespace-nowrap">
            Architecting Immutable Payment Ledgers for Enterprise SaaS
          </h1>
        </header>

        <div className="block lg:hidden w-full mb-10 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div 
            className="w-full h-48 sm:h-56 overflow-hidden bg-slate-100 relative group cursor-pointer"
            onClick={() => setIsImageModalOpen(true)}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
              alt="Server Architecture" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              <div className="bg-white/95 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
                View Image
              </div>
            </div>

            <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20 pointer-events-none">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-full shadow-md">
                SaaS Architecture
              </span>
              <span className="text-xs font-bold text-slate-800 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-full shadow-md">
                6 min read
              </span>
            </div>
            
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-20">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike();
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md ${
                  isLiked 
                    ? 'bg-blue-600 text-white border border-blue-500' 
                    : 'bg-white/95 text-slate-800 border border-slate-200 hover:bg-white hover:text-blue-600'
                }`}
              >
                <svg className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
                {likesCount} Likes
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBookmarked(!isBookmarked);
                }}
                className={`p-1.5 rounded-full transition-all shadow-md ${
                  isBookmarked 
                    ? 'bg-blue-600 text-white border border-blue-500' 
                    : 'bg-white/95 text-slate-800 border border-slate-200 hover:bg-white hover:text-blue-600'
                }`}
              >
                <svg className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8">
            <div className="text-lg text-slate-700 leading-relaxed font-normal space-y-6">
              <p className="text-xl text-slate-600 font-medium mb-8">
                Building a high-throughput transaction pipeline requires more than just a basic SQL database. 
                When handling enterprise money, systems must be audit-proof, strictly idempotent, and highly available. 
                Here is how we solved this using double-entry principles.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Problem with Simple Balances</h2>
              <p>
                Many early-stage startups build billing systems by simply keeping a <code>balance</code> column on a User table. 
                While this works for side projects, it immediately collapses under concurrent requests, network retries, and race conditions. 
                If two payments hit the server at the exact same millisecond, the final balance might overwrite itself, causing lost funds.
              </p>

              <blockquote className="border-l-4 border-[var(--tech-blue)] pl-6 py-2 my-8 bg-blue-50/50 rounded-r-lg italic text-slate-700">
                "An immutable ledger doesn't track what the balance *is*, it tracks every single event that *happened*. The balance is just the sum of those events."
              </blockquote>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Double-Entry Ledger Design</h2>
              <p>
                Drawing inspiration from 15th-century accounting, every transaction in our system requires two entries: a debit and a credit. 
                Money is never "created" or "destroyed" in our tables; it merely moves between accounts.
              </p>

              <div className="relative my-6 group">
                <div className="bg-[#0d1117] rounded-xl p-5 overflow-x-auto shadow-inner border border-slate-800">
                  <pre className="text-sm text-blue-300 font-mono leading-relaxed">
                    <code>
<span className="text-purple-400">CREATE TABLE</span> ledger_entries (<br/>
&nbsp;&nbsp;id <span className="text-blue-200">UUID PRIMARY KEY</span>,<br/>
&nbsp;&nbsp;transaction_id <span className="text-blue-200">UUID NOT NULL</span>,<br/>
&nbsp;&nbsp;account_id <span className="text-blue-200">UUID NOT NULL</span>,<br/>
&nbsp;&nbsp;amount <span className="text-blue-200">DECIMAL(19, 4) NOT NULL</span>,<br/>
&nbsp;&nbsp;direction <span className="text-green-300">'CREDIT' | 'DEBIT'</span>,<br/>
&nbsp;&nbsp;created_at <span className="text-blue-200">TIMESTAMP DEFAULT NOW()</span><br/>
);
                    </code>
                  </pre>
                </div>
                
                <button 
                  onClick={handleCopyCode}
                  className="absolute bottom-4 right-4 p-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-lg transition-all border border-slate-700 backdrop-blur-sm shadow-sm"
                  aria-label="Copy code to clipboard"
                  title="Copy code"
                >
                  {isCopied ? (
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  )}
                </button>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Ensuring Idempotency</h2>
              <p>
                Network failures are guaranteed in distributed systems. When a client doesn't receive a success response, they will retry. 
                We use an <code>Idempotency-Key</code> header combined with distributed Redis locks to ensure a transaction is never processed twice, even under heavy load.
              </p>
            </div>

            <div className="block lg:hidden mt-12 bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                  alt="Alex Rivera" 
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Alex Rivera</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Principal Engineer<br/>@ RA_technologies</p>
                </div>
              </div>

              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Table of Contents</h4>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li><a href="#" className="hover:text-[var(--tech-blue)] transition-colors">The Problem with Simple Balances</a></li>
                <li><a href="#" className="hover:text-[var(--tech-blue)] transition-colors">Double-Entry Ledger Design</a></li>
                <li><a href="#" className="hover:text-[var(--tech-blue)] transition-colors">Ensuring Idempotency</a></li>
                <li><a href="#" className="hover:text-[var(--tech-blue)] transition-colors">Conclusion</a></li>
              </ul>

              <hr className="my-6 border-slate-100" />

              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Share Article</h4>
              <div className="flex gap-3">
                <button className="flex-1 bg-slate-50 border border-slate-200 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors font-medium text-sm flex justify-center items-center gap-2">
                  Twitter
                </button>
                <button className="flex-1 bg-slate-50 border border-slate-200 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors font-medium text-sm flex justify-center items-center gap-2">
                  LinkedIn
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link to="/blog" className="text-[var(--tech-blue)] font-bold text-sm hover:underline flex items-center">
                  &larr; Back to all publications
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:mt-16 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Join the Discussion</h3>
              <div className="flex gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-slate-300 flex-shrink-0 hidden sm:block"></div>
                <div className="flex-grow">
                  <textarea 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share your architectural thoughts..."
                    className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-[var(--tech-blue)] focus:border-[var(--tech-blue)] outline-none resize-none h-24"
                  ></textarea>
                  <div className="flex justify-end mt-3">
                    <button className="bg-[var(--deep-black)] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-5">
              
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                
                <div 
                  className="w-full h-48 sm:h-56 overflow-hidden bg-slate-100 relative group cursor-pointer"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                    alt="Server Architecture" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="bg-white/95 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                      </svg>
                      View Image
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20 pointer-events-none">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-full shadow-md">
                      SaaS Architecture
                    </span>
                    <span className="text-xs font-bold text-slate-800 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-full shadow-md">
                      6 min read
                    </span>
                  </div>
                  
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-20">
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike();
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md ${
                        isLiked 
                          ? 'bg-blue-600 text-white border border-blue-500' 
                          : 'bg-white/95 text-slate-800 border border-slate-200 hover:bg-white hover:text-blue-600'
                      }`}
                    >
                      <svg className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                      </svg>
                      {likesCount} Likes
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsBookmarked(!isBookmarked);
                      }}
                      className={`p-1.5 rounded-full transition-all shadow-md ${
                        isBookmarked 
                          ? 'bg-blue-600 text-white border border-blue-500' 
                          : 'bg-white/95 text-slate-800 border border-slate-200 hover:bg-white hover:text-blue-600'
                      }`}
                    >
                      <svg className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                      </svg>
                    </button>

                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                      alt="Alex Rivera" 
                      className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm"
                    />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Alex Rivera</p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">Principal Engineer<br/>@ RA_technologies</p>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Table of Contents</h4>
                  <ul className="space-y-3 text-sm text-slate-600 font-medium">
                    <li><a href="#" className="hover:text-[var(--tech-blue)] transition-colors">The Problem with Simple Balances</a></li>
                    <li><a href="#" className="hover:text-[var(--tech-blue)] transition-colors">Double-Entry Ledger Design</a></li>
                    <li><a href="#" className="hover:text-[var(--tech-blue)] transition-colors">Ensuring Idempotency</a></li>
                    <li><a href="#" className="hover:text-[var(--tech-blue)] transition-colors">Conclusion</a></li>
                  </ul>

                  <hr className="my-6 border-slate-100" />

                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Share Article</h4>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-slate-50 border border-slate-200 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors font-medium text-sm flex justify-center items-center gap-2">
                      Twitter
                    </button>
                    <button className="flex-1 bg-slate-50 border border-slate-200 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors font-medium text-sm flex justify-center items-center gap-2">
                      LinkedIn
                    </button>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link to="/blog" className="text-[var(--tech-blue)] font-bold text-sm hover:underline flex items-center">
                      &larr; Back to all publications
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </article>

      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 sm:p-8 cursor-pointer"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" 
              alt="Server Architecture Expanded" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} 
            />
            
            <button 
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 sm:top-0 sm:-right-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-md transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPostContent;