import { AtSign, Paperclip, ChevronDown } from 'lucide-react';
import robotIcon from 'figma:asset/d138279247a79d06aa08939f3b256e12b8b9d81f.png';

export function LauncherPage() {
  const tags = [
    '日常开发',
    '网页开发',
    'Agent 应用',
    'Skill 开发',
    'CI/CD',
    '文档'
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
          <span className="text-white">Claw 🪝 Your Ideas</span>
          <br />
          <span className="text-white">Into Reality</span>
        </h1>

        {/* Two Cards */}
        <div className="flex gap-6 mb-16">
          {/* Code Development Card */}
          <div className="w-[280px]">
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg px-6 py-4 mb-3 transition-all">
              <div className="text-lg font-medium mb-1">代码开发</div>
              <div className="text-sm opacity-90">国际代码生上线交付</div>
            </button>
            <p className="text-gray-400 text-sm text-center px-2">
              将实现，部署，盲润化到端转端AI智能化行，并在最顺畅并在中国地区使用零爱思考与飞护护业。
            </p>
          </div>

          {/* Daily Office Card */}
          <div className="w-[280px]">
            <button className="w-full bg-[#3a3a3a] hover:bg-[#404040] text-white rounded-lg px-6 py-4 mb-3 transition-all">
              <div className="text-lg font-medium mb-1">日常办公</div>
              <div className="text-sm opacity-90">瞬间日程表工作复用低代码</div>
            </button>
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
