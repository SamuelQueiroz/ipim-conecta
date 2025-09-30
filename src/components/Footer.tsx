import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Horários", path: "/horarios" },
    { name: "Projetos", path: "/projetos" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">IPI Manaus</h3>
            <p className="text-primary-foreground/90 mb-4">
              Fundada em 1983, estamos há mais de 42 anos servindo a comunidade
              de Manaus com amor e dedicação.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/90 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/90">
                  Rua Pires do Rio, 348 - Aleixo, Manaus - AM
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-primary-foreground/90">
                  (92) 3000-0000
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-primary-foreground/90">
                  contato@ipimanaus.org.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} Igreja Presbiteriana Independente de
            Manaus. Todos os direitos reservados.
          </p>
        </div>
      </div>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-secondary text-secondary-foreground p-3 rounded-full shadow-elegant hover:scale-110 transition-transform"
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
