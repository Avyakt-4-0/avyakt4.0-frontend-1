'use client'
import React, { use, useEffect, useState, useTransition } from 'react'
import { motion } from "framer-motion";
import { IBM_Plex_Mono, Jersey_10 } from 'next/font/google'
import { useSearchParams } from 'next/navigation';
import { useForm, Controller } from "react-hook-form";
import Input from '../../components/Input';
import Select from '../../components/Select';
import { checkIsAuthenticated } from '@/lib/auth/checkIsAutheticatedServerAction';
import { getUserDetails } from '@/lib/auth/getUserDetailsServerAction';
import Image from 'next/image';
import { createEvent } from '@/lib/events/server-action';
import { AnimatePresence } from 'motion/react';
import { toast } from '@/hooks/use-toast';

const jerseyFont = Jersey_10({
    weight: '400',
    subsets: ['latin'],
})

const ibmFont = IBM_Plex_Mono({
    weight: '400',
    subsets: ['latin'],
})
interface FormValues {
    teamName?: string;
    leaderName: string;
    leaderEmail: string;
    phone: string;
    gender: string;
    teamSize: string;
    members?: { memberName?: string, memberEmail: string, memberPhone?: string }[];
    upiId: string;
    transactionId: string;
}
const whatsappGroupLinks: Record<string, string> = {
    SPORTS: "https://chat.whatsapp.com/IZ5XjH8HxMJDdpluiQ8gNK?mode=ac_t",
    CULTURAL: "https://chat.whatsapp.com/LyONEKHhUzm8x8IjGQDibY?mode=ac_t",
    NONTECH: "https://chat.whatsapp.com/LuzUGBymOPu43rzAWdqn5Q?mode=ac_t",
    TECH: "https://chat.whatsapp.com/E6QXTG8OSpzIbw7SBCcFeL?mode=ac_t",
};

