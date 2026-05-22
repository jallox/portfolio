export default function Footer() {
  return (
    <footer className="border-t border-border/70 px-5 py-8 sm:px-8 lg:px-10">
      <div className="site-container flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-xs font-body text-muted">
          Jayox - {new Date().getFullYear()}
        </p>
        <p className="text-xs font-body text-muted">
          Built with Next.js, Framer Motion, and Tailwind
        </p>
      </div>
    </footer>
  )
}
