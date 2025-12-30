import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Search as SearchIcon, 
  ShieldCheck, 
  ChevronDown,
  Menu,
  X,
  Zap,
  Cpu,
  Activity,
  Layers,
  TrendingUp,
  Rocket,
  Lock,
  MessageSquare,
  Database,
  Wallet,
  Crosshair,
  Filter,
  Clock,
  Package,
  Armchair,      
  Utensils,      
  Stethoscope,   
  Sparkles,      
  Laptop,        
} from 'lucide-react';

// --- Nuevo Logo Galici "Simple & Social" (Tipo App) ---
const GaliciLogo = ({ className = "w-8 h-8", color = "#1e40af", ariaLabel = 'Galici logo' }) => (
  <svg 
    role="img"
    aria-label={ariaLabel}
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{ariaLabel}</title>
    {/* Fondo Circular Sólido */}
    <circle cx="50" cy="50" r="50" fill={color} />
    
    {/* La 'g' estilizada en blanco (Negativo) */}
    <path 
      d="M50 25C36.19 25 25 36.19 25 50C25 63.81 36.19 75 50 75C61.05 75 70.31 67.84 73.75 57.81H50V46.88H84.06C84.69 48.75 85 50.78 85 53.13C85 67.97 70.47 80 50 80C33.43 80 20 66.57 20 50C20 33.43 33.43 20 50 20C57.66 20 64.38 22.81 69.69 27.81L62.34 35.16C59.53 32.5 55.47 30 50 30V25Z" 
      fill="white" 
    />
  </svg>
);

// --- Componentes UI Clásicos (Clean Corporate) ---

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false, ariaLabel }) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-sm";
  
  const variants = {
    primary: "bg-blue-800 hover:bg-blue-900 text-white shadow-lg shadow-blue-900/20 border border-transparent hover:shadow-xl disabled:bg-gray-300 disabled:text-gray-500",
    secondary: "bg-white text-blue-900 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800",
    outline: "border-2 border-blue-800 text-blue-800 hover:bg-blue-50",
    ghost: "text-gray-600 hover:text-blue-800 hover:bg-gray-100",
    white: "bg-white text-blue-900 hover:bg-blue-50 shadow-md",
    search: "bg-blue-600 hover:bg-blue-700 text-white rounded-r-md rounded-l-none h-full"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '', highlight = false }) => (
  <div className={`
    bg-white rounded-xl border transition-all duration-300
    ${highlight 
      ? 'border-blue-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-blue-100' 
      : 'border-gray-200 shadow-sm hover:shadow-md'} 
    ${className}
  `}>
    {children}
  </div>
);

