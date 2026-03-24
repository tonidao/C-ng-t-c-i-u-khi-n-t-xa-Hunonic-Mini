import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Experience from './components/Experience';
import Installation from './components/Installation';
import Trust from './components/Trust';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import OrderForm from './components/OrderForm';
import FloatingContact from './components/FloatingContact';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-hunonic-green selection:text-white">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-hunonic-green rounded-lg flex items-center justify-center text-white font-bold">H</div>
            <span className="text-xl font-black tracking-tighter text-hunonic-green">HUNONIC</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-800">
            <a href="#benefits" className="hover:text-hunonic-green transition-colors">Lợi ích</a>
            <a href="#install" className="hover:text-hunonic-green transition-colors">Lắp đặt</a>
            <a href="#pricing" className="hover:text-hunonic-green transition-colors">Báo giá</a>
            <a href="#order" className="px-6 py-2.5 bg-hunonic-green text-white rounded-full hover:bg-hunonic-dark transition-all">Mua ngay</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="benefits">
          <Benefits />
        </div>
        <Experience />
        <div id="install">
          <Installation />
        </div>
        <Trust />
        <Pricing />
        <SocialProof />
        <OrderForm />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 pb-32 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-hunonic-green rounded-lg flex items-center justify-center text-white font-bold">H</div>
                <span className="text-xl font-black tracking-tighter text-hunonic-green">HUNONIC</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Hunonic là thương hiệu nhà thông minh hàng đầu Việt Nam, chuyên cung cấp các giải pháp điều khiển thiết bị điện từ xa thông qua smartphone và giọng nói.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Liên hệ</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>Hotline: 0983.988.828</li>
                <li>Email: support@hunonic.vn</li>
                <li>Địa chỉ: Khu công nghệ cao, Hà Nội</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Chính sách</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>Bảo hành 12 tháng</li>
                <li>Chính sách bảo mật</li>
                <li>Điều khoản sử dụng</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            © 2026 Hunonic Vietnam. All rights reserved.
          </div>
        </div>
      </footer>

      {/* UI Elements */}
      <FloatingContact />
      <StickyCTA />
    </div>
  );
}
