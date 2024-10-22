import { notFound } from 'next/navigation';
import "../globals.css";
import { Lato } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";


import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Link for all your social networks, to show all your sport and gym achievements | Movete',
    description: 'Create an account on Movete and show your sporting achievements to everyone'
};

// Can be imported from a shared config
const locales = ['en', 'es', 'hi', 'fr', 'ru', 'pt', 'ja', 'zh'];

const lato = Lato({
    weight: ["400", "700", "900"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
})

export default function LocaleLayout({ children, params: { locale } }: any) {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return (
        <html lang={locale}>
            <body className={`${lato.className} bg-black`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}