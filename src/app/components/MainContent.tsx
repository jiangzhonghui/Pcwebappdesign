import { AtSign, Paperclip, ChevronDown, X } from 'lucide-react';

export function MainContent() {
  return (
    <div className="flex-1 bg-[#1e1e1e] flex flex-col h-full">
      {/* Header */}
      <div className="h-14 border-b border-[#2a2a2a] flex items-center justify-between px-6">
        <h2 className="text-gray-300 text-sm">Agents</h2>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
          <span className="text-white text-xs">👤</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* User Message */}
        <div className="text-gray-200 text-sm mb-4">
          我们来阅读这个游戏代码的文档，理解这个游戏的运行机制。
        </div>

        {/* Search Items */}
        <div className="text-gray-300 text-sm mb-3">
          首先，让我更深入地分析代码中的数值和机制：
        </div>

        <div className="space-y-2 mb-4">
          {[
            'Q 已搜索：TotalHealth|TotalCollected|CurrentLevel|LevelValue',
            'Q 已搜索：Timer|Waves|Wave',
            'Q 已搜索：shootingCooldown|bulletSpeed|detectionRange|weaponSpeed'
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400 text-sm pl-2">
              <span className="text-blue-400">Q</span>
              <span>{item.split('：')[1]}</span>
              <ChevronRight className="w-4 h-4 ml-auto text-gray-600" />
            </div>
          ))}
        </div>

        {/* Progress Box 1 */}
        <div className="bg-[#252525] border border-[#333333] rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-200 text-sm">进度更新 2/4</span>
            </div>
            <X className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-300" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
              <span className="text-gray-400 line-through">分析我在代码中的游戏玩法机制</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center mt-0.5 animate-pulse">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-200">设计数值系统和平衡性</span>
            </div>
          </div>
        </div>

        {/* File Creation */}
        <div className="mb-4">
          <div className="text-gray-300 text-sm mb-2">
            现在基于代码分析，让我创建完整的策划文档：
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">📝</span>
            <span className="text-gray-300">创建</span>
            <span className="text-blue-400">GameDesignDocument.md</span>
            <span className="text-green-500">+328</span>
            <span className="text-red-400">-0</span>
            <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
          </div>
        </div>

        <div className="text-gray-300 text-sm mb-4">
          现在让我创建数值计算表格和详细的数值系统文档：
        </div>

        {/* Progress Box 2 */}
        <div className="bg-[#252525] border border-[#333333] rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-200 text-sm">进度更新 2/4</span>
            </div>
            <X className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-300" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
              <span className="text-gray-400 line-through">设计数值系统和平衡性</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-200">创建关卡设计和进度机制</span>
            </div>
          </div>
        </div>

        <div className="text-gray-300 text-sm mb-4">
          正在生成案，请稍候...
        </div>

        {/* Task Queue */}
        <div className="bg-[#3a3f4b] rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-200 text-sm">任务列表 3/3</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <div className="w-4 h-4 rounded-full border-2 border-gray-500 animate-spin" style={{
            borderTopColor: 'transparent'
          }}></div>
          <span>任务 3 正在执行中</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-[#2a2a2a] p-4">
        <div className="mb-3 flex items-center gap-2">
          <button className="p-1.5 hover:bg-[#2a2a2a] rounded-md">
            <AtSign className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1.5 hover:bg-[#2a2a2a] rounded-md">
            <Paperclip className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        
        <div className="bg-[#252525] rounded-lg">
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
            
            <button className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
