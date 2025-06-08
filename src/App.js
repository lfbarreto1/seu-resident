import React, { useState, useEffect } from 'react';
import { ChevronRight, Brain, Clock, Target, Users, Check, Play, Star, ArrowRight, Calendar, DollarSign } from 'lucide-react';
import './index.css';

const SeuResidentLanding = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    residencyYear: '',
    plan: 'monthly'
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Dados enviados com sucesso! Entraremos em contato em breve.');
  };

  const annualSavings = (39.00 * 12) - 708;


  if (currentPage === 'plans') {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
          {/* Header */}
          <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#359e93] to-emerald-600 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-xl text-gray-900">Seu Residente</span>
                </div>
                <button
                    onClick={() => setCurrentPage('landing')}
                    className="text-[#359e93] hover:text-emerald-700 font-medium transition-colors"
                >
                  ← Voltar
                </button>
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Escolha Seu Plano
              </h1>
              <p className="text-xl text-gray-600">
                Transforme o processo de passar na residência
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Plano Mensal */}
              <div className={`bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-lg ${formData.plan === 'monthly' ? 'border-[#359e93] shadow-lg' : 'border-gray-200'}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Mensal</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#359e93]">R$ 59</span>
                    <span className="text-gray-600 ml-1">/mês</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#359e93] mr-3" />
                    <span>Planner personalizado com IA</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#359e93] mr-3" />
                    <span>Priorização automática de estudos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#359e93] mr-3" />
                    <span>Gestão de tempo otimizada</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#359e93] mr-3" />
                    <span>Suporte por email</span>
                  </li>
                </ul>
                <button
                    onClick={() => setFormData({...formData, plan: 'monthly'})}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        formData.plan === 'monthly'
                            ? 'bg-[#359e93] text-white'
                            : 'border-2 border-[#359e93] text-[#359e93] hover:bg-[#359e93] hover:text-white'
                    }`}
                >
                  {formData.plan === 'monthly' ? 'Selecionado' : 'Selecionar Plano'}
                </button>
              </div>

              {/* Plano Anual */}
              <div className={`bg-white rounded-2xl border-2 p-8 relative transition-all duration-300 hover:shadow-lg ${formData.plan === 'annual' ? 'border-[#359e93] shadow-lg' : 'border-gray-200'}`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#359e93] to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Anual</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#359e93]">R$ 39</span>
                    <span className="text-gray-600 ml-1">/mês</span>
                  </div>
                  <p className="text-sm text-emerald-600 font-semibold mt-2">
                    Economia de R$ {annualSavings.toFixed(2)}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#359e93] mr-3" />
                    <span>Tudo do plano mensal</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#359e93] mr-3" />
                    <span>2 meses grátis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#359e93] mr-3" />
                    <span>Suporte prioritário</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#359e93] mr-3" />
                    <span>Análises avançadas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#359e93] mr-3" />
                    <span>Acesso antecipado a novas funcionalidades</span>
                  </li>
                </ul>
                <button
                    onClick={() => setFormData({...formData, plan: 'annual'})}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        formData.plan === 'annual'
                            ? 'bg-[#359e93] text-white'
                            : 'border-2 border-[#359e93] text-[#359e93] hover:bg-[#359e93] hover:text-white'
                    }`}
                >
                  {formData.plan === 'annual' ? 'Selecionado' : 'Selecionar Plano'}
                </button>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Complete seu cadastro
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#359e93] focus:border-transparent transition-all"
                        placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#359e93] focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#359e93] focus:border-transparent transition-all"
                        placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Especialidade *
                    </label>
                    <select
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#359e93] focus:border-transparent transition-all"
                    >
                      <option value="">Selecione sua especialidade</option>
                      <option value="clinica-medica">Clínica Médica</option>
                      <option value="cirurgia-geral">Cirurgia Geral</option>
                      <option value="pediatria">Pediatria</option>
                      <option value="ginecologia">Ginecologia e Obstetrícia</option>
                      <option value="psiquiatria">Psiquiatria</option>
                      <option value="medicina-familia">Medicina de Família</option>
                      <option value="cardiologia">Cardiologia</option>
                      <option value="ortopedia">Ortopedia</option>
                      <option value="outras">Outras</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ano da residência *
                  </label>
                  <select
                      name="residencyYear"
                      value={formData.residencyYear}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#359e93] focus:border-transparent transition-all"
                  >
                    <option value="">Selecione o ano</option>
                    <option value="R1">R1 - Primeiro ano</option>
                    <option value="R2">R2 - Segundo ano</option>
                    <option value="R3">R3 - Terceiro ano</option>
                    <option value="R4">R4 - Quarto ano</option>
                    <option value="R5">R5 - Quinto ano</option>
                  </select>
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-[#359e93] to-emerald-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Começar agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#359e93] to-emerald-600 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">Seu Residente</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-[#359e93] transition-colors">Recursos</a>
                <a href="#video" className="text-gray-600 hover:text-[#359e93] transition-colors">Demo</a>
                <a href="#pricing" className="text-gray-600 hover:text-[#359e93] transition-colors">Preços</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-[#359e93] font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
                <span>Transforme sua residência com IA</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sua rotina no ciclo clínico muda a cada duas semanas.
              <span className="block text-[#359e93]">Seu estudo continua igual?</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A gente te ajuda a manter o foco com um plano de estudos adaptado, feito sob medida pra sua rotina real – e cobramos você <strong>todo dia no WhatsApp.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                  onClick={() => setCurrentPage('plans')}
                  className="bg-gradient-to-r from-[#359e93] to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                Quero meu plano personalizado
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-[#359e93] text-[#359e93] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#359e93] hover:text-white transition-all duration-300 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Ver demonstração
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#359e93] to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">70%</h3>
              <p className="text-gray-600">Redução no tempo de planejamento</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#359e93] to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">85%</h3>
              <p className="text-gray-600">Melhoria no foco dos estudos</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#359e93] to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Residentes já cadastrados</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gradient-to-r from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Recursos que transformam sua residência
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nossa IA foi treinada especificamente para entender os desafios únicos da residência médica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-[#359e93] to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Planejamento Inteligente</h3>
                <p className="text-gray-600 leading-relaxed">
                  IA que entende sua especialidade, plantões e provas para criar o plano de estudos perfeito.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-[#359e93] to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Priorização Automática</h3>
                <p className="text-gray-600 leading-relaxed">
                  Identifica automaticamente quais temas são mais importantes para sua fase da residência.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-[#359e93] to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestão de Tempo</h3>
                <p className="text-gray-600 leading-relaxed">
                  Otimiza seu tempo livre entre plantões, aulas e procedimentos para maximizar o aprendizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Veja como funciona na prática
              </h2>
              <p className="text-xl text-gray-600">
                Demonstração completa do Seu Residente e como ele resolve os problemas reais da residência
              </p>
            </div>

            <div className="relative bg-gradient-to-r from-[#359e93] to-emerald-600 rounded-3xl p-2">
              <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white text-lg font-medium">Vídeo em breve</p>
                  <p className="text-white/80 text-sm">Estamos finalizando a gravação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#359e93] to-emerald-600 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para transformar sua residência?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Junte-se aos residentes que já estão otimizando seus estudos com nossa IA
            </p>
            <button
                onClick={() => setCurrentPage('plans')}
                className="bg-white text-[#359e93] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Começar gratuitamente
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#359e93] to-emerald-600 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Seu Residente</span>
              </div>
              <p className="text-gray-400 text-sm">
                © 2025 Seu Residente. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default SeuResidentLanding;