import Image from "next/image";
export default function Badge({ url, imgSrc, label, className }) {
  return (
    <div className={`badge ${className}`}>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <Image className="icon" height={64} width={64} src={imgSrc} alt="" />
        <span className="label">{label}</span>
      </a>
    </div>
  );
}
