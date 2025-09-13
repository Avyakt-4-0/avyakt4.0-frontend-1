import React from "react"
import { IBM_Plex_Mono } from "next/font/google"

const ibmFont = IBM_Plex_Mono({
    weight: "400",
    subsets: ["latin"],
})

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string
    error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, name, error, ...rest }, ref) => {
        return (
            <div className="flex flex-col gap-1 w-full">
                <label
                    htmlFor={name}
                    className={`text-[#F8861E80] lg:text-xl text-lg ${ibmFont.className}`}
                >
                    {label}
                </label>
                <input
                    id={name}
                    name={name}
                    ref={ref}
                    {...rest}
                    className="border-4 border-[#FFAE00] p-2 bg-[#0D0D0D] rounded w-full 
             focus:border-[#652703] focus:bg-[#0D0D0D] 
             focus:text-white focus:outline-none text-white"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        )
    }
)

Input.displayName = "Input"
export default Input
