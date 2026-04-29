// src/components/Experience.jsx
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 bg-surface grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center"
    >
      <div className="md:col-span-5 md:col-start-2 order-2 md:order-1">
        <span className="text-secondary font-label text-xs tracking-[0.3em] uppercase mb-6 block">
          The Silent Curator
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline leading-tight mb-8">
          Exclusivity Defined by the Horizon
        </h2>
        <p className="text-on-surface-variant font-body text-base md:text-lg leading-relaxed mb-12 max-w-md">
          Above the rhythmic pulse of Biratnagar lies a sanctuary designed for the discerning.
          At Select Society, we treat the rooftop as a canvas—a composition of polished stone
          and dark timber where the atmosphere is as curated as the cuisine.
        </p>
        <a
          href="#"
          className="text-secondary font-label text-sm tracking-widest uppercase border-b border-secondary/30 hover:border-secondary transition-all pb-1"
        >
          Our Philosophy
        </a>
      </div>
      <div className="md:col-span-6 order-1 md:order-2">
        <div className="aspect-[4/5] relative">
          <img
            className="w-full h-full object-cover"
            alt="Close-up of a high-end social lounge setting at night"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkX95RWcW3hSo6nKsXVbCTCiyx7qXe3w-6tzgVqKqPqsHJevUgXyeWyIf075IP4TOOOS0I9RNiI92UOVFMMtlcPfNf79osXDm_Uq70VbP4X2JYvZ3-EDPU_rVQg4VldFE6qTESM9OSM8E4uWgFt2swZbNCdVd5rhr_YQaL8EB_B_qUJzziwB5fEQE4mSzCCB2edTZWJmJIOWnjUiwvEi3C6AvR_o9RbYnhYGwkLiDv24BtnsYvcEv1c_az9DlOMGMSNQM2ay_K3rxi"
          />
          <div className="absolute -bottom-8 -left-8 bg-surface-container-high p-8 hidden md:block">
            <p className="font-headline italic text-xl text-on-surface">
              "The heights of social elegance."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;



