import { ShoppingCart } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 line-through">210.000đ</span>
          <span className="text-lg font-bold text-hunonic-green">Chỉ 185.000đ</span>
        </div>
        <a 
          href="#order" 
          className="flex-1 bg-hunonic-green text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 text-sm"
        >
          <ShoppingCart className="w-4 h-4" />
          ĐẶT MUA NGAY
        </a>
      </div>
    </div>
  );
}
