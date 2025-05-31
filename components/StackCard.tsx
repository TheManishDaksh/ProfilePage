import React from "react"

interface StackCardProps{
    icon : React.ReactNode;
    text : string;
}
export default function StackCard({icon, text}:StackCardProps){
    return(
        <div className="border border-slate-600 max-w-fit px-2 py-1 rounded-lg">
            <div className="flex gap-2 hover:scale-105 transition-all duration-300 cursor-default items-center">
                <div>
                {icon}
            </div>
            <div className="text-sm">
                {text}
            </div>
            </div>
        </div>
    )
}