import { ShieldCheck, Award, ThumbsUp, MapPin } from 'lucide-react';

const trustItems = [
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "An toàn tuyệt đối",
    desc: "Vỏ nhựa ABS chống cháy, mạch điện cách ly hoàn toàn."
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Bảo hành 12 tháng",
    desc: "Cam kết 1 đổi 1 nếu có lỗi từ nhà sản xuất."
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Make in Vietnam",
    desc: "Sản phẩm được nghiên cứu và sản xuất 100% tại Việt Nam."
  },
  {
    icon: <ThumbsUp className="w-12 h-12" />,
    title: "Hơn 50.000+ tin dùng",
    desc: "Được cộng đồng Smarthome Việt Nam đánh giá cao nhất."
  }
];

export default function Trust() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="text-hunonic-green mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Chứng nhận chất lượng</h3>
            <p className="text-gray-600 mb-6">Hunonic Mini đạt đầy đủ các chứng chỉ về an toàn điện và tương thích điện từ trường tại Việt Nam. Chúng tôi cam kết mang đến sản phẩm chất lượng quốc tế với giá thành Việt.</p>
            <div className="flex gap-4">
              <img src="https://i.postimg.cc/Vs0sRNVK/cert-1.jpg" alt="Cert 1" className="h-16 grayscale hover:grayscale-0 transition-all object-cover" referrerPolicy="no-referrer" />
              <img src="https://i.postimg.cc/C1H7T0vc/cong-tac-thong-minh-hunonic-wifi-mini-2-600x600.jpg" alt="Cert 2" className="h-16 grayscale hover:grayscale-0 transition-all object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://i.postimg.cc/W1LdrZps/hunonic-mini-avt.jpg" 
              alt="Factory" 
              className="rounded-2xl shadow-lg w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
