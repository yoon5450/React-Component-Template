import type { ReactNode } from "react";

interface Props {
  type?: "default" | "image" | "line";
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  children?: ReactNode;
  desc: string;
  linkSrc: string;
}

function CardTailwind({
  type = "default",
  imageSrc,
  imageAlt = "",
  title,
  desc,
  children,
}: Props) {
  return (
    <article className="p-2 border-2 border-black">
      <img src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
      <div>{desc}</div>
      {children}
    </article>
  );
}
export default CardTailwind;
