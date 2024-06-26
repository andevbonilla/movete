import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Movete',
    description: "Learn about Movete's Privacy Policy"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>{children}</>
    )
};