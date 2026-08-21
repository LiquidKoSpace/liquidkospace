const WHATSAPP_URL = 'https://wa.me/27835238896?text=Hi%20Liquid%20Ko%20Space%2C%20I%27d%20like%20to%20start%20an%20order';

const categories = [
  {
    title: 'Meat & Poultry',
    image: '/categories/meat-poultry.jpg',
  },
  {
    title: 'Fresh Vegetables',
    image: '/categories/fresh-vegetables.jpg',
  },
  {
    title: 'Dry Goods & Staples',
    image: '/categories/dry-goods.jpg',
  },
  {
    title: 'Packaging & Disposables',
    image: '/categories/packaging.jpg',
  },
  {
    title: 'Canned Goods & Sauces',
    image: '/categories/canned-sauces.jpg',
  },
  {
    title: 'Dairy & Essentials',
    image: '/categories/dairy-essentials.jpg',
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="section bg-grey-light">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 32px' }}>
          <h2 className="h2">
            Everything Your Kitchen Needs
          </h2>
        </div>

        <div className="grid-3">
          {categories.map((cat) => (
            <div className="category-card" key={cat.title}>
              <div className="category-image-wrap">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="category-image"
                  loading="lazy"
                />
              </div>
              <div className="category-content">
                <h3 className="category-title">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '32px' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            id="categories-cta"
          >
            Start your order
          </a>
        </div>
      </div>
    </section>
  );
}
