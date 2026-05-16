// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs font-mono">
          © 2025 Kaizer Klent Auceran. Built with Next.js & Tailwind.
        </p>
        <p className="text-white/20 text-xs font-mono">
          Designed & developed with ❤️
        </p>
      </div>
    </footer>
  );
}