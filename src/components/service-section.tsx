import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

const services = [
  {
    title: "Diagnostic Care",
    description: "Comprehensive diagnostic services using state-of-the-art medical equipment for accurate health assessments.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEozqjW43iGuGVGzjaoIEt_1pnnIr3b87VqA&s"
  },
  {
    title: "Dental Care",
    description: "Expert dental services including preventive care, cosmetic dentistry, and oral surgery.",
    image: "https://www.allseasonsdentalclinic.com/wp-content/uploads/2018/07/why-is-dental-care-so-important.jpg"
  },
  {
    title: "Eye Care",
    description: "Complete ophthalmology services from routine eye exams to advanced surgical procedures.",
    image: "https://vishwarajhospital.com/wp-content/uploads/2023/07/dreamstime_l_105404271-1024x540.jpg"
  },
  {
    title: "General Surgery",
    description: "Advanced surgical procedures performed by experienced surgeons using modern techniques.",
    image: "https://www.facs.org/media/hsppzco1/532331964.jpg?rnd=132954458115670000"
  },
  {
    title: "Neurology",
    description: "Professional cosmetic and aesthetic treatments for enhanced confidence and wellbeing.",
    image: "https://vishwarajhospital.com/wp-content/uploads/2023/07/17_Neurology.jpg"
  },
  {
    title: "Dermatology",
    description: "Complex surgical procedures performed by specialized surgical teams using cutting-edge technology.",
    image: "https://symbiosisuniversityhospital.com/images/dermatology-img.jpg"
  }
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services delivered with expertise and compassion
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}