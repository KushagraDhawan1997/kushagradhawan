import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kookie Blocks - Kushagra Dhawan",
    description: "Kookie Blocks is a higher-level implementation of Kookie UI focused on creating reusable blocks for both app interfaces and marketing pages.",
    alternates: {
        canonical: "/kookie-blocks",
    },
};

export default function KookieBlocksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
