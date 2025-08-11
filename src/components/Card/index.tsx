import S from "./index.module.css";
import altImg from "@/assets/react.svg";

interface Props {
  type?: "default" | "image" | "line";
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  content: string;
  linkSrc:string
}

// 기본 이미지 임시로 설정
function Card({
  type = "default",
  imageSrc = altImg,
  imageAlt = "",
  title,
  content,
}: Props) {
  return (
    <article className={`${S.card} ${S[type]}`}>
      {type === "image" && (
        <figure className={S.media}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`${S.cardImg}`}
          />
        </figure>
      )}
      {title && <h3 className={`${S.cardTitle}`}>{title}</h3>}
      <div className={`${S.cardContent}`}>{content}</div>
    </article>
  );
}

export default Card;
