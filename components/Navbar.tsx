import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-stone-100 dark:border-stone-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    <Link className="flex items-center gap-2 group" href="/">
                        <div className="size-8 text-primary group-hover:rotate-12 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl">light_mode</span>
                        </div>
                        <h1 className="font-display text-2xl font-bold tracking-tight text-secondary dark:text-white">
                            Mr Lite
                        </h1>
                    </Link>
                    <div className="hidden md:flex items-center gap-10">
                        <Link className="text-sm font-medium text-secondary/80 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" href="/">Home</Link>
                        <Link className="text-sm font-medium text-secondary/80 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" href="#">About</Link>
                        <Link className="text-sm font-bold text-primary dark:text-primary transition-colors border-b-2 border-primary" href="/category">Collections</Link>
                        <Link className="text-sm font-medium text-secondary/80 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" href="#">Contact</Link>
                    </div>
                    <div className="hidden md:flex">
                        <Link className="bg-primary hover:bg-primary-dark text-secondary font-bold text-sm px-6 py-2.5 rounded-md transition-colors shadow-sm hover:shadow-md" href="#">
                            Visit Showroom
                        </Link>
                    </div>
                    <button className="md:hidden p-2 text-secondary dark:text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
