import { useState, useEffect } from 'react';
import { Send, Clock } from 'lucide-react';

export default function OrderForm() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="order" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="flex-1 p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Đừng bỏ lỡ ưu đãi!</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Mức giá ưu đãi này chỉ dành cho 50 khách hàng đầu tiên đặt mua trong ngày hôm nay. Hãy để lại thông tin để chúng tôi liên hệ xác nhận.
            </p>
            
            <div className="flex items-center gap-4 mb-10 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="bg-hunonic-green p-3 rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">Ưu đãi kết thúc sau:</p>
                <p className="text-2xl font-mono font-bold text-hunonic-green">{formatTime(timeLeft)}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-hunonic-green rounded-full"></div>
                <span>Miễn phí vận chuyển cho đơn từ 3 bộ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-hunonic-green rounded-full"></div>
                <span>Kiểm tra hàng trước khi thanh toán</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-hunonic-green rounded-full"></div>
                <span>Hỗ trợ lắp đặt qua Video Call</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-8 md:p-12">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên *</label>
                <input 
                  type="text" 
                  placeholder="Nhập họ tên của bạn" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hunonic-green focus:ring-2 focus:ring-hunonic-green/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại *</label>
                <input 
                  type="tel" 
                  placeholder="Nhập số điện thoại" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hunonic-green focus:ring-2 focus:ring-hunonic-green/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Địa chỉ nhận hàng *</label>
                <textarea 
                  placeholder="Số nhà, tên đường, phường/xã, quận/huyện..." 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hunonic-green focus:ring-2 focus:ring-hunonic-green/20 outline-none transition-all h-24"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Chọn gói Combo</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hunonic-green focus:ring-2 focus:ring-hunonic-green/20 outline-none transition-all">
                  <option>Gói Trải Nghiệm (01 Bộ)</option>
                  <option selected>Gói Tiết Kiệm (03 Bộ) - Miễn phí ship</option>
                  <option>Gói Toàn Diện (05 Bộ) - Miễn phí ship</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 bg-hunonic-green hover:bg-hunonic-dark text-white rounded-xl font-bold text-lg shadow-lg shadow-hunonic-green/20 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                HOÀN TẤT ĐẶT HÀNG
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">Thông tin của bạn được bảo mật tuyệt đối.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
