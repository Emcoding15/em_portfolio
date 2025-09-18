"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
  return null;
}
