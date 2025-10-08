import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Calendar, BookOpen } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Projetos
          </h1>
          <p className="text-xl max-w-3xl">
            Conheça as iniciativas que expandem o Reino e transformam vidas
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Project 1: Cada Casa uma Igreja */}
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-secondary/10 rounded-lg text-secondary flex-shrink-0">
                    <Users size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">
                      Cada Casa uma Igreja
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        Quartas-feiras às 19h
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Cultos realizados nas casas dos membros, promovendo comunhão mais
                      íntima e crescimento espiritual através do estudo da Palavra em
                      pequenos grupos.
                    </p>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="flex items-start gap-3">
                        <BookOpen className="flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h3 className="font-semibold mb-2">Base Bíblica:</h3>
                          <p className="text-muted-foreground italic">
                            "E perseveravam na doutrina dos apóstolos e na comunhão, no
                            partir do pão e nas orações... E, perseverando unânimes todos
                            os dias no templo, e partindo o pão em casa, comiam com
                            alegria e singeleza de coração."
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            - Atos 2:42-47
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 border-2 border-dashed border-border rounded-lg bg-muted/20">
                      <p className="text-muted-foreground italic text-center">
                        [Espaço para adicionar mais informações, fotos e detalhes do
                        projeto]
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 2: Ramal Arthur Virgílio */}
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-secondary/10 rounded-lg text-secondary flex-shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">
                      Ramal Arthur Virgílio
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Ponto de pregação localizado no interior, no sítio da igreja.
                      Levamos a mensagem do Evangelho além dos limites urbanos,
                      alcançando comunidades rurais com o amor de Cristo.
                    </p>
                    <div className="bg-secondary/5 p-6 rounded-lg mb-4">
                      <h3 className="font-semibold mb-3 text-lg">
                        Sobre o Ministério no Interior:
                      </h3>
                      <p className="text-muted-foreground">
                        Este projeto representa nosso compromisso em alcançar todas as
                        pessoas, independente da distância. No sítio da igreja,
                        realizamos cultos e atividades que fortalecem a fé das
                        comunidades locais.
                      </p>
                    </div>
                    <div className="mt-6 p-4 border-2 border-dashed border-border rounded-lg bg-muted/20">
                      <p className="text-muted-foreground italic text-center">
                        <img src="src/assets/ramal1.jpeg" alt="" />
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 3: Congregação Novo Reino */}
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-secondary/10 rounded-lg text-secondary flex-shrink-0">
                    <Calendar size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">
                      Congregação do Novo Reino
                    </h2>
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <MapPin size={16} />
                      <span>Bairro Novo Reino, Zona Leste de Manaus</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Nossa congregação filiada que serve a comunidade do bairro Novo
                      Reino. Através desta extensão do ministério, alcançamos mais
                      famílias com a mensagem transformadora do Evangelho.
                    </p>
                    <div className="bg-secondary/5 p-6 rounded-lg mb-4">
                      <h3 className="font-semibold mb-3 text-lg">
                        Expandindo o Reino:
                      </h3>
                      <p className="text-muted-foreground">
                        A Congregação do Novo Reino representa nosso compromisso com o
                        crescimento e expansão da obra de Deus. É uma extensão natural do
                        nosso ministério, levando esperança e fé para novas regiões da
                        cidade.
                      </p>
                    </div>
                    <div className="mt-6 p-4 border-2 border-dashed border-border rounded-lg bg-muted/20">
                      <p className="text-muted-foreground italic text-center">
                        [Espaço para adicionar endereço completo, horários de cultos e
                        fotos da congregação]
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte de um Projeto
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Quer saber mais sobre nossos projetos ou participar de alguma iniciativa?
            Entre em contato conosco!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
