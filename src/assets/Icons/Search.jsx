import { useTheme } from "styled-components";

export const SearchIcon = () => {
  const theme = useTheme();
  const iconColor = theme.icon;
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5997 20L16.822 16.2156M18.9155 11.1579C18.9155 13.0563 18.1614 14.8769 16.819 16.2193C15.4767 17.5617 13.656 18.3158 11.7576 18.3158C9.85923 18.3158 8.0386 17.5617 6.69623 16.2193C5.35386 14.8769 4.59973 13.0563 4.59973 11.1579C4.59973 9.2595 5.35386 7.43886 6.69623 6.0965C8.0386 4.75413 9.85923 4 11.7576 4C13.656 4 15.4767 4.75413 16.819 6.0965C18.1614 7.43886 18.9155 9.2595 18.9155 11.1579V11.1579Z"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
