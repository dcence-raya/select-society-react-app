

const Reservation = () => {
  return (
     <section id="reservations" className="py-24 md:py-32 relative flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20"
          alt="Abstract bokeh of city lights"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXoR5s2CePyCKfdXWQsknE6_4EiW2PHseFy1b0q1Ht-ANXTbpytQTVCkekkxPgYyMdQZZk1vhtE1tKY6KzL69H3cjyotqfKQSizd1zK8kCTachb8aw5o7ewVvjay1peOpJRhY8qHJLOGyiLbiwwXMbtQb5_qlNdaKLa23HQ7Mx6MVXDc6afGLEVN4XI2Mt2OYyXXHRzIgOjZszezl3qcrBlHCsyIleoHTnly0uxExLI8Nj88BzSMOaWPzKVBoojqPNqwIemCFJWGHw"
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-6 md:mx-auto px-6 py-16 md:px-12 md:py-20 bg-surface/80 backdrop-blur-xl shadow-[0px_24px_48px_rgba(0,0,0,0.4)]">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">Secure your place above the city</h2>
          <p className="font-label text-xs tracking-widest text-secondary uppercase">Limited Daily Reservations</p>
        </header>

        <form className="space-y-10 md:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" >
            <div className="relative">
              <label className="label">Full Name</label>
                <input
                type="text"
                className="input"
              />
            </div>

            <div>
              <label className="label">Guests</label>
              <select className="input appearance-none">
                <option className="option">2 Persons</option>
                <option  className="option">4 Persons</option>
                <option  className="option">6+ Persons</option>
              </select>
            </div>

            <div>
              <label className="label">Date</label>
              <input type="date" className="input" />
            </div>

            <div>
              <label className="label">Time</label>
              <select className="input appearance-none">
                <option  className="option">19:00</option>
                <option  className="option">20:30</option>
                <option  className="option">22:00</option>
              </select>
            </div>
          </div>

          <div className="pt-8">
            <button type="submit" className="w-full bg-primary text-on-primary py-5 font-label tracking-[0.3em] uppercase hover:bg-primary-container transition-al">
              Request Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;