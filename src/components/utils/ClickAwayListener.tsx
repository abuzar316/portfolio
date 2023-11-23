import { useEffect, useRef } from "react";

interface awayType {
  children: React.ReactNode;
  clickAway: () => void;
}

const ClickAwayListener = ({
  children,
  clickAway,
}: awayType) => {
  const container = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      container.current &&
      !container.current.contains(event.target as Node) &&
      event.target !== container.current
    ) {
      clickAway();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return <div ref={container}>{children}</div>;
};

export default ClickAwayListener;
