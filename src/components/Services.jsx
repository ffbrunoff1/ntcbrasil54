import { motion } from 'framer-motion';
import { Building2, Warehouse, HomeIcon, HardHat } from 'lucide-react';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: 'Construção Comercial',
      description:
        'Desenvolvimento de espaços comerciais modernos e funcionais, adaptados às necessidades do seu negócio.',
    },
    {
      icon: <Warehouse className="w-12 h-12 text-primary" />,
      title: 'Projetos Industriais',
      description:
        'Construção de instalações industriais com foco em eficiência operacional e segurança.',
    },
    {
      icon: <HomeIcon className="w-12 h-12 text-primary" />,
      title: 'Construção Residencial',
      description:
        'Criação de espaços residenciais que combinam conforto, estética e funcionalidade.',
    },
    {
      icon: <HardHat className="w-12 h-12 text-primary" />,
      title: 'Gerenciamento de Obras',
      description:
        'Gestão completa de projetos de construção, garantindo qualidade e cumprimento de prazos.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Nossos Serviços</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos soluções completas em construção civil, com foco em
            qualidade, inovação e satisfação do cliente.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <motion.a
                href="#contact"
                className="mt-6 text-primary font-medium hover:text-primary/80 inline-flex items-center"
                whileHover={{ x: 5 }}
              >
                Saiba mais
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
