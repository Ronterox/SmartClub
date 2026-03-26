import { Link } from "react-router-dom";
import { Users, BarChart3, MessageSquare, Calendar, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";

const features = [
  {
    icon: Users,
    title: "Gestión de Jugadores",
    description: "Centraliza toda la información de tus jugadores en un único sistema accesible.",
  },
  {
    icon: BarChart3,
    title: "Estadísticas Detalladas",
    description: "Seguimiento continuo del rendimiento de cada jugador con métricas actualizadas.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación Eficiente",
    description: "Facilita la comunicación entre todos los profesionales del club.",
  },
  {
    icon: Calendar,
    title: "Calendario Inteligente",
    description: "Organiza entrenamientos, partidos y eventos de forma sencilla.",
  },
  {
    icon: Shield,
    title: "Datos Seguros",
    description: "Protección de datos garantizada con copias de seguridad automáticas.",
  },
  {
    icon: Zap,
    title: "Rendimiento Rápido",
    description: "Interfaz optimizada para una experiencia de usuario fluida y eficiente.",
  },
];

const stats = [
  { value: "500+", label: "Clubes Activos" },
  { value: "50,000+", label: "Jugadores Gestionados" },
  { value: "99.9%", label: "Disponibilidad" },
  { value: "24/7", label: "Soporte Técnico" },
];

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Director Deportivo",
    club: "Real Madrid Club de Fútbol",
    content: "SmartClub ha revolucionado la forma en que gestionamos nuestro club. Todo está centralizado y accesible.",
  },
  {
    name: "Laura Sánchez",
    role: "Coordinadora de categorías inferiores",
    club: "FC Barcelona",
    content: "La mejor inversión que hemos hecho. El seguimiento de jugadores es ahora rápido y eficiente.",
  },
  {
    name: "Antonio García",
    role: "Entrenador",
    club: "Atlético de Madrid",
    content: "Gracias a SmartClub podemos dedicar más tiempo a entrenar y menos a paperwork.",
  },
];

export function HomePage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Gestión deportiva{" "}
                <span className="text-primary">inteligente</span> y eficiente
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                La plataforma digital ERP diseñada específicamente para entidades deportivas.
                Centraliza, gestiona y haz seguimiento de todo tu club en un único sistema.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg">
                  Comenzar Prueba Gratuita
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Ver Demo
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <div className="bg-background rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Jugadores Activos</p>
                      <p className="text-2xl font-bold text-primary">248</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Equipos</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Entrenadores</span>
                      <span className="font-medium">18</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Partidos este mes</span>
                      <span className="font-medium">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir SmartClub?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diseñado por profesionales del deporte, para profesionales del deporte.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clubes deportivos de toda España confían en SmartClub.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-secondary">★</span>
                    ))}
                  </div>
                  <p className="text-sm mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.club}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para transformar tu club?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Únete a más de 500 clubes que ya están benefiting de SmartClub.
              Prueba gratis durante 30 días, sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Comenzar Ahora
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Hablar con Ventas
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Sin tarjeta de crédito
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Setup en 5 minutos
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Soporte incluido
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
