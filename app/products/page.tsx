'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductList() {
    return (
        <main className="flex-grow pt-20 relative bg-background-light dark:bg-background-dark">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-texture opacity-30 pointer-events-none"></div>

            {/* Header */}
            <header className="relative py-16 bg-secondary overflow-hidden">
                <div className="absolute inset-0 w-full h-full z-0">
                    <div className="absolute inset-0 bg-secondary/80 z-10"></div>
                    <Image alt="Background texture" className="object-cover object-center opacity-40 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANEkGBk3PurHSTf8zdtNGo4HaRuhmwQDQQed4IL6uJI3ddErvZdnCLR1l-zGS7V7GacHNJY-dttsHulIkw7AN8DfazgeFX83HJVrmJ1HZNp8aDWi5M-9mVfRPAtQHYZfmynPNDZhY2OkNV4Riy1059E5HC0Q0Rz6X0n_5biwySW0Y9Uak9F29NlNaB8lEw32NX77Es4Ju5fiZbY8WCO6PwHG6jc0GTzO492cmEFN4l5yFMQiCa78MR0hh6BR4c1jRijYain7oQjfk" fill priority />
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 text-center">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        The Obsidian Series
                    </h1>
                    <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        A dramatic collection featuring matte black finishes and gold accents, perfect for adding depth to modern interiors.
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-72 shrink-0 hidden lg:block">
                        <div className="sticky top-28 space-y-10">
                            <div className="flex items-center gap-2 text-secondary dark:text-white mb-6">
                                <span className="material-symbols-outlined">tune</span>
                                <h2 className="font-display text-xl font-bold">Refine Selection</h2>
                            </div>
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                                <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-4">Availability</h3>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 bg-transparent focus:ring-primary" type="checkbox" defaultChecked />
                                        <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-secondary dark:group-hover:text-white transition-colors">In Stock (8)</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 bg-transparent focus:ring-primary" type="checkbox" />
                                        <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-secondary dark:group-hover:text-white transition-colors">Pre-order (4)</span>
                                    </label>
                                </div>
                            </div>
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                                <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-4">Price Range</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                        <span>$0</span>
                                        <input className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
                                        <span>$2000+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8">
                                <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-4">Finish</h3>
                                <div className="space-y-3">
                                    {['Matte Black', 'Gold Accent'].map((item, i) => (
                                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                            <input className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 bg-transparent focus:ring-primary" type="checkbox" defaultChecked={item === 'Matte Black'} />
                                            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-secondary dark:group-hover:text-white transition-colors">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-stone-100 dark:border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Showing <span className="font-bold text-secondary dark:text-white">12</span> results
                            </div>
                            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                                <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
                                <select className="bg-background-light dark:bg-background-dark border-none rounded-lg text-sm py-2.5 pl-3 pr-10 text-secondary dark:text-white focus:ring-1 focus:ring-primary cursor-pointer font-medium">
                                    <option>Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {/* Product Cards */}
                            {[
                                { name: 'Obsidian Grand Chandelier', price: '$899.00', reviews: 24, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO0HEe1gIzyCdjOdQX7-Aeig-XB_KGffz55WksJJIXuA44nsXq3Wtz1bpguF8Dz0rkmnW3Cx7s22vlzK81N50iOFCi6y5jovFGtHBn5qfRvoiL-nZqi250IVVScvv7GIay3kqu1TXEdQCPuOyUgRzMBuSKCeCWxL0ubrkPnDzb7ElehJAQvXDx4495-I7boHULL3U3mdj2bYC_7NQfdSdi5bAU5dC3RnnKd1BMxNahiJ3KlLPcHkAGMTezT4rHlJc2Edy1AkNyjOM', desc: 'A statement piece for dining rooms.', tag: 'Chandelier', colors: ['#000', '#e0b152'] },
                                { name: 'Obsidian Wall Sconce', price: '$149.00', reviews: 56, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuowvrvEOlOkS6EJlDdFhfjDsbf9MZv-VDc9qvJCdNtaec5d644rA8DMmw7zCdYP0cwxkGfQBrUtueW1pYHEcSC9XW0ITVNB00yNKtsCMCgN1QJdzYsesWTmlHpS8YxI4X5qd-V4h0WYxHL2_KkxY1E3pf-81acffdSH7hmMArh8_slC3ddYKHbLmPyA-iC1CoSgUVc3n7ZQPGFwaBAuZ1SCtk96Ik1uA4bl91JdGKP8cPQy-MWl5C6AMTxrcp0eIHBBlvwXXsLWI', desc: 'Minimalist matte black sconce.', tag: 'Wall Light', colors: ['#000'], bestSeller: true },
                                { name: 'Obsidian Drop Pendant', price: '$225.00', reviews: 12, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0hqJfvPpITP-J42V-ssiWvua-ipVrWDLrjy2idEtAH0MY3_9Uy50SbKiPaoh4R_8xTf1lYSdTJhS9cQ_NVgOtJFWWnfJQdTAsEUIi_UFItPxNeGDLjTJvbekD4-hHT8rFKQ4QppGfBHWZUgzR9fZUG-YMr1xj4HzF03naKQE5mULqoAcPN-6eXsn0wgQTjHbHL-al1GYNEjwQgFs5IyBlo8Nt0C3pUM8BkEbe5PtxNGmUMGRRihW4hS3TTRS7HE8dkqq0tyqvhiA', desc: 'Sleek single drop pendant.', tag: 'Pendant', colors: ['#000', '#e0b152'] },
                                { name: 'Obsidian Desk Lamp', price: '$189.00', reviews: 42, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTqPivco4P3cmuwg8fXTkVZ5jGd-IfXzIWZxFlailbDZCh8FkUQuV04ElUrL2mNAmLb_yEVxGrwYJF8hZQH0MtaFfMe_wsaUrR6ZUFpQjqlc5UVC4JN-24ay3pE_nUcbesoXHiuuaYBlpbaBoCVQ4dL-xp1McJa3tnIF2YCg576PtD8vVzaQbWCK0LsnZp7rnHIE3CN2jFT72JTN4T9oGXUqML6u3dgC1PdbSCSVXtrFb8DMtO6ZRDsnDEiWTyjLlD0KWQ4iG47dU', desc: 'Modern task lighting.', tag: 'Table Lamp', colors: ['#000'] },
                                { name: 'Obsidian Arc Floor Lamp', price: '$349.00', reviews: 18, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANEkGBk3PurHSTf8zdtNGo4HaRuhmwQDQQed4IL6uJI3ddErvZdnCLR1l-zGS7V7GacHNJY-dttsHulIkw7AN8DfazgeFX83HJVrmJ1HZNp8aDWi5M-9mVfRPAtQHYZfmynPNDZhY2OkNV4Riy1059E5HC0Q0Rz6X0n_5biwySW0Y9Uak9F29NlNaB8lEw32NX77Es4Ju5fiZbY8WCO6PwHG6jc0GTzO492cmEFN4l5yFMQiCa78MR0hh6BR4c1jRijYain7oQjfk', desc: 'Sweeping arc design.', tag: 'Floor Lamp', colors: ['#000', '#e0b152'] },
                                { name: 'Obsidian Smart Dimmer', price: '$59.00', reviews: 94, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo3KjFW50dAmZw8iJBYTIgBMvOyIrl0uHF1VJh1URrGWEU32Hmzaz67bi5s_vWQ3iOGzjkdb6zYvQYlPLgZwM2cs5lEgbY56KGUd6bBMm88lM6J7okeNPOxxp4bxVBl0xbJt-oXeME-_ytpI3sBJ70MsDMaMgf6_bovrpUIzK-HIi-oLdPCOilveu_8AdorD5fmL1LTfBDVAl-Rs4SS-OgnVg7D3wDHBPBNaviqdNujosTIGFUVmFNh_nHf2KTsJTSgeRMSrwzBa0', desc: 'WiFi-enabled dimmer switch.', tag: 'Accessories', colors: ['#000', '#fff'], label: 'New', labelColor: 'bg-gray-900' },
                            ].map((product, i) => (
                                <Link key={i} className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-300 border border-stone-100 dark:border-stone-800 flex flex-col h-full hover:border-primary/30" href="/products/1">
                                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        <Image alt={product.name} className="object-cover transition-transform duration-700 group-hover:scale-105" src={product.img} fill sizes="(max-width: 768px) 100vw, 33vw" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        {product.bestSeller && (
                                            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm shadow-sm">
                                                Best Seller
                                            </div>
                                        )}
                                        {product.label && (
                                            <div className={`absolute top-4 left-4 ${product.labelColor} text-white text-xs font-bold px-3 py-1 rounded-sm shadow-sm`}>
                                                {product.label}
                                            </div>
                                        )}
                                        <button className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 hover:bg-primary hover:text-white p-2 rounded-full shadow-sm text-secondary dark:text-white transition-colors z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                                            <span className="material-symbols-outlined text-[20px] leading-none">favorite</span>
                                        </button>
                                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                                            <button className="w-full bg-white dark:bg-surface-dark text-secondary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary font-bold text-sm py-3 rounded shadow-lg transition-colors flex items-center justify-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold tracking-wider text-primary uppercase">{product.tag}</span>
                                            <div className="flex gap-1">
                                                {product.colors.map((c, idx) => (
                                                    <span key={idx} className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: c }}></span>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="font-display text-lg font-bold text-secondary dark:text-white mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{product.desc}</p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-lg font-bold text-secondary dark:text-white">{product.price}</span>
                                            <div className="flex text-primary text-xs">
                                                {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined text-[16px] fill-current">star</span>)}
                                                <span className="text-gray-400 ml-1">({product.reviews})</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-16 flex justify-center">
                            <nav className="flex items-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white dark:hover:bg-surface-dark transition-colors">
                                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-secondary font-bold shadow-sm">1</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 text-secondary dark:text-white hover:bg-white dark:hover:bg-surface-dark transition-colors">2</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 text-secondary dark:text-white hover:bg-white dark:hover:bg-surface-dark transition-colors">3</button>
                                <span className="text-gray-400 px-2">...</span>
                                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 text-secondary dark:text-white hover:bg-white dark:hover:bg-surface-dark transition-colors">8</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white dark:hover:bg-surface-dark transition-colors">
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
