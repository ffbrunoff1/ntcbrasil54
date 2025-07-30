import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
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

  const features = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: 'Expertise em Construção',
      description:
        'Nossa experiência nos permite entregar projetos excepcionais que atendem às necessidades específicas de cada cliente.',
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Foco em Resultados',
      description:
        'Comprometimento com prazos e qualidade, garantindo a satisfação total em cada projeto executado.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Qualidade Garantida',
      description:
        'Utilizamos as melhores práticas e materiais para assegurar durabilidade e excelência em nossas construções.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
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
            <span className="gradient-text">Sobre a NTC Brasil</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Somos uma empresa comprometida com a excelência na construção civil,
            combinando inovação tecnológica com expertise técnica para entregar
            projetos que superam expectativas.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <a href="#contact" className="btn btn-primary">
            Fale com nossa equipe
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
