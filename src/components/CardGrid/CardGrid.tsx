import type { ElementType, ReactNode } from "react";
import S from "./CardGrid.module.css";

type Props = {
  children: ReactNode;
  as?: ElementType;   // "div" | "ul" | "section" 등
  minCol?: number;    // 최소 컬럼 폭(px)
  gap?: number;       // 간격(px)
  className?: string;
};

export default function CardGrid({
  children,
  as: Comp = "div",
  minCol = 200,
  gap = 16,
  className,
}: Props) {
  const style = {
    "--min-col": `${minCol}px`,
    "--gap": `${gap}px`,
  } as React.CSSProperties;

  return (
    <Comp className={`${S.grid} ${className ?? ""}`} style={style}>
      {children}
    </Comp>
  );
}