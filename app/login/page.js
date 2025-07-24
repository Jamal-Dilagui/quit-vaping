import React from 'react'

export default function Login() {
  return (
    <main className="w-full max-w-sm mx-auto px-4 py-8">
      {/* App Logo/Name */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center mb-2 shadow-lg">
          <span className="text-white text-2xl font-bold">QV</span>
        </div>
        <h1 className="text-2xl font-bold text-purple-700 tracking-tight">Quit Vipe</h1>
      </div>
      <h2 className="text-xl font-semibold text-slate-700 mb-6 text-center">Welcome Back</h2>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input type="email" placeholder="Email" className="w-full rounded-lg pl-10 pr-4 py-3 border border-blue-100 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm" />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6"/></svg>
          </span>
        </div>
        <div className="relative">
          <input type="password" placeholder="Password" className="w-full rounded-lg pl-10 pr-4 py-3 border border-blue-100 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm" />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          </span>
        </div>
        <div className="flex justify-end">
          <a href="#" className="text-xs text-blue-500 hover:underline">Forgot password?</a>
        </div>
        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:from-purple-600 hover:to-blue-600 transition">Login</button>
      </form>
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-slate-200"></div>
        <span className="mx-3 text-xs text-slate-400">or continue with</span>
        <div className="flex-1 h-px bg-slate-200"></div>
      </div>
      <div className="flex gap-3 justify-center mb-6">
        <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shadow"><span className="text-slate-400">G</span></button>
        <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shadow"><span className="text-slate-400">F</span></button>
        <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shadow"><span className="text-slate-400">A</span></button>
      </div>
      <div className="text-center text-sm text-slate-500">
        Don't have an account?
        <a href="/register" className="text-blue-500 font-semibold hover:underline">Sign up</a>
      </div>
    </main>
  )
}

