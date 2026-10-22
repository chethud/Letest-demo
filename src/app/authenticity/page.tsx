"use client";

import { useEffect } from "react";

/** Authenticity lives on the home page verification lab - keep old URLs working. */
export default function AuthenticityPage() {
  useEffect(() => {
    window.location.replace("/#authenticity-lab");
  }, []);

  return null;
}
