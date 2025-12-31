import React from 'react';

// Componente de Vista de Oportunidad con el tono comercial de Galici
export default function OpportunityView({ opportunity }) {
  // Datos de ejemplo - en producción vendrían de props o API
  const mockData = {
    code: '2003-38-COT25',
    title: 'Material de oficina',
    buyer: 'SUBSECRETARÍA DE SERVICIOS SOCIALES',
    closeDate: '30 dic 2025',
    amount: '$1.000.000',
    description: 'Adquisición de material de librería para stock de bodega',
    score: 75,
    riskLevel: 'medio',
    avgPaymentDays: 19,
    onTimePayments: 100,
    buyerUrl: 'https://comprador.mercadopublico.cl/ficha/60.103.008-K',
    opportunityUrl: 'https://buscador.mercadopublico.cl/ficha?code=2003-38-COT25'
  };

  const data = opportunity || mockData;
  
  const getRiskColor = (level) => {
    switch(level) {
      case 'bajo': return 'text-green-700 bg-green-100';
      case 'medio': return 'text-yellow-700 bg-yellow-100';
      case 'alto': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* HEADER DE OPORTUNIDAD */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h1>
            <a 
              href={data.opportunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
            >
              {data.code}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-4xl font-bold text-blue-700">{data.score}%</div>
              <div className="text-sm text-gray-500">Win Score</div>
            </div>
            <div className={`px-4 py-2 rounded-lg font-bold ${getRiskColor(data.riskLevel)}`}>
              RIESGO {data.riskLevel.toUpperCase()}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-200">
          <div>
            <div className="text-sm text-gray-500 mb-1">Comprador</div>
            <a 
              href={data.buyerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 hover:text-blue-700"
            >
              {data.buyer}
            </a>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Fecha de Cierre</div>
            <div className="font-semibold text-gray-900">{data.closeDate}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Monto Estimado</div>
            <div className="font-semibold text-gray-900">{data.amount}</div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500 mb-2">Descripción</div>
          <p className="text-gray-700">{data.description}</p>
        </div>
      </div>

      {/* PANEL DE SALUD FINANCIERA */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 mb-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">💰</div>
          <div>
            <h2 className="text-2xl font-bold">SALUD FINANCIERA DEL COMPRADOR</h2>
            <p className="text-blue-100">Análisis de comportamiento de pago</p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 rounded-xl p-6 mb-6 backdrop-blur-sm">
          <div className="text-xl font-bold mb-3">Este organismo PAGA AL DÍA</div>
          <div className="text-blue-100 text-lg mb-4">
            {data.avgPaymentDays} días promedio | {data.onTimePayments}% pagos dentro del plazo legal
          </div>
          
          <div className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg font-bold">
            ✓ BUEN PAGADOR
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Ideal para vender sin riesgo de caja</div>
              <div className="text-sm text-blue-100">Comportamiento histórico comprobado</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Galici prioriza este tipo de compradores</div>
              <div className="text-sm text-blue-100">En tu motor de oportunidades</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Filtro financiero: APROBADO</div>
              <div className="text-sm text-blue-100">Score de confianza alto</div>
            </div>
          </div>
        </div>
      </div>

      {/* PANEL DE RECOMENDACIÓN GALICI */}
      <div className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-blue-700 rounded-2xl p-8 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">🎯</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">RECOMENDACIÓN GALICI</h2>
            <p className="text-gray-600">Inteligencia artificial para tu decisión</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
          <div className="text-lg font-semibold text-gray-900 mb-4">La IA detecta:</div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div className="text-gray-700">Riesgo medio: monto acotado ($1M)</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <div className="text-gray-700">Excelente comportamiento de pago (19d, 100%)</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div className="text-gray-700">Oportunidad candidata a empujar con mix óptimo</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-2xl">⚡</div>
            <div className="text-lg font-bold text-blue-900">SUGERENCIA TÁCTICA</div>
          </div>
          <p className="text-gray-700 mb-4">
            Participa si tu margen supera el mínimo objetivo. Este comprador es de bajo riesgo de caja y rotación rápida. Filtro financiero activo: <span className="font-bold text-green-700">VERDE</span>.
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Ver Mix Sugerido
            </button>
            <button className="px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Análisis IA Completo
            </button>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 mb-6">
            Galici hizo el trabajo pesado. Tú decides si es rentable. <span className="font-bold text-white">Toma el control.</span>
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors shadow-xl">
            Construir Oferta Ahora 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
