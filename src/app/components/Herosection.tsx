"use client";
import { Spotlight } from "./ui/spotlight"
import { Button } from "./ui/moving-border"

export default function Herosection(){
    return (
        
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
            <div className="p-4 relative z-10 w-full text-center" >
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master the modern skills
            </h1>
            <p  className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Unlock your potential with our cutting-edge ed-tech platform, designed to equip you with the modern skills that drive success in today’s digital landscape.
                
            </p>
            </div>
            <div>
                <Button borderRadius="1.75rem">
                   Explore Course
                </Button>
            </div>
           <div>

           </div>
        </div>
    )
}