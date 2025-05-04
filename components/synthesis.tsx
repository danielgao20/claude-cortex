"use client"

import { motion } from "framer-motion"
import { SunburstIcon } from "@/components/ui/sunburst-icon"

interface SynthesisProps {
  synthesis: string
}

export function Synthesis({ synthesis }: SynthesisProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-[#F9F5F1] rounded-lg p-4 border border-[#E8E1D8]"
    >
      <h2 className="text-[#2D2D2D] font-medium mb-3 flex items-center">
        <SunburstIcon className="text-[#D97A4D] mr-2" />
        Final Synthesis
      </h2>
      <div className="text-[#2D2D2D] text-sm leading-relaxed">
        {synthesis.split("\n\n").map((paragraph, i) => (
          <p key={i} className={i > 0 ? "mt-4" : ""}>
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  )
}
