import Link from "next/link";

export default function Card({ data, className }) {
  return (
    <div className={className}>
      <img alt="" src={data.preview} className={data.imgClass || ""} />
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
