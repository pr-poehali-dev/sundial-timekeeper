export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="2" />
      <circle cx="20" cy="20" r="4" fill="hsl(48,100%,50%)" />
      <line x1="20" y1="2" x2="20" y2="10" stroke="white" strokeWidth="2" />
      <line x1="20" y1="30" x2="20" y2="38" stroke="white" strokeWidth="2" />
      <line x1="2" y1="20" x2="10" y2="20" stroke="white" strokeWidth="2" />
      <line x1="30" y1="20" x2="38" y2="20" stroke="white" strokeWidth="2" />
      <text x="48" y="26" fill="white" fontSize="18" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="2">SANCE</text>
      <text x="48" y="37" fill="hsl(48,100%,50%)" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="4" opacity="0.8">TEAM</text>
    </svg>
  );
};
