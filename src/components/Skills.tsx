
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "HTML", "CSS", "SQL"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["FastAPI", "Flask", "Node.js", "Next.js", "Tailwind CSS", "Streamlit", "PyQt5", "BERT", "TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      title: "Tools & Software",
      skills: ["Docker", "Git", "JIRA"]
    },
    {
      title: "Databases & Caching",
      skills: ["PostgreSQL", "MySQL", "Redis"]
    },
    {
      title: "Platforms",
      skills: ["Supabase", "Pinecone", "Label Studio", "AWS"]
    },
    {
      title: "Core Subjects",
      skills: ["OOPs", "Distributed Systems", "DSA", "System Design", "SDLC", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="glass-card p-6 rounded-lg hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
