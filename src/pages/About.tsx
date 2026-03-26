import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";

const team = [
  {
    name: "María López",
    role: "CEO & Fundadora",
    description: "Más de 15 años de experiencia en gestión deportiva.",
    initials: "ML",
  },
  {
    name: "David Ruiz",
    role: "CTO",
    description: "Ex-engineer en Google con pasión por el deporte.",
    initials: "DR",
  },
  {
    name: "Ana García",
    role: "Head of Product",
    description: "Especialista en UX con background en fútbol.",
    initials: "AG",
  },
  {
    name: "Pablo Sánchez",
    role: "Head of Sales",
    description: "10 años en el sector tecnológico deportivo.",
    initials: "PS",
  },
];

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos el deporte tanto como tú. Entendemos sus necesidades.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Construimos soluciones para la comunidad deportiva.",
  },
  {
    icon: Globe,
    title: "Accesibilidad",
    description: "Tecnología al alcance de todos los clubes.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Buscamos siempre la más alta calidad en todo.",
  },
];

export function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-muted-foreground">
              SmartClub nació de la necesidad de modernizar la gestión deportiva.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  En 2020, un grupo de profesionales del deporte y la tecnología
                  identificamos un problema común: la gestión de clubes deportivos
                  seguía siendo caótica, dispersa y poco eficiente.
                </p>
                <p>
                  Los datos de jugadores se perdían en hojas de cálculo, las
                  comunicaciones se realizaban por grupos de WhatsApp y el
                  seguimiento del rendimiento era prácticamente inexistente.
                </p>
                <p>
                  Así nació SmartClub: una plataforma que centraliza toda la
                  información del club, desde datos de jugadores hasta calendarios
                  de entrenamiento, en un único sistema accesible para todos.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
              <div className="bg-background rounded-xl shadow-lg p-6">
                <p className="text-4xl font-bold text-primary mb-2">2020</p>
                <p className="font-semibold mb-4">Año de Fundación</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Primer prototipo desarrollado</p>
                  <p>✓ 10 clubes piloto</p>
                  <p>✓ 2,000 jugadores registrados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Democratizar el acceso a herramientas de gestión profesional
                  para clubes deportivos de todos los tamaños, desde escuelas
                  deportivas locales hasta grandes federaciones.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/5 border-secondary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nuestra Visión</h3>
                <p className="text-muted-foreground">
                  Ser la plataforma de referencia global para la gestión deportiva,
                  ayudando a que cada club pueda ofrecer las mejores condiciones
                  para el desarrollo de sus jugadores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados por el deporte y la tecnología.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{member.initials}</span>
                  </div>
                  <h3 className="font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-primary text-center mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
