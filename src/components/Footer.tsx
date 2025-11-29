export default function Footer() {
    return (
        <footer className="py-8 text-center text-gray-400 text-sm relative z-10 glass border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} [Name]. All rights reserved.</p>
        </footer>
    );
}
