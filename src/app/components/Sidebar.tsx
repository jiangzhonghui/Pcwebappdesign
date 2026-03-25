import { Search, Sun, Moon, Settings, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ProjectItem {
  id: string;
  name: string;
  subtext?: string;
  time?: string;
  expanded?: boolean;
}

export function Sidebar() {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set(['botato']));

  const menuItems = [
    { icon: '📋', label: '新建任务', active: true },
    { icon: '🦅', label: 'Claw', active: false },
    { icon: '⚡', label: '技能', active: false },
    { icon: '🔌', label: '插件', active: false },
    { icon: '🤖', label: '自动化', active: false },
  ];

  const projects: ProjectItem[] = [
    { id: 'botato', name: 'Botato', subtext: '我们来阅读这个游戏代码的文档...', time: '32分钟前' },
    { id: 'goblox', name: 'goblox-launcher', subtext: '我来启动这个goblox-laun...', time: '36分钟前' },
    { id: 'codex', name: 'codex-autorunner', subtext: '我来分析和测试这个项目,...', time: '46分钟前' },
    { id: 'green', name: 'GreenRecycle', subtext: 'cd recycle-app npm run install', time: '4天前' },
  ];

  const toggleProject = (id: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <div className="w-[280px] bg-[#1a1a1a] border-r border-[#2a2a2a] flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-[#2a2a2a]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">G</span>
          </div>
          <span className="text-white font-semibold">Goblox-Studio</span>
        </div>
      </div>

      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="搜索任务"
            className="w-full bg-[#252525] text-gray-300 pl-10 pr-3 py-2 rounded-md text-sm border-none outline-none focus:ring-1 focus:ring-gray-600"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-2 flex-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md mb-1 cursor-pointer ${
              item.active ? 'bg-[#2a2a2a] text-white' : 'text-gray-400 hover:bg-[#252525]'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}

        {/* Workspace Section */}
        <div className="mt-6">
          <div className="text-xs text-gray-500 px-3 mb-2">工作空间</div>
          
          {projects.map((project) => (
            <div key={project.id} className="mb-1">
              <div
                onClick={() => toggleProject(project.id)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-300 hover:bg-[#252525] cursor-pointer"
              >
                {expandedProjects.has(project.id) ? (
                  <ChevronDown className="w-3 h-3 text-gray-500" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-gray-500" />
                )}
                <span className="text-sm">📁</span>
                <span className="text-sm flex-1 truncate">{project.name}</span>
              </div>
              
              {expandedProjects.has(project.id) && (
                <div className="ml-8 px-3 py-2 text-xs text-gray-400 hover:bg-[#252525] rounded-md cursor-pointer">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <div className="flex-1">
                      <div className="truncate">{project.subtext}</div>
                      <div className="text-gray-600 mt-1">{project.time}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="p-4 border-t border-[#2a2a2a] flex items-center gap-3">
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] rounded-md">
          <Sun className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] rounded-md">
          <Moon className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#252525] rounded-md">
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}