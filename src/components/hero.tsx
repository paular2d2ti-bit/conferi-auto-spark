import { ArrowRight, Search, Gavel, DollarSign, FileText, Database, ShieldAlert, CheckCircle2, Info } from "lucide-react";
import heroCar from "@/assets/hero-showroom-suv.jpg";

export function Hero() {
  const floatingCards = [
    { label: "Gravames", icon: ShieldAlert },
    { label: "Leilão", icon: ShieldAlert },
    { label: "Recall", icon: Info },
    { label: "PRF / RENAINF", icon: Search },
    { label: "Comunicado de venda", icon: FileText },
    { label: "Decodificação de chassi", icon: Database },
    { label: "Sinistro", icon: Gavel },
  ];

  return (
    <section className="relative w-full bg-[#031426] overflow-hidden flex flex-col">
      <div className="min-h-screen lg:min-h-screen flex flex-col pt-16 lg:pt-20">
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-[46%_54%] items-stretch w-full">
          {/* COLUNA ESQUERDA — 46% */}
          <div className="relative z-10 flex w-full flex-col justify-center px-6 py-20 lg:py-0 lg:px-16 lg:pl-[80px]">
            <div className="max-w-[540px] w-full">
              
              <h1 className="text-[34px] sm:text-[42px] md:text-[52px] font-bold leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-white uppercase">
                VÁ ALÉM DO VISUAL NA SUA VISTORIA.
              </h1>

              <p className="mt-8 text-[16px] md:text-[18px] text-white/70 leading-[1.6] max-w-[480px]">
                Complemente seus laudos com informações veiculares e entregue ao cliente uma análise mais completa e profissional, com relatório personalizado com a marca da sua empresa.
              </p>
              
              <div className="mt-8 md:mt-10 flex flex-col items-start gap-10 md:gap-16">
                <a href="https://api.whatsapp.com/send/?phone=5511952267192&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="h-[56px] md:h-[60px] w-full md:w-auto rounded-[12px] bg-[#22E38A] px-[32px] md:px-[40px] text-[15px] md:text-[16px] font-bold text-[#031426] transition-all hover:brightness-110 active:scale-[0.98] shadow-xl shadow-[#22E38A]/20 flex items-center justify-center gap-3 group uppercase">
                  CONHEÇA A AUTO PERÍCIA PLUS
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                
                <div className="text-white/80 text-[14px] md:text-[16px] font-medium leading-relaxed italic border-l-2 border-[#22E38A] pl-4">
                  Mais informação para complementar sua vistoria. Mais valor na entrega ao seu cliente.
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA — 54% */}
          <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
            <img
              src={heroCar}
              alt="SUV seminovo em showroom"
              className="absolute inset-0 h-full w-full object-cover object-[65%_center] lg:object-cover"
            />
            {/* Transition overlay - Lateral apenas, não no fundo */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#031426] via-[#031426]/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-[#031426]/20" />

            {/* Floating Cards Container */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {/* We position them strategically around the car area */}
              <div className="absolute top-[20%] right-[35%] animate-float-slow">
                <FloatingCard label="Gravames" icon={Database} />
              </div>
              <div className="absolute top-[12%] right-[10%] animate-float" style={{ animationDelay: '1s' }}>
                <FloatingCard label="Recall" icon={Info} />
              </div>
              <div className="absolute top-[40%] right-[15%] animate-float-slow" style={{ animationDelay: '0.5s' }}>
                <FloatingCard label="Leilão" icon={ShieldAlert} />
              </div>
              <div className="absolute bottom-[35%] right-[25%] animate-float" style={{ animationDelay: '1.5s' }}>
                <FloatingCard label="PRF / RENAINF" icon={Search} />
              </div>
              <div className="absolute bottom-[20%] right-[40%] animate-float-slow" style={{ animationDelay: '2s' }}>
                <FloatingCard label="Comunicado de venda" icon={FileText} />
              </div>
              <div className="absolute bottom-[15%] right-[10%] animate-float" style={{ animationDelay: '0.8s' }}>
                <FloatingCard label="Sinistro" icon={Gavel} />
              </div>
              <div className="absolute top-[60%] right-[45%] animate-float-slow" style={{ animationDelay: '1.2s' }}>
                <FloatingCard label="Decodificação de chassi" icon={Database} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Espaço de respiro sólido abaixo do conteúdo antes da transição */}
        <div className="h-[40px] w-full bg-[#031426]" />
      </div>

      {/* Faixa de transição independente - Fora do min-h-screen do Hero */}
      <div className="w-full h-[80px] bg-gradient-to-b from-[#031426] to-[#F8F9FA] relative z-10" />
    </section>
  );
}

function FloatingCard({ label, icon: Icon }: { label: string; icon: any }) {
  return (
    <div className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-[#031426]/60 p-2.5 shadow-2xl backdrop-blur-[8px] transform hover:scale-105 transition-transform">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#22E38A]/20 text-[#22E38A]">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <span className="text-[10px] font-bold text-white whitespace-nowrap">{label}</span>
    </div>
  );
}
