import React from 'react'

export default function badges() {
  return (
    //  <!-- Achievements Unlocked Section -->
      <section className="px-4 mt-6 mb-6">
        <h2 className="text-xl font-bold text-purple-700 mb-1">Achievements Unlocked</h2>
        <div className="text-sm text-slate-500 mb-4">Celebrate your wins! These badges track your journey toward a healthier life.</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* <!-- Unlocked Badge: First Puff Tracked --> */}
          <div className="relative bg-white rounded-2xl shadow ring-2 ring-purple-500 flex flex-col items-center p-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center mb-2">
              <span className="text-2xl">🥇</span>
            </div>
            <div className="font-semibold text-slate-700 text-sm mb-1 text-center">First Puff Tracked</div>
            <div className="text-xs text-slate-400 text-center">Logged your very first puff</div>
            <span className="absolute top-2 right-2 text-xs px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full font-semibold">Unlocked</span>
          </div>
          {/* <!-- Unlocked Badge: 3 Days Without Vaping --> */}
          <div className="relative bg-white rounded-2xl shadow ring-2 ring-purple-500 flex flex-col items-center p-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mb-2">
              <span className="text-2xl">🔥</span>
            </div>
            <div className="font-semibold text-slate-700 text-sm mb-1 text-center">3 Days Smoke-Free</div>
            <div className="text-xs text-slate-400 text-center">No vaping for 3 days</div>
            <span className="absolute top-2 right-2 text-xs px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full font-semibold">Unlocked</span>
          </div>
          {/* <!-- Unlocked Badge: Daily Goal Reached --> */}
          <div className="relative bg-white rounded-2xl shadow ring-2 ring-purple-500 flex flex-col items-center p-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center mb-2">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="font-semibold text-slate-700 text-sm mb-1 text-center">Daily Goal Reached</div>
            <div className="text-xs text-slate-400 text-center">Hit your daily reduction goal</div>
            <span className="absolute top-2 right-2 text-xs px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full font-semibold">Unlocked</span>
          </div>
          {/* <!-- Unlocked Badge: 7-Day Streak --> */}
          <div className="relative bg-white rounded-2xl shadow ring-2 ring-purple-500 flex flex-col items-center p-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mb-2">
              <span className="text-2xl">📈</span>
            </div>
            <div className="font-semibold text-slate-700 text-sm mb-1 text-center">7-Day Streak</div>
            <div className="text-xs text-slate-400 text-center">Logged every day for a week</div>
            <span className="absolute top-2 right-2 text-xs px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full font-semibold">Unlocked</span>
          </div>
          {/* <!-- Unlocked Badge: 100 Puffs Avoided --> */}
          <div className="relative bg-white rounded-2xl shadow ring-2 ring-purple-500 flex flex-col items-center p-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center mb-2">
              <span className="text-2xl">💪</span>
            </div>
            <div className="font-semibold text-slate-700 text-sm mb-1 text-center">100 Puffs Avoided</div>
            <div className="text-xs text-slate-400 text-center">You've avoided 100 puffs</div>
            <span className="absolute top-2 right-2 text-xs px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full font-semibold">Unlocked</span>
          </div>
          {/* <!-- Locked Badge: Trigger Logged 5x --> */}
          <div className="relative bg-white rounded-2xl shadow flex flex-col items-center p-4 opacity-50">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center mb-2 relative">
              <span className="text-2xl">🧠</span>
              <span className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              </span>
            </div>
            <div className="font-semibold text-slate-700 text-sm mb-1 text-center">Trigger Logged 5x</div>
            <div className="text-xs text-slate-400 text-center">Log 5 triggers to unlock</div>
            <span className="absolute top-2 right-2 text-xs px-2 py-0.5 bg-slate-200 text-slate-400 rounded-full font-semibold">Locked</span>
          </div>
        </div>
      </section>
  )
}
