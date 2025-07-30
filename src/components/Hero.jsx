import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-blue-50 to-primary/10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">Construindo</span> o futuro com
              qualidade e inovação
            </motion.h1>

            <motion.p className="text-xl text-gray-600" variants={itemVariants}>
              Transformamos projetos em realidade, unindo tecnologia e expertise
              para criar soluções que superam expectativas.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a href="#contact" className="btn btn-primary group">
                Entre em contato
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="#services" className="btn btn-secondary">
                Conheça nossos serviços
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8">
              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {[
                  { title: 'Projetos Realizados', value: '150+' },
                  { title: 'Anos de Experiência', value: '10+' },
                  { title: 'Clientes Satisfeitos', value: '200+' },
                  { title: 'Equipe Especializada', value: '25+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center p-4 rounded-lg bg-gray-50"
                  >
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600">{stat.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
