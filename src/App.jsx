import React, { useState, useEffect, useRef } from 'react';
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
  BrainCircuit,
  MessageCircle,
  Send,
  Loader2,
  Wand2,
  FilePen,
  HelpCircle as QuestionIcon,
  ClipboardList,
  Calendar,
  AlertOctagon,
  Percent,
  BookOpen,
  Award, 
  MailOpen,
  Gift, 
  Scale,
  Gavel, 
  Languages,
  Handshake, // Icono para Alianzas (UTP)
  ShoppingCart // Icono para Cotización Proveedores
} from 'lucide-react';

// --- CONFIGURACIÓN GEMINI API ---
const apiKey = ""; // La API Key se inyectará en tiempo de ejecución

// Función auxiliar para llamar a Gemini
const callGemini = async (prompt, systemInstruction = "", responseMimeType = "text/plain") => {
  if (!apiKey) {
    return new Promise(resolve => setTimeout(() => {
      if (responseMimeType === "application/json") {
        resolve(JSON.stringify(["Mobiliario", "Ergonomía"])); 
      } else {
        // Respuestas simuladas para demostración según el contexto del prompt
        if (prompt.includes("preguntas estratégicas")) {
          resolve(`1. **Sobre Criterios de Evaluación**: "Solicitamos aclarar si se otorgará puntaje adicional por certificaciones ISO específicas en gestión de calidad, dado el carácter crítico del servicio."\n\n2. **Sobre Plazos de Pago**: "En las bases se menciona pago a 30 días, ¿podrían confirmar si este plazo corre desde la recepción conforme o desde la emisión de la factura?"\n\n3. **Sobre Especificaciones Técnicas**: "¿Es admisible ofertar equipos con rendimiento superior al solicitado si esto no incrementa el presupuesto oficial?"`);
        } else if (prompt.includes("competidores")) {
          resolve(`1. **TechGiant Corp**: Estrategia agresiva por volumen. Probable descuento del 10%.\n2. **Soluciones Pyme**: Enfoque en servicio post-venta. Precio medio.\n3. **Importadora Directa**: Competencia por precio bajo. Riesgo de stock.`);
        } else if (prompt.includes("escenarios de oferta")) {
          resolve(`**Escenario 1: Agresivo (Ganar por Precio)**\n• Monto Sugerido: $3.950.000\n• Enfoque: Volumen y entrada rápida. Ideal si buscas flujo de caja inmediato.\n\n**Escenario 2: Equilibrado (Recomendado)**\n• Monto Sugerido: $4.250.000\n• Enfoque: Balance margen/riesgo. Destaca cumplimiento técnico superior.\n\n**Escenario 3: Premium (Alto Margen)**\n• Monto Sugerido: $4.480.000\n• Enfoque: Valor agregado. Justifica el precio con garantías extendidas y soporte prioritario.`);
        } else if (prompt.includes("checklist")) {
          resolve(`✅ **Boleta de Seriedad:** Verificar vigencia 90 días (Cláusula 4.1).\n✅ **Anexo Económico:** Formato Excel obligatorio, no PDF.\n✅ **Certificado de Experiencia:** Mínimo 3 contratos similares acreditables.\n✅ **Visita a Terreno:** Obligatoria el día 15/10. Adjuntar certificado.\n✅ **Declaración Jurada:** Firma ante notario (si supera 1000 UTM).`);
        } else if (prompt.includes("anomalías")) {
          resolve(`🚨 **Alerta de Anomalía Detectada**:\n- **Especificación Dirigida:** Se solicitan dimensiones exactas (mm) que solo cumple la marca "X", sin la frase "o equivalente".\n- **Plazo Irreal:** Se exige entrega en 48 hrs para un volumen que el mercado entrega en 10 días.\n- **Consejo:** Solicitar aclaración en el foro citando el principio de libre concurrencia.`);
        } else if (prompt.includes("planificación")) {
          resolve(`📅 **Plan Táctico Estimado**:\n- **Semana 1:** Firma contrato y reunión kick-off (Hito 1).\n- **Semana 2-3:** Adquisición de insumos y logística inicial.\n- **Semana 4:** Implementación piloto en sede principal.\n- **Semana 5-8:** Despliegue total y marcha blanca.\n- **Mes 3:** Primer estado de pago y recepción conforme.`);
        } else if (prompt.includes("probabilidad")) {
          resolve(`🎯 **Probabilidad de Éxito: 78% (Alta)**\n\n**Factores a Favor:**\n+ Presupuesto acorde a mercado.\n+ Requisitos técnicos estándar.\n\n**Factores en Contra:**\n- Plazo de postulación corto (reduce competencia, pero exige agilidad).\n\n**Veredicto:** ¡POSTULAR! Es una oportunidad táctica clara.`);
        } else if (prompt.includes("resumen flash")) {
          resolve(`📝 **Resumen Ejecutivo**:\n**Necesidad:** Renovación urgente de equipamiento obsoleto para cumplimiento normativo.\n**Solución Buscada:** Equipos duraderos, garantía on-site y soporte técnico 24/7.\n**Clave del Éxito:** Enfocar la propuesta en la velocidad de respuesta del soporte técnico.`);
        } else if (prompt.includes("maximizar puntaje")) {
           resolve(`🏆 **Estrategia de Puntaje Máximo**:\n1. **Precio (60%)**: El margen es estrecho. Sugiero ofertar un 3% bajo el promedio para asegurar los 60 puntos completos.\n2. **Experiencia (30%)**: Adjuntar certificados de "Servicios en Hospitales" específicamente, valen doble en esta categoría.\n3. **Sustentabilidad (10%)**: Incluir el "Certificado de Disposición Final de Residuos" para ganar el bono de sustentabilidad.`);
        } else if (prompt.includes("carta de presentación")) {
           resolve(`**REF: Presentación de Oferta Técnica - Licitación ID ${prompt.split("ID")[1] || "XXXX"}**\n\nEstimados Sres. de la Comisión Evaluadora,\n\nJunto con saludar, presentamos nuestra propuesta técnica y económica con el firme propósito de aportar eficiencia y calidad a su institución. Nuestra empresa cuenta con la capacidad instalada para garantizar el cumplimiento de los plazos exigidos en las bases...\n\n[Continuar con descripción de valor agregado...]`);
        } else if (prompt.includes("valor agregado")) {
           resolve(`💡 **Ideas de Factor X (Diferenciación)**:\n1. **Capacitación On-Site:** Ofrecer media jornada de inducción al personal usuario (Costo bajo, alto valor percibido).\n2. **Reportabilidad:** Entregar informes de estado mensuales automatizados (Cero costo marginal, alta transparencia).\n3. **Soporte Prioritario:** Línea directa de WhatsApp para emergencias críticas.`);
        } else if (prompt.includes("multas")) {
           resolve(`⚖️ **Análisis de Letra Chica (Multas)**:\n- **Severidad:** ALTA. Se castiga el atraso con 1% del contrato diario (usualmente es 0.5%).\n- **Tope:** Las multas tienen tope del 30% antes del cobro de garantía (Riesgo alto).\n- **Recomendación:** Aumentar el margen de seguridad en los plazos de entrega ofertados en al menos 3 días.`);
        } else if (prompt.includes("Comisión Evaluadora")) {
           resolve(`🏛️ **Simulación de Preguntas de la Comisión**:\n1. **Capacidad Financiera:** "¿Cómo garantizará el flujo de caja para la compra de insumos iniciales si el primer pago es a 45 días?"\n2. **Contingencia:** "¿Qué plan de mitigación tienen si falla el equipo principal ofertado?"\n3. **Personal:** "¿El jefe de proyecto tiene dedicación exclusiva o compartida?"`);
        } else if (prompt.includes("traduce")) {
           resolve(`🗣️ **Traductor Legal**:\n- **"Caución de Fiel Cumplimiento"** → Tienes que dejar un cheque o vale vista en garantía.\n- **"Solidaridad Laboral"** → Si tus empleados demandan, el Estado puede retener tus pagos.\n- **"Readjudicación al segundo lugar"** → Si te bajas después de ganar, llaman al siguiente, pero te cobran la garantía.`);
        } else if (prompt.includes("socio estratégico")) {
           resolve(`🤝 **Sugerencia de Alianza (UTP)**:\nEsta licitación requiere alta capacidad financiera (Boleta de 500 UF). \n**Perfil de Socio Ideal:** \n1. Empresa con liquidez demostrable.\n2. Experiencia en logística regional (para cubrir el despacho).\n3. Certificación ISO 9001 (requisito deseable en bases).`);
        } else if (prompt.includes("cotización")) {
           resolve(`📧 **Borrador Correo a Proveedores**:\n\nAsunto: Solicitud Cotización Urgente - Licitación [ID]\n\nEstimados,\n\nNos encontramos postulando a una licitación pública y requerimos cotizar con urgencia los siguientes ítems:\n\n1. [Item Técnico 1 según bases]\n2. [Item Técnico 2 según bases]\n\nFavor confirmar stock inmediato y precio distribuidor.\n\nSaludos,`);
        } else {
          resolve("Nota: Para ver la magia de la IA real, configura tu API Key de Gemini en el código. Esta es una respuesta simulada de demostración.");
        }
      }
    }, 1500));
  }

  try {
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] }
    };

    if (responseMimeType === "application/json") {
      payload.generationConfig = { responseMimeType: "application/json" };
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) throw new Error("Error en la API de Gemini");

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return responseMimeType === "application/json" ? "[]" : "Hubo un error consultando a la inteligencia artificial.";
  }
};

