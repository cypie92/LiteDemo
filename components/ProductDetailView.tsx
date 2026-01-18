'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetailView() {
    const [selectedImage, setSelectedImage] = useState("https://lh3.googleusercontent.com/aida-public/AB6AXuBO0HEe1gIzyCdjOdQX7-Aeig-XB_KGffz55WksJJIXuA44nsXq3Wtz1bpguF8Dz0rkmnW3Cx7s22vlzK81N50iOFCi6y5jovFGtHBn5qfRvoiL-nZqi250IVVScvv7GIay3kqu1TXEdQCPuOyUgRzMBuSKCeCWxL0ubrkPnDzb7ElehJAQvXDx4495-I7boHULL3U3mdj2bYC_7NQfdSdi5bAU5dC3RnnKd1BMxNahiJ3KlLPcHkAGMTezT4rHlJc2Edy1AkNyjOM");
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);
    const [finish, setFinish] = useState('matte-black');

    const images = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBO0HEe1gIzyCdjOdQX7-Aeig-XB_KGffz55WksJJIXuA44nsXq3Wtz1bpguF8Dz0rkmnW3Cx7s22vlzK81N50iOFCi6y5jovFGtHBn5qfRvoiL-nZqi250IVVScvv7GIay3kqu1TXEdQCPuOyUgRzMBuSKCeCWxL0ubrkPnDzb7ElehJAQvXDx4495-I7boHULL3U3mdj2bYC_7NQfdSdi5bAU5dC3RnnKd1BMxNahiJ3KlLPcHkAGMTezT4rHlJc2Edy1AkNyjOM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAuowvrvEOlOkS6EJlDdFhfjDsbf9MZv-VDc9qvJCdNtaec5d644rA8DMmw7zCdYP0cwxkGfQBrUtueW1pYHEcSC9XW0ITVNB00yNKtsCMCgN1QJdzYsesWTmlHpS8YxI4X5qd-V4h0WYxHL2_KkxY1E3pf-81acffdSH7hmMArh8_slC3ddYKHbLmPyA-iC1CoSgUVc3n7ZQPGFwaBAuZ1SCtk96Ik1uA4bl91JdGKP8cPQy-MWl5C6AMTxrcp0eIHBBlvwXXsLWI",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuANEkGBk3PurHSTf8zdtNGo4HaRuhmwQDQQed4IL6uJI3ddErvZdnCLR1l-zGS7V7GacHNJY-dttsHulIkw7AN8DfazgeFX83HJVrmJ1HZNp8aDWi5M-9mVfRPAtQHYZfmynPNDZhY2OkNV4Riy1059E5HC0Q0Rz6X0n_5biwySW0Y9Uak9F29NlNaB8lEw32NX77Es4Ju5fiZbY8WCO6PwHG6jc0GTzO492cmEFN4l5yFMQiCa78MR0hh6BR4c1jRijYain7oQjfk"
    ];

    return (
        <main className="flex-grow pt-20 relative bg-background-light dark:bg-background-dark">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-texture opacity-30 pointer-events-none"></div>

            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-8 relative z-10">
                <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Link className="hover:text-primary transition-colors" href="/">Home</Link>
                    <span className="mx-2">/</span>
                    <Link className="hover:text-primary transition-colors" href="/category">Collections</Link>
                    <span className="mx-2">/</span>
                    <Link className="hover:text-primary transition-colors" href="#">The Obsidian Series</Link>
                    <span className="mx-2">/</span>
                    <span className="text-secondary dark:text-white font-medium">Obsidian Grand Chandelier</span>
                </nav>
            </div>

            <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <div className="space-y-6">
                        <div className="aspect-[4/5] w-full rounded-xl overflow-hidden shadow-luxury border border-stone-100 dark:border-stone-800 bg-surface-light dark:bg-surface-dark relative group">
                            <Image alt="Obsidian Grand Chandelier - Lifestyle View" className="object-cover transition-transform duration-1000 group-hover:scale-105" src={selectedImage} fill sizes="(max-width: 768px) 100vw, 50vw" />
                            <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                                <span className="bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full shadow-sm text-secondary dark:text-white uppercase tracking-wider">
                                    Best Seller
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors relative ${selectedImage === img ? 'border-primary shadow-sm' : 'border-transparent hover:border-primary/50'}`}
                                >
                                    <Image alt={`Thumbnail ${idx + 1}`} className={`object-cover transition-all duration-300 ${selectedImage === img ? '' : 'grayscale hover:grayscale-0'}`} src={img} fill sizes="33vw" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-2">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">The Obsidian Series</span>
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary dark:text-white mb-6 leading-tight">
                            Obsidian Grand Chandelier
                        </h1>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex text-primary">
                                {[1, 2, 3, 4].map((_, i) => <span key={i} className="material-symbols-outlined text-lg fill">star</span>)}
                                <span className="material-symbols-outlined text-lg fill">star_half</span>
                            </div>
                            <span className="text-sm text-gray-500 font-medium">(24 Reviews)</span>
                            <span className="w-px h-4 bg-gray-300 dark:bg-gray-700"></span>
                            <span className="text-sm text-gray-500 font-medium">SKU: OBS-G-001</span>
                        </div>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-light">
                            <p>
                                A statement piece that redefines modern luxury. The Obsidian Grand Chandelier marries industrial matte black structural elements with delicate gold accents, creating a stunning interplay of light and shadow. Designed for double-height voids and grand dining spaces.
                            </p>
                        </div>

                        <div className="space-y-8 border-t border-b border-gray-200 dark:border-gray-800 py-8 mb-10">
                            <div>
                                <span className="block text-sm font-bold text-secondary dark:text-white uppercase tracking-wider mb-4">Finish</span>
                                <div className="flex items-center gap-4">
                                    {[
                                        { id: 'matte-black', color: '#222222', name: 'Matte Black' },
                                        { id: 'aged-brass', color: '#e0b152', name: 'Aged Brass', ring: 'secondary' },
                                        { id: 'nickel', color: '#d1d5db', name: 'Nickel' }
                                    ].map((option) => (
                                        <label key={option.id} className="cursor-pointer group relative">
                                            <input
                                                className="peer sr-only"
                                                name="finish"
                                                type="radio"
                                                checked={finish === option.id}
                                                onChange={() => setFinish(option.id)}
                                            />
                                            <span
                                                className={`block w-10 h-10 rounded-full border-2 border-transparent peer-checked:border-${option.ring || 'primary'} peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-${option.ring || 'primary'} ring-offset-background-light dark:ring-offset-background-dark shadow-sm group-hover:scale-110 transition-transform`}
                                                style={{ backgroundColor: option.color }}
                                            ></span>
                                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 peer-checked:opacity-100 transition-opacity whitespace-nowrap text-secondary dark:text-white">
                                                {option.name}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Dimensions</span>
                                    <span className="font-medium text-secondary dark:text-white">H 120cm x W 95cm</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Bulb Type</span>
                                    <span className="font-medium text-secondary dark:text-white">12 x E14 LED (Included)</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Material</span>
                                    <span className="font-medium text-secondary dark:text-white">Steel & Crystal Glass</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Warranty</span>
                                    <span className="font-medium text-secondary dark:text-white">5 Years</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="block text-sm text-gray-500 line-through decoration-primary/50">$1,850.00</span>
                                <span className="font-display text-3xl font-bold text-secondary dark:text-white">$1,450.00</span>
                            </div>
                            <div className="flex items-center bg-white dark:bg-surface-dark rounded-md border border-stone-200 dark:border-stone-700">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-secondary dark:hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm">remove</span>
                                </button>
                                <input
                                    className="w-12 text-center border-none bg-transparent p-0 font-bold text-secondary dark:text-white focus:ring-0"
                                    type="text"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-secondary dark:hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm">add</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-primary hover:bg-primary-dark text-secondary font-bold text-lg px-8 py-4 rounded-md transition-all shadow-luxury hover:shadow-lg flex items-center justify-center gap-2 group">
                                <span>Enquire Now</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button className="flex-1 bg-secondary hover:bg-black text-white font-bold text-lg px-8 py-4 rounded-md transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                <span>Add to Cart</span>
                                <span className="material-symbols-outlined text-sm">shopping_bag</span>
                            </button>
                        </div>
                        <p className="mt-4 text-xs text-gray-500 text-center sm:text-left flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-green-600">check_circle</span>
                            In stock - Ships within 24 hours
                        </p>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pb-24">
                <div className="border-b border-gray-200 dark:border-gray-800 mb-12">
                    <div className="flex gap-8 overflow-x-auto pb-px">
                        {['Product Description', 'Specification Sheet', 'Installation Guide', 'Reviews (24)'].map((tab) => {
                            const id = tab.toLowerCase().split(' ')[0];
                            const isActive = activeTab === id;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(id)}
                                    className={`pb-4 border-b-2 font-medium text-lg whitespace-nowrap transition-colors ${isActive ? 'border-primary text-secondary dark:text-white font-bold' : 'border-transparent text-gray-500 hover:text-secondary dark:hover:text-gray-300'}`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        <h3 className="font-display text-2xl font-bold text-secondary dark:text-white mb-4">The Art of Illumination</h3>
                        <p>
                            Inspired by the sharp geometric formations of volcanic glass, the Obsidian Grand Chandelier is more than a light fixture—it is a centerpiece of artistic expression. Each arm is precision-engineered to balance visual weight with structural elegance.
                        </p>
                        <p>
                            The matte black finish absorbs light, creating a stark, confident silhouette during the day. When illuminated, the fixture transforms, as the strategically placed LED bulbs reflect off the subtle gold joinery, casting a warm, inviting glow that fills the room without overpowering it.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                'Hand-finished brass detailing',
                                'Dimmable LED technology compatible',
                                'Adjustable suspension height (30cm - 150cm)',
                                'Easy-clean dust resistant coating'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-stone-100 dark:border-stone-800 shadow-soft h-fit">
                        <h4 className="font-display text-lg font-bold text-secondary dark:text-white mb-6">Design Consultation</h4>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            Not sure if this fits your space? Our lighting designers can create a 3D visualization of your room with the Obsidian Chandelier.
                        </p>
                        <button className="w-full border border-secondary dark:border-white text-secondary dark:text-white hover:bg-secondary hover:text-primary dark:hover:bg-white dark:hover:text-secondary font-bold text-sm px-4 py-3 rounded-md transition-colors uppercase tracking-wide">
                            Book Free Consult
                        </button>
                    </div>
                </div>
            </section>

            {/* Complete The Look */}
            <section className="py-20 bg-surface-light dark:bg-surface-dark border-t border-stone-100 dark:border-stone-800">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="font-display text-3xl font-bold text-secondary dark:text-white">Complete The Look</h2>
                        <Link className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-sm uppercase tracking-wide transition-colors group" href="/category">
                            View Full Collection
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Recommendation 1 */}
                        <div className="group relative">
                            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-gray-100 relative">
                                <Image alt="Obsidian Wall Sconce" className="object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTqPivco4P3cmuwg8fXTkVZ5jGd-IfXzIWZxFlailbDZCh8FkUQuV04ElUrL2mNAmLb_yEVxGrwYJF8hZQH0MtaFfMe_wsaUrR6ZUFpQjqlc5UVC4JN-24ay3pE_nUcbesoXHiuuaYBlpbaBoCVQ4dL-xp1McJa3tnIF2YCg576PtD8vVzaQbWCK0LsnZp7rnHIE3CN2jFT72JTN4T9oGXUqML6u3dgC1PdbSCSVXtrFb8DMtO6ZRDsnDEiWTyjLlD0KWQ4iG47dU" fill sizes="(max-width: 768px) 100vw, 33vw" />
                                <button className="absolute bottom-4 right-4 bg-white text-secondary w-10 h-10 rounded-full flex items-center justify-center shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                    <span className="material-symbols-outlined text-sm">shopping_bag</span>
                                </button>
                            </div>
                            <h3 className="font-display text-lg font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">Obsidian Wall Sconce</h3>
                            <p className="text-gray-500 text-sm mb-2">Wall Lighting</p>
                            <span className="font-bold text-secondary dark:text-white">$320.00</span>
                        </div>
                        {/* Recommendation 2 */}
                        <div className="group relative">
                            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-gray-100 relative">
                                <Image alt="Obsidian Smart Dimmer" className="object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo3KjFW50dAmZw8iJBYTIgBMvOyIrl0uHF1VJh1URrGWEU32Hmzaz67bi5s_vWQ3iOGzjkdb6zYvQYlPLgZwM2cs5lEgbY56KGUd6bBMm88lM6J7okeNPOxxp4bxVBl0xbJt-oXeME-_ytpI3sBJ70MsDMaMgf6_bovrpUIzK-HIi-oLdPCOilveu_8AdorD5fmL1LTfBDVAl-Rs4SS-OgnVg7D3wDHBPBNaviqdNujosTIGFUVmFNh_nHf2KTsJTSgeRMSrwzBa0" fill sizes="(max-width: 768px) 100vw, 33vw" />
                                <button className="absolute bottom-4 right-4 bg-white text-secondary w-10 h-10 rounded-full flex items-center justify-center shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                    <span className="material-symbols-outlined text-sm">shopping_bag</span>
                                </button>
                            </div>
                            <h3 className="font-display text-lg font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">Smart Dimmer Switch</h3>
                            <p className="text-gray-500 text-sm mb-2">Accessories</p>
                            <span className="font-bold text-secondary dark:text-white">$85.00</span>
                        </div>
                        {/* Recommendation 3 */}
                        <div className="group relative hidden lg:block">
                            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-gray-100 relative">
                                <Image alt="AeroBlade Fan Black" className="object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0hqJfvPpITP-J42V-ssiWvua-ipVrWDLrjy2idEtAH0MY3_9Uy50SbKiPaoh4R_8xTf1lYSdTJhS9cQ_NVgOtJFWWnfJQdTAsEUIi_UFItPxNeGDLjTJvbekD4-hHT8rFKQ4QppGfBHWZUgzR9fZUG-YMr1xj4HzF03naKQE5mULqoAcPN-6eXsn0wgQTjHbHL-al1GYNEjwQgFs5IyBlo8Nt0C3pUM8BkEbe5PtxNGmUMGRRihW4hS3TTRS7HE8dkqq0tyqvhiA" fill sizes="(max-width: 768px) 100vw, 33vw" />
                                <button className="absolute bottom-4 right-4 bg-white text-secondary w-10 h-10 rounded-full flex items-center justify-center shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                    <span className="material-symbols-outlined text-sm">shopping_bag</span>
                                </button>
                            </div>
                            <h3 className="font-display text-lg font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">AeroBlade Fan (Matte Black)</h3>
                            <p className="text-gray-500 text-sm mb-2">Ceiling Fans</p>
                            <span className="font-bold text-secondary dark:text-white">$550.00</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
