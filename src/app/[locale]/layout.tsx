import { notFound } from 'next/navigation';
import "../globals.css";
import { Lato } from "@next/font/google";

// Can be imported from a shared config
const locales = ['en', 'es'];

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
            <body className={`${lato.className} bg-black`}>{children}</body>
        </html>
    );
}