import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Briefcase, 
  ShieldCheck, 
  Users, 
  ChevronRight, 
  ChevronLeft,
  UploadCloud,
  Menu,
  X,
  Zap,
  Cpu,
  AlertTriangle,
  Activity,
  BarChart3,
  Lock,
  Globe,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  TrendingUp,
  Clock,
  DollarSign,
  Package,
  Monitor,
  Wrench,
  Lightbulb,
  Home,
  ShoppingBag,
  Filter,
  Eye,
  Edit3,
  Armchair,      
  Utensils,      
  Stethoscope,   
  Sparkles,      
  Laptop,        
  Printer,
  Rocket,
  HelpCircle,
  ChevronDown,
  MessageSquare,
  Crosshair,
  Database,
  Wallet,
  RefreshCw,
  Layers // Icono para Software/Solution
} from 'lucide-react';

// --- Logo Galici Corporate (Azul Institucional) ---
const GaliciLogo = ({ className = "w-8 h-8", color = "#1e40af" }) => (
  <svg 
    viewBox="0 0 200 120" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M20 90 C 50 80, 80 40, 100 10 L 120 110 M 10 70 C 60 50, 140 50, 190 80" 
      stroke={color} 
      strokeWidth="12" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// --- Componentes UI Clásicos (Clean Corporate) ---

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-sm";
  
  const variants = {
    primary: "bg-blue-800 hover:bg-blue-900 text-white shadow-lg shadow-blue-900/20 border border-transparent hover:shadow-xl disabled:bg-gray-300 disabled:text-gray-500",
    secondary: "bg-white text-blue-900 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800",
    outline: "border-2 border-blue-800 text-blue-800 hover:bg-blue-50",
    ghost: "text-gray-600 hover:text-blue-800 hover:bg-gray-100",
    white: "bg-white text-blue-900 hover:bg-blue-50 shadow-md"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
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
      <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${trend.includes('↓') ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
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

  useEffect(() => { window.scrollTo(0, 0); }, [currentView]);

  const LandingPage = () => (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* Navbar Corporativo */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentView('landing')}>
               <div className="bg-blue-50 p-2 rounded-lg border border-blue-100 group-hover:bg-blue-100 transition-colors">
                  <GaliciLogo className="w-8 h-8" color="#1e40af" />
               </div>
               <div className="flex flex-col">
                <span className="font-extrabold text-xl text-blue-900 tracking-tight leading-none">GALICI</span>
                <span className="text-[10px] text-gray-500 tracking-widest font-semibold uppercase">La Buena Venta</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#logic" className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors">Solución</a>
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors">Motor</a>
              <a href="#results" className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors">Última Línea</a>
              <div className="h-6 w-px bg-gray-300 mx-2"></div>
              <a href="#" className="text-sm font-bold text-blue-800 hover:underline">Acceso Clientes</a>
              <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="py-2.5">
                Actualizar Motor
              </Button>
            </div>

            <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enfoque Financiero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-800 text-xs font-bold uppercase tracking-wide shadow-sm">
              <RefreshCw className="w-3 h-3 fill-green-800" /> Rotación de caja optimizada
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Actualiza el motor <br/>
              de tu negocio: <br/>
              <span className="text-blue-700">Vende, cobra y repite.</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              La eficiencia administrativa es la bencina de tu motor. Galici automatiza el proceso repetitivo de postular —desde Compras Ágiles hasta Grandes Licitaciones— para que tu equipo se enfoque en cerrar el negocio.
            </p>

            <ul className="space-y-3 text-gray-700 font-medium">
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-blue-600" /> Match con el producto más rentable
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-blue-600" /> Reduce días de pago de 65 a 45 días
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-blue-600" /> Automatización para mejorar la última línea
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="text-lg px-8 h-14 w-full sm:w-auto">
                ACTUALIZA TU MOTOR <Rocket className="w-5 h-5 ml-1" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center lg:text-left font-medium">
              * Comisión por éxito solo el primer mes. Sin letra chica.
            </p>
          </div>

          {/* Hero Dashboard Graphic - Sincronización Financiera */}
          <div className="relative animate-fade-in-left">
             <div className="absolute -inset-1 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl opacity-50 blur-xl"></div>
             <Card highlight className="relative p-6 bg-white/95 backdrop-blur shadow-2xl border-gray-100">
               <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                 <div className="font-bold text-gray-900 flex items-center gap-2 uppercase tracking-wider text-sm">
                   <Layers className="w-5 h-5 text-blue-700" /> Solución Integral
                 </div>
                 <div className="text-[10px] bg-green-100 text-green-800 border border-green-200 px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                   Estado: Caja Azul
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <MetricCard label="Días Pago Mercado" value="65 Días" trend="Promedio" subLabel="Sin gestión" />
                  <MetricCard label="Días Pago Galici" value="45 Días" trend="↓ Real" subLabel="Con filtro de riesgo" />
                  <MetricCard label="Capacidad Postulación" value="x10" trend="↑ 833%" subLabel="Motor actualizado" />
                  <MetricCard label="Impacto Última Línea" value="+25%" trend="↑ Neto" subLabel="Utilidad pura" />
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Logic / Strategy Section */}
      <section id="logic" className="bg-gray-50 py-24 border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Solution para tu Última Línea</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vamos directo al problema real. Sabemos que tus proveedores te exigen 30 días. <br/>
            Galici alinea tu operación de ventas con tu realidad financiera.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Eficiencia Administrativa</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              El proceso de postular es repetitivo y consume recursos. Nuestra automatización es la pieza clave que inyecta velocidad y precisión a tu motor comercial.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="bg-indigo-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
              <ShieldCheck className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">El Estándar Galici</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Identificamos a los organismos que pagan en plazos razonables (45 días promedio). Acortamos la brecha financiera para que tu rotación de dinero se mantenga en azul.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
              <TrendingUp className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Impacto Real</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nuestras alertas protegen tu margen, pero nuestra automatización impacta directamente tu utilidad neta (última línea) al hacer más eficiente cada peso invertido en postular.
            </p>
          </div>
        </div>
      </section>

      {/* Engine Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 border border-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Tecnología Galici
            </div>
            <h2 className="text-3xl font-bold text-gray-900">¿Qué hace tu nuevo motor?</h2>
            <p className="text-gray-600 mt-2">Funcionalidades diseñadas para la eficiencia financiera.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Match Rentable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No solo buscamos lo que puedes vender, sino lo que es más rentable vender. Priorizamos productos con mejor margen y rotación en el mercado público.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-green-300 transition-colors">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Interrogatorio de Bases</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nuestra IA lee la burocracia por ti. Extrae requisitos y plazos de pago en segundos. Ahorra tiempo administrativo valioso en cada postulación.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-indigo-300 transition-colors">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Radar de Solvencia</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                El sistema bloquea automáticamente oportunidades de organismos con mal historial de pago. Protegemos tu flujo de caja antes de que postules.
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
              Nuestro motor funciona mejor en rubros donde la velocidad y el stock son críticos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-default group">
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
              El Efecto Multiplicador <br/> <span className="text-blue-700">en tu Última Línea</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              No es magia, es eficiencia operativa. Al automatizar la búsqueda y creación de ofertas, reducimos drásticamente tu costo por postulación. Al ganar con mejores pagadores, disminuimos la presión sobre tu caja.
            </p>
            <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-700">
              <p className="font-medium text-blue-900 italic text-sm">
                "Aumentamos marginalmente tu tasa de éxito, pero multiplicamos exponencialmente tus intentos ganadores focalizando los esfuerzos en los <span className="font-bold underline">pagadores eficientes</span>. Eso blinda tu caja de inmediato."
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
                <ComparisonItem label="Tasa de Éxito" before="5%" after="7%" change="+40%" />
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
               question="¿Qué se considera un 'Buen Pagador' en el sistema?"
               answer="Para Galici, un buen pagador es aquel organismo que tiene un historial de pago cercano a los 30-45 días. Esto es crítico para calzar con los plazos de tus propios proveedores."
             />
             <FAQItem 
               question="¿Cómo mejora Galici mi última línea?"
               answer="De dos formas: 1) Eficiencia administrativa que reduce costos en el proceso repetitivo de postular. 2) Filtrado financiero que evita que asumas costos por intereses excesivos al cobrar tarde."
             />
             <FAQItem 
               question="¿Puedo usar Galici si soy una PyME?"
               answer="Absolutamente. De hecho, el motor es ideal para PyMEs que necesitan cuidar su flujo de caja y no tienen espaldas financieras para esperar pagos eternos."
             />
             <FAQItem 
               question="¿Qué alcance tiene el radar de licitaciones?"
               answer="Cubrimos todo Mercado Público, desde Compras Ágiles (rápidas y tácticas) hasta Grandes Licitaciones, siempre aplicando el filtro de solvencia del comprador."
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
            ES HORA DE ACTUALIZAR TU MOTOR
          </h2>
          <p className="text-blue-100 text-lg mb-12 font-light max-w-2xl mx-auto">
            Deja de vender para cobrar "algún día". Únete a los proveedores que ya operan con eficiencia financiera.
          </p>
          
          <Button onClick={() => setCurrentView('onboarding')} variant="white" className="text-lg px-12 h-16 w-full sm:w-auto font-bold text-blue-900 hover:bg-blue-50">
            Actualizar Motor Ahora
          </Button>
          
          <p className="text-xs text-blue-200 font-medium mt-6 tracking-wide opacity-80">
            * Oferta de lanzamiento: Solo comisión por éxito el primer mes... luego vuelve a la tarifa normal.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8 text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
             <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4 group cursor-pointer">
                   <div className="bg-blue-50 p-1.5 rounded border border-blue-100">
                     <GaliciLogo className="w-6 h-6 text-blue-800" />
                   </div>
                   <span className="font-extrabold text-xl text-gray-800 tracking-tight">GALICI</span>
                </div>
                <p className="text-xs max-w-xs">Software Solution para la rentabilidad pública.</p>
             </div>
             
             <div className="flex gap-12 text-center md:text-left text-xs uppercase tracking-wider font-bold">
               <div>
                 <h4 className="text-gray-900 mb-4">Plataforma</h4>
                 <ul className="space-y-2">
                   <li><a href="#" className="hover:text-blue-700 transition-colors">Tecnología</a></li>
                   <li><a href="#" className="hover:text-blue-700 transition-colors">Seguridad</a></li>
                   <li><a href="#" className="hover:text-blue-700 transition-colors">Resultados</a></li>
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
               <input type="text" placeholder="Email Corporativo" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm" />
               <Button onClick={() => setCurrentView('landing')} variant="primary" className="w-full">Iniciar Secuencia</Button>
               <Button onClick={() => setCurrentView('landing')} variant="ghost" className="w-full">Cancelar</Button>
            </div>
        </Card>
    </div>
  );

  return (
    <>
      {currentView === 'landing' && <LandingPage />}
      {currentView === 'onboarding' && <OnboardingWizard />}
    </>
  );
}
