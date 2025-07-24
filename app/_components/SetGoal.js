'use client'
import React, { useState, useRef, useEffect } from 'react';

const SetGoal = () => {
  const [goal, setGoal] = useState('');
  const [submittedGoal, setSubmittedGoal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  // Close modal on ESC
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === 'Escape') setShowModal(false);
    }
    if (showModal) {
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedGoal(goal);
    setGoal('');
    setShowModal(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed z-50 bottom-20 right-6 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 flex items-center gap-2"
        onClick={() => setShowModal(true)}
        aria-label="Set Goal"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
        Set Goal
      </button>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
          <div ref={modalRef} className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-6 w-full max-w-md mx-4 relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-slate-400 hover:text-red-500 text-xl font-bold focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold text-purple-700 mb-4">Set Your Goal</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Enter your goal..."
                required
                className="flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Show current goal if set */}
      {submittedGoal && (
        <div className="fixed bottom-35 right-6 z-40 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-lg shadow flex items-center gap-2 animate-fade-in">
          <span className="font-semibold">Your Goal:</span>
          <span>{submittedGoal}</span>
          <button
            className="ml-2 px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
            onClick={() => setShowModal(true)}
            aria-label="Edit goal"
          >
            Edit
          </button>
        </div>
      )}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default SetGoal; 