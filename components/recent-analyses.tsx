import { ChatIcon } from "@/components/ui/chat-icon"

export function RecentAnalyses() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-sm text-[#6B5A55]">
          <ChatIcon className="mr-2" />
          Your recent analyses
        </div>
        <button className="text-sm text-[#6B5A55] hover:underline">View all →</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border border-[#E8E1D8] rounded-md p-4 bg-white">
            <div className="flex items-center mb-2">
              <ChatIcon className="mr-2 text-[#6B5A55]" />
              <div className="text-[#2D2D2D]">Previous Analysis</div>
            </div>
            <div className="text-xs text-[#6B5A55]">2 days ago</div>
          </div>
        ))}
      </div>
    </div>
  )
}
