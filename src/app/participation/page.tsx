'use client'
import NavBar from '@/components/nav-bar'
import { Skeleton } from '@/components/ui/skeleton';
import { checkIsAuthenticated } from '@/lib/auth/checkIsAutheticatedServerAction';
import { getUserDetails } from '@/lib/auth/getUserDetailsServerAction';
import { getRegistrationDetails } from '@/lib/events/server-action'
import React, { useEffect, useState, useTransition } from 'react'

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
    name: string;
    category: string;
    registrationStatus: string;
}

interface ParticipationItem {
    regNo: number;
    registration: Registration;
    event: EventInfo;
}


function removeNulls(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(removeNulls).filter(v => v !== null && v !== undefined);
    } else if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([_, v]) => v !== null && v !== undefined)
                .map(([k, v]) => [k, removeNulls(v)])
        );
    }
    return obj;
}

function Participation() {
    const [userDetails, setUserDetails] = useState<{ name: string | null; email: string | null; image: string | null }>();
    const [participationDetails, setParticipationDetails] = useState<ParticipationItem[]>([]);
    const [isPending, startTransition] = useTransition()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchAuthStatusAndDetails = async () => {
            setLoading(true);
            const authStatus = await checkIsAuthenticated();

            if (authStatus) {
                const details = await getUserDetails();
                setUserDetails({
                    name: details?.name || '',
                    email: details?.email || '',
                    image: details?.image || '',
                });
            }
            setLoading(false);
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
                {loading ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
                        <Skeleton className="w-full h-[400px] rounded-xl" />
                        <Skeleton className="w-full h-[400px] rounded-xl" />
                        <Skeleton className="w-full h-[400px] rounded-xl" />
                        <Skeleton className="w-full h-[400px] rounded-xl" />
                        <Skeleton className="w-full h-[400px] rounded-xl" />
                        <Skeleton className="w-full h-[400px] rounded-xl" />
                    </div>
                ) : participationDetails.length === 0 ? (
                    <p className="text-orange-400">Hey {userDetails?.name}, you have not registered for any events yet.</p>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
                        {participationDetails.map((item) => {
                            const cleaned = removeNulls(item);
                            return (
                                <div
                                    key={item.regNo}
                                    className="relative w-full rounded-xl border-2 border-orange-500 text-orange-400 shadow-[0_0_20px_5px_rgba(255,165,0,0.6)]"
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-4 py-2 border-b border-orange-500 rounded-t-xl">
                                        <div className="flex items-center space-x-3">
                                            <span className="px-2 py-1 text-sm font-bold border border-orange-500 rounded-md bg-black/40">
                                                Avyakt 4.0
                                            </span>
                                            <span className="text-lg font-mono font-semibold">{item.event.name}.tva</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,165,0,0.9)]"></span>
                                            <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,165,0,0.9)]"></span>
                                            <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,165,0,0.9)]"></span>
                                        </div>
                                    </div>

                                    {/* JSON Content */}
                                    <div className="h-[400px] bg-black/60 font-mono text-xs p-4 text-orange-400 overflow-auto rounded-b-xl">
                                        <pre>{JSON.stringify({
                                            ...cleaned,
                                            event: {
                                                name: item.event.name,
                                                category: item.event.category,
                                                registrationStatus: item.event.registrationStatus
                                            }
                                        }, null, 2)}</pre>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Participation
