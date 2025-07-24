

import React from 'react'

export default function profile() {
  return (
    <main className="w-full max-w-sm mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center mb-2 shadow-lg">
                <span className="text-white text-3xl font-bold">QV</span>
            </div>
            <h1 className="text-2xl font-bold text-purple-700 tracking-tight">My Profile</h1>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Name</span>
                <span className="font-semibold text-slate-700">Jane Doe</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Email</span>
                <span className="font-semibold text-slate-700">jane@email.com</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Quit Date</span>
                <span className="font-semibold text-blue-600">2024-05-26</span>
            </div>
        </div>
        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:from-purple-600 hover:to-blue-600 transition mb-3">Edit Profile</button>
        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-slate-300 to-slate-400 text-red-600 font-semibold shadow-md hover:from-slate-400 hover:to-slate-500 transition mb-2">Logout</button>
        <div className="text-center mt-2">
            <a href="#" className="text-xs text-slate-400 hover:underline">Delete account</a>
        </div>
    </main>
  )
}
