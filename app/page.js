import Image from "next/image";


export default function Home() {
  return (
     <div>
      {/* <!-- Header --> */}
      <header className="flex items-center justify-between px-4 pt-6 pb-2">
        <div className="text-left">
          <div className="text-xs text-purple-400 font-semibold tracking-wide">Monday, 26 May</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">🔥</span>
          <span className="text-xs font-bold text-purple-500">23</span>
        </div>
      </header>

      {/* <!-- Puff History (Past 7 Days) --> */}
      <section className="flex items-center justify-between px-4 mt-2 mb-2">
        <div className="flex gap-2">
          {/* <!-- 7 progress rings for Sun-Sat --> */}
          <div className="flex flex-col items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" className="mb-1">
              <circle cx="18" cy="18" r="16" fill="#f3e8ff" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#a78bfa" strokeWidth="4" strokeDasharray="100" strokeDashoffset="30" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-slate-400 font-medium">S</span>
          </div>
          <div className="flex flex-col items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" className="mb-1">
              <circle cx="18" cy="18" r="16" fill="#f3e8ff" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="100" strokeDashoffset="50" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-slate-400 font-medium">M</span>
          </div>
          <div className="flex flex-col items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" className="mb-1">
              <circle cx="18" cy="18" r="16" fill="#f3e8ff" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#818cf8" strokeWidth="4" strokeDasharray="100" strokeDashoffset="60" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-slate-400 font-medium">T</span>
          </div>
          <div className="flex flex-col items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" className="mb-1">
              <circle cx="18" cy="18" r="16" fill="#f3e8ff" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#a5b4fc" strokeWidth="4" strokeDasharray="100" strokeDashoffset="80" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-slate-400 font-medium">W</span>
          </div>
          <div className="flex flex-col items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" className="mb-1">
              <circle cx="18" cy="18" r="16" fill="#f3e8ff" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#818cf8" strokeWidth="4" strokeDasharray="100" strokeDashoffset="40" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-slate-400 font-medium">T</span>
          </div>
          <div className="flex flex-col items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" className="mb-1">
              <circle cx="18" cy="18" r="16" fill="#f3e8ff" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#a78bfa" strokeWidth="4" strokeDasharray="100" strokeDashoffset="20" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-slate-400 font-medium">F</span>
          </div>
          <div className="flex flex-col items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" className="mb-1">
              <circle cx="18" cy="18" r="16" fill="#f3e8ff" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="100" strokeDashoffset="10" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-slate-400 font-medium">S</span>
          </div>
        </div>
        <a href="#" className="ml-2 text-xs text-purple-500 font-semibold hover:underline">View more</a>
      </section>

      {/* <!-- Today's Puff Section --> */}
      <section className="px-4 mt-2 mb-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          {/* <!-- Large semi-circle progress ring --> */}
          <svg width="160" height="80" viewBox="0 0 160 80" className="mb-2">
            <path d="M20,80 A60,60 0 0,1 140,80" fill="none" stroke="#ede9fe" strokeWidth="16" />
            <path d="M20,80 A60,60 0 0,1 120,32" fill="none" stroke="url(#grad1)" strokeWidth="16" strokeLinecap="round" />
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-2xl font-bold text-purple-700 mb-1">139<span className="text-base font-normal text-slate-400">/200</span></div>
          <div className="text-sm text-purple-500 font-semibold mb-1">You’ve hit 56% of your limit</div>
          <div className="text-xs text-slate-400">Last one: 1 hour ago</div>
        </div>
      </section>

      {/* <!-- Puff Buttons --> */}
      <section className="px-4 mt-4 mb-6">
        <div className="flex gap-4 justify-center">
          <button className="flex-1 flex items-center justify-center py-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-3xl font-bold shadow-md transition-all active:scale-95">
            <span>−</span>
          </button>
          <button className="flex-1 flex items-center justify-center py-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white text-3xl font-bold shadow-md transition-all active:scale-95">
            <span>+</span>
          </button>
        </div>
      </section>

      {/* <!-- Statistics Section (Daily, Weekly, Monthly) --> */}
      <section className="px-4 mb-4">
        <div className="flex gap-2 mb-2">
          <span className="flex-1 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 font-semibold text-xs shadow text-center">Daily</span>
          <span className="flex-1 py-2 rounded-full bg-white text-slate-400 font-semibold text-xs border border-slate-100 shadow text-center">Weekly</span>
          <span className="flex-1 py-2 rounded-full bg-white text-slate-400 font-semibold text-xs border border-slate-100 shadow text-center">Monthly</span>
        </div>
        {/* <!-- Daily Chart --> */}
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center mb-3">
          <div className="w-full flex items-end gap-2 h-24 mb-2">
            <div className="flex-1 h-2/3 bg-gradient-to-t from-blue-200 to-purple-400 rounded"></div>
            <div className="flex-1 h-1/2 bg-gradient-to-t from-blue-200 to-purple-400 rounded"></div>
            <div className="flex-1 h-5/6 bg-gradient-to-t from-blue-200 to-purple-400 rounded"></div>
            <div className="flex-1 h-1/3 bg-gradient-to-t from-blue-200 to-purple-400 rounded"></div>
            <div className="flex-1 h-2/3 bg-gradient-to-t from-blue-200 to-purple-400 rounded"></div>
            <div className="flex-1 h-1/2 bg-gradient-to-t from-blue-200 to-purple-400 rounded"></div>
            <div className="flex-1 h-3/4 bg-gradient-to-t from-blue-200 to-purple-400 rounded"></div>
          </div>
          <div className="w-full flex justify-between text-xs text-slate-400">
            <span>6am</span><span>9am</span><span>12pm</span><span>3pm</span><span>6pm</span><span>9pm</span><span>12am</span>
          </div>
        </div>
        {/* <!-- Weekly Chart --> */}
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center mb-3">
          <svg width="220" height="60" viewBox="0 0 220 60" className="mb-2">
            <polyline points="0,50 30,40 60,45 90,30 120,35 150,20 180,25 210,10" fill="none" stroke="#a78bfa" strokeWidth="4" />
            <circle cx="0" cy="50" r="4" fill="#a78bfa" />
            <circle cx="30" cy="40" r="4" fill="#a78bfa" />
            <circle cx="60" cy="45" r="4" fill="#a78bfa" />
            <circle cx="90" cy="30" r="4" fill="#a78bfa" />
            <circle cx="120" cy="35" r="4" fill="#a78bfa" />
            <circle cx="150" cy="20" r="4" fill="#a78bfa" />
            <circle cx="180" cy="25" r="4" fill="#a78bfa" />
            <circle cx="210" cy="10" r="4" fill="#a78bfa" />
          </svg>
          <div className="w-full flex justify-between text-xs text-slate-400">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>
        </div>
        {/* <!-- Monthly Chart --> */}
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center mb-8">
          <div className="w-full flex items-end gap-1 h-24 mb-2">
            <div className="flex-1 h-2/3 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-1/2 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-5/6 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-1/3 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-2/3 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-1/2 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-3/4 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-2/3 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-1/2 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-5/6 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-1/3 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
            <div className="flex-1 h-2/3 bg-gradient-to-t from-blue-100 to-purple-300 rounded"></div>
          </div>
          <div className="w-full flex justify-between text-xs text-slate-400">
            <span>1</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25</span><span>30</span>
          </div>
        </div>
      </section>

    </div>
  );
}
