export function Titlebar() {
  return (
    <div className="ide-titlebar">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 text-center font-mono">
        donggeon.dev — Portfolio
      </div>
      <div className="flex items-center gap-4">
        <kbd className="px-2 py-0.5 bg-muted rounded text-xs">⌘K</kbd>
      </div>
    </div>
  );
}
