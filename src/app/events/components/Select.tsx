import React from "react"
import { IBM_Plex_Mono } from "next/font/google"
import { ChevronDown } from "lucide-react"

const ibmFont = IBM_Plex_Mono({
    weight: "400",
    subsets: ["latin"],
})

type SelectProps = {
    label: string
    name: string
    options: { value: string; label: string }[]
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    value?: string
    defaultValue?: string
    isDisabled?: boolean
}

function Select({ label, name, options, onChange, value, defaultValue, isDisabled }: SelectProps) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label
                htmlFor={name}
                className={`text-[#F8861E80] text-xl ${ibmFont.className}`}
            >
                {label}
            </label>

            <div className="relative w-full">
                <select
                    id={name}
                    name={name}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    disabled={isDisabled}
                    className="appearance-none border-2 border-[#FFAE00] p-2 pr-10 
                     bg-[#1A1A1A] text-[#FA861B] rounded w-full 
                     focus:border-[#FA861B] focus:outline-none"
                >
                    <option value="" disabled className="bg-[#0D0D0D] text-[#FA861B]">
                        Select {label}
                    </option>
                    {options.map((opt) => (
                        <option
                            key={opt.value}
                            value={opt.value}
                            className="bg-[#0D0D0D] text-[#FA861B]"
                        >
                            {opt.label}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FA861B] pointer-events-none"
                    size={20}
                />
            </div>
        </div>
    )
}

export default Select
