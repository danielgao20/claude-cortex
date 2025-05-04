"use client"

import { motion } from "framer-motion"
import type { Agent } from "@/types/cortex"

interface AgentCardProps {
  agent: Agent
  index: number
}

export function AgentCard({ agent, index }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-lg border border-[#E8E1D8] overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-[#F2E9E1] flex items-center justify-center text-[#6B5A55] mr-3">
            {agent.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-[#2D2D2D] font-medium">{agent.name}</h3>
            <p className="text-xs text-[#6B5A55]">{agent.description}</p>
          </div>
        </div>
        <div className="text-[#2D2D2D] text-sm leading-relaxed">
          <p>{agent.response}</p>
        </div>
      </div>
    </motion.div>
  )
}
