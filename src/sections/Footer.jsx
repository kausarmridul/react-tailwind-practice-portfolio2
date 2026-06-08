function Footer() {
  return (
    <footer className="z-40 w-full border-t border-white/10 bg-[rgba(10,10,10,0.8)] shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-3 py-6 text-center">
        <p>Copyright {new Date().getFullYear()} &copy; All rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
