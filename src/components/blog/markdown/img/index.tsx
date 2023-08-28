import Image from "next/image";

export default function Img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        height: "300px",
      }}
    >
      <Image
        src={props.src || ""}
        alt={props.alt || ""}
        fill
        objectFit="contain"
        objectPosition="center"
      />
    </div>
  );
}
