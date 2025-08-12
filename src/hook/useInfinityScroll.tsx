interface 


export function useInfinityScroll() {

  // 옵저버 콜백 Ref
  const observerRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (topObserverRef.current) {
        topObserverRef.current.disconnect();
      }

      topObserverRef.current = new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting &&
            !observerStateRef.current.isTopFetching &&
            observerStateRef.current.hasMoreHeadFeeds
          ) {
            setIsTopFetching(true);
            renderHeadFeeds().finally(() => setIsTopFetching(false));
          }
        },
        { threshold: 0.1 }
      );

      if (node) {
        topObserverRef.current.observe(node);
      }
    },
  );

}