function Page({
    params,
}: {
    params: Promise<{ event_id: string }>
}) {
    const { event_id } = use(params)
    const searchParams = useSearchParams()
    const eventName = searchParams.get("name")
    const teamSize = Number(searchParams.get("teamSize") || "1")
    const minTeamSize = Number(searchParams.get("minTeamSize") || teamSize)
    const eventRegistrationFee = Number(searchParams.get("registrationFee") || "0")
    const eventCategory = searchParams.get("category")
    const [userDetails, setUserDetails] = useState<{ name: string | null; email: string | null; image: string | null }>();
    const [isPending, startTransition] = useTransition()
    const [showSuccess, setShowSuccess] = useState(false)
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm<FormValues>({
        defaultValues: {
            gender: "ALL",
            teamSize: teamSize.toString(),
            upiId: "",
            transactionId: "",
            leaderEmail: userDetails?.email || "",
            leaderName: userDetails?.name || "",
            members: Array.from({ length: teamSize - 1 }, (_, i) => ({
                memberEmail: "",
            })),
        },
    })
    useEffect(() => {
        const fetchAuthStatusAndDetails = async () => {
            const authStatus = await checkIsAuthenticated();
            if (authStatus) {
                const details = await getUserDetails();
                setUserDetails(details);
                reset((prev) => ({
                    ...prev,
                    leaderName: details?.name || "",
                    leaderEmail: details?.email || "",
                }));
            }
        };
        fetchAuthStatusAndDetails();
    }, [reset]);


    const onSubmit = (data: FormValues) => {
        console.log(data)
        startTransition(async () => {
            if (teamSize > 1) {
                const members = data.members?.map((member) => ({
                    email: member.memberEmail,
                })) || [];
                const response = await createEvent({
                    eventId: event_id,
                    leadEmail: data.leaderEmail,
                    upiId: data.transactionId,
                    members: [{ email: data.leaderEmail, name: data.leaderName, phone: data.phone }, ...members]
                });
                console.log(response)
                if (response?.success) {
                    setShowSuccess(true)
                }
                else {
                    toast({
                        variant: "default",
                        title: response?.message,
                        description: response?.message,
                    })
                }
            } else {
                const response = await createEvent({
                    eventId: event_id,
                    leadEmail: data.leaderEmail,
                    upiId: data.transactionId,
                    members: [{
                        email: data.leaderEmail,
                        name: data.leaderName,
                        phone: data.phone
                    }]
                });
                console.log(response)
                if (response?.success || response?.registrationId) {
                    setShowSuccess(true)
                }
                else {
                    toast({
                        variant: "default",
                        title: response?.message,
                        description: response?.message,
                    })
                }
            }
        })
    }

    return (
        <div className='px-4'>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`${jerseyFont.className} lg:text-4xl text-3xl font-bold text-[#742409]`}
            >
                Enter the details for {eventName}
            </motion.h1>
            {/* ✅ Success Popup */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    >
                        <motion.div
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            exit={{ y: 50 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#F4934359] rounded-2xl shadow-lg p-8 text-center max-w-md"
                        >
                            <h2 className="text-2xl font-bold text-white">
                                🎉 Thank you!
                            </h2>
                            <p className="mt-2 text-white">
                                Thank you for participating in <span className="font-semibold">{eventName}</span>.
                                You will receive a confirmation email shortly.
                            </p>
                            <div className="flex gap-4 justify-center ">
                                <a href={whatsappGroupLinks[eventCategory || ""]} target="_blank" rel="noopener noreferrer"
                                    className="mt-4 px-4 py-2 bg-[#f47209] text-white rounded-lg"
                                >
                                    Join WhatsApp Group
                                </a>
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="mt-4 px-4 py-2 bg-[#f47209] text-white rounded-lg"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex lg:flex-row flex-col gap-24'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>

                        {/* Team Name*/}
                        {teamSize > 1 && (
                            <div>
                                <Input
                                    label="Your Team Name"
                                    error={errors.teamName?.message}
                                    {...register("teamName", {
                                        required: "Team name is required",
                                    })}
                                />
                            </div>
                        )}

                        {/* Leader Name */}
                        <Input
                            label="Your Name / Team Lead Name"
                            error={errors.leaderName?.message}
                            {...register("leaderName", { required: "Leader name is required" })}
                            readOnly
                        />
                        <Input
                            label='Your Email / Team Leader Email'
                            error={errors.leaderEmail?.message}
                            {...register("leaderEmail", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@giet\.edu$/i,
                                    message: "Please use your student email to login in.",
                                }
                            })}
                            readOnly
                        // defaultValue={userDetails?.email || ""}
                        // disabled={userDetails?.email === ""}
                        />
                        {/* Phone Number */}
                        <Input
                            label="Your Phone Number"
                            error={errors.phone?.message}
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10-digit phone number",
                                },
                            })}
                        />

                        {/* Gender + Team Size */}
                        <div className='flex gap-4 w-full'>
                            <Controller
                                control={control}
                                name="gender"
                                render={({ field }) => (
                                    <Select
                                        label="Gender"
                                        options={[
                                            { value: "MALE", label: "Male" },
                                            { value: "FEMALE", label: "Female" },
                                            { value: "ALL", label: "All" },
                                        ]}
                                        {...field}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="teamSize"
                                render={({ field }) => (
                                    <Select
                                        label="Team Size"
                                        options={Array.from({ length: 11 }, (_, i) => ({
                                            value: (i + 1).toString(),
                                            label: (i + 1).toString(),
                                        }))}
                                        {...field}
                                        isDisabled
                                    />
                                )}
                            />
                        </div>

                        {/* Dynamic Player Names */}
                        {teamSize > 1 &&
                            Array.from({ length: teamSize - 1 }, (_, i) => (
                                <div key={i} className='flex gap-4 w-full'>
                                    <Input
                                        label={`Member ${i + 1} Email`}
                                        error={errors.members?.[i]?.memberEmail?.message}
                                        {...register(`members.${i}.memberEmail` as const, {
                                            required:
                                                i < (minTeamSize - 1)
                                                    ? `Member ${i + 1} email is required`
                                                    : false,
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@giet\.edu$/i,
                                                message: "Please use your student email",
                                            },
                                            validate: (value: string) => {
                                                if (value && value === userDetails?.email) {
                                                    return "Don't use Team Leader email use another email";
                                                }
                                                return true;
                                            }
                                        })}
                                    />
                                </div>
                            ))}

                        {eventRegistrationFee > 0 && <>
                            <Input
                                label="Enter UPI Id"
                                error={errors.upiId?.message}
                                {...register("upiId", { required: "UPI ID is required" })}
                            />
                            <Input
                                label="Enter Transaction Id"
                                error={errors.transactionId?.message}
                                {...register("transactionId", { required: "Transaction ID is required" })}
                            />
                        </>}
                        {eventRegistrationFee == 0 && <button
                            type="submit"
                            className="mt-6 px-6 py-2 bg-[#F5610D54] text-white font-bold border-4 border-[#AF6338]"
                        >
                            {isPending ? "Submitting..." : "Submit"}
                        </button>}
                    </div>

                    {/* Payment Instructions */}
                    {eventRegistrationFee > 0 && <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <div className='flex justify-center items-center p-4 border-4 border-[#652703]'>
                            <Image src="/images/qr.jpg" alt="payment" width={500} height={500} />
                        </div>
                        <div className={`${ibmFont.className} text-[#F8861EA6]`}>
                            <p className='text-start'>1.Scan the QR Code to Pay the respective amount for the event.</p>
                            <p className='text-start'>2.Put your UPI ID in the field.</p>
                            <p className='text-start'>3.Put your UTR/Transaction Id in the Field.</p>
                            <p className='text-start'>4.Upon success you will get an verification mail with necessary details.</p>
                            <p className='text-start'>5.Join the Whatsapp Group for further Communication <a href={whatsappGroupLinks[eventCategory || ""]} target="_blank" rel="noopener noreferrer" className="text-[#F5610D54] font-bold">here</a></p>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 px-6 py-2 bg-[#F5610D54] text-white font-bold border-4 border-[#AF6338]"
                        >
                            {isPending ? "Submitting..." : "Submit"}
                        </button>
                    </div>}
                </div>
            </form>
        </div>
    )
}

export default Page
