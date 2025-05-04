import { ChatIcon } from "@/components/ui/chat-icon"

export function CortexSidebar() {
  return (
    <div className="w-64 border-r border-[#E8E1D8] p-4 flex flex-col">
      <div className="text-[#2D2D2D] text-xl font-medium mb-6">Claude Cortex</div>
      <button className="flex items-center gap-2 bg-[#F2E9E1] hover:bg-[#EAE0D5] text-[#6B5A55] rounded-md px-3 py-2 text-sm mb-6 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        Start new chat
      </button>

      <div className="text-sm text-[#6B5A55] font-medium mb-2">Starred</div>
      <div className="mb-6">
        <div className="flex items-center gap-2 text-[#6B5A55] text-sm py-1 hover:bg-[#F2E9E1] rounded px-2">
          <ChatIcon />
          Introducing Claude Cortex
        </div>
      </div>

      <div className="text-sm text-[#6B5A55] font-medium mb-2">Recents</div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center gap-2 text-[#6B5A55] text-sm py-1 hover:bg-[#F2E9E1] rounded px-2">
          <ChatIcon />
          (New chat)
        </div>
      </div>

      <div className="mt-auto">
        <div className="bg-[#F2E9E1] text-[#6B5A55] text-sm py-2 px-4 rounded-md text-center">Free plan</div>
      </div>
    </div>
  )
}
