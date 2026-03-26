import { Users, BarChart3, Calendar, MessageSquare, Bell, FileText, Settings, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";

const features = [
  {
    icon: Users,
    title: "Fichas de Jugadores",
    description: "Gestiona toda la información de tus jugadores: datos personales, historial médico, estadísticas y más.",
  },
  {
    icon: BarChart3,
    title: "Informes y Estadísticas",
    description: "Dashboards personalizables con métricas de rendimiento, asistencia y progreso.",
  },
  {
    icon: Calendar,
    title: "Calendario Inteligente",
    description: "Planifica entrenamientos, partidos y eventos. Sincronización con Google Calendar.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación Integrada",
    description: "Envía notificaciones a jugadores, padres y cuerpo técnico de forma централизованная.",
  },
  {
    icon: Bell,
    title: "Alertas y Notificaciones",
    description: "Sistema de alertas para lesiones, citas médicas, renovaciones de licencias y más.",
  },
  {
    icon: FileText,
    title: "Documentación Digital",
    description: "Almacena contratos, licencias federativas, certificados médicos y autorizaciones.",
  },
  {
    icon: Settings,
    title: "Gestión de Equipos",
    description: "Organiza jugadores por equipos, categorías y niveles. Asigna entrenadores.",
  },
  {
    icon: Shield,
    title: "Seguridad y RGPD",
    description: "Cumplimiento total del RGPD. Encriptación de datos y copias de seguridad.",
  },
];

const steps = [
  {
    number: "01",
    title: "Regístrate",
    description: "Crea tu cuenta en menos de 2 minutos. Sin tarjeta de crédito.",
  },
  {
    number: "02",
    title: "Configura",
    description: "Personaliza tu club: equipos, categorías, campos y recursos.",
  },
  {
    number: "03",
    title: "Invita",
    description: "Añade a tu equipo técnico, jugadores y familias.",
  },
  {
    number: "04",
    title: "¡Listo!",
    description: "Empieza a gestionar tu club de forma eficiente.",
  },
];

const plans = [
  {
    name: "Básico",
    price: "49",
    period: "/mes",
    description: "Ideal para clubes pequeños",
    features: [
      "Hasta 50 jugadores",
      "3 equipos",
      "Calendario básico",
      "Notificaciones por email",
      "Soporte por email",
    ],
  },
  {
    name: "Profesional",
    price: "99",
    period: "/mes",
    description: "Para clubes en crecimiento",
    features: [
      "Jugadores ilimitados",
      "Equipos ilimitados",
      "Calendario avanzado",
      "Notificaciones push",
      "Informes básicos",
      "Soporte prioritario",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "249",
    period: "/mes",
    description: "Para grandes organizaciones",
    features: [
      "Todo lo de Profesional",
      "API personalizada",
      "Integraciones",
      "Manager de cuenta",
      "Formación incluida",
      "SLA garantizado",
    ],
  },
];

export function ProductPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              La plataforma ERP para entidades deportivas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Todo lo que necesitas para gestionar tu club en un único sistema:
              jugadores, equipos, calendarios, estadísticas y comunicación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Prueba Gratis 30 días
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Características Principales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Funcionalidades diseñadas específicamente para las necesidades de clubes deportivos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo funciona?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empieza a gestionar tu club en pocos minutos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes y Precios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu club. Sin sorpresas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-primary shadow-lg" : ""}>
                <CardContent className="pt-6">
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-4">
                      Más Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "primary" : "outline"} 
                    className="w-full"
                  >
                    Comenzar
                  </Button>
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
              ¿Tienes dudas sobre qué plan necesitas?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Nuestro equipo te ayudará a encontrar la mejor opción para tu club.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Hablar con Ventas
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
