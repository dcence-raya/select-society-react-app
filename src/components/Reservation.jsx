// src/components/Reservations.jsx
import { useAppContext } from '../contexts/AppContext';

const Reservation = () => {
  const { toggleModal } = useAppContext();

  return (
    <section
      id="reservations"
      className="py-24 md:py-32 relative flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20"
          alt="Abstract bokeh of city lights"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXoR5s2CePyCKfdXWQsknE6_4EiW2PHseFy1b0q1Ht-ANXTbpytQTVCkekkxPgYyMdQZZk1vhtE1tKY6KzL69H3cjyotqfKQSizd1zK8kCTachb8aw5o7ewVvjay1peOpJRhY8qHJLOGyiLbiwwXMbtQb5_qlNdaKLa23HQ7Mx6MVXDc6afGLEVN4XI2Mt2OYyXXHRzIgOjZszezl3qcrBlHCsyIleoHTnly0uxExLI8Nj88BzSMOaWPzKVBoojqPNqwIemCFJWGHw"
        />
      </div>
      <div className="relative z-10 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-headline mb-4">
          Secure your place above the city
        </h2>
        <p className="font-label text-xs tracking-widest text-secondary uppercase mb-8">
          Limited Daily Reservations
        </p>
        <button
          onClick={toggleModal}
          className="bg-primary text-on-primary px-12 py-4 font-label text-xs tracking-[0.3em] uppercase hover:bg-primary-container transition-all"
        >
          Request Your Table
        </button>
      </div>
    </section>
  );
};

export default Reservation;