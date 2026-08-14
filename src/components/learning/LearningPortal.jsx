import React, { useState, useEffect } from 'react';
import { courseInfo } from '../../data/courseInfo';
import SharedBackground from '../../components/layout/SharedBackground';
import logo from '../../assets/logo.png';

const LearningPortal = ({ isFreeCourse = false }) => {
  const [currentLesson, setCurrentLesson] = useState(courseInfo.modules[0].lessons[0]);
  const [completedLessons, setCompletedLessons] = useState([1]);
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Theme Toggle State - Default is Light Mode (false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to HTML document for Tailwind
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const markAsComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const totalLessons = courseInfo.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const progressPercentage = (completedLessons.length / totalLessons) * 100;

  // Flatten lessons to easily find the "next" lesson across modules
  const allLessons = courseInfo.modules.flatMap(m => m.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
  const nextLesson = allLessons[currentIndex + 1];
  const isCurrentCompleted = completedLessons.includes(currentLesson.id);

  return (
    <SharedBackground>
      <div className="flex flex-col h-screen text-gray-900 dark:text-slate-100 overflow-hidden transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
        
        {/* GLOBAL APP NAVBAR */}
        <nav className="h-14 bg-slate-900 text-white flex items-center justify-between px-4 z-30 shrink-0 shadow-md">
          
          {/* Brand / Logo */}
          <a 
            href={!isFreeCourse ? "/" : "/"} 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Return to homepage"
          >
            <img 
              src={logo} 
              alt="RA Technologies Logo" 
              className="w-8 h-8 object-contain shadow-sm rounded" 
            />
            <span className="font-semibold text-sm hidden sm:block tracking-wide">RA Technologies</span>
          </a>

          {/* Right Side Global Actions */}
          <div className="flex items-center gap-4">
            
            {/* Global Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              title="Toggle Theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Conditional Navigation Elements */}
            <div className="h-6 w-px bg-slate-700 hidden sm:block" aria-hidden="true"></div>

            {!isFreeCourse ? (
              // AUTHENTICATED USER VIEW
              <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  Browse Courses
                </button>
                <button 
                  className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 hover:border-blue-500 overflow-hidden transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="User Profile"
                >
                  <svg className="w-full h-full text-slate-400 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </button>
              </div>
            ) : (
              // FREE/PUBLIC VIEW
              <button className="text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                Sign Up
              </button>
            )}
          </div>
        </nav>

        {/* COURSE SPECIFIC HEADER */}
        <header className="h-14 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-4 flex items-center justify-between z-10 transition-colors duration-300 shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="p-2 rounded-lg bg-slate-50 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-600 dark:text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isSidebarOpen}
              aria-controls="course-sidebar"
              aria-label={isSidebarOpen ? "Close course outline" : "Open course outline"}
              title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-sm font-bold text-gray-800 dark:text-white truncate max-w-xs sm:max-w-xl">
              {courseInfo.title}
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-xs font-semibold text-gray-500 dark:text-slate-400" aria-live="polite">
              Progress: <span className="text-emerald-600 dark:text-emerald-400">{completedLessons.length}</span> / {totalLessons}
            </div>
            <div 
              className="w-32 bg-gray-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden border border-gray-300 dark:border-slate-700"
              role="progressbar"
              aria-valuenow={progressPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div 
                className="bg-emerald-500 h-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </header>

        {/* MAIN THEATER VIEW */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* LEFT SIDEBAR */}
          <aside 
            id="course-sidebar"
            className={`w-80 shrink-0 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 flex flex-col transition-all duration-300 ease-in-out z-20 shadow-lg md:shadow-none ${
              isSidebarOpen ? 'ml-0 absolute md:relative h-full' : '-ml-80 absolute h-full'
            }`}
            aria-hidden={!isSidebarOpen}
          >
            <div className="p-4 border-b border-gray-200 dark:border-slate-800 font-bold text-sm text-gray-700 dark:text-slate-200 flex justify-between items-center bg-slate-50 dark:bg-slate-800">
              <span>Course Outline</span>
              <span className="text-xs bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-2 py-1 rounded-md font-medium">
                {totalLessons} Lessons
              </span>
            </div>

            <nav className="flex-1 overflow-y-auto p-3 space-y-5 custom-scrollbar" aria-label="Course Modules">
              {courseInfo.modules.map((module) => (
                <div key={module.id} className="space-y-2">
                  <h2 className="px-2 py-1.5 text-xs font-extrabold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                    {module.title}
                  </h2>

                  <div className="space-y-1">
                    {module.lessons.map((lesson) => {
                      const isActive = currentLesson.id === lesson.id;
                      const isCompleted = completedLessons.includes(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setCurrentLesson(lesson);
                            if (window.innerWidth < 768) setIsSidebarOpen(false);
                          }}
                          aria-current={isActive ? "page" : undefined}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700/50 shadow-sm'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-300 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-3 truncate">
                            <div 
                              className={`w-4 h-4 shrink-0 rounded flex items-center justify-center border transition-all duration-200 ${
                                isCompleted 
                                  ? 'bg-emerald-500 border-emerald-500 text-white' 
                                  : isActive 
                                    ? 'border-blue-400 bg-white dark:bg-slate-800'
                                    : 'border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 group-hover:border-gray-400'
                              }`}
                              aria-hidden="true"
                            >
                              {isCompleted && (
                                <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span className="truncate">{lesson.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 ml-3">
                            {lesson.access_tier === 'PUBLIC' ? (
                              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                                Free
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-500/20">
                                Cohort
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* RIGHT STAGE */}
          <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-slate-950">
            
            <section className="w-full bg-black aspect-video max-h-[65vh] flex items-center justify-center relative shadow-lg shrink-0" aria-label="Lesson Content">
              {currentLesson.lesson_type === 'VIDEO' && (
                <iframe
                  src={currentLesson.content_url}
                  title={currentLesson.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              {currentLesson.lesson_type === 'TEXT' && (
                <div className="w-full h-full overflow-y-auto p-6 sm:p-10 bg-white dark:bg-slate-900 text-gray-800 dark:text-slate-200 transition-colors">
                  <article className="max-w-3xl mx-auto prose prose-blue dark:prose-invert">
                    <span className="px-2.5 py-1 text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700/50 rounded-md inline-block mb-2">
                      Free Article
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-6 text-gray-900 dark:text-white leading-tight">
                      {currentLesson.title}
                    </h2>
                    <pre className="whitespace-pre-wrap font-sans text-sm sm:text-base leading-relaxed text-gray-600 dark:text-slate-300 bg-transparent p-0">
                      {currentLesson.text_content}
                    </pre>
                  </article>
                </div>
              )}

              {currentLesson.lesson_type === 'QUIZ' && (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 text-center transition-colors">
                  <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-700/50 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm" aria-hidden="true">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{currentLesson.title}</h2>
                  <p className="text-base text-gray-500 dark:text-slate-400 mb-8 max-w-md">Test your understanding of callbacks and validation endpoints to earn cohort points.</p>
                  <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                    Start Quiz
                  </button>
                </div>
              )}
            </section>

            <section className="flex-1 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 p-6 sm:p-8 transition-colors" aria-label="Lesson Details">
              <div className="max-w-4xl mx-auto">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-gray-200 dark:border-slate-800">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{currentLesson.title}</h2>
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="sr-only">Duration:</span> {currentLesson.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* DYNAMIC ACTION BUTTON */}
                  {!isCurrentCompleted ? (
                    <button
                      onClick={() => markAsComplete(currentLesson.id)}
                      className="px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md focus:ring-blue-500 dark:focus:ring-offset-slate-900"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      Mark as Complete
                    </button>
                  ) : nextLesson ? (
                    <button
                      onClick={() => setCurrentLesson(nextLesson)}
                      className="px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500 dark:focus:ring-offset-slate-900"
                    >
                      Next Lesson
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700/50 cursor-default"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      Course Completed
                    </button>
                  )}
                </div>

                <div className="flex gap-8 border-b border-gray-200 dark:border-slate-800 mt-2 overflow-x-auto custom-scrollbar" role="tablist">
                  {['overview', 'q&a', 'resources'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      role="tab"
                      aria-selected={activeTab === tab}
                      aria-controls={`panel-${tab}`}
                      id={`tab-${tab}`}
                      className={`py-4 text-sm font-bold capitalize transition-colors relative whitespace-nowrap focus:outline-none ${
                        activeTab === tab 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200'
                      }`}
                    >
                      {tab === 'q&a' ? 'Q&A' : tab}
                      {activeTab === tab && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-500 rounded-t-full" aria-hidden="true" />
                      )}
                    </button>
                  ))}
                </div>

                <div 
                  id={`panel-${activeTab}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeTab}`}
                  className="py-8 text-base text-gray-600 dark:text-slate-300"
                >
                  {activeTab === 'overview' && (
                    <p className="leading-relaxed">
                      This lesson covers the essential architecture required for interacting with Safaricom’s Daraja API. You will learn how to handle sandbox environments, format payload requests, and inspect secure callbacks.
                    </p>
                  )}
                  {activeTab === 'q&a' && (
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center border border-gray-100 dark:border-slate-700">
                      <p className="text-gray-500 dark:text-slate-400 italic">No questions asked yet for this lesson. Be the first to ask!</p>
                      <button className="mt-4 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Ask a Question
                      </button>
                    </div>
                  )}
                  {activeTab === 'resources' && (
                    <ul className="space-y-3">
                      <li>
                        <a href="#github" className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 bg-slate-50 dark:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <span className="text-xl" aria-hidden="true">📁</span> 
                          <div>
                            <p className="font-semibold text-gray-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Download Starter Code</p>
                            <p className="text-xs text-gray-500 dark:text-slate-400">GitHub Repository • 2.4 MB</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>

              </div>
            </section>
          </main>
        </div>
      </div>
    </SharedBackground>
  );
};

export default LearningPortal;