import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { PreviewPanel } from './components/PreviewPanel';

export default function App() {
  return (
    <div className="size-full flex bg-[#1e1e1e] text-white overflow-hidden">
      <Sidebar />
      <MainContent />
      <PreviewPanel />
    </div>
  );
}