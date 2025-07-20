const ChevronRightIcon = ({ className = "", ...props }) => {
  return (
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      strokeWidth="0" 
      viewBox="0 0 512 512" 
      className={`shrink-0 grow-0 self-center text-slate-500 ${className}`}
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        fill="none" 
        strokeLinecap="square" 
        strokeMiterlimit="10" 
        strokeWidth="48" 
        d="M184 112l144 144-144 144"
      />
    </svg>
  );
};

export default ChevronRightIcon;