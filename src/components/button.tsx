interface ButtonProps {
    text: string;
    className?: string;
}

export function Button(props:ButtonProps ) {
    return (
        <button type="button" className="py-3 px-5 bg-[#3e3b44b2] rounded  border-2 border-transparent hover:border-[#753eef] hover:bg-[#0f0f0ff9] text-white text-sm font-[StreetLCG2] font-semibold text-center">
        {props.text}
        </button>
    )
}

