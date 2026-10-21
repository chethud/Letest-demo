export type VerificationStatus = "verified" | "not_found" | "error";

export type VerificationRecord = {
  serial: string;
  productName: string;
  giTag: string;
  zariNote: string;
  silkNote: string;
};

export type VerificationResponse =
  | { status: "verified"; record: VerificationRecord }
  | { status: "not_found"; serial: string }
  | { status: "error"; message: string };

/**
 * Isolates saree serial checks so a real KSIC registry API can be wired later.
 * Does not treat example codes as authentic records.
 */
export async function verifySareeSerial(rawCode: string): Promise<VerificationResponse> {
  const serial = rawCode.trim().toUpperCase();

  if (!serial) {
    return { status: "error", message: "Enter your saree serial code to continue." };
  }

  // Future integration point:
  // const response = await fetch(`/api/verify-serial?code=${encodeURIComponent(serial)}`);
  // if (!response.ok) return { status: "error", message: "Unable to reach the registry. Please try again." };
  // return await response.json();

  await new Promise((resolve) => setTimeout(resolve, 450));

  return { status: "not_found", serial };
}
