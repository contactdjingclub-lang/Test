const coffees = [
  {
    name: 'Golden Hour',
    notes: 'Honey · stone fruit · milk chocolate',
    origin: 'Huila, Colombia',
    price: '$19',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=900&q=85',
    tag: 'Bestseller',
  },
  {
    name: 'Slow Sunday',
    notes: 'Blueberry · cacao · brown sugar',
    origin: 'Guji, Ethiopia',
    price: '$21',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=900&q=85',
    tag: 'Small batch',
  },
  {
    name: 'The Daily',
    notes: 'Toffee · toasted almond · orange',
    origin: 'Cajamarca, Peru',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85',
    tag: 'Everyday favorite',
  },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">A little more joy in your inbox — free shipping on your first order <span>→</span></div>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Daybreak Coffee home"><span className="sun-mark">✳</span> daybreak<span className="wordmark-small">COFFEE CO.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#coffee">Shop coffee</a><a href="#story">Our story</a><a href="#ritual">Brew guides</a>
        </nav>
        <a className="header-cta" href="#coffee">Find your coffee <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> GOOD MORNINGS, GROWN HERE</p>
          <h1>Make room<br />for a <em>better</em><br />morning.</h1>
          <p className="hero-description">Coffee with a little more sunshine. Thoughtfully sourced, freshly roasted, and always worth slowing down for.</p>
          <div className="hero-actions"><a className="button button-dark" href="#coffee">Shop our coffee <span>↗</span></a><a className="text-link" href="#story">Get to know us <span>↓</span></a></div>
          <div className="hero-note"><span className="note-star">✳</span><span>GOOD COFFEE. GOOD PEOPLE.<br /><strong>NO FUNNY BUSINESS.</strong></span></div>
        </div>
        <div className="hero-image" role="img" aria-label="A sunlit cup of freshly brewed coffee on a table">
          <div className="image-label"><span>ROASTED WITH CARE</span><span>✳</span><span>IN SMALL BATCHES</span></div>
          <div className="hero-sticker"><span>YOUR<br />NEW<br /><em>RITUAL</em></span><b>✳</b></div>
        </div>
        <div className="hero-bottom"><span>01 — 03</span><span className="bottom-rule"/><span>FIND YOUR NEW FAVORITE</span><span className="scroll-hint">SCROLL TO FEEL GOOD ↓</span></div>
      </section>

      <section className="promise-strip" aria-label="Our promises">
        <span>✳ &nbsp; TRACEABLE & ETHICAL</span><span>✳ &nbsp; ROASTED FRESH, ALWAYS</span><span>✳ &nbsp; GOOD FOR YOUR CUP & THE PLANET</span>
      </section>

      <section className="coffee-section section-wrap" id="coffee">
        <div className="section-heading"><div><p className="eyebrow">A CUP WITH A POINT OF VIEW</p><h2>Meet your <em>morning.</em></h2></div><a className="text-link" href="#coffee">All coffees <span>↗</span></a></div>
        <div className="coffee-grid">
          {coffees.map((coffee) => (
            <article className="coffee-card" key={coffee.name}>
              <a className="product-image" href="#story" style={{ backgroundImage: `url('${coffee.image}')` }} aria-label={`Learn about ${coffee.name}`}>
                <span className="product-tag">{coffee.tag}</span><span className="quick-add" aria-hidden="true">+</span>
              </a>
              <div className="product-meta"><div><p className="origin">{coffee.origin}</p><h3>{coffee.name}</h3><p className="tasting-notes">{coffee.notes}</p></div><span className="price">{coffee.price}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-photo" role="img" aria-label="Coffee being brewed by hand" />
        <div className="story-copy"><p className="eyebrow">A LITTLE CARE GOES A LONG WAY</p><h2>Good coffee<br />should <em>feel</em><br />like something.</h2><p>We work with people who care as much as we do — from the farms where our coffee begins to the tiny roastery where every batch gets the attention it deserves.</p><a className="button button-light" href="#ritual">The Daybreak way <span>↗</span></a><span className="story-scribble">Made for<br />slow starts ☺</span></div>
      </section>

      <section className="ritual-section section-wrap" id="ritual"><p className="eyebrow">THE BEST PART OF YOUR DAY, DELIVERED</p><h2>A better cup is<br />just around the <em>corner.</em></h2><p>Pick your coffee, choose your rhythm, and let the good mornings come to you.</p><a className="button button-dark" href="#coffee">Find your ritual <span>↗</span></a></section>

      <footer className="site-footer"><a className="wordmark footer-mark" href="#home"><span className="sun-mark">✳</span> daybreak<span className="wordmark-small">COFFEE CO.</span></a><p>For the love of a slower morning.</p><div className="footer-links"><a href="#coffee">Shop</a><a href="#story">Our story</a><a href="mailto:hello@daybreak.coffee">Say hello</a></div><span className="copyright">© 2025 DAYBREAK COFFEE CO.</span></footer>
    </main>
  );
}
