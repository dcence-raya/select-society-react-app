// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-[0px_24px_48px_rgba(0,0,0,0.4)] flex justify-between items-center px-6 md:px-12 py-6">
      <div className="text-xl md:text-2xl font-headline tracking-[0.2em] text-on-surface">Select Society</div>
      <div className="hidden md:flex gap-8 lg:gap-12 items-center">
        <a
          href="#experience"
          className="section hover:border-b border-secondary pb-1">
          Experience
        </a>
        <a
          href="#menu"
          className="section hover:border-b border-secondary pb-1">
          Menu
        </a>
        <a
          href="#reservations"
          className="section hover:border-b border-secondary pb-1">
          Reservations
        </a>
      </div>
      <button className="bg-primary text-on-primary px-5 md:px-8 py-2 md:py-3 font-label text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all hover:bg-primary-container hover:text-on-primary-container scale-95 duration-500">Book a Table</button>
    </nav>
  );
};

export default Navbar;
