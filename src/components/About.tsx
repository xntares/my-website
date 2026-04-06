import { Code2, Palette, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful interfaces with attention to detail',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast and optimized applications',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate developer with a love for creating exceptional
              digital experiences. With expertise in modern web technologies, I
              transform ideas into elegant solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey in software development has equipped me with a diverse
              skill set and a deep understanding of both frontend and backend
              technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
