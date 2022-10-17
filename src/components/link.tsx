interface LinkProps {
    text: string;
    className?: string;
}

export function ButtonLink(props:LinkProps ) {
    return (
        <div className="flex justify-center  ">
        <button className="flex text-white font-[StreetLCG2] font-semibold py-2 px-4 text-xs hover:bg-[#ffffff1e] w-[161px] h-[38px]  rounded text-center items-center">
          {props.text}
        </button>
        </div>
        
        
    )
}