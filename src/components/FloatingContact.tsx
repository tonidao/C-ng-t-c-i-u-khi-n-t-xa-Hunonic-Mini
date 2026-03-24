import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4">
      {/* Zalo Button */}
      <a 
        href="https://zalo.me/0983988828" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      
      {/* Phone Button */}
      <a 
        href="tel:0983988828" 
        className="relative w-14 h-14 bg-hunonic-green text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <div className="absolute inset-0 rounded-full bg-hunonic-green animate-pulse-ring"></div>
        <Phone className="w-7 h-7 relative z-10 animate-pulse-dot" />
      </a>
    </div>
  );
}
