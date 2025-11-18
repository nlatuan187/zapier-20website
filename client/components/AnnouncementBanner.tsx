import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-zapier-green w-full flex justify-center items-center px-3 md:px-12 py-2 relative">
      <div className="flex items-center gap-1.5 md:gap-3 max-w-screen-xl pr-8 md:pr-0">
        <span className="text-zapier-cream text-base md:text-lg font-medium flex-shrink-0">
          ⚡️
        </span>
        <p className="text-zapier-cream text-sm md:text-lg font-medium text-center leading-tight md:leading-normal">
          New: An AI Copilot. MCP. 32 new AI apps. Discover what 10k+{" "}
          <span className="underline cursor-pointer hover:opacity-90">
            saw at ZapConnect
          </span>{" "}
          →
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 md:right-12 p-1 rounded-xl hover:bg-white/10 transition-colors"
        aria-label="Close announcement"
      >
        <X className="w-6 h-6 md:w-7 md:h-7 text-zapier-cream" />
      </button>
    </div>
  );
}
