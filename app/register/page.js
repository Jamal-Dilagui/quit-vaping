import React from 'react'


export default function Register() {
  return(
     <main className="w-full max-w-sm mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center mb-2 shadow-lg">
          <span className="text-white text-2xl font-bold">QV</span>
        </div>
        <h1 className="text-2xl font-bold text-purple-700 tracking-tight">Quit Vipe</h1>
      </div>
      <h2 className="text-xl font-semibold text-slate-700 mb-6 text-center">Create Account</h2>
      <form className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full rounded-lg px-4 py-3 border border-blue-100 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm" 
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full rounded-lg px-4 py-3 border border-blue-100 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full rounded-lg px-4 py-3 border border-blue-100 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm" 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          className="w-full rounded-lg px-4 py-3 border border-blue-100 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm" 
        />
        <button 
          type="button"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:from-purple-600 hover:to-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
      <div className="text-xs text-slate-400 mt-2 mb-4 text-center">
        By signing up, you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
      </div>
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-slate-200"></div>
        <span className="mx-3 text-xs text-slate-400">or sign up with</span>
        <div className="flex-1 h-px bg-slate-200"></div>
      </div>
      <div className="flex gap-3 justify-center mb-6">
        <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shadow">
          <span className="text-slate-400">G</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shadow">
          <span className="text-slate-400">F</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shadow">
          <span className="text-slate-400">A</span>
        </button>
      </div>
      <div className="text-center text-sm text-slate-500">
        Already have an account?
        <a href="/login" className="text-blue-500 font-semibold hover:underline ml-1">Log in</a>
      </div>
    </main>
  )
}