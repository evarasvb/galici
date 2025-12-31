import React, { useState } from 'react';
import './animations.css';
import OpportunityView from './OpportunityView';

// Logo Galici Optimizado - SVG con tamaño fijo
const GaliciLogo = ({ className = "w-8 h-8", color = "#1e40af" }) => (
  <svg viewBox="0 0 300 160" width="32" height="32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 60 130 L 160 20 L 150 130" stroke={color} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 20 110 C 100 60, 240 60, 280 110" stroke={color} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function App() {
  const [currentView, setCurrentView] = useState('landing');

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <GaliciLogo className="w-8 h-8" />
              <span className="font-bold text-xl text-blue-900">galici</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-800">Características</a>
              <button className="px-4 py-2 bg-blue-800 text-white rounded-lg text-sm font-semibold hover:bg-blue-900">
                Comenzar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-800 text-sm font-bold mb-8">
              🚀 Automatización con IA Generativa
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Adjudicar es clave. <br/>
              Hacerlo constante <span className="text-blue-700">es vital.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Multiplica x10 tus adjudicaciones en MercadoPublico con IA Generativa. <br/>
              Automatiza, filtra buenos pagadores e impacta tu última línea.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-800 text-white rounded-lg text-lg font-bold hover:bg-blue-900 shadow-lg">
                Activar Motor Ahora 🔥
              </button>
              <button className="px-8 py-4 bg-white text-blue-800 border-2 border-blue-200 rounded-lg text-lg font-bold hover:bg-blue-50">
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Inteligencia Generativa para tu Negocio</h2>
            <p className="text-xl text-gray-600">Automatización que impacta tu rentabilidad</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                🧠
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IA Generativa Escalable</h3>
              <p className="text-gray-600">
                Redacta documentos técnicos, justifica precios y arma ofertas complejas automáticamente. <br/>
                Escala sin contratar más personal.
              </p>
            </div>
            
            <div className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mix de Productos Óptimo</h3>
              <p className="text-gray-600">
                Nuestra IA cruza tu stock con demanda histórica para sugerirte qué productos empujar. <br/>
                Rentabiliza tu inventario.
              </p>
            </div>
            
            <div className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Filtro Financiero</h3>
              <p className="text-gray-600">
                Bloqueamos malos pagadores. Cada peso vendido se transforma en un peso cobrado <br/>
                en 45 días promedio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                El Aporte Brutal a tu <span className="text-blue-700">Estado de Resultados</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                No es solo vender más, es vender mejor. Automatizando reducimos GAV. <br/>
                Vendiendo a buenos pagadores reducimos costo financiero.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-blue-700">+200%</div>
                  <div className="text-gray-600">Incremento en adjudicaciones mensuales</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-green-700">-20d</div>
                  <div className="text-gray-600">Reducción en días de cobro promedio</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-indigo-700">+75%</div>
                  <div className="text-gray-600">Mejora en utilidad neta</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">📈 Proyección Financiera</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Ventas Mensuales</span>
                    <span className="font-bold text-gray-900">$15M → $45M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Días de Cobro</span>
                    <span className="font-bold text-green-600">65d → 45d</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Costo Operativo</span>
                    <span className="font-bold text-blue-600">-50%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-2 border-blue-200">
                    <span className="text-gray-900 font-bold">Impacto Última Línea</span>
                    <span className="font-bold text-blue-700 text-xl">+25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            TOMA EL CONTROL DE TUS VENTAS PÚBLICAS
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Deja que la IA haga el trabajo pesado. Tú ocúpate de la estrategia y de cobrar a tiempo.
          </p>
          <button className="px-12 py-5 bg-white text-blue-900 rounded-lg text-xl font-bold hover:bg-blue-50 shadow-2xl">
            Activar Motor Ahora 🚀
          </button>
          <p className="text-sm text-blue-200 mt-6">
            * Oferta de lanzamiento: Solo comisión por éxito el primer mes
          </p>
        </div>
      </section>

      
      
            {/* Demo OpportunityView Section */}
      <section id="opportunity-demo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vista de Oportunidad</h2>
            <p className="text-xl text-gray-600">Ejemplo de cómo luciría una oportunidad con el nuevo diseño</p>
          </div>
          <OpportunityView />
        </div>
      </section>
{/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GaliciLogo className="w-6 h-6" />
            <span className="font-bold text-gray-800">galici</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Galici Intelligence. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
