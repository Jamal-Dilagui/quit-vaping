import Link from 'next/link'
import React from 'react'

const navBar = () => {
  return (
    // <!-- Bottom Navigation Bar -->
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-slate-200 shadow-t flex justify-around items-center h-16">
      <Link href="/" className="flex flex-col items-center text-purple-600 font-semibold">
        {/* <!-- Home Icon --> */}
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9"/><path d="M9 21V9h6v12"/></svg>
        <span className="text-xs">Home</span>
      </Link>
        {/* <!-- Badges Icon (medal/trophy) --> */}
      <Link href="/badges" className="flex flex-col items-center text-slate-400 hover:text-yellow-500 transition-all">
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M17 21H7M12 17v4"/><path d="M7 21l-2-4M17 21l2-4"/></svg>
        <span className="text-xs">Badges</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center text-slate-400 hover:text-purple-500 transition-all">
        {/* <!-- Profile Icon --> */}
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20c0-2.2 3.6-4 6-4s6 1.8 6 4"/></svg>
        <span className="text-xs">Profile</span>
      </Link>
      <button className="flex flex-col items-center text-slate-400 hover:text-red-500 transition-all">
        {/* <!-- Logout Icon --> */}
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7"/><path d="M7 4v16"/></svg>
        <span className="text-xs">Logout</span>
      </button>
    </nav>
  )
}

export default navBar