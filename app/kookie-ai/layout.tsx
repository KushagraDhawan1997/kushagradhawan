import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kookie AI - Kushagra Dhawan",
    description: "A UX-first, desktop web product where conversations live as a branching graph of nodes. Not a chatbot. A conversation OS.",
    alternates: {
        canonical: "/kookie-ai",
    },
};

export default function KookieAILayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
