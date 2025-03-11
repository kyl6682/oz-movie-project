import { useMediaQuery } from "react-responsive";

const useDevice = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });
  const isPC = useMediaQuery({ query: "(min-width: 1025px)" });

  return { isMobile, isTablet, isPC };
};

export default useDevice;