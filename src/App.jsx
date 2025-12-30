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
  Layers,
  Search as SearchIcon,
  BrainCircuit
} from 'lucide-react';


// --- Nuevo Logo Galici "Simple & Social" (Tipo App) ---
const GaliciLogo = ({ className = "w-8 h-8", color = "#1e40af" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    ircle cx="50" cy="50" r="50" fill={color} />
    <path 
      d="M50 25C36.19 25 25 36.19 25 50C25 63.81 36.19 75 50 75C61.05 75 70.31 67.84 73.75 57.81H50V46.88H84.06C84.69 48.75 85 50.78 85 53.13C85 67.97 70.47 80 50 80C33.43 80 20 66.57 20 50C20 33.43 33.43 20 50 20C57.66 20 64.38 22.81 69.69 27.81L62.34 35.16C59.53 32.5 55.47 30 50 30V25Z" 
      fill="white" 
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
    white: "bg-white text-blue-900 hover:bg-blue-50 shadow-md",
    search: "bg-blue-600 hover:bg-blue-700 text-white rounded-r-md rounded-l-none h-full"
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
      
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentView('landing')}>
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
              >
                Buscador Gratuito
              </button>
              <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="py-2.5">
                Tomar el Control
              </Button>
            </div>

            <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

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
              <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="text-lg px-8 h-14 w-full sm:w-auto">
                ACTUALIZA TU MOTOR <Rocket className="w-5 h-5 ml-1" />
              </Button>
              <Button onClick={() => setCurrentView('freeSignup')} variant="secondary" className="text-lg px-8 h-14 w-full sm:w-auto border-blue-100 bg-blue-50 text-blue-800">
                Solo Buscar (Gratis)
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center lg:text-left font-medium">
              * Modelo Éxito: Paga solo si ganas durante el primer mes.
            </p>
          </div>

          <div className="relative animate-fade-in-left">
             <div className="absolute -inset-1 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl opacity-50 blur-xl"></div>
             <Card highlight className="relative p-6 bg-white/95 backdrop-blur shadow-2xl border-gray-100">
