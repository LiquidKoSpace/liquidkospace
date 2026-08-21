export default function ProblemSection() {
  return (
    <>
      <section id="problem" className="section-problem">
        <div className="container">
          <p className="eyebrow" style={{ color: '#0B9FB5', marginBottom: '12px' }}>
            SOUND FAMILIAR?
          </p>
          <h2 className="problem-h2">
            Your mornings belong in your kitchen. Not chasing suppliers.
          </h2>
          <p className="problem-body">
            Every morning starts the same. <strong>Three supplier calls. One long drive. A menu priced on guesswork.</strong> And your kitchen hasn't even opened yet.
          </p>
        </div>
      </section>

      <section className="section-solution-closing">
        <div className="container">
          <p className="problem-closing">
            Imagine starting your week knowing your stock is already handled.
          </p>
        </div>
      </section>
    </>
  );
}
