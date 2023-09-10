import Link from "next/link";
import Image from "next/image";

export default function Card({ data, className, image }) {
  return (
    <div className={className}>
      <Image alt="" src={image} className={data.imgClass || ""} />
      <div className="content">
        <h3 className="title">{data.title}</h3>
        <div className="desc">
          <span className="lang">{data.lang}</span>
          {data.desc}
        </div>
        <div className="actions">
          <Link href={data.slug}>Details</Link>
          <Link href={data.repo}>Repo</Link>
        </div>
      </div>
    </div>
  );
}
