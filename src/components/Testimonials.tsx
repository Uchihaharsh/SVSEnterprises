import { type FC } from 'react';
import { Star } from 'lucide-react';

const Testimonials: FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'Installing SVS Fire Ball Extinguishers in my warehouse has given me peace of mind. The automatic activation feature is exactly what we needed.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Restaurant Manager',
      content: 'These fire balls are perfect for our kitchen area. They\'re easy to install and require no maintenance. Excellent product and service!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Factory Supervisor',
      content: 'The 360-degree protection coverage is impressive. We\'ve installed these throughout our facility. Great investment in safety.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by businesses across Mumbai for reliable fire protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;