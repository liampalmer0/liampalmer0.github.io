import Badge from "./badge";

export default function ContactSection({ items }) {
  let colors = ["orange", "pink", "green"];
  return (
    items && (
      <section className="subsection-block contact" id="contact">
        <div className="contact-desc">
          {items.map((badgeData, i) => (
            <Badge key={badgeData.label} className={colors[i] + " note"} {...badgeData} />
          ))}
        </div>
      </section>
    )
  );
}
