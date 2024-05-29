import { useEffect, useState } from 'react';

export const useIsMobile = (maxWidthPx = 678) => {
  const mediaQuery = `(max-width: ${maxWidthPx}px)`;

  const [isMobile, setIsMobile] = useState(
    window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQueryList.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
  }, [mediaQuery]);

  return isMobile;
};
