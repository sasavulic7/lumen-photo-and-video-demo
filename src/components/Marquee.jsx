/**
 * A single slow-moving line of type. Used once on the index page as the
 * transition between the portfolio and the craft sections — decorative
 * restraint is the point, so it is not reused elsewhere.
 */
export default function Marquee({ items }) {
  const run = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {run.map((word, i) => (
          <span className="marquee-item" key={i}>
            {word}
            <i className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}