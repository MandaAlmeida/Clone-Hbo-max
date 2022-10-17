import { clsx } from 'clsx';

interface PerfilProps {
    textLink: string;
    textP: string;
    className?: string;
}

export function Perfil({textLink, textP, className }:PerfilProps ) {
    return (
        <div className=" transition  duration-500 flex flex-col text-white m-3 font-[StreetLCG2] font-normal items-center justify-center hover:-translate-y-1 hover:scale-125 w-[163px]">
        <div className={clsx(" flex items-center justify-center rounded-[100%] w-[136px] h-[136px]",className )}>
            <a href='#' className="text-[50px] "><div className=" flex  bg-[#000000cc] rounded-[100%] w-[126px] h-[126px] items-center justify-center"> 
        {textLink}
        </div></a></div> 
        <div className="flex items-end justify-center mt-3">
            <p className="text-base">{textP}</p>
        </div>
        </div>
        
    )
}