import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Anh Hoàng (Hà Nội)",
    role: "Chủ căn hộ chung cư",
    content: "Sản phẩm thực sự nhỏ gọn, lắp vào đế âm tường cũ rất vừa vặn. App Hunonic tiếng Việt cực kỳ dễ dùng, vợ mình không rành công nghệ cũng dùng được ngay.",
    avatar: "https://i.pravatar.cc/150?u=hoang"
  },
  {
    name: "Anh Minh (Đà Nẵng)",
    role: "Kỹ sư điện nước",
    content: "Mình đã lắp cho nhiều khách hàng, ai cũng khen vì không phải đục tường. Độ trễ gần như bằng không, điều khiển qua Wi-Fi rất ổn định.",
    avatar: "https://i.pravatar.cc/150?u=minh"
  },
  {
    name: "Chị Lan (TP.HCM)",
    role: "Nội trợ",
    content: "Thích nhất là tính năng hẹn giờ bình nóng lạnh. Từ ngày có cái này không còn lo quên tắt điện nữa, tiết kiệm được kha khá tiền điện mỗi tháng.",
    avatar: "https://i.pravatar.cc/150?u=lan"
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Khách hàng nói gì về chúng tôi?</h2>
          <div className="flex justify-center gap-1 text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-6 h-6" />)}
          </div>
          <p className="text-gray-600">Hơn 50.000+ khách hàng đã tin dùng và hài lòng.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm relative">
              <Quote className="absolute top-6 right-8 text-hunonic-green/10 w-12 h-12" />
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border-2 border-hunonic-green/20" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{review.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
          <img src="https://picsum.photos/seed/logo1/120/40" alt="Partner 1" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/logo2/120/40" alt="Partner 2" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/logo3/120/40" alt="Partner 3" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/logo4/120/40" alt="Partner 4" referrerPolicy="no-referrer" />
        </div>
      </div>
    </section>
  );
}
