import { CheckCircle, Zap, ShieldCheck, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-hunonic-green/10 text-hunonic-green font-semibold text-sm mb-6">
                Make in Vietnam - Bảo hành 12 tháng
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-800">
                Biến công tắc thường thành <span className="text-hunonic-green">thông minh</span> chỉ trong 3 phút
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Giải pháp Smarthome chuẩn Việt Nam: Nhỏ gọn, không đục phá tường, giữ nguyên công tắc cũ. Điều khiển mọi nơi qua điện thoại & giọng nói.
              </p>
              
              <div className="space-y-4 mb-10 inline-block text-left">
                {[
                  "Không cần đục phá, giữ nguyên mặt nạ cũ",
                  "Vừa dùng App, vừa bấm phím cơ truyền thống",
                  "Hoạt động độc lập qua Wi-Fi, không cần Hub"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-hunonic-green w-6 h-6 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#order" 
                  className="px-8 py-4 bg-hunonic-green hover:bg-hunonic-dark text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-hunonic-green/20 text-center"
                >
                  ĐẶT HÀNG NGAY - NHẬN ƯU ĐÃI
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <img 
                src="https://i.postimg.cc/XNKbDHMM/Công_tắc_điều_khiển_từ_xa_Hunonic_Mini_Product_image.jpg" 
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/smarthome/800/800";
                }}
                alt="Hunonic Mini Smart Switch" 
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
              {/* Floating Badges */}
              <div className="absolute top-8 -right-4 md:-right-8 bg-white px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 z-20">
                <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-gray-800">Lắp trong 3 phút</span>
              </div>
            </motion.div>
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-hunonic-green/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
