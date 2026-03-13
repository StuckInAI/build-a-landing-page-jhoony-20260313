const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Built on cutting-edge technology to ensure blazing performance. Your users will experience sub-second load times, every single time.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption and security protocols protect your data. SOC 2 Type II certified with 24/7 security monitoring.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description:
      'Real-time collaboration tools that bring your team together. Comment, share, and co-edit without ever leaving the platform.',
    color: 'from-green-400 to-teal-500',
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description:
      'Deep insights and beautiful dashboards to track what matters. Make data-driven decisions with confidence and clarity.',
    color: 'from-purple-400 to-pink-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Everything you need to{' '}
            <span className="text-gradient">succeed</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Powerful features designed to streamline your workflow and supercharge
            your team&apos;s productivity.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover group"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-2xl mb-6 shadow-md`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>

              {/* Learn more link */}
              <div className="mt-6">
                <span className="text-purple-600 font-medium text-sm group-hover:underline cursor-pointer">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-20 bg-gradient-hero rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">
            Ready to get started?
          </h3>
          <p className="text-white/80 text-lg mb-6">
            Join thousands of teams already using our platform.
          </p>
          <a
            href="#hero"
            className="inline-block bg-white text-purple-700 font-bold px-10 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            Start for free
          </a>
        </div>
      </div>
    </section>
  );
}
