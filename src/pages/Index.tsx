import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Heart, Book, Baby } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScheduleCard from "@/components/ScheduleCard";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const mainSchedules = [
    {
      title: "Culto Dominical",
      day: "Domingo",
      time: "19h",
      description: "Nosso principal culto semanal. Venha louvar e ouvir a Palavra!",
      icon: <Heart size={24} />,
    },
    {
      title: "Escola Bíblica Dominical",
      day: "Domingo",
      time: "9h",
      description: "Estudo bíblico para todas as idades",
      icon: <Book size={24} />,
    },
    {
      title: "Geração Eleita",
      day: "Sábado",
      time: "16h",
      description: "Atividades para crianças e adolescentes",
      icon: <Baby size={24} />,
    },
  ];

  const projects = [
    {
      title: "Cada Casa uma Igreja",
      description:
        "Cultos nas casas dos membros toda quarta às 19h. Baseado em Atos 2:42-47, promovendo comunhão e crescimento espiritual.",
      icon: <Users size={24} />,
    },
    {
      title: "Ramal Arthur Virgílio",
      description:
        "Ponto de pregação no interior, localizado no sítio da igreja. Levando a mensagem do Evangelho além da cidade.",
      icon: <MapPin size={24} />,
    },
    {
      title: "Congregação Novo Reino",
      description:
        "Nossa congregação filiada no bairro Novo Reino, zona leste de Manaus, expandindo o alcance do ministério.",
      icon: <Calendar size={24} />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Schedule Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Participe dos Nossos Cultos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Venha fazer parte da nossa comunidade. Todos são bem-vindos!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mainSchedules.map((schedule, index) => (
              <ScheduleCard key={index} {...schedule} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/horarios">Ver Todos os Horários</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Projetos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as iniciativas que transformam vidas e expandem o Reino
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="default">
              <Link to="/projetos">Saiba Mais Sobre os Projetos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Venha Fazer Parte da Nossa Família
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estamos localizados na Rua Pires do Rio, 348 - Aleixo, Manaus - AM.
            Será um prazer receber você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg"
            >
              <Link to="/localizacao">Como Chegar</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
