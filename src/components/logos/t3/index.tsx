interface T3LogoProps {
  className?: string;
}

export function T3Logo({ className }: T3LogoProps) {
  return (
    <svg
      width={258}
      height={199}
      viewBox="0 0 258 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M165.735 25.07L188.947.972H0.466V25.07h165.269z"
        fill="currentColor"
      />
      <path
        d="M163.981 96.324l90.041-92.64-32.816-.001-75.589 77.078 18.364 15.563zM233.658 131.418c0 23.657-19.178 42.836-42.835 42.836-19.108 0-35.31-12.516-40.823-29.815l-3.375-10.591-19.296 19.295 1.763 4.193c10.123 24.085 33.942 41.018 61.731 41.018 36.968 0 66.936-29.968 66.936-66.936 0-24.481-13.36-45.678-32.803-57.328l-4.561-2.732-17.668 17.895 8.061 4.255c13.615 7.188 22.87 21.473 22.87 37.91z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.263 192.669V45.646H64.165v147.023h24.097z"
        fill="currentColor"
      />
    </svg>
  );
}
