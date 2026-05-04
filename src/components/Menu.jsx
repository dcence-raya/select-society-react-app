import { useEffect, useState } from "react";

function MenuCard({ title, subtitle, imgSrc, imgAlt }) {
  return (
    <div className="group relative aspect-square overflow-hidden bg-surface-container">
      <img
        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
        src={imgSrc}
        alt={imgAlt}
        loading="lazy"
      />

      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
        <h3 className="text-xl md:text-2xl font-headline mb-2">{title}</h3>
        <p className="text-on-surface-variant font-label text-[10px] tracking-widest uppercase">{subtitle}</p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchdishes() {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=spanish");
        const data = await res.json();
        setMeals(data.meals?.slice(0, 4) || []);
      } catch (error) {
        console.error("Failed to fetch dishes", error);
      } finally {
        setLoading(false);
      }
    }
    fetchdishes();
  }, []);

  if (loading) {
    return (
      <section
        id="menu"
        className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="px-6 md:px-12 mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-headline text-center">Curated Flavors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              aria-label="Loading menu items"
              key={idx}
              className="aspect-square bg-surface-container animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  const subtitles = ["Heritage Reimagined", "The Royal Silk Route", "Global Modernism", "The Liquid Gallery"];

  return (
    <>
      <section id="menu" className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="px-6 md:px-12 mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-headline text-center">Curated Flavors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {meals.map((meal, index) => (
            <MenuCard
              key={meal.idMeal}
              title={meal.strMeal}
              subtitle={subtitles[index] || "A Nepali classic"}
              imgSrc={meal.strMealThumb}
              imgAlt={meal.strMeal}
            />
          ))}
        </div>
      </section>
    </>
  );
}
