export default function Navbar() {
  const links = ["about", "skills", "projects", "experience", "contact"];
  return (
    <header className="navbar">
      <a href="#top" className="logo">AK</a>
      <nav aria-label="Main navigation">
        {links.map((l) => (
          <a key={l} href={`#${l}`}>{l}</a>
        ))}
      </nav>
    </header>
  );
}