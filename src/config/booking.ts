/**
 * Online booking stays off until a real booking service, inventory check,
 * and payment integration exist.
 *
 * To enable booking end-to-end (PDP + bag + /checkout):
 * set all three flags below to `true`.
 *
 * Cart and wishlist keep working while booking is locked.
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
