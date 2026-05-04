// src/contexts/AppContext.jsx
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    if (isSubmitted) {
      // Reset success state when reopening
      setIsSubmitted(false);
      setReservationData(null);
    }
  };

  const submitReservation = (data) => {
    setReservationData(data);
    setIsSubmitted(true);
    // Keep modal open to show confirmation
  };

  const value = {
    isModalOpen,
    toggleModal,
    reservationData,
    isSubmitted,
    submitReservation,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};