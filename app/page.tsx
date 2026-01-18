'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <header className="relative pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
          <Image
            alt="Luxury living room interior with modern chandelier and warm lighting"
            className="object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANEkGBk3PurHSTf8zdtNGo4HaRuhmwQDQQed4IL6uJI3ddErvZdnCLR1l-zGS7V7GacHNJY-dttsHulIkw7AN8DfazgeFX83HJVrmJ1HZNp8aDWi5M-9mVfRPAtQHYZfmynPNDZhY2OkNV4Riy1059E5HC0Q0Rz6X0n_5biwySW0Y9Uak9F29NlNaB8lEw32NX77Es4Ju5fiZbY8WCO6PwHG6jc0GTzO492cmEFN4l5yFMQiCa78MR0hh6BR4c1jRijYain7oQjfk"
            fill
            priority
          />
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-20">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase">New Collection 2024</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Illuminating <br />
              <span className="text-primary italic">Modern Living</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-light">
              Discover our curated collection of premium lighting and designer ceiling fans crafted to elevate the ambiance of your modern home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link className="bg-primary hover:bg-primary-dark text-secondary font-bold text-base px-8 py-3.5 rounded-md transition-all text-center" href="/category">
                Explore Collection
              </Link>
              <Link className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-base px-8 py-3.5 rounded-md transition-all text-center flex items-center justify-center gap-2" href="#showroom">
                <span className="material-symbols-outlined text-[20px]">storefront</span>
                Locate Showroom
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-white/50 text-4xl">keyboard_arrow_down</span>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-background-light dark:bg-background-dark relative overflow-hidden" id="about">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-texture opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl hidden md:block"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image alt="Close up of a modern minimalist light bulb filament" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTqPivco4P3cmuwg8fXTkVZ5jGd-IfXzIWZxFlailbDZCh8FkUQuV04ElUrL2mNAmLb_yEVxGrwYJF8hZQH0MtaFfMe_wsaUrR6ZUFpQjqlc5UVC4JN-24ay3pE_nUcbesoXHiuuaYBlpbaBoCVQ4dL-xp1McJa3tnIF2YCg576PtD8vVzaQbWCK0LsnZp7rnHIE3CN2jFT72JTN4T9oGXUqML6u3dgC1PdbSCSVXtrFb8DMtO6ZRDsnDEiWTyjLlD0KWQ4iG47dU" fill sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-luxury">
                    <span className="material-symbols-outlined text-primary text-3xl mb-3">verified</span>
                    <p className="font-display font-bold text-2xl text-secondary dark:text-white">10+</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Years of Experience</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary p-6 rounded-lg text-secondary flex flex-col justify-between h-40">
                    <span className="material-symbols-outlined text-3xl">light_group</span>
                    <p className="font-bold text-lg leading-tight">Curated Designs</p>
                  </div>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image alt="Abstract warm light casting shadows on a textured wall" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuowvrvEOlOkS6EJlDdFhfjDsbf9MZv-VDc9qvJCdNtaec5d644rA8DMmw7zCdYP0cwxkGfQBrUtueW1pYHEcSC9XW0ITVNB00yNKtsCMCgN1QJdzYsesWTmlHpS8YxI4X5qd-V4h0WYxHL2_KkxY1E3pf-81acffdSH7hmMArh8_slC3ddYKHbLmPyA-iC1CoSgUVc3n7ZQPGFwaBAuZ1SCtk96Ik1uA4bl91JdGKP8cPQy-MWl5C6AMTxrcp0eIHBBlvwXXsLWI" fill sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-primary font-bold tracking-widest text-sm uppercase mb-3">Our Philosophy</h4>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary dark:text-white leading-tight mb-6">
                  The Art of <br />
                  <span className="relative z-10">Light & Space
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 skew-x-12"></span>
                  </span>
                </h2>
                <p className="font-body text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  At Mr Lite, we believe lighting is the soul of a home. It is not just about visibility; it is about mood, texture, and emotion. With over a decade of dedication to the craft, we curate fixtures that blend impeccable functionality with breathtaking design.
                </p>
                <p className="font-body text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                  Our showroom offers a tactile experience, moving away from catalog browsing to let you feel the warmth and quality of materials before they become part of your sanctuary.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex -space-x-3">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAF55t8x9A6-vF-8_ZczDnVB6HwoD8ENHpumQlUCAmVrYKukN0JXJy51Jiqlbr6zptLD_ystiuNpKcZc5lBk05eLOINyMzK3QNbAIpH3Jpc1uKLcEydCGQHn99vTa8tZ9LODu5RhFY2q-cg-dEb3AKfySNMz-Hn9LmXj9Jh1jjkGRDqw8CClxxeSBJuVU8TCrbLQV7Z_fCDulLpxKHL4Dm9SfhKV1hc7OwPPabK98bAwYC-G90rDTyhtNZT4oZXoq8x7Jh9Sv2CzZc",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCENiZAKKul6u-e2XbWfhG26nj84q6wrP3zU24GwtsZfEvzWDgzekubnAQyhqAW4wtx-KVlKTBrjr2uM-jVLQ6O-c3GEQ094Q8VUHSkGc0Zo54qLtENeBKEE8rybv3FfgzQLKwqF2cSHh1kX8z1oL_HtmNI-WOYNchwlT_OjobHruFsZOb6Siyc4FjBcJfCA5VKarq6YbWown0wnn8k6YhKypTfMf9BAyr2pGCj81xt1gHH9P8R7ZTwrL4Wp9PVmwpJqwGss-pvmxw",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAc_ZEssrz8g636NB30D7B7OVX-d8ua6hXFb8KS3cpt7LK_yMqeegI32t14vs54jN6Q7BT3rsJuMhDboXosbCp5Rs1mEtlZvKaEsJH5gMAuPgVx-iKhU4EJXsgNo42zPFxDQgp6DZYV_zC9oO6S9jMLqZ_3w73Al0Ha63eoGDQORLu9O935EJ-VwV9tof-MDjiB0secK421HOLegVosYVUwdz-xGvkGhqvYp1catRZkqukyEdsoCzIc9G3bpW8_mMC7QKfrAQU-gMQ"
                  ].map((src, i) => (
                    <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark overflow-hidden">
                      <Image alt="Customer Avatar" className="object-cover" src={src} fill sizes="40px" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark bg-gray-100 flex items-center justify-center text-xs font-bold text-secondary relative z-10">+2k</div>
                </div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Happy homeowners trust our vision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white dark:bg-zinc-900" id="categories">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">Curated Categories</h2>
              <p className="font-body text-gray-600 dark:text-gray-400">Browse our exclusive range of products designed to elevate your interior spaces from ordinary to extraordinary.</p>
            </div>
            <Link className="hidden md:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all" href="/products">
              View Full Catalog
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Designer Lighting', desc: 'Elegant chandeliers, pendants, and wall sconces tailored for luxury.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO0HEe1gIzyCdjOdQX7-Aeig-XB_KGffz55WksJJIXuA44nsXq3Wtz1bpguF8Dz0rkmnW3Cx7s22vlzK81N50iOFCi6y5jovFGtHBn5qfRvoiL-nZqi250IVVScvv7GIay3kqu1TXEdQCPuOyUgRzMBuSKCeCWxL0ubrkPnDzb7ElehJAQvXDx4495-I7boHULL3U3mdj2bYC_7NQfdSdi5bAU5dC3RnnKd1BMxNahiJ3KlLPcHkAGMTezT4rHlJc2Edy1AkNyjOM' },
              { title: 'Premium Fans', desc: 'Sleek, whisper-quiet engineering meets contemporary aesthetics.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0hqJfvPpITP-J42V-ssiWvua-ipVrWDLrjy2idEtAH0MY3_9Uy50SbKiPaoh4R_8xTf1lYSdTJhS9cQ_NVgOtJFWWnfJQdTAsEUIi_UFItPxNeGDLjTJvbekD4-hHT8rFKQ4QppGfBHWZUgzR9fZUG-YMr1xj4HzF03naKQE5mULqoAcPN-6eXsn0wgQTjHbHL-al1GYNEjwQgFs5IyBlo8Nt0C3pUM8BkEbe5PtxNGmUMGRRihW4hS3TTRS7HE8dkqq0tyqvhiA' },
              { title: 'Smart Accessories', desc: 'Smart switches, dimmers, and essential parts for the connected home.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo3KjFW50dAmZw8iJBYTIgBMvOyIrl0uHF1VJh1URrGWEU32Hmzaz67bi5s_vWQ3iOGzjkdb6zYvQYlPLgZwM2cs5lEgbY56KGUd6bBMm88lM6J7okeNPOxxp4bxVBl0xbJt-oXeME-_ytpI3sBJ70MsDMaMgf6_bovrpUIzK-HIi-oLdPCOilveu_8AdorD5fmL1LTfBDVAl-Rs4SS-OgnVg7D3wDHBPBNaviqdNujosTIGFUVmFNh_nHf2KTsJTSgeRMSrwzBa0' },
            ].map((cat, i) => (
              <Link key={i} className="group relative overflow-hidden rounded-xl cursor-pointer" href="/category">
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <Image alt={cat.title} className="object-cover transition-transform duration-700 group-hover:scale-110" src={cat.img} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-white/80 text-sm font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative" id="showroom">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-luxury overflow-hidden border border-stone-100 dark:border-stone-800">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                <span className="inline-block text-primary font-bold tracking-widest text-xs uppercase mb-4">Visit Us</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-8">Experience the Light</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-secondary dark:text-white mb-1">Our Showroom</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">123 Lumen Avenue, Design District<br />New York, NY 10013</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-secondary dark:text-white mb-1">Opening Hours</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Mon - Fri: 9:00 AM - 7:00 PM<br />Sat: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-secondary dark:text-white mb-1">Get in Touch</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">(555) 123-4567<br />hello@mrlite-shop.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <span className="inline-flex items-center justify-center w-full sm:w-auto bg-black text-white font-bold text-sm px-8 py-3.5 rounded transition-colors hover:bg-gray-900 cursor-pointer">
                    Get Directions
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 min-h-[400px] relative">
                <iframe allowFullScreen className="w-full h-full border-0 grayscale absolute inset-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.183416955026!2d-74.00903322421307!3d40.71832047139194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a3c3a433b%3A0xc3f9824687d7b1a6!2sDesign%20District!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
