import { useEffect, useRef, useState } from "react";

interface Props {
  onBottomHit: () => void;
  isLoading: boolean;
  hasMoreData: boolean;
  loadOnMount: boolean;
  children: React.ReactNode;
}

function InfiniteScroll({
  onBottomHit,
  isLoading,
  hasMoreData,
  children,
  loadOnMount,
}: Props) {
  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  function isBottom(ref: React.RefObject<HTMLDivElement>) {
    if (!ref.current) {
      return false;
    }
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
  }

  useEffect(() => {
    if (loadOnMount && initialLoad) {
      onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit();
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [onBottomHit, isLoading, hasMoreData]);

  return <div ref={contentRef}>{children}</div>;
}

export default InfiniteScroll;
