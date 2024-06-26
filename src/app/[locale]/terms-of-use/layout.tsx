import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of use | Movete',
    description: "Get to know Movete's terms of use"
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