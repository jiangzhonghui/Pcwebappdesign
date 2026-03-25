import { AtSign, Paperclip, ChevronDown } from 'lucide-react';
import robotIcon from 'figma:asset/d138279247a79d06aa08939f3b256e12b8b9d81f.png';

export function LauncherPage() {
  const tags = [
    '微信小游戏',
    '抖音小游戏',
    'Unity3d小游戏',
    'Cocos小游戏',
    '肉鸽',
    '弓箭英雄',
    '沙盒游戏'
  ];

  return (
    <div className="flex-1 bg-[#1e1e1e] flex flex-col h-full">
      {/* Header */}
      <div className="h-14 border-b border-[#2a2a2a] flex items-center justify-between px-6">
        <h2 className="text-gray-300 text-sm">Agents</h2>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
          <span className="text-white text-xs">⚙️</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-32">
        {/* Robot Icon */}
        <div className="mb-8">
          <img src={robotIcon} alt="Robot" className="w-20 h-20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl mb-12 text-center">
          <span className="text-white">Claw 🪝 捕获你的想法</span>
          <br />
          <span className="text-white">打造现实游戏</span>
        </h1>

        {/* Code Development Card */}
        <div className="flex justify-center mb-16">
          <div className="w-[280px]">
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg px-6 py-4 mb-3 transition-all">
              <div className="text-lg font-medium mb-1">代码开发</div>
              <div className="text-sm opacity-90">面向游戏代码和工程交付</div>
            </button>
            <p className="text-gray-400 text-sm text-center px-2">
              将实现、修改、重构与测试委派给 AI 智能体执行，并在结果面板中集中审阅文档,代码变更与检查真实的游戏工程运行结果。
            </p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-[#2a2a2a] px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3 flex items-center gap-2">
            <button className="p-1.5 hover:bg-[#2a2a2a] rounded-md">
              <AtSign className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-1.5 hover:bg-[#2a2a2a] rounded-md">
              <Paperclip className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          
          <div className="bg-[#252525] rounded-lg mb-4">
            <textarea
              placeholder="输入消息..."
              className="w-full bg-transparent text-gray-300 px-4 py-3 resize-none border-none outline-none"
              rows={3}
            />
            
            <div className="flex items-center justify-between px-4 pb-3 border-t border-[#2a2a2a] pt-3">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2a2a2a] hover:bg-[#333333] rounded-md text-gray-300 text-sm">
                  <span>📝</span>
                  <span>Craft</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2a2a2a] hover:bg-[#333333] rounded-md text-gray-300 text-sm">
                  <span>🔒</span>
                  <span>Auto</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-[#2a2a2a] rounded-md text-gray-300 text-sm">
                  <span>⚡</span>
                  <span>Skills</span>
                </button>
              </div>
              
              <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#2a2a2a] rounded-md text-gray-400 text-sm">
                <span>📁</span>
                <span>选择文件夹</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center justify-center gap-6">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}