import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappNumber = "5592999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre a IPI Manaus."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl max-w-3xl">
            Estamos aqui para ouvir você. Envie sua mensagem ou entre em contato
            através de nossas redes sociais
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(92) 99999-9999"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Como podemos ajudar você?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="flex-shrink-0 mt-1 text-secondary" size={24} />
                      <div>
                        <h3 className="font-semibold mb-1">Endereço</h3>
                        <p className="text-muted-foreground">
                          Rua Pires do Rio, 348 - Aleixo, Manaus - AM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="flex-shrink-0 mt-1 text-secondary" size={24} />
                      <div>
                        <h3 className="font-semibold mb-1">Telefone</h3>
                        <p className="text-muted-foreground">(92) 3000-0000</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="flex-shrink-0 mt-1 text-secondary" size={24} />
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <p className="text-muted-foreground">
                          contato@ipimanaus.org.br
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle size={32} />
                    <h2 className="text-2xl font-bold">Fale Conosco no WhatsApp</h2>
                  </div>
                  <p className="mb-6">
                    Tem uma dúvida rápida? Entre em contato diretamente pelo WhatsApp!
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full bg-secondary-foreground/10 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                  >
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} />
                      Abrir WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Redes Sociais</h2>
                  <p className="text-muted-foreground mb-6">
                    Acompanhe nossas atividades e fique por dentro das novidades:
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="justify-start"
                      size="lg"
                    >
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Facebook size={20} />
                        Facebook
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="justify-start"
                      size="lg"
                    >
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Instagram size={20} />
                        Instagram
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="justify-start"
                      size="lg"
                    >
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Youtube size={20} />
                        YouTube
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
