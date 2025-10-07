interface StarIconProps {
    filled: boolean;
    size?: number;
  }
export const StarIcon: React.FC<StarIconProps> = ({ filled, size = 20 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M10 1.66667L12.575 6.88333L18.3333 7.725L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85 17.5167L5.83333 11.7833L1.66667 7.725L7.425 6.88333L10 1.66667Z" 
        fill={filled ? "#C4A68C" : "#E5E7EB"}
        stroke={filled ? "#C4A68C" : "#E5E7EB"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  