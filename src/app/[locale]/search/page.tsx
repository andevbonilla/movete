import { Dela_Gothic_One } from "@next/font/google";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export default function Index() {

    return (
        <>
            <Navbar />
            <main className='text-white mt-10 px-[10%]'>
                <section className="h-[90vh]">
                    <h1 className={`text-white ${delaGothic.className} text-xl mt-[6rem] mb-5`}>Search a profile</h1>
                    <input type="text" className="w-full rounded-full py-3 px-4 mb-6 text-black" placeholder="Search" />
                </section>
            </main>
            <Footer />
        </>
    );
}