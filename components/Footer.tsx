import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-16 border-t border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="size-6 text-primary">
                                <span className="material-symbols-outlined">light_mode</span>
                            </div>
                            <h3 className="font-display text-xl font-bold">Mr Lite</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Bringing light to modern homes with a touch of elegance and sophisticated design.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-sm" href="#">FB</Link>
                            <Link className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-sm" href="#">IG</Link>
                            <Link className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-sm" href="#">PT</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-primary">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link className="hover:text-white transition-colors" href="/products">Chandeliers</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Ceiling Fans</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Wall Lights</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Smart Switches</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Outdoor Lighting</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-primary">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link className="hover:text-white transition-colors" href="#">Our Story</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Showroom</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Careers</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="#">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-primary">Stay Illuminated</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe for design tips and exclusive offers.</p>
                        <form className="space-y-2">
                            <input className="w-full bg-gray-800 border-none rounded-md px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary placeholder-gray-500" placeholder="Enter your email" type="email" />
                            <button className="w-full bg-primary hover:bg-primary-dark text-secondary font-bold text-sm px-4 py-3 rounded-md transition-colors" type="button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2024 Mr Lite Retail. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Designed with light.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
