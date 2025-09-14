'use client'
import React, { use, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { IBM_Plex_Mono, Jersey_10 } from 'next/font/google'
import { useSearchParams } from 'next/navigation';
import { useForm, Controller } from "react-hook-form";
import Input from '../../components/Input';
import Select from '../../components/Select';
import { checkIsAuthenticated } from '@/lib/auth/checkIsAutheticatedServerAction';
import { getUserDetails } from '@/lib/auth/getUserDetailsServerAction';
import Image from 'next/image';

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
    members?: { memberName: string, memberEmail: string, memberPhone: string }[];
    upiId: string;
    transactionId: string;
}

function Page({
    params,
}: {
    params: Promise<{ event_id: string }>
}) {
    const { event_id } = use(params)
    const searchParams = useSearchParams()
    const eventName = searchParams.get("name")
    const teamSize = Number(searchParams.get("teamSize") || "1")
    const eventRegistrationFee = Number(searchParams.get("registrationFee") || "0")
    const [userDetails, setUserDetails] = useState<{ name: string | null; email: string | null; image: string | null }>();
    useEffect(() => {
        const fetchAuthStatusAndDetails = async () => {
            const authStatus = await checkIsAuthenticated();
            if (authStatus) {
                const details = await getUserDetails();
                setUserDetails(details);
            }
        };

        fetchAuthStatusAndDetails();
    }, []);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            gender: "ALL",
            teamSize: teamSize.toString(),
            upiId: "",
            transactionId: "",
            leaderEmail: userDetails?.email || "",
            leaderName: userDetails?.name || "",
            members: Array.from({ length: teamSize }, (_, i) => ({
                memberName: "",
            })),
        },
    })

    const onSubmit = (data: FormValues) => {
        console.log("✅ Form Submitted", data)
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex lg:flex-row flex-col gap-24'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>

                        {/* Team Name*/}
                        {teamSize > 1 && (
                            <div>
                                <Input
                                    label="Your Team Name"
                                    error={errors.teamName?.message}
                                    {...register("teamName", { required: "Team name is required" })}
                                />
                            </div>
                        )}

                        {/* Leader Name */}
                        <Input
                            label="Your Name / Team Lead Name"
                            error={errors.leaderName?.message}
                            {...register("leaderName", { required: "Leader name is required" })}
                            value={userDetails?.name || ""}
                        />
                        <Input
                            label='Your Email / Team Leader Email'
                            error={errors.leaderEmail?.message}
                            {...register("leaderEmail", { required: "Email is required" })}
                            value={userDetails?.email || ""}
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
                            Array.from({ length: teamSize }, (_, i) => (
                                <div key={i} className='flex gap-4 w-full'>
                                    {/* <Input
                                        label={`Member ${i + 1} Name`}
                                        error={errors.members?.[i]?.memberName?.message}
                                        {...register(`members.${i}.memberName` as const, {
                                            required: `Member ${i + 1} name is required`,
                                        })}
                                    /> */}
                                    <Input
                                        label={`Member ${i + 1} Email`}
                                        error={errors.members?.[i]?.memberEmail?.message}
                                        {...register(`members.${i}.memberEmail` as const, {
                                            required: `Member ${i + 1} email is required`,
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
                            Submit
                        </button>}
                    </div>

                    {/* Payment Instructions */}
                    {eventRegistrationFee > 0 && <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        <div className='flex justify-center items-center p-4 border-4 border-[#652703]'>
                            <Image src="/images/qr-code.svg" alt="payment" width={500} height={500} />
                        </div>
                        <div className={`${ibmFont.className} text-[#F8861EA6]`}>
                            <p className='text-start'>1.Scan the QR Code to Pay the respective amount for the event.</p>
                            <p className='text-start'>2.Put your UPI ID in the field.</p>
                            <p className='text-start'>3.Put your UTR/Transaction Id in the Field.</p>
                            <p className='text-start'>4.Upon success you will get an verification mail with necessary details.</p>
                            <p className='text-start'>5.Join the Whatsapp Group for further Communication</p>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 px-6 py-2 bg-[#F5610D54] text-white font-bold border-4 border-[#AF6338]"
                        >
                            Submit
                        </button>
                    </div>}
                </div>


            </form>
        </div>
    )
}

export default Page
