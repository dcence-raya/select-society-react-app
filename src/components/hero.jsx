// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover brightness-[0.4]"
          alt="Cinematic night view of a luxurious rooftop restaurant in Biratnagar"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF3toJSBShgsddGCch1hZmmCYYH2WACaKhYIPyAenyVo9HKGvBa4Bq-1MTUllZ7R26FKLFrW5qh8DEyAg7g_RuieSzoZ1MXNGvPc832kyBbXiDZnklCV2M_iJsNPwIEwr_Z6Dmk_B0EtWupUWvRIaef5W_ntbRkdC38_fTjZV6_bbWIpcAJJ9tTHTgoOAFFp4-mfmxqyOZKJwChYdKS8EeJatBlzkUqiEC2lIpZ9KMAIWeNWY43aQVp68QSEiB29nGYNN2pbra65Bc"
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter mb-4 text-on-surface">Select Society</h1>
        <p className="text-lg md:text-xl lg:text-2xl font-body font-light text-on-surface-variant tracking-[0.15em] uppercase">An Elevated Dining Experience Above Biratnagar</p>
        <div className="mt-12 flex justify-center">
          <div className="h-24 w-[1px] bg-secondary/40"></div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-secondary animate-bounce">
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </section>
  );
};

export default Hero;
