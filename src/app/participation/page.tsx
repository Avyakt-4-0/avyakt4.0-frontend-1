import NavBar from '@/components/nav-bar'
import React from 'react'

function Participation() {
    return (
        <div>
            <NavBar />
            <div className="flex items-center justify-center">

                <div className="relative w-[700px] rounded-xl border-2 border-orange-500 text-orange-400 shadow-[0_0_20px_5px_rgba(255,165,0,0.6)]">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-orange-500 bg-black/50 rounded-t-xl">
                        <div className="flex items-center space-x-3">
                            <span className="px-2 py-1 text-sm font-bold border border-orange-500 rounded-md bg-black/40">
                                Avyakt 4.0
                            </span>
                            <span className="text-lg font-mono font-semibold">gbmi.avyakt</span>
                        </div>
                        <div className="flex space-x-2">
                            <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,165,0,0.9)]"></span>
                            <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,165,0,0.9)]"></span>
                            <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,165,0,0.9)]"></span>
                        </div>
                    </div>

                    {/* Code block area */}
                    <div className="h-[400px] bg-black/60 font-mono text-sm p-6 text-orange-400">
                        {
                            JSON.stringify(
                                {
                                    "eventId": "event_01K52A92ZR091CTP7TT9X7BE68",
                                    "leadEmail": "22cse969.abhijitpradhan@giet.edu",
                                    "members": [
                                        {
                                            "email": "22cse969.abhijitpradhan@giet.edu",
                                            "name": "ABHIJIT PRADHAN",
                                            "phone": "8240159831"
                                        }
                                    ],
                                    "upiId": "1234"
                                }, null, 2)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participation