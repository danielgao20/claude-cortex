"use client"

import type React from "react"

import { useState } from "react"
import type { AnalysisResult } from "@/types/cortex"

export function useCortex() {
  const [scenario, setScenario] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSecureMode, setIsSecureMode] = useState(false)
  const [results, setResults] = useState<AnalysisResult | null>(null)

  // Example prompts
  const examplePrompts = [
    "Should I expand my business to a new location or focus on improving existing operations?",
    "How should I approach a difficult conversation with a team member about performance issues?",
    "What's the best strategy for allocating our limited budget across multiple projects?",
  ]

  const setExamplePrompt = (prompt: string) => {
    setScenario(prompt)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!scenario.trim()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setResults({
        agents: [
          {
            id: "analytical",
            name: "Analytical Agent",
            description: "Focuses on data-driven insights and logical reasoning",
            response:
              "Based on the available data, I've identified three key factors that should influence this decision. First, the quantitative metrics suggest a 68% probability of success if you proceed with option A. Second, historical precedents indicate similar scenarios have resulted in positive outcomes 7 out of 10 times. Third, the risk assessment reveals minimal downside potential relative to the opportunity cost of inaction.",
          },
          {
            id: "creative",
            name: "Creative Agent",
            description: "Explores unconventional approaches and lateral thinking",
            response:
              "Have you considered combining elements from multiple options? There's an interesting opportunity to create a hybrid approach that leverages the strengths of each path while mitigating their individual weaknesses. This could open up entirely new possibilities that weren't initially apparent. What if you reframed the problem entirely and approached it from the perspective of your future self looking back?",
          },
          {
            id: "pragmatic",
            name: "Pragmatic Agent",
            description: "Evaluates practical implementation and resource constraints",
            response:
              "Let's focus on what's actually feasible given your current resources and constraints. Option B would require significant upfront investment and take approximately 8-12 months to implement fully. Consider starting with a smaller pilot project to validate assumptions before committing fully. Have you mapped out the specific steps required for execution? A phased approach would allow for adjustment based on early feedback.",
          },
          {
            id: "ethical",
            name: "Ethical Agent",
            description: "Considers moral implications and stakeholder impacts",
            response:
              "It's important to consider how this decision affects all stakeholders. There appear to be potential externalities that could impact community members who weren't initially considered in the analysis. The long-term consequences deserve careful consideration, particularly regarding sustainability and equity concerns. Have you consulted with representatives from potentially affected groups?",
          },
        ],
        synthesis:
          "After analyzing your scenario from multiple perspectives, I recommend proceeding with a modified version of Option A. The analytical assessment shows favorable probabilities of success, while creative exploration revealed potential hybrid approaches that could enhance outcomes. The pragmatic evaluation suggests beginning with a smaller-scale implementation to validate assumptions before full commitment. Ethical considerations highlight the importance of including additional stakeholder consultation in your process.\n\nA phased approach that begins with elements of Option A while incorporating stakeholder feedback would balance opportunity with prudent risk management. Consider establishing clear metrics for the initial phase to inform subsequent decisions, and maintain flexibility to incorporate elements from other options as you gather more information.",
      })
      setIsLoading(false)
    }, 2000)
  }

  const resetForm = () => {
    setScenario("")
    setResults(null)
  }

  return {
    scenario,
    setScenario,
    isLoading,
    isSecureMode,
    setIsSecureMode,
    results,
    examplePrompts,
    setExamplePrompt,
    handleSubmit,
    resetForm,
  }
}
