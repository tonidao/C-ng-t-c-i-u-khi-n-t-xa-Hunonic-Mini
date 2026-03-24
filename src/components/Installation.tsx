import { PlayCircle } from 'lucide-react';

export default function Installation() {
  return (
    <section className="py-20 bg-hunonic-green text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tự lắp đặt dễ dàng trong 3 phút</h2>
            <p className="text-lg text-white/80 mb-8">
              Không cần là thợ điện chuyên nghiệp, bạn hoàn toàn có thể tự nâng cấp ngôi nhà của mình. Quy trình đơn giản, an toàn và nhanh chóng.
            </p>
            
            <div className="space-y-6">
              {[
                { step: "01", text: "Ngắt nguồn điện tổng để đảm bảo an toàn." },
                { step: "02", text: "Đấu nối dây theo sơ đồ (B2, B1, N, L) đi kèm." },
                { step: "03", text: "Cất module vào hộp âm và lắp lại mặt công tắc cũ." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-2xl font-black text-white/30">{item.step}</span>
                  <p className="text-lg font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-4 bg-white/10 rounded-xl border border-white/20 inline-block">
              <p className="font-bold italic">"Dễ như thay một chiếc bóng đèn!"</p>
            </div>
          </div>
          
          <div className="flex-1 w-full relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black/20">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/nFwEc8C8_48?rel=0" 
                title="Hướng dẫn lắp đặt công tắc thông minh Hunonic Mini" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full absolute inset-0"
              ></iframe>
            </div>
            <p className="text-center mt-4 text-white/60 text-sm">Video hướng dẫn chi tiết (3 phút)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
