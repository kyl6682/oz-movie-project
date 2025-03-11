import { useMediaQuery } from "react-responsive";
import useDebounce from "./useDebounce";

const useDevice = () => {
  const isMobileTemp = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabletTemp = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });
  const isPCTemp = useMediaQuery({ query: "(min-width: 1025px)" });

  const isMobile = useDebounce(isMobileTemp, 300)
  const isTablet = useDebounce(isTabletTemp, 300)
  const isPC = useDebounce(isPCTemp, 300)

  return { isMobile, isTablet, isPC };
};

export default useDevice;