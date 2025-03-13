import { useTheme } from "styled-components";

export const HamburgerIcon = () => {
  const theme = useTheme()
  const iconColor = theme.icon
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
        fill={iconColor}
      />
    </svg>
  );
};
