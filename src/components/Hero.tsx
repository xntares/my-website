import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white relative"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Full Stack Developer | Creative Problem Solver | Tech Enthusiast
        </p>
        <p className="text-lg md:text-xl mb-12 text-blue-50 max-w-2xl mx-auto leading-relaxed">
          Building beautiful, functional, and user-friendly web applications
          that make a difference.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
