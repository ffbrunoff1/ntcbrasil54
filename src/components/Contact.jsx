import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(
        'https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            recipientEmail: 'ffbrunoff@yahoo.com.br',
          }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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

  return (
    <section id="contact" className="section-padding bg-white">
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
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos prontos para atender suas necessidades e transformar seus
            projetos em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600">+55 44 99104-0774</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-gray-600">ffbrunoff@yahoo.com.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-gray-600">Padre Lebret 801 G05 Bloco 03</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn btn-primary"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center">
                  Mensagem enviada com sucesso!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">
                  Erro ao enviar mensagem. Tente novamente.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
