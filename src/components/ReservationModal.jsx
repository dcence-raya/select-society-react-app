// src/components/ReservationModal.jsx
import { useAppContext } from '../contexts/AppContext';
import { useState } from 'react';

const ReservationModal = () => {
  const { isModalOpen, toggleModal, isSubmitted, reservationData, submitReservation } =
    useAppContext();

  const [formData, setFormData] = useState({
    name: '',
    guests: '2 Persons',
    date: '',
    time: '19:00',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitReservation(formData);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-surface/80 backdrop-blur-xl"
        onClick={toggleModal}
      />
      {/* Modal card */}
      <div className="relative z-10 w-full max-w-2xl mx-4 bg-surface/80 backdrop-blur-xl shadow-[0px_24px_48px_rgba(0,0,0,0.4)] p-8 md:p-12">
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center">
              Request a Table
            </h2>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-outline-variant/30 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body"
                  />
                </div>
                <div className="relative">
                  <label className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase mb-2 block">
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-outline-variant/30 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body appearance-none"
                  >
                    <option className="bg-surface text-on-surface">2 Persons</option>
                    <option className="bg-surface text-on-surface">4 Persons</option>
                    <option className="bg-surface text-on-surface">6+ Persons</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase mb-2 block">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-outline-variant/30 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body"
                  />
                </div>
                <div className="relative">
                  <label className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase mb-2 block">
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-outline-variant/30 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body appearance-none"
                  >
                    <option className="bg-surface text-on-surface">19:00</option>
                    <option className="bg-surface text-on-surface">20:30</option>
                    <option className="bg-surface text-on-surface">22:00</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-5 font-label tracking-[0.3em] uppercase hover:bg-primary-container transition-all"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <span className="material-symbols-outlined text-secondary text-6xl mb-6 block">
              check_circle
            </span>
            <h3 className="text-2xl md:text-3xl font-headline mb-4">
              Reservation Confirmed
            </h3>
            <p className="text-on-surface-variant font-body mb-2">
              Thank you, {reservationData?.name}.
            </p>
            <p className="text-on-surface-variant font-body text-sm">
              {reservationData?.guests} on {reservationData?.date} at{' '}
              {reservationData?.time}
            </p>
            <button
              onClick={toggleModal}
              className="mt-8 bg-primary text-on-primary px-8 py-3 font-label text-xs tracking-[0.2em] uppercase hover:bg-primary-container transition-all"
            >
              Close
            </button>
          </div>
        )}
        {/* Close button (top right) */}
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>
    </div>
  );
};

export default ReservationModal;