const MetricCard = ({ label, value, trend, subLabel }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wide mb-1">{label}</div>
    <div className="text-2xl font-extrabold text-gray-900 mb-1">{value}</div>
    {trend && (
      <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${trend.includes('↑') ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
        {trend}
      </div>
    )}
    {subLabel && <div className="text-[10px] text-gray-400 mt-1">{subLabel}</div>}
  </div>
);

const ComparisonItem = ({ label, before, after, change }) => (
  <div className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 rounded-lg transition-colors">
    <div className="font-medium text-gray-600 w-1/3 text-left text-sm">{label}</div>
    <div className="text-gray-400 font-mono w-1/4 text-center line-through decoration-red-400 decoration-2 text-sm">{before}</div>
    <div className="text-blue-900 font-bold font-mono w-1/4 text-center text-lg">{after}</div>
    <div className="text-green-600 font-bold text-xs w-1/6 text-right bg-green-50 px-2 py-1 rounded-md">{change}</div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none group hover:bg-gray-50 px-2 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-bold transition-colors ${isOpen ? 'text-blue-700' : 'text-gray-700'}`}>
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 text-sm leading-relaxed px-2">
          {answer}
        </p>
      </div>
    </div>
  );
};

// --- Categorías Solicitadas ---
const PRODUCT_CATEGORIES = [
  { name: "Artículos de Oficina", icon: FileText },
  { name: "Insumos Computacionales", icon: Laptop },
  { name: "Ergonomía", icon: Armchair },
  { name: "Artículos de Aseo", icon: Sparkles },
  { name: "Alimentos", icon: Utensils },
  { name: "Insumos Médicos", icon: Stethoscope },
  { name: "Menaje", icon: Package },
  { name: "Electrodomésticos", icon: Zap },
  { name: "Artículos de Tecnología", icon: Cpu },
  { name: "Mobiliario", icon: Building2 }
];

// --- Componente Principal ---

export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Controlled inputs state
  const [onboardEmail, setOnboardEmail] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, [currentView]);

  // --- Vistas ---

  const LandingPage = () => (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* Navbar Corporativo */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentView('landing')}>
               {/* Logo Simple tipo Facebook */}
               <div className="transition-transform group-hover:scale-105">
                  <GaliciLogo className="w-10 h-10" color="#1e40af" />
               </div>
               <span className="font-extrabold text-2xl text-blue-900 tracking-tight leading-none">galici</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#logic" className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors">Estrategia</a>
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors">IA Generativa</a>
              <div className="h-6 w-px bg-gray-300 mx-2"></div>
              <button 
                onClick={() => setCurrentView('freeSignup')}
                className="text-sm font-medium text-gray-500 hover:text-blue-800 transition-colors"
                aria-label="Buscador Gratuito"
              >
                Buscador Gratuito
              </button>
              <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="py-2.5" ariaLabel="Tomar el Control">
                Tomar el Control
              </Button>
            </div>

            <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-800 text-xs font-bold uppercase tracking-wide shadow-sm">
              <TrendingUp className="w-3 h-3 fill-green-800" /> Impacto Directo en tu Última Línea
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Adjudicar es clave. <br/>
              Hacerlo constante <br/>
              <span className="text-blue-700">es vital.</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Recupera las riendas de tu negocio. Tú defines la estrategia, <strong className="text-blue-800">Galici</strong> ejecuta con <strong>IA Generativa</strong> para escalar tus ventas y blindar tu caja vendiéndole solo a los que pagan.
            </p>

            <ul className="space-y-3 text-gray-700 font-medium">
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-blue-600" /> Automatización escalable con IA
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-blue-600" /> Sugerencia de mix rentable
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-blue-600" /> Venta segura a "Buenos Pagadores"
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="text-lg px-8 h-14 w-full sm:w-auto" ariaLabel="Actualizar motor">
                ACTUALIZA TU MOTOR <Rocket className="w-5 h-5 ml-1" />
              </Button>
              <Button onClick={() => setCurrentView('freeSignup')} variant="secondary" className="text-lg px-8 h-14 w-full sm:w-auto border-blue-100 bg-blue-50 text-blue-800" ariaLabel="Buscador gratis">
                Solo Buscar (Gratis)
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center lg:text-left font-medium">
              * Modelo Éxito: Paga solo si ganas durante el primer mes.
            </p>
          </div>

          {/* Hero Dashboard Graphic */}
          <div className="relative animate-fade-in-left">
             <div className="absolute -inset-1 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl opacity-50 blur-xl"></div>
             <Card highlight className="relative p-6 bg-white/95 backdrop-blur shadow-2xl border-gray-100">
               <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                 <div className="font-bold text-gray-900 flex items-center gap-2 uppercase tracking-wider text-sm">
                   <Layers className="w-5 h-5 text-blue-700" /> Estado de Resultados
                 </div>
                 <div className="text-[10px] bg-green-100 text-green-800 border border-green-200 px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                   Proyección: Óptima
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <MetricCard label="Adjudicación Mensual" value="Constante" trend="Automático" subLabel="Escala x10" />
                  <MetricCard label="Días de Cobro" value="45 Días" trend="↓ Eficiente" subLabel="Filtro Financiero" />
                  <MetricCard label="Costo Operativo" value="-50%" trend="↓ Ahorro" subLabel="IA Generativa" />
                  <MetricCard label="Impacto Última Línea" value="+25%" trend="↑ Neto" subLabel="Utilidad Real" />
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Logic / Strategy Section */}
      <section id="logic" className="bg-gray-50 py-24 border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Inteligencia Generativa para tu Negocio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La automatización no es solo velocidad, es estrategia. <br/>
            Nuestra IA no solo postula, <strong>genera rentabilidad</strong> sugiriendo el mix perfecto.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <Cpu className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">IA Generativa Escalable</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Olvídate de copiar y pegar. Nuestra IA redacta documentos técnicos, justifica precios y arma ofertas complejas automáticamente, permitiéndote escalar sin contratar más personal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="bg-indigo-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
              <Crosshair className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Estrategia en tus Manos</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Te devolvemos el control. Tú defines los parámetros estratégicos (margen, zona, cliente ideal) y Galici se encarga de la ejecución táctica perfecta.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
              <Wallet className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Rentabilidad Sugerida</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              El sistema analiza millones de datos para sugerirte el <strong>mix de productos</strong> con mayor probabilidad de adjudicación y mejor margen. Vendemos inteligencia, no humo.
            </p>
          </div>
        </div>
      </section>

      {/* Engine Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 border border-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Motor Galici v4.0
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Solución Integral para la Última Línea</h2>
            <p className="text-gray-600 mt-2">Tecnología diseñada para impactar directamente en tu estado de resultados.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mix de Productos Óptimo</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nuestra IA cruza tu stock con la demanda histórica para sugerirte qué productos empujar. Rentabiliza tu inventario con decisiones basadas en datos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-green-300 transition-colors">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Interrogatorio de Bases</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                La IA Generativa lee y resume las bases por ti. Detecta trampas, requisitos ocultos y oportunidades en segundos. Tu equipo solo toma la decisión final.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-indigo-300 transition-colors">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Filtro Financiero</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bloqueamos a los malos pagadores. Aseguramos que cada peso vendido se transforme en un peso cobrado en tiempo récord (45 días promedio).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience / Categories - Clean */}
      <section id="target" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sectores de Alta Rotación</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestro motor funciona mejor en rubros donde la velocidad, el stock y la rotación de caja son críticos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {PRODUCT_CATEGORIES.map((cat) => (
              <div key={cat.name} className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-default group">
                 <cat.icon className="w-8 h-8 text-blue-700 mb-4 group-hover:scale-110 transition-transform" />
                 <span className="text-xs font-bold text-gray-600 text-center uppercase tracking-wide group-hover:text-blue-900">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Metrics Comparison */}
      <section id="results" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              El Aporte Brutal a tu <br/> <span className="text-blue-700">Estado de Resultados</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              No es solo vender más, es vender mejor. Automatizando reducimos el Gasto de Administración y Ventas (GAV). Vendiendo a buenos pagadores reducimos el Costo Financiero. El resultado: una última línea mucho más saludable.
            </p>
            <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-700">
              <p className="font-medium text-blue-900 italic text-sm">
                "Te devolvemos las riendas. Tú pones la estrategia, nosotros ponemos la inteligencia artificial y la ejecución constante."
              </p>
            </div>
          </div>
          
          <div>
            <Card className="p-8 shadow-xl border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-600" /> Resultados del Motor V4.0
              </h3>
              <div className="space-y-2">
                <ComparisonItem label="Monto Adjudicado" before="$15M" after="$45M" change="+200%" />
                <ComparisonItem label="Días Pago Real" before="65 días" after="45 días" change="-20 días" />
                <ComparisonItem label="Eficiencia Admin" before="Baja" after="Alta" change="IA Generativa" />
                <ComparisonItem label="Utilidad Neta" before="8%" after="14%" change="+75%" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 relative border-t border-gray-200">
         <div className="max-w-3xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900">Centro de Ayuda</h2>
             <p className="text-gray-500 mt-2">Respuestas claras para decisiones inteligentes.</p>
           </div>
           
           <div className="space-y-2">
             <FAQItem 
               question="¿Cómo mejora Galici mi última línea?"
               answer="Atacamos el estado de resultados por dos frentes: 1) Reducimos costos operativos automatizando la postulación con IA Generativa. 2) Mejoramos el flujo de caja filtrando a los malos pagadores, reduciendo costos financieros."
             />
             <FAQItem 
               question="¿Qué significa que 'me devuelven las riendas'?"
               answer="Muchos proveedores se vuelven esclavos del proceso administrativo de postular. Con Galici, la IA hace el trabajo repetitivo, permitiéndote enfocarte en lo importante: la estrategia comercial y la definición de márgenes."
             />
             <FAQItem 
               question="¿Qué hace la IA Generativa en el proceso?"
               answer="No solo busca. Redacta, completa formularios, sugiere precios basados en históricos y genera la documentación necesaria para que tu postulación sea perfecta en minutos."
             />
             <FAQItem 
               question="¿Puedo usar Galici solo como buscador?"
               answer="Sí, tenemos un plan gratuito para búsquedas. Pero el verdadero valor está en el Motor de Adjudicación, que es el que impacta en tu rentabilidad."
             />
           </div>
         </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 bg-blue-900 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <div className="inline-block px-4 py-1 bg-blue-800 text-blue-100 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-700">
            Lanzamiento v4.0
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            TOMA EL CONTROL DE TUS VENTAS PÚBLICAS
          </h2>
          <p className="text-blue-100 text-lg mb-12 font-light max-w-2xl mx-auto">
            Deja que la IA haga el trabajo pesado. Tú ocúpate de la estrategia y de cobrar a tiempo.
          </p>
          
          <Button onClick={() => setCurrentView('onboarding')} variant="white" className="text-lg px-12 h-16 w-full sm:w-auto font-bold text-blue-900 hover:bg-blue-50" ariaLabel="Activar Motor Ahora">
            Activar Motor Ahora
          </Button>
          
          <p className="text-xs text-blue-200 font-medium mt-6 tracking-wide opacity-80">
            * Oferta de lanzamiento: Solo comisión por éxito el primer mes.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8 text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
             <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4 group cursor-pointer">
                   {/* Logo Footer */}
                   <div className="">
                     <GaliciLogo className="w-8 h-8" color="#1e40af" />
                   </div>
                   <span className="font-extrabold text-xl text-gray-800 tracking-tight">galici</span>
                </div>
                <p className="text-xs max-w-xs">Solución Integral de Software para la rentabilidad pública.</p>
             </div>
             
             <div className="flex gap-12 text-center md:text-left text-xs uppercase tracking-wider font-bold">
               <div>
                 <h4 className="text-gray-900 mb-4">Plataforma</h4>
                 <ul className="space-y-2">
                   <li><a href="#" className="hover:text-blue-700 transition-colors">Tecnología IA</a></li>
                   <li><a href="#" className="hover:text-blue-700 transition-colors">Seguridad</a></li>
                   <li><a href="#" className="hover:text-blue-700 transition-colors">Rentabilidad</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-gray-900 mb-4">Legal</h4>
                 <ul className="space-y-2">
                   <li><a href="#" className="hover:text-blue-700 transition-colors">Términos</a></li>
                   <li><a href="#" className="hover:text-blue-700 transition-colors">Privacidad</a></li>
                 </ul>
               </div>
             </div>

             <div className="text-center md:text-right">
                <h4 className="text-gray-900 mb-4 text-xs uppercase tracking-wider font-bold">Contacto</h4>
                <p className="text-sm mb-1 hover:text-blue-700 cursor-pointer transition-colors">contacto@galici.cl</p>
             </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center text-[10px] uppercase tracking-widest text-gray-400">
            © 2025 Galici Intelligence. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );

  const OnboardingWizard = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans items-center justify-center p-4 relative overflow-hidden">
        <Card className="p-10 max-w-md w-full text-center relative z-10 shadow-xl border-gray-200 bg-white">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Activar Motor</h2>
            <p className="text-gray-600 mb-8 text-sm">Déjanos tus coordenadas. Un agente de inteligencia se pondrá en contacto para configurar tu motor Galici.</p>
            <div className="space-y-3">
               <label htmlFor="onboard-email" className="sr-only">Email Corporativo</label>
               <input id="onboard-email" value={onboardEmail} onChange={e => setOnboardEmail(e.target.value)} type="text" placeholder="Email Corporativo" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm" />
               <Button onClick={() => { /* enviar datos o navegar */ setCurrentView('landing'); }} variant="primary" className="w-full">Iniciar Secuencia</Button>
               <Button onClick={() => setCurrentView('landing')} variant="ghost" className="w-full">Cancelar</Button>
            </div>
        </Card>
    </div>
  );

  const FreeSignup = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-6 left-6 cursor-pointer" onClick={() => setCurrentView('landing')}>
           <div className="flex items-center gap-2">
             <div className="transition-transform hover:scale-105">
                <GaliciLogo className="w-8 h-8" color="#1e40af" />
             </div>
             <span className="font-bold text-gray-800">galici</span>
           </div>
        </div>
        <Card className="p-10 max-w-md w-full text-center relative z-10 shadow-lg border-gray-200 bg-white">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon className="w-6 h-6 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Buscador Gratuito</h2>
            <p className="text-gray-500 mb-8 text-xs">Crea una cuenta para buscar licitaciones sin las herramientas de inteligencia.</p>
            <div className="space-y-3 text-left">
               <div>
                 <label htmlFor="signup-email" className="block text-xs font-bold text-gray-700 mb-1">Email</label>
                 <input id="signup-email" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="tu@empresa.com" />
               </div>
               <div>
                 <label htmlFor="signup-password" className="block text-xs font-bold text-gray-700 mb-1">Contraseña</label>
                 <input id="signup-password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} type="password" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••" />
               </div>
               <div className="pt-4">
                 <Button onClick={() => setCurrentView('search')} variant="secondary" className="w-full bg-gray-800 text-white hover:bg-gray-700 border-transparent">Crear Cuenta Gratuita</Button>
               </div>
            </div>
            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="text-xs text-gray-400">¿Buscas resultados reales? <span className="text-blue-600 font-bold cursor-pointer hover:underline" onClick={() => setCurrentView('onboarding')}>Activa el Motor</span></p>
            </div>
        </Card>
    </div>
  );

  const SearchEngine = () => (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Header Search */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
           <div className="flex items-center gap-8 w-full">
             <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('landing')}>
                <GaliciLogo className="w-8 h-8" color="#1e40af" />
             </div>
             <div className="flex-1 max-w-2xl relative">
                <input 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  type="text" 
                  placeholder="Buscar licitaciones (Ej: Computadores, Aseo, Construcción...)" 
                  className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
                <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
             </div>
           </div>
           <div className="flex items-center gap-4">
             <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="py-1.5 text-xs h-8 px-4" ariaLabel="Desbloquear inteligencia">
               Desbloquear Inteligencia <Lock className="w-3 h-3 ml-1" />
             </Button>
             <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-xs">
               TU
             </div>
           </div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 grid grid-cols-12 gap-8">
        {/* Sidebar Filters */}
        <div className="col-span-3 space-y-6">
           <div>
             <h3 className="text-xs font-bold text-gray-900 uppercase mb-3 flex items-center gap-2"><Filter className="w-3 h-3"/> Filtros</h3>
             <div className="space-y-2">
               {['Región Metropolitana', 'Valparaíso', 'Biobío', 'Antofagasta'].map(r => (
                 <label key={r} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                   <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> {r}
                 </label>
               ))}
             </div>
           </div>
           <div className="border-t border-gray-200 pt-6">
             <h3 className="text-xs font-bold text-gray-900 uppercase mb-3">Rubro</h3>
             <div className="space-y-2">
               {['Tecnología', 'Mobiliario', 'Aseo', 'Construcción'].map(r => (
                 <label key={r} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                   <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> {r}
                 </label>
               ))}
             </div>
           </div>
           
           {/* Premium Filter Teaser */}
           <div className="bg-gray-100 rounded-lg p-4 border border-gray-200 opacity-70 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center z-10">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">Filtro de Riesgo</h3>
              <div className="h-2 bg-gray-200 rounded mb-2 w-3/4"></div>
              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
           </div>
        </div>

        {/* Results */}
        <div className="col-span-9 space-y-4">
           {/* Result Card 1 */}
           <Card className="p-5 flex justify-between items-start hover:border-blue-300 transition-colors group">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Compra Ágil</span>
                  <span className="text-gray-400 text-xs">ID: 4561-23-LQ24</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700">Adquisición de Equipamiento Informático</h3>
                <div className="text-sm text-gray-600 mb-4 flex items-center gap-4">
                  <span className="flex items-center gap-1"><Building2 className="w-3 h-3"/> Servicio de Salud Metropolitano</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> Cierra en 2 días</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                 <div className="text-xl font-bold text-gray-900">$4.500.000</div>
                 <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1" aria-label="Ver en Mercado Público">
                   Ver en Mercado Público <ArrowRight className="w-3 h-3" />
                 </button>
              </div>
           </Card>

           {/* Result Card 2 */}
           <Card className="p-5 flex justify-between items-start hover:border-blue-300 transition-colors group">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">L1</span>
                  <span className="text-gray-400 text-xs">ID: 2210-55-LE24</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700">Servicio de Mantención de Mobiliario</h3>
                <div className="text-sm text-gray-600 mb-4 flex items-center gap-4">
                  <span className="flex items-center gap-1"><Building2 className="w-3 h-3"/> Municipalidad de Providencia</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> Cierra en 5 días</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                 <div className="text-xl font-bold text-gray-900">$12.000.000</div>
                 <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1" aria-label="Ver en Mercado Público">
                   Ver en Mercado Público <ArrowRight className="w-3 h-3" />
                 </button>
              </div>
           </Card>

           {/* Locked Feature Teaser in Results */}
           <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="bg-blue-100 p-3 rounded-full">
                   <ShieldCheck className="w-6 h-6 text-blue-600" />
                 </div>
                 <div>
                   <h4 className="font-bold text-blue-900">Análisis de Riesgo Bloqueado</h4>
                   <p className="text-sm text-blue-700">Estás viendo resultados sin el filtro de "Buenos Pagadores".</p>
                 </div>
              </div>
              <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="text-xs" ariaLabel="Ver análisis premium">
                Ver Análisis Premium
              </Button>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentView === 'landing' && <LandingPage />}
      {currentView === 'onboarding' && <OnboardingWizard />}
      {currentView === 'freeSignup' && <FreeSignup />}
      {currentView === 'search' && <SearchEngine />}
    </>
  );
}
