export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 md:py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 border-t border-white/5">
      <div className="text-lg font-headline text-on-surface ">Select Society</div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        <a
          href="#"
          className="footanc">
          Privacy Policy
        </a>
        <a
          href="#"
          className="footanc">
          Terms of service
        </a>
        <a
          href="#"
          className="footanc">
          careers
        </a>
        <a
          href="#"
          className="footanc">
          press
        </a>
      </div>

      <div className="font-body text-xs tracking-[0.1em] uppercase text-on-surface-variant opacity-60">© 2026 Select Society. All Rights Reserved.</div>
    </footer>
  );
}
