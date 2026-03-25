import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import gamePreview from 'figma:asset/025d373910132fb153e39250db3122f624763a1a.png';

export function PreviewPanel() {
  return (
    <div className="w-[480px] bg-[#1a1a1a] border-l border-[#2a2a2a] flex flex-col h-full">
      {/* Top Toolbar */}
      <div className="h-12 border-b border-[#2a2a2a] flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-[#2a2a2a] rounded text-gray-400 hover:text-white">
            <span className="text-sm">🤖</span>
          </button>
          <span className="text-gray-400 text-sm">编辑器</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-3 py-1 hover:bg-[#2a2a2a] rounded text-gray-400 text-sm">⚙️</button>
          <button className="px-3 py-1 hover:bg-[#2a2a2a] rounded text-gray-400 text-sm">▶</button>
          <button className="px-3 py-1 hover:bg-[#2a2a2a] rounded text-gray-400 text-sm">📋 产物</button>
          <button className="px-3 py-1 hover:bg-[#2a2a2a] rounded text-gray-400 text-sm">📁 全部文件</button>
          <button className="px-3 py-1 hover:bg-[#2a2a2a] rounded text-gray-400 text-sm">🔄 变更</button>
          <button className="px-3 py-1 bg-[#2a2a2a] rounded text-white text-sm">🌐 预览</button>
        </div>
      </div>

      {/* Browser Bar */}
      <div className="h-12 bg-[#252525] border-b border-[#2a2a2a] flex items-center gap-2 px-3">
        <button className="p-1.5 hover:bg-[#333333] rounded">
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-1.5 hover:bg-[#333333] rounded">
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-1.5 hover:bg-[#333333] rounded ml-2">
          <RotateCw className="w-4 h-4 text-gray-400" />
        </button>
        
        <div className="flex-1 bg-[#1e1e1e] rounded px-3 py-1.5 flex items-center gap-2 mx-2">
          <span className="text-gray-500 text-xs">🔒</span>
          <span className="text-gray-400 text-xs truncate">
            https://html5.gamemonetize.co/q837ln4xfhoek7kc2gc
          </span>
        </div>
      </div>

      {/* Game Preview */}
      <div className="flex-1 bg-[#1e1e1e] flex items-center justify-center overflow-hidden">
        <div className="w-full h-full relative">
          <img 
            src={gamePreview} 
            alt="Game Preview" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}