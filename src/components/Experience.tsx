import { Clock, Sun, Mic, Shield } from 'lucide-react';

const scenarios = [
  {
    title: "Hẹn giờ bình nóng lạnh",
    description: "Tự động bật trước khi về nhà, tự động tắt sau 30 phút. An toàn tuyệt đối, không lo quên tắt gây tốn điện.",
    icon: <Clock className="w-8 h-8" />,
    img: "https://i.postimg.cc/8zNfrDcB/exp_heater.jpg"
  },
  {
    title: "Tự động bật đèn sân vườn",
    description: "Hẹn giờ bật lúc 18h và tắt lúc 6h sáng. Nhà luôn sáng đèn dù bạn vắng nhà, tăng cường an ninh.",
    icon: <Sun className="w-8 h-8" />,
    img: "https://i.postimg.cc/jS8sMrqC/exp-garden.jpg"
  },
  {
    title: "Điều khiển bằng giọng nói",
    description: "Tương thích hoàn toàn với Google Assistant và Alexa. Chỉ cần nói 'Tắt đèn phòng khách', mọi thứ sẽ thực hiện ngay lập tức.",
    icon: <Mic className="w-8 h-8" />,
    img: "https://i.postimg.cc/PJ9tdWcs/exp-voice.jpg"
  }
];

export default function Experience() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kịch bản sống thông minh</h2>
          <p className="text-gray-600">Trải nghiệm sự tiện nghi vượt trội ngay trong chính ngôi nhà của bạn.</p>
        </div>

        <div className="space-y-20">
          {scenarios.map((item, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <div className="bg-hunonic-green/10 text-hunonic-green p-3 rounded-lg inline-block mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{item.description}</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-hunonic-green rounded-full"></div>
                    Tiết kiệm điện năng tối đa
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-hunonic-green rounded-full"></div>
                    Điều khiển mọi lúc, mọi nơi
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="rounded-3xl shadow-xl w-full object-cover aspect-video"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
