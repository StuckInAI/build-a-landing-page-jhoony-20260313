const testimonials = [
  {
    quote:
      "This platform completely transformed how our team works. We cut our project delivery time in half and everyone loves using it every single day.",
    name: 'Sarah Johnson',
    role: 'VP of Engineering',
    company: 'TechCorp Inc.',
    avatar: 'SJ',
    color: 'from-purple-500 to-indigo-600',
    stars: 5,
  },
  {
    quote:
      "I was skeptical at first, but after just one week I couldn't imagine working without it. The analytics alone are worth the price. Absolutely recommend!",
    name: 'Marcus Chen',
    role: 'Product Manager',
    company: 'Startup Labs',
    avatar: 'MC',
    color: 'from-blue-500 to-cyan-500',
    stars: 5,
  },
  {
    quote:
      "The collaboration features are unmatched. Our remote team finally feels connected and we ship features faster than ever. Outstanding product!",
    name: 'Emily Rodriguez',
    role: 'CTO',
    company: 'Future Works',
    avatar: 'ER',
    color: 'from-pink-500 to-rose-500',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Loved by teams{' '}
            <span className="text-gradient">worldwide</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear what our customers have to say
            about their experience.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 card-hover flex flex-col"
            >
              <StarRating count={testimonial.stars} />

              <blockquote className="text-gray-700 leading-relaxed text-lg flex-1 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['TechCorp', 'StartupLabs', 'FutureWorks', 'Acme Co.', 'DevStudio'].map(
              (company) => (
                <span
                  key={company}
                  className="text-gray-300 font-bold text-lg tracking-wide hover:text-gray-400 transition-colors"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
