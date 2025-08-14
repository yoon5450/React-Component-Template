import { throttle } from "@/utils/throttle";
import { useCallback, useEffect, useRef } from "react";

type OnIntersect = () => void;

interface ParamsType {
  onIntersect: () => void;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  disabled?: boolean;
}

export function useInfiniteScroll({
  onIntersect,
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
  disabled = false,
}: ParamsType) {
  // 콜백 최신화
  const onIntersectRef = useRef<OnIntersect>(onIntersect);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    onIntersectRef.current = onIntersect;
  }, [onIntersect]);

  const throttleCallRef = useRef<() => void>(null);
  useEffect(() => {
    throttleCallRef.current = throttle(() => {
      onIntersectRef.current();
    }, 200)
  }, [])

  // 옵저버 setting 콜백 
  const setObserverCallback = useCallback(
    (node: HTMLElement | null) => {
      // 옵저버가 이미 존재한다면 정리
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (disabled || !node) return;

      if (
        typeof window === "undefined" ||
        typeof IntersectionObserver !== "function"
      ) {
        console.log('스크롤 옵저버를 로드할 수 없습니다.')
        return;
      }

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            throttleCallRef.current?.()
          }
        },
        { threshold, root, rootMargin }
      );

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [root, rootMargin, threshold, disabled]
  );

  // 언마운트시 이벤트를 삭제
  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return { setObserverCallback, observerRef };
}
