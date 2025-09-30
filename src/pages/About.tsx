import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa História
          </h1>
          <p className="text-xl max-w-3xl">
            Mais de 42 anos servindo a Deus e a comunidade de Manaus com amor e dedicação
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <BookOpen size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Fundação</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A Igreja Presbiteriana Independente de Manaus foi fundada em{" "}
                      <span className="font-semibold text-foreground">
                        30 de janeiro de 1983
                      </span>
                      , há mais de 42 anos. Nosso primeiro pastor foi o reverendo Batalha,
                      que com dedicação e fé lançou as bases desta comunidade de fé.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Council Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <Users size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">Nosso Conselho</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Hoje a igreja é administrada por um conselho formado por 1 pastor e
                      5 presbíteros comprometidos com o cuidado pastoral e a administração
                      da igreja.
                    </p>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">
                        Membros do Conselho:
                      </h3>
                      <p className="text-muted-foreground italic">
                        [Espaço reservado para lista dos membros do conselho e foto]
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision and Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                      <Heart size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">Nossa Visão</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser uma igreja que glorifica a Deus através da adoração, do ensino da
                    Palavra, da comunhão cristã e do serviço ao próximo, alcançando Manaus
                    e além com o evangelho de Jesus Cristo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                      <BookOpen size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">Nossa Missão</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Fazer discípulos de Cristo através da pregação fiel das Escrituras,
                    do cuidado pastoral, da comunhão fraternal e do testemunho do amor de
                    Deus em nossa comunidade.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Expandable History Section */}
            <Card className="mt-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Saiba Mais Sobre Nossa História
                </h2>
                <p className="text-muted-foreground mb-4">
                  Ao longo de mais de quatro décadas, testemunhamos a fidelidade de Deus
                  em nossa caminhada. Aqui há espaço para expandir nossa história,
                  compartilhar testemunhos e celebrar as marcas do Senhor em nosso meio.
                </p>
                <div className="bg-muted/30 p-6 rounded-lg border-2 border-dashed border-border">
                  <p className="text-muted-foreground italic text-center">
                    [Área reservada para adicionar mais detalhes sobre a história da
                    igreja, fotos históricas e marcos importantes]
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
