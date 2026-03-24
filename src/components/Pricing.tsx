import { Check, ShoppingCart } from 'lucide-react';

const combos = [
  {
    name: "Gói Trải Nghiệm",
    quantity: "01 Bộ",
    price: "185.000đ",
    oldPrice: "210.000đ",
    features: ["Bảo hành 12 tháng", "Hỗ trợ kỹ thuật 24/7", "Phí ship 30k"],
    popular: false
  },
  {
    name: "Gói Tiết Kiệm",
    quantity: "03 Bộ",
    price: "499.000đ",
    oldPrice: "630.000đ",
    features: ["Bảo hành 12 tháng", "Hỗ trợ kỹ thuật 24/7", "Miễn phí vận chuyển", "Tặng kèm sơ đồ chi tiết"],
    popular: true,
    badge: "Bán chạy nhất"
  },
  {
    name: "Gói Toàn Diện",
    quantity: "05 Bộ",
    price: "790.000đ",
    oldPrice: "1.050.000đ",
    features: ["Bảo hành 12 tháng", "Hỗ trợ kỹ thuật 24/7", "Miễn phí vận chuyển", "Giảm thêm 5% đơn sau"],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bảng giá ưu đãi hôm nay</h2>
          <p className="text-gray-600">Chọn gói Combo phù hợp để nhận ngay ưu đãi miễn phí vận chuyển.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {combos.map((combo, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all hover:shadow-2xl ${combo.popular ? 'border-hunonic-green shadow-xl scale-105 z-10' : 'border-gray-100'}`}
            >
              {combo.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hunonic-green text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  {combo.badge}
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-500 mb-2">{combo.name}</h3>
                <div className="text-4xl font-black mb-2">{combo.quantity}</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-hunonic-green">{combo.price}</span>
                  <span className="text-gray-400 line-through text-sm">{combo.oldPrice}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {combo.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-600">
                    <Check className="text-hunonic-green w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#order"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${combo.popular ? 'bg-hunonic-green text-white hover:bg-hunonic-dark' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                <ShoppingCart className="w-5 h-5" />
                CHỌN COMBO NÀY
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