// --- Logo Galici "Simple & Social" (Tipo App - Solo G) ---
const GaliciLogo = ({ className = "w-8 h-8", color = "#1e40af" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
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

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-sm";
  
  const variants = {
    primary: "bg-blue-800 hover:bg-blue-900 text-white shadow-lg shadow-blue-900/20 border border-transparent hover:shadow-xl disabled:bg-gray-300 disabled:text-gray-500",
    secondary: "bg-white text-blue-900 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800",
    outline: "border-2 border-blue-800 text-blue-800 hover:bg-blue-50",
    ghost: "text-gray-600 hover:text-blue-800 hover:bg-gray-100",
    white: "bg-white text-blue-900 hover:bg-blue-50 shadow-md",
    search: "bg-blue-600 hover:bg-blue-700 text-white rounded-r-md rounded-l-none h-full",
    ai: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-md border-0"
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

// --- Componente: Galici AI Chat Assistant ---
const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', text: 'Hola, soy el Asistente Galici. ¿En qué puedo ayudarte hoy con tus licitaciones?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const systemPrompt = "Eres un asistente experto en compras públicas de Chile (Mercado Público) y el software Galici. Responde de forma breve, estratégica y orientada a la rentabilidad del usuario. Evita respuestas muy largas.";
    const responseText = await callGemini(input, systemPrompt);

    setMessages(prev => [...prev, { role: 'system', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Ventana de Chat */}
      {isOpen && (
        <div className="bg-white w-80 md:w-96 h-96 rounded-2xl shadow-2xl border border-gray-200 mb-4 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10">
          <div className="bg-blue-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <BrainCircuit className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Asistente Galici</h4>
                <p className="text-blue-200 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> En línea
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-700 border border-gray-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta sobre licitaciones..."
              className="flex-1 text-sm border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Botón Flotante */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center gap-2 group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold pl-0 group-hover:pl-2">Asistente IA</span>}
      </button>
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

  // Estados del Onboarding
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '', rut: '', email: '', categories: [], businessDescription: ''
  });
  const [isAnalyzingCategories, setIsAnalyzingCategories] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [currentView, onboardingStep]);

  // Función para auto-detectar categorías con IA
  const handleAutoCategorize = async () => {
    if (!formData.businessDescription.trim()) return;
    
    setIsAnalyzingCategories(true);
    
    const categoriesList = PRODUCT_CATEGORIES.map(c => c.name).join(", ");
    const prompt = `La empresa se describe así: "${formData.businessDescription}".
    De la siguiente lista de categorías: [${categoriesList}].
    Selecciona las que mejor se ajusten. Responde SOLAMENTE con un Array JSON de strings con los nombres exactos. Ejemplo: ["Mobiliario", "Ergonomía"]. Si no hay coincidencia clara, devuelve [].`;

    try {
      const response = await callGemini(prompt, "Eres un asistente de clasificación comercial.", "application/json");
      const matchedCategories = JSON.parse(response);
      
      if (Array.isArray(matchedCategories)) {
        setFormData(prev => ({ ...prev, categories: matchedCategories }));
      }
    } catch (e) {
      console.error("Error parsing categories", e);
    } finally {
      setIsAnalyzingCategories(false);
    }
  };

  const handleCategoryToggle = (category) => {
    setFormData(prev => {
      const exists = prev.categories.includes(category);
      return { ...prev, categories: exists ? prev.categories.filter(c => c !== category) : [...prev.categories, category] };
    });
  };

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

      {/* ... Rest of Landing Content (Logic, Features, Target, Results, FAQ, CTA, Footer) ... */}
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
              <BrainCircuit className="w-7 h-7 text-blue-600" />
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
          
          <Button onClick={() => setCurrentView('onboarding')} variant="white" className="text-lg px-12 h-16 w-full sm:w-auto font-bold text-blue-900 hover:bg-blue-50">
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

      {/* Componente Chat Assistant */}
      <ChatAssistant />
      
      {/* Vistas adicionales */}
      {currentView === 'onboarding' && <OnboardingWizard />}
      {currentView === 'freeSignup' && <FreeSignup />}
      {currentView === 'search' && <SearchEngine />}
    </div>
  );

  const OnboardingWizard = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans items-center justify-center p-4 relative overflow-hidden">
        <Card className="p-10 max-w-2xl w-full text-center relative z-10 shadow-xl border-gray-200 bg-white">
            {onboardingStep === 1 && (
              <>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Activar Motor</h2>
                <p className="text-gray-600 mb-8 text-sm">Déjanos tus coordenadas. Un agente de inteligencia se pondrá en contacto para configurar tu motor Galici.</p>
                <div className="space-y-4">
                   <input 
                     type="text" 
                     placeholder="Email Corporativo" 
                     className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm" 
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                   />
                   <Button onClick={() => setOnboardingStep(2)} variant="primary" className="w-full">Siguiente</Button>
                   <Button onClick={() => setCurrentView('landing')} variant="ghost" className="w-full">Cancelar</Button>
                </div>
              </>
            )}

            {/* Step 2: Categorías con IA */}
            {onboardingStep === 2 && (
              <div className="text-left animate-in fade-in">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-purple-100 p-2 rounded-full"><BrainCircuit className="w-6 h-6 text-purple-600"/></div>
                  <h2 className="text-xl font-bold text-gray-900">Categorización Inteligente</h2>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">
                  Describe tu negocio brevemente y deja que nuestra IA seleccione los rubros perfectos para ti.
                </p>

                <div className="flex gap-2 mb-6">
                  <input 
                    type="text" 
                    placeholder="Ej: Vendemos insumos de limpieza y aseo industrial para oficinas..." 
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:border-purple-500 outline-none"
                    value={formData.businessDescription}
                    onChange={(e) => setFormData({...formData, businessDescription: e.target.value})}
                  />
                  <button 
                    onClick={handleAutoCategorize}
                    disabled={isAnalyzingCategories}
                    className="bg-purple-600 text-white px-4 rounded-lg hover:bg-purple-700 disabled:opacity-50 flex items-center gap-2 text-sm font-bold"
                  >
                    {isAnalyzingCategories ? <Loader2 className="w-4 h-4 animate-spin"/> : <Wand2 className="w-4 h-4"/>}
                    Auto-Detectar
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto mb-6 pr-2">
                  {PRODUCT_CATEGORIES.map((cat, i) => {
                    const isSelected = formData.categories.includes(cat.name);
                    return (
                      <div 
                        key={i} 
                        onClick={() => handleCategoryToggle(cat.name)}
                        className={`p-3 rounded-lg border cursor-pointer flex items-center justify-between text-xs transition-all ${isSelected ? 'border-blue-500 bg-blue-50 text-blue-900' : 'border-gray-200 hover:bg-gray-50'}`}
                      >
                        <span className="flex items-center gap-2">
                          <cat.icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
                          {cat.name}
                        </span>
                        {isSelected && <CheckCircle className="w-4 h-4 text-blue-600"/>}
                      </div>
                    )
                  })}
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100">
                   <Button onClick={() => setOnboardingStep(1)} variant="ghost" className="text-xs">Atrás</Button>
                   <Button onClick={() => setCurrentView('landing')} variant="primary" className="text-xs">Finalizar Configuración</Button>
                </div>
              </div>
            )}
        </Card>
    </div>
  );

  const FreeSignup = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-6 left-6 cursor-pointer" onClick={() => setCurrentView('landing')}>
           <div className="flex items-center gap-2">
             <div className="bg-blue-50 p-1.5 rounded border border-blue-100">
                <GaliciLogo className="w-6 h-6 text-blue-800" />
             </div>
             <span className="font-bold text-gray-800">GALICI</span>
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
                 <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
                 <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="tu@empresa.com" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-gray-700 mb-1">Contraseña</label>
                 <input type="password" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••" />
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

  const SearchEngine = () => {
    // --- ESTADO PARA ANÁLISIS DE IA EN TARJETAS ---
    const [analysisState, setAnalysisState] = useState({});

    // Función para analizar riesgos
    const analyzeTender = async (id, title, amount) => {
      setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'risk', result: null } }));

      const prompt = `Actúa como un experto en licitaciones públicas. Analiza brevemente la oportunidad: "${title}" con un monto de ${amount}. 
      Dame 2 riesgos potenciales y 1 consejo estratégico clave en formato muy breve (máximo 2 líneas por punto).`;

      const result = await callGemini(prompt, "Experto en compras públicas.");

      setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'risk', result: result } }));
    };

    // Función para optimizar precios
    const optimizePricing = async (id, title, amount) => {
      setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'pricing', result: null } }));

      const prompt = `Para la licitación "${title}" con un presupuesto de ${amount}, genera 3 escenarios de oferta económica estratégica:
      1. Oferta Agresiva (Para asegurar adjudicación, margen mínimo).
      2. Oferta Equilibrada (Balance riesgo/retorno).
      3. Oferta Premium (Mayor margen, diferenciación técnica).
      Para cada una indica un monto sugerido aproximado y un breve "pitch" de justificación.`;

      const result = await callGemini(prompt, "Estratega financiero de licitaciones.");

      setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'pricing', result: result } }));
    };

    // Función para simular competencia
    const simulateCompetitors = async (id, title, amount) => {
      setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'competitors', result: null } }));

      const prompt = `Para la licitación pública: "${title}" (Presupuesto: ${amount}), genera un perfil de 3 posibles competidores en Chile. 
      Para cada uno define: 
      1. Perfil (ej: Gran Empresa, Startup, Especialista).
      2. Estrategia de Precio probable (Agresiva, Media, Premium).
      Responde en formato de lista breve.`;

      const result = await callGemini(prompt, "Estratega de mercado público.");

      setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'competitors', result: result } }));
    };

    // Función para redactar propuesta
    const draftProposal = async (id, title, amount) => {
      setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'proposal', result: null } }));

      const prompt = `Redacta un breve "Resumen Ejecutivo" formal y persuasivo para una propuesta técnica de la licitación: "${title}" (Presupuesto: ${amount}).
      La empresa oferente es experta en el rubro. Enfócate en eficiencia, cumplimiento de plazos y calidad.
      Formato: Párrafo de introducción potente y 3 puntos clave de valor.`;

      const result = await callGemini(prompt, "Experto en redacción de propuestas técnicas de alto nivel.");

      setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'proposal', result: result } }));
    };

    // Función para generar preguntas
    const generateQuestions = async (id, title, amount) => {
      setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'questions', result: null } }));

      const prompt = `Para la licitación "${title}" (Monto: ${amount}), redacta 3 preguntas estratégicas para enviar al foro de consultas. 
      Las preguntas deben buscar aclarar ambigüedades técnicas o financieras que podrían beneficiar a una empresa experta. 
      Tono: Formal, técnico y directo.`;

      const result = await callGemini(prompt, "Experto en licitaciones y derecho administrativo.");

      setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'questions', result: result } }));
    };

    // Función para generar checklist
    const generateChecklist = async (id, title, amount) => {
      setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'checklist', result: null } }));

      const prompt = `Para la licitación "${title}" (Monto: ${amount}), crea un checklist táctico de 5 puntos críticos que NO pueden faltar para evitar inadmisibilidad. 
      Incluye documentos, garantías y formalidades. Formato de lista con emojis.`;

      const result = await callGemini(prompt, "Auditor de licitaciones públicas.");

      setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'checklist', result: result } }));
    };

    // Función para detectar anomalías
    const detectAnomalies = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'anomalies', result: null } }));
  
        const prompt = `Analiza la licitación "${title}" (Monto: ${amount}) en busca de anomalías o "vicios ocultos" que sugieran que está dirigida a un proveedor específico.
        Busca señales como: Plazos irreales, marcas específicas sin "o equivalente", o requisitos técnicos excesivos.
        Responde con un breve reporte de alerta.`;
  
        const result = await callGemini(prompt, "Auditor forense de licitaciones.");
  
        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'anomalies', result: result } }));
    };

    // Función para generar planificador
    const generateTimeline = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'timeline', result: null } }));
  
        const prompt = `Para la ejecución del contrato "${title}", genera una Carta Gantt táctica preliminar simplificada (lista de hitos).
        Asume un plazo de ejecución estándar para este tipo de servicio.
        Desglosa en 5 fases clave con semanas estimadas.`;
  
        const result = await callGemini(prompt, "Gerente de Proyectos experto.");
  
        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'timeline', result: result } }));
    };

    // Función para calcular probabilidad de éxito
    const calculateWinProbability = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'probability', result: null } }));

        const prompt = `Calcula una probabilidad de éxito (0-100%) para adjudicar la licitación "${title}" (Monto: ${amount}) asumiendo que soy una Pyme con experiencia.
        Justifica el porcentaje con 2 factores a favor y 1 en contra.`;

        const result = await callGemini(prompt, "Analista de riesgos de licitaciones.");

        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'probability', result: result } }));
    };

    // Función para resumen flash
    const quickSummary = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'summary', result: null } }));

        const prompt = `Genera un "Resumen Flash" de 3 líneas para la licitación "${title}".
        1. ¿Cuál es el dolor o necesidad real del comprador?
        2. ¿Qué solución específica buscan?
        3. ¿Cuál es la clave para ganar?`;

        const result = await callGemini(prompt, "Experto en ventas B2G.");

        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'summary', result: result } }));
    };

    // Función para estrategia de puntaje (NUEVA)
    const generateScoreStrategy = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'score', result: null } }));

        const prompt = `Analiza la licitación "${title}" (Monto: ${amount}). Basado en estándares de compras públicas, ¿dónde suele estar el mayor peso de evaluación para este tipo de servicio? Dame 3 consejos tácticos para maximizar el puntaje técnico y económico.`;

        const result = await callGemini(prompt, "Estratega de licitaciones.");

        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'score', result: result } }));
    };

    // Función para carta de presentación (NUEVA)
    const generateCoverLetter = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'letter', result: null } }));

        const prompt = `Redacta una Carta de Presentación formal para la licitación "${title}" (Monto: ${amount}). La empresa postulante tiene experiencia y solvencia. Destaca compromiso, calidad y cumplimiento de plazos. Tono: Solemne y persuasivo.`;

        const result = await callGemini(prompt, "Redactor corporativo senior.");

        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'letter', result: result } }));
    };

    // Función para valor agregado (NUEVA)
    const generateValueAdd = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'valueAdd', result: null } }));
  
        const prompt = `Para la licitación "${title}", sugiere 3 elementos de "Valor Agregado" o "Factor X" que no cuesten mucho dinero pero que el comprador público valore altamente (ej: reportes extra, capacitación, mesa de ayuda dedicada).`;
  
        const result = await callGemini(prompt, "Experto en diferenciación comercial.");
  
        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'valueAdd', result: result } }));
    };

    // Función para escáner de multas (NUEVA)
    const scanFines = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'fines', result: null } }));
  
        const prompt = `Analiza el riesgo de multas para la licitación "${title}". Simula un análisis de las bases administrativas. ¿Son las multas proporcionales? ¿Hay cláusulas leoninas? Resume la agresividad del contrato en 3 puntos.`;
  
        const result = await callGemini(prompt, "Abogado experto en contratación pública.");
  
        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'fines', result: result } }));
    };
    
    // Función para simulador de defensa (NUEVA)
    const simulateDefense = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'defense', result: null } }));

        const prompt = `Actúa como la Comisión Evaluadora de la licitación "${title}" (Monto: ${amount}). 
        Genera 3 preguntas difíciles o "cáscaras de plátano" que le harías al oferente para poner a prueba su capacidad técnica o financiera durante una entrevista de defensa de oferta.`;

        const result = await callGemini(prompt, "Evaluador estricto de compras públicas.");

        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'defense', result: result } }));
    };

    // Función para traductor legal (NUEVA)
    const translateLegal = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'legal', result: null } }));

        const prompt = `Analiza el contexto legal típico de una licitación como "${title}". 
        Identifica 3 cláusulas o términos jurídicos complejos que suelen aparecer en estas bases y tradúcelos a lenguaje comercial simple ("En español: esto significa que..."). Enfócate en garantías o multas.`;

        const result = await callGemini(prompt, "Abogado traductor a lenguaje claro.");

        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'legal', result: result } }));
    };

    // Función para sugerencia de alianza (UTP) (NUEVA)
    const suggestPartnership = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'partnership', result: null } }));

        const prompt = `Para la licitación "${title}" (Monto: ${amount}), analiza si es recomendable postular en Unión Temporal de Proveedores (UTP) debido a su complejidad o volumen.
        Si es así, describe el "Perfil del Socio Ideal" que complemente a una Pyme (ej: capacidad financiera, certificación específica, experiencia).`;

        const result = await callGemini(prompt, "Consultor de alianzas estratégicas.");

        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'partnership', result: result } }));
    };

    // Función para redactor de cotización a proveedores (NUEVA)
    const draftSupplierEmail = async (id, title, amount) => {
        setAnalysisState(prev => ({ ...prev, [id]: { loading: true, type: 'supplierEmail', result: null } }));

        const prompt = `Redacta un correo formal para solicitar cotización urgente a proveedores de insumos para la licitación "${title}".
        El tono debe ser profesional y directo. Pide precios, stock inmediato y tiempos de despacho. Incluye placeholders para los ítems específicos.`;

        const result = await callGemini(prompt, "Gerente de Adquisiciones.");

        setAnalysisState(prev => ({ ...prev, [id]: { loading: false, type: 'supplierEmail', result: result } }));
    };


    return (
      <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
        {/* Header Search */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
             <div className="flex items-center gap-8 w-full">
               <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('landing')}>
                  <GaliciLogo className="w-6 h-6 text-blue-800" />
               </div>
               <div className="flex-1 max-w-2xl relative">
                  <input 
                    type="text" 
                    placeholder="Buscar licitaciones (Ej: Computadores, Aseo, Construcción...)" 
                    className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                  <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
               </div>
             </div>
             <div className="flex items-center gap-4">
               <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="py-1.5 text-xs h-8 px-4">
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
             <Card className="p-5 flex flex-col gap-4 hover:border-blue-300 transition-colors group">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Compra Ágil</span>
                      <span className="text-gray-400 text-xs">ID: 4561-23-LQ24</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700">Adquisición de Equipamiento Informático</h3>
                    <div className="text-sm text-gray-600 mb-2 flex items-center gap-4">
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3"/> Servicio de Salud Metropolitano</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> Cierra en 2 días</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <div className="text-xl font-bold text-gray-900">$4.500.000</div>
                     <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                       Ver en Mercado Público <ArrowRight className="w-3 h-3" />
                     </button>
                  </div>
                </div>
                
                {/* Botones de IA */}
                <div className="border-t border-gray-100 pt-3 flex flex-col gap-3">
                   {!analysisState['card1'] ? (
                     <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => calculateWinProbability('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Percent className="w-3 h-3" /> Probabilidad
                        </button>
                         <button 
                          onClick={() => quickSummary('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-sky-600 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <BookOpen className="w-3 h-3" /> Resumen Flash
                        </button>
                        <button 
                          onClick={() => generateScoreStrategy('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-yellow-600 bg-yellow-50 hover:bg-yellow-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Award className="w-3 h-3" /> Estrategia Puntaje
                        </button>
                        <button 
                          onClick={() => generateValueAdd('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-fuchsia-600 bg-fuchsia-50 hover:bg-fuchsia-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Gift className="w-3 h-3" /> Factor X
                        </button>
                        <button 
                          onClick={() => analyzeTender('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Sparkles className="w-3 h-3" /> Analizar Riesgo
                        </button>
                        <button 
                          onClick={() => scanFines('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <AlertTriangle className="w-3 h-3" /> Escáner Multas
                        </button>
                        <button 
                          onClick={() => simulateDefense('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Gavel className="w-3 h-3" /> Simulador Defensa
                        </button>
                        <button 
                          onClick={() => translateLegal('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Languages className="w-3 h-3" /> Traductor Legal
                        </button>
                        <button 
                          onClick={() => simulateCompetitors('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Users className="w-3 h-3" /> Espiar Competencia
                        </button>
                        <button 
                          onClick={() => optimizePricing('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-teal-600 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <DollarSign className="w-3 h-3" /> Optimizar Precio
                        </button>
                        <button 
                          onClick={() => draftProposal('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-green-600 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <FilePen className="w-3 h-3" /> Redactar Propuesta
                        </button>
                        <button 
                          onClick={() => generateCoverLetter('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <MailOpen className="w-3 h-3" /> Carta Presentación
                        </button>
                        <button 
                          onClick={() => generateQuestions('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <QuestionIcon className="w-3 h-3" /> Generar Preguntas
                        </button>
                        <button 
                          onClick={() => generateChecklist('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <ClipboardList className="w-3 h-3" /> Checklist
                        </button>
                        <button 
                          onClick={() => detectAnomalies('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <AlertOctagon className="w-3 h-3" /> Detectar Anomalías
                        </button>
                        <button 
                          onClick={() => generateTimeline('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-cyan-600 bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Calendar className="w-3 h-3" /> Planificar
                        </button>
                        <button 
                          onClick={() => suggestPartnership('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-violet-600 bg-violet-50 hover:bg-violet-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Handshake className="w-3 h-3" /> Buscar Alianza (UTP)
                        </button>
                        <button 
                          onClick={() => draftSupplierEmail('card1', 'Adquisición de Equipamiento Informático', '$4.500.000')}
                          className="text-xs font-bold text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <ShoppingCart className="w-3 h-3" /> Cotizar Proveedores
                        </button>
                     </div>
                   ) : (
                     <div className={`rounded-lg p-3 text-xs text-gray-700 animate-in fade-in ${
                       analysisState['card1'].type === 'risk' ? 'bg-purple-50' : 
                       analysisState['card1'].type === 'competitors' ? 'bg-blue-50' : 
                       analysisState['card1'].type === 'pricing' ? 'bg-teal-50' : 
                       analysisState['card1'].type === 'questions' ? 'bg-orange-50' : 
                       analysisState['card1'].type === 'checklist' ? 'bg-indigo-50' :
                       analysisState['card1'].type === 'anomalies' ? 'bg-red-50' :
                       analysisState['card1'].type === 'probability' ? 'bg-emerald-50' :
                       analysisState['card1'].type === 'summary' ? 'bg-sky-50' :
                       analysisState['card1'].type === 'timeline' ? 'bg-cyan-50' :
                       analysisState['card1'].type === 'score' ? 'bg-yellow-50' :
                       analysisState['card1'].type === 'letter' ? 'bg-pink-50' : 
                       analysisState['card1'].type === 'valueAdd' ? 'bg-fuchsia-50' :
                       analysisState['card1'].type === 'fines' ? 'bg-rose-50' : 
                       analysisState['card1'].type === 'defense' ? 'bg-slate-100' :
                       analysisState['card1'].type === 'legal' ? 'bg-cyan-50' : 
                       analysisState['card1'].type === 'partnership' ? 'bg-violet-50' :
                       analysisState['card1'].type === 'supplierEmail' ? 'bg-amber-50' : 'bg-green-50'
                     }`}>
                        {analysisState['card1'].loading ? (
                          <div className="flex items-center gap-2 text-gray-600">
                            <Loader2 className="w-3 h-3 animate-spin" /> Procesando con IA...
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <h4 className={`font-bold flex items-center gap-1 ${
                              analysisState['card1'].type === 'risk' ? 'text-purple-800' :
                              analysisState['card1'].type === 'competitors' ? 'text-blue-800' : 
                              analysisState['card1'].type === 'pricing' ? 'text-teal-800' : 
                              analysisState['card1'].type === 'questions' ? 'text-orange-800' : 
                              analysisState['card1'].type === 'checklist' ? 'text-indigo-800' :
                              analysisState['card1'].type === 'anomalies' ? 'text-red-800' :
                              analysisState['card1'].type === 'probability' ? 'text-emerald-800' :
                              analysisState['card1'].type === 'summary' ? 'text-sky-800' :
                              analysisState['card1'].type === 'timeline' ? 'text-cyan-800' :
                              analysisState['card1'].type === 'score' ? 'text-yellow-800' :
                              analysisState['card1'].type === 'letter' ? 'text-pink-800' : 
                              analysisState['card1'].type === 'valueAdd' ? 'text-fuchsia-800' :
                              analysisState['card1'].type === 'fines' ? 'text-rose-800' : 
                              analysisState['card1'].type === 'defense' ? 'text-slate-800' :
                              analysisState['card1'].type === 'legal' ? 'text-cyan-800' : 
                              analysisState['card1'].type === 'partnership' ? 'text-violet-800' :
                              analysisState['card1'].type === 'supplierEmail' ? 'text-amber-800' : 'text-green-800'
                            }`}>
                              {analysisState['card1'].type === 'risk' ? <BrainCircuit className="w-3 h-3"/> : 
                               analysisState['card1'].type === 'competitors' ? <Users className="w-3 h-3"/> : 
                               analysisState['card1'].type === 'pricing' ? <TrendingUp className="w-3 h-3"/> : 
                               analysisState['card1'].type === 'questions' ? <QuestionIcon className="w-3 h-3"/> : 
                               analysisState['card1'].type === 'checklist' ? <ClipboardList className="w-3 h-3"/> :
                               analysisState['card1'].type === 'anomalies' ? <AlertOctagon className="w-3 h-3"/> :
                               analysisState['card1'].type === 'probability' ? <Percent className="w-3 h-3"/> :
                               analysisState['card1'].type === 'summary' ? <BookOpen className="w-3 h-3"/> :
                               analysisState['card1'].type === 'timeline' ? <Calendar className="w-3 h-3"/> :
                               analysisState['card1'].type === 'score' ? <Award className="w-3 h-3"/> :
                               analysisState['card1'].type === 'letter' ? <Mail className="w-3 h-3"/> : 
                               analysisState['card1'].type === 'valueAdd' ? <Gift className="w-3 h-3"/> :
                               analysisState['card1'].type === 'fines' ? <AlertTriangle className="w-3 h-3"/> : 
                               analysisState['card1'].type === 'defense' ? <Gavel className="w-3 h-3"/> :
                               analysisState['card1'].type === 'legal' ? <Languages className="w-3 h-3"/> : 
                               analysisState['card1'].type === 'partnership' ? <Handshake className="w-3 h-3"/> :
                               analysisState['card1'].type === 'supplierEmail' ? <ShoppingCart className="w-3 h-3"/> : <FileText className="w-3 h-3"/>} 
                              
                              {analysisState['card1'].type === 'risk' ? 'Análisis de Riesgo:' : 
                               analysisState['card1'].type === 'competitors' ? 'Simulación de Competencia:' : 
                               analysisState['card1'].type === 'pricing' ? 'Estrategia de Precios:' : 
                               analysisState['card1'].type === 'questions' ? 'Preguntas Sugeridas:' : 
                               analysisState['card1'].type === 'checklist' ? 'Checklist Táctico:' :
                               analysisState['card1'].type === 'anomalies' ? 'Detección de Vicios:' :
                               analysisState['card1'].type === 'probability' ? 'Score de Adjudicación:' :
                               analysisState['card1'].type === 'summary' ? 'Resumen Ejecutivo:' :
                               analysisState['card1'].type === 'timeline' ? 'Plan de Ejecución:' :
                               analysisState['card1'].type === 'score' ? 'Estrategia de Puntaje:' :
                               analysisState['card1'].type === 'letter' ? 'Carta de Presentación:' : 
                               analysisState['card1'].type === 'valueAdd' ? 'Factor X (Diferenciación):' :
                               analysisState['card1'].type === 'fines' ? 'Análisis de Multas:' : 
                               analysisState['card1'].type === 'defense' ? 'Simulación de Defensa:' :
                               analysisState['card1'].type === 'legal' ? 'Traducción Legal:' : 
                               analysisState['card1'].type === 'partnership' ? 'Sugerencia de Alianza (UTP):' :
                               analysisState['card1'].type === 'supplierEmail' ? 'Borrador Correo Proveedores:' : 'Borrador de Propuesta:'}
                            </h4>
                            <p className="whitespace-pre-line">{analysisState['card1'].result}</p>
                            <button onClick={() => setAnalysisState(prev => ({...prev, card1: null}))} className="text-[10px] underline text-gray-500 mt-2">Cerrar</button>
                          </div>
                        )}
                     </div>
                   )}
                </div>
             </Card>

             {/* Result Card 2 */}
             <Card className="p-5 flex flex-col gap-4 hover:border-blue-300 transition-colors group">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">L1</span>
                      <span className="text-gray-400 text-xs">ID: 2210-55-LE24</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700">Servicio de Mantención de Mobiliario</h3>
                    <div className="text-sm text-gray-600 mb-2 flex items-center gap-4">
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3"/> Municipalidad de Providencia</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> Cierra en 5 días</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <div className="text-xl font-bold text-gray-900">$12.000.000</div>
                     <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                       Ver en Mercado Público <ArrowRight className="w-3 h-3" />
                     </button>
                  </div>
                </div>

                {/* Botones de IA */}
                <div className="border-t border-gray-100 pt-3 flex flex-col gap-3">
                   {!analysisState['card2'] ? (
                     <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => calculateWinProbability('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Percent className="w-3 h-3" /> Probabilidad de Éxito
                        </button>
                         <button 
                          onClick={() => quickSummary('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-sky-600 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <BookOpen className="w-3 h-3" /> Resumen Flash
                        </button>
                        <button 
                          onClick={() => generateScoreStrategy('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-yellow-600 bg-yellow-50 hover:bg-yellow-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Award className="w-3 h-3" /> Estrategia Puntaje
                        </button>
                        <button 
                          onClick={() => generateValueAdd('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-fuchsia-600 bg-fuchsia-50 hover:bg-fuchsia-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Gift className="w-3 h-3" /> Factor X
                        </button>
                        <button 
                          onClick={() => analyzeTender('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Sparkles className="w-3 h-3" /> Analizar Riesgo
                        </button>
                        <button 
                          onClick={() => scanFines('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <AlertTriangle className="w-3 h-3" /> Escáner Multas
                        </button>
                        <button 
                          onClick={() => simulateDefense('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Gavel className="w-3 h-3" /> Simulador Defensa
                        </button>
                        <button 
                          onClick={() => translateLegal('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Languages className="w-3 h-3" /> Traductor Legal
                        </button>
                        <button 
                          onClick={() => simulateCompetitors('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Users className="w-3 h-3" /> Espiar Competencia
                        </button>
                        <button 
                          onClick={() => optimizePricing('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-teal-600 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <DollarSign className="w-3 h-3" /> Optimizar Precio
                        </button>
                        <button 
                          onClick={() => draftProposal('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-green-600 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <FilePen className="w-3 h-3" /> Redactar Propuesta
                        </button>
                        <button 
                          onClick={() => generateCoverLetter('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <MailOpen className="w-3 h-3" /> Carta Presentación
                        </button>
                        <button 
                          onClick={() => generateQuestions('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <QuestionIcon className="w-3 h-3" /> Generar Preguntas
                        </button>
                        <button 
                          onClick={() => generateChecklist('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <ClipboardList className="w-3 h-3" /> Checklist
                        </button>
                        <button 
                          onClick={() => detectAnomalies('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <AlertOctagon className="w-3 h-3" /> Detectar Anomalías
                        </button>
                        <button 
                          onClick={() => generateTimeline('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-cyan-600 bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Calendar className="w-3 h-3" /> Planificar
                        </button>
                        <button 
                          onClick={() => suggestPartnership('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-violet-600 bg-violet-50 hover:bg-violet-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <Handshake className="w-3 h-3" /> Buscar Alianza (UTP)
                        </button>
                        <button 
                          onClick={() => draftSupplierEmail('card2', 'Servicio de Mantención de Mobiliario', '$12.000.000')}
                          className="text-xs font-bold text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                        >
                          <ShoppingCart className="w-3 h-3" /> Cotizar Proveedores
                        </button>
                     </div>
                   ) : (
                     <div className={`rounded-lg p-3 text-xs text-gray-700 animate-in fade-in ${
                       analysisState['card2'].type === 'risk' ? 'bg-purple-50' : 
                       analysisState['card2'].type === 'competitors' ? 'bg-blue-50' : 
                       analysisState['card2'].type === 'pricing' ? 'bg-teal-50' : 
                       analysisState['card2'].type === 'questions' ? 'bg-orange-50' : 
                       analysisState['card2'].type === 'checklist' ? 'bg-indigo-50' :
                       analysisState['card2'].type === 'anomalies' ? 'bg-red-50' :
                       analysisState['card2'].type === 'probability' ? 'bg-emerald-50' :
                       analysisState['card2'].type === 'summary' ? 'bg-sky-50' :
                       analysisState['card2'].type === 'timeline' ? 'bg-cyan-50' :
                       analysisState['card2'].type === 'score' ? 'bg-yellow-50' :
                       analysisState['card2'].type === 'letter' ? 'bg-pink-50' : 
                       analysisState['card2'].type === 'valueAdd' ? 'bg-fuchsia-50' :
                       analysisState['card2'].type === 'fines' ? 'bg-rose-50' : 
                       analysisState['card2'].type === 'defense' ? 'bg-slate-100' :
                       analysisState['card2'].type === 'legal' ? 'bg-cyan-50' : 
                       analysisState['card2'].type === 'partnership' ? 'bg-violet-50' :
                       analysisState['card2'].type === 'supplierEmail' ? 'bg-amber-50' : 'bg-green-50'
                     }`}>
                        {analysisState['card2'].loading ? (
                          <div className="flex items-center gap-2 text-gray-600">
                            <Loader2 className="w-3 h-3 animate-spin" /> Procesando con IA...
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <h4 className={`font-bold flex items-center gap-1 ${
                              analysisState['card2'].type === 'risk' ? 'text-purple-800' :
                              analysisState['card2'].type === 'competitors' ? 'text-blue-800' : 
                              analysisState['card2'].type === 'pricing' ? 'text-teal-800' : 
                              analysisState['card2'].type === 'questions' ? 'text-orange-800' : 
                              analysisState['card2'].type === 'checklist' ? 'text-indigo-800' :
                              analysisState['card2'].type === 'anomalies' ? 'text-red-800' :
                              analysisState['card2'].type === 'probability' ? 'text-emerald-800' :
                              analysisState['card2'].type === 'summary' ? 'text-sky-800' :
                              analysisState['card2'].type === 'timeline' ? 'text-cyan-800' :
                              analysisState['card2'].type === 'score' ? 'text-yellow-800' :
                              analysisState['card2'].type === 'letter' ? 'text-pink-800' : 
                              analysisState['card2'].type === 'valueAdd' ? 'text-fuchsia-800' :
                              analysisState['card2'].type === 'fines' ? 'text-rose-800' : 
                              analysisState['card2'].type === 'defense' ? 'text-slate-800' :
                              analysisState['card2'].type === 'legal' ? 'text-cyan-800' : 
                              analysisState['card2'].type === 'partnership' ? 'text-violet-800' :
                              analysisState['card2'].type === 'supplierEmail' ? 'text-amber-800' : 'text-green-800'
                            }`}>
                              {analysisState['card2'].type === 'risk' ? 'Análisis de Riesgo:' : 
                               analysisState['card2'].type === 'competitors' ? 'Simulación de Competencia:' : 
                               analysisState['card2'].type === 'pricing' ? 'Estrategia de Precios:' : 
                               analysisState['card2'].type === 'questions' ? 'Preguntas Sugeridas:' : 
                               analysisState['card2'].type === 'checklist' ? 'Checklist Táctico:' :
                               analysisState['card2'].type === 'anomalies' ? 'Detección de Vicios:' :
                               analysisState['card2'].type === 'probability' ? 'Score de Adjudicación:' :
                               analysisState['card2'].type === 'summary' ? 'Resumen Ejecutivo:' :
                               analysisState['card2'].type === 'timeline' ? 'Plan de Ejecución:' :
                               analysisState['card2'].type === 'score' ? 'Estrategia de Puntaje:' :
                               analysisState['card2'].type === 'letter' ? 'Carta de Presentación:' : 
                               analysisState['card2'].type === 'valueAdd' ? 'Factor X (Diferenciación):' :
                               analysisState['card2'].type === 'fines' ? 'Análisis de Multas:' : 
                               analysisState['card2'].type === 'defense' ? 'Simulación de Defensa:' :
                               analysisState['card2'].type === 'legal' ? 'Traducción Legal:' : 
                               analysisState['card2'].type === 'partnership' ? 'Sugerencia de Alianza (UTP):' :
                               analysisState['card2'].type === 'supplierEmail' ? 'Borrador Correo Proveedores:' : 'Borrador de Propuesta:'}
                            </h4>
                            <p className="whitespace-pre-line">{analysisState['card2'].result}</p>
                            <button onClick={() => setAnalysisState(prev => ({...prev, card2: null}))} className="text-[10px] underline text-gray-500 mt-2">Cerrar</button>
                          </div>
                        )}
                     </div>
                   )}
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
                <Button onClick={() => setCurrentView('onboarding')} variant="primary" className="text-xs">
                  Ver Análisis Premium
                </Button>
             </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {currentView === 'landing' && <LandingPage />}
      {currentView === 'onboarding' && <OnboardingWizard />}
      {currentView === 'freeSignup' && <FreeSignup />}
      {currentView === 'search' && <SearchEngine />}
      
      {/* El Chatbot está disponible en todas las vistas */}
      <ChatAssistant />
    </>
  );
}
