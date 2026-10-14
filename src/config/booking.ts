/**
 * Online booking stays off until a real booking service, inventory check,
 * and payment integration exist. Flipping `bookingEnabled` alone does not
 * open checkout.
 */
export const bookingConfig = {
  bookingEnabled: false,
  inventoryValidationConfigured: false,
  paymentConfigured: false,
};

export function isOnlineBookingActive() {
  return (
    bookingConfig.bookingEnabled &&
    bookingConfig.inventoryValidationConfigured &&
    bookingConfig.paymentConfigured
  );
}
