import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

const Location = () => {
  const address = "Rua Pires do Rio, 348 - Aleixo, Manaus - Amazonas";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <MapPin size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">Nossa Localização</h1>
          </div>
          <p className="text-xl max-w-3xl">
            Venha nos visitar! Estamos de portas abertas para receber você e sua
            família
          </p>
        </div>
      </section>

      {/* Address and Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Address Card */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Endereço</h2>
                      <p className="text-lg text-muted-foreground">{address}</p>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="w-full mb-4"
                  >
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Navigation size={20} />
                      Abrir no Google Maps
                    </a>
                  </Button>

                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <Clock className="flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold mb-2">Horários Principais:</h3>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Domingo: 9h e 19h</li>
                          <li>• Terça: 16h</li>
                          <li>• Quarta: 19h (Grupos)</li>
                          <li>• Sexta: 19h</li>
                          <li>• Sábado: 16h</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold mb-1">Telefone:</h3>
                        <p className="text-muted-foreground">(92) 3000-0000</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="overflow-hidden">
                <CardContent className="p-0 h-full min-h-[400px]">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                      address
                    )}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Igreja Presbiteriana Independente de Manaus"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Directions Info */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Como Chegar</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Estamos localizados no bairro Aleixo, uma região de fácil acesso em
                    Manaus. A igreja fica na Rua Pires do Rio, número 348.
                  </p>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Pontos de Referência:
                    </h3>
                    <p className="italic">
                      [Adicione aqui pontos de referência próximos para facilitar a
                      localização]
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Transporte Público:
                    </h3>
                    <p className="italic">
                      [Adicione informações sobre linhas de ônibus que passam próximo à
                      igreja]
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Estacionamento:
                    </h3>
                    <p className="italic">
                      [Adicione informações sobre estacionamento disponível]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tem Dúvidas Sobre Como Chegar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco! Teremos prazer em ajudar você a nos encontrar.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg"
          >
            <a href="/contato">Entre em Contato</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;
