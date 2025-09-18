'use client'
import NavBar from '@/components/nav-bar'
import { checkIsAuthenticated } from '@/lib/auth/checkIsAutheticatedServerAction';
import { getUserDetails } from '@/lib/auth/getUserDetailsServerAction';
import { getRegistrationDetails } from '@/lib/events/server-action'
import React, { useEffect } from 'react'

interface Member {
    email: string;
    name?: string | null;
    phone?: string | null;
}

interface Registration {
    upiId: string;
    teamName: string;
    leadEmail: string;
    members: Member[];
}

interface EventInfo {
    id: string;
    name: string;
    category: string;
    registrationStatus: string;
}

interface ParticipationItem {
    regNo: number;
    registration: Registration;
    event: EventInfo;
}

function Participation() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [userDetails, setUserDetails] = React.useState<{ name: string | null; email: string | null; image: string | null }>();
    const [participationDetails, setParticipationDetails] = React.useState<ParticipationItem[]>([]);
    const [isPending, startTransition] = React.useTransition()

    useEffect(() => {
        const fetchAuthStatusAndDetails = async () => {
            const authStatus = await checkIsAuthenticated();
            setIsAuthenticated(authStatus);

            if (authStatus) {
                const details = await getUserDetails();
                setUserDetails({
                    name: details?.name || '',
                    email: details?.email || '',
                    image: details?.image || '',
                });
            }
        };

        fetchAuthStatusAndDetails();
    }, []);

    useEffect(() => {
        if (!userDetails?.email) return;

        startTransition(async () => {
            const participationDetails = await getRegistrationDetails(userDetails.email!);
            setParticipationDetails(participationDetails || []);
        });
    }, [userDetails]);

    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center px-4 py-8">
                {isPending ? (
                    <p className="text-orange-400">Loading...</p>
                ) : participationDetails.length === 0 ? (
                    <p className="text-orange-400">No participation records found.</p>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
                        {participationDetails.map((item) => (
                            <div
                                key={item.regNo}
                                className="relative w-full rounded-xl border-2 border-orange-500 text-orange-400 shadow-[0_0_20px_5px_rgba(255,165,0,0.6)]"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between px-4 py-2 border-b border-orange-500 bg-black/50 rounded-t-xl">
                                    <div className="flex items-center space-x-3">
                                        <span className="px-2 py-1 text-sm font-bold border border-orange-500 rounded-md bg-black/40">
                                            Avyakt 4.0
                                        </span>
                                        <span className="text-lg font-mono font-semibold">{item.event.name}</span>
                                    </div>
                                    <div className="flex space-x-2">
                                        <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,165,0,0.9)]"></span>
                                        <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,165,0,0.9)]"></span>
                                        <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,165,0,0.9)]"></span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-black/60 font-mono text-sm p-6 text-orange-400 space-y-3">
                                    <p><span className="font-bold">Reg No:</span> {item.regNo}</p>
                                    <p><span className="font-bold">Team:</span> {item.registration.teamName}</p>
                                    <p><span className="font-bold">Lead Email:</span> {item.registration.leadEmail}</p>
                                    <p><span className="font-bold">UPI:</span> {item.registration.upiId}</p>
                                    <p><span className="font-bold">Status:</span> {item.event.registrationStatus}</p>
                                    <div>
                                        <p className="font-bold mb-1">Members:</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            {item.registration.members.map((m, idx) => (
                                                <li key={idx}>
                                                    {m.name ? `${m.name} (${m.email})` : m.email}
                                                    {m.phone ? ` - ${m.phone}` : ''}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Participation
