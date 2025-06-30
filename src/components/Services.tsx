
const Services = () => {
  const services = [
    {
      title: "Machine Learning Development",
      description: "Custom ML models and AI solutions for healthcare, data analysis, and predictive systems. Specializing in biomedical image analysis and health informatics.",
      icon: "🤖"
    },
    {
      title: "Custom Software Development",
      description: "Full-stack web applications, desktop applications, and scalable software solutions tailored to your specific business needs and requirements.",
      icon: "💻"
    },
    {
      title: "Data Analytics & Visualization",
      description: "Transform your data into actionable insights with advanced analytics, interactive dashboards, and comprehensive reporting solutions.",
      icon: "📊"
    },
    {
      title: "AI Healthcare Solutions",
      description: "Innovative AI-driven applications for healthcare, including medical image processing, patient data analysis, and clinical decision support systems.",
      icon: "🏥"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glass-card p-8 rounded-lg hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
