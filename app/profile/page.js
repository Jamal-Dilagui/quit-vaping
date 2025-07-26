
'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { signOut } from "next-auth/react";

export default function profile() {
    const { data: session, status } = useSession();
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteAccount = async () => {
        if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            return;
        }

        setIsDeleting(true);
        try {
            const res = await fetch('/api/auth/delete', {
                method: 'DELETE',
            });
            const data = await res.json();
            
            if (res.ok) {
                alert('Account deleted successfully!');
                await signOut({ callbackUrl: '/login' });
            } else {
                alert(data.error || 'Failed to delete account');
            }
        } catch (error) {
            alert('An error occurred while deleting your account');
            console.error('Delete account error:', error);
        } finally {
            setIsDeleting(false);
        }
    };

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
                <span className="font-semibold text-slate-700">{session && session.user.name}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Email</span>
                <span className="font-semibold text-slate-700">{session && session.user.email}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Quit Date</span>
                <span className="font-semibold text-blue-600">{session && session.user.quitDate}</span>
            </div>
        </div>
        {/* <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:from-purple-600 hover:to-blue-600 transition mb-3">Edit Profile</button> */}
        <button onClick={() => signOut()} className="w-full py-3 rounded-lg bg-gradient-to-r from-slate-300 to-slate-400 text-red-600 font-semibold shadow-md hover:from-slate-400 hover:to-slate-500 transition mb-2">Logout</button>
        <button 
            onClick={deleteAccount}
            disabled={isDeleting}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-md hover:from-red-600 hover:to-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {isDeleting ? 'Deleting...' : 'Delete Account'}
        </button>
    </main>
  )
}
