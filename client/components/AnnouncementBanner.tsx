import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-zapier-green w-full flex justify-center items-center px-6 md:px-12 py-2 relative">
      <div className="flex items-center gap-3 max-w-screen-xl">
        <span className="text-zapier-cream text-lg font-medium">⚡️</span>
        <p className="text-zapier-cream text-base md:text-lg font-medium text-center">
          New: An AI Copilot. MCP. 32 new AI apps. Discover what 10k+{" "}
          <span className="underline cursor-pointer hover:opacity-90">
            saw at ZapConnect
          </span>{" "}
          →
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 md:right-12 p-1 rounded-xl hover:bg-white/10 transition-colors"
        aria-label="Close announcement"
      >
        <X className="w-7 h-7 text-zapier-cream" />
      </button>
    </div>
  );
}
