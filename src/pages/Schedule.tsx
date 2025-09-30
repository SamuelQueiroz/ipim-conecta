import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleCard from "@/components/ScheduleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Users, Heart, Book, Baby, Home } from "lucide-react";

const Schedule = () => {
  const schedules = [
    {
      title: "Reunião de Oração",
      day: "Terça-feira",
      time: "16h",
      description: "Momento de intercessão e comunhão em oração",
      icon: <Heart size={24} />,
    },
    {
      title: "Grupos Familiares / Células",
      day: "Quarta-feira",
      time: "19h",
      description: "Cada Casa uma Igreja - Cultos nas casas dos membros",
      icon: <Home size={24} />,
    },
    {
      title: "Culto de Oração",
      day: "Sexta-feira",
      time: "19h",
      description: "Culto especial dedicado à oração e busca pela presença de Deus",
      icon: <Heart size={24} />,
    },
    {
      title: "Geração Eleita",
      day: "Sábado",
      time: "16h",
      description: "Ministério infantil e juvenil com atividades e ensino da Palavra",
      icon: <Baby size={24} />,
    },
    {
      title: "Escola Bíblica Dominical",
      day: "Domingo",
      time: "9h",
      description: "Estudo sistemático da Bíblia para todas as idades",
      icon: <Book size={24} />,
    },
    {
      title: "Culto Dominical",
      day: "Domingo",
      time: "19h",
      description: "Nosso principal culto semanal com pregação da Palavra, louvor e comunhão",
      icon: <Users size={24} />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Calendar size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">
              Horários de Culto
            </h1>
          </div>
          <p className="text-xl max-w-3xl">
            Participe dos nossos encontros semanais. Você é sempre bem-vindo!
          </p>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {schedules.map((schedule, index) => (
              <ScheduleCard key={index} {...schedule} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Clock size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Escolha um Horário e Venha nos Visitar
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Será um prazer receber você e sua família em qualquer um dos nossos
            encontros. Venha fazer parte desta família!
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

export default Schedule;
