import { Smartphone, Zap, ShieldCheck, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Thuận cả đôi đường",
    description: "Chồng nằm giường tắt đèn bằng điện thoại, vợ/ông bà đi ngang vẫn bấm công tắc cơ bình thường. Không làm thay đổi thói quen gia đình."
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Kích thước siêu nhỏ",
    description: "Chỉ 41x41x20mm, nằm gọn trong mọi loại đế âm tường hiện có tại Việt Nam. Không cần đục phá, không cần vứt bỏ mặt nạ cũ."
  },
  {
    icon: <Wallet className="w-10 h-10" />,
    title: "Tiết kiệm hàng triệu đồng",
    description: "Hoạt động độc lập qua Wi-Fi nhà bạn. Không cần mua thêm bộ điều khiển trung tâm (Hub) đắt đỏ lên tới vài triệu đồng."
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "An tâm tuyệt đối",
    description: "Hẹn giờ tắt bình nóng lạnh, kiểm tra trạng thái đèn từ xa. Vỏ nhựa ABS chống cháy, mạch điện cách ly an toàn tiêu chuẩn quốc tế."
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vì sao nên chọn Hunonic Mini?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Giải pháp nâng cấp nhà thông minh tối ưu nhất cho gia đình Việt, giải quyết mọi nỗi lo về kỹ thuật và chi phí.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all"
            >
              <div className="text-hunonic-green mb-6 bg-hunonic-green/10 w-16 h-16 rounded-xl flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
