import { AboutKookieAI } from "./about-kookie-ai";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kookie AI - Kushagra Dhawan",
  description:
    "Kookie AI is a UX-first desktop web product where conversations live as a branching graph of nodes. Not a chatbot. A conversation OS.",
  alternates: {
    canonical: "/kookie-ai",
  },
};

export default function KookieAIPage() {
  return <AboutKookieAI />;
}
