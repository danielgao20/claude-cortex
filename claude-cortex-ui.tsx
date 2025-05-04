"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Switch } from "@headlessui/react"

export default function ClaudeCortexUI() {
  const [scenario, setScenario] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSecureMode, setIsSecureMode] = useState(false)
  const [results, setResults] = useState<null | {
    agents: {
      id: string
      name: string
      description: string
      response: string
    }[]
    synthesis: string
  }>(null)

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

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header - Minimal Claude-like header */}
        <header className="mb-8">
          <h1 className="text-xl font-medium text-gray-900">Claude Cortex</h1>
          <p className="mt-1 text-sm text-gray-500">Make complex decisions with multiple perspectives</p>
        </header>

        {/* Input Form - Clean, minimal textarea similar to Claude */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <textarea
              id="scenario"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all resize-none text-gray-800 placeholder-gray-400"
              placeholder="Describe your decision scenario..."
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                checked={isSecureMode}
                onChange={setIsSecureMode}
                className={`${
                  isSecureMode ? "bg-purple-600" : "bg-gray-200"
                } relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    isSecureMode ? "translate-x-5" : "translate-x-1"
                  } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <span className="text-xs text-gray-500">{isSecureMode ? "AWS Bedrock" : "Standard"}</span>
            </div>
            <div className="flex space-x-3">
              {results && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  New Analysis
                </button>
              )}
              <button
                type="submit"
                disabled={isLoading || !scenario.trim()}
                className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                  isLoading || !scenario.trim()
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Analyzing
                  </div>
                ) : (
                  "Run Analysis"
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Results Section */}
        {results && (
          <div className="space-y-8">
            {/* Agent Cards - Clean, minimal cards with subtle borders */}
            <section>
              <h2 className="text-sm font-medium text-gray-500 mb-4">Agent Perspectives</h2>
              <div className="space-y-4">
                {results.agents.map((agent, index) => (
                  <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${
                            index === 0
                              ? "bg-purple-600"
                              : index === 1
                                ? "bg-purple-500"
                                : index === 2
                                  ? "bg-purple-400"
                                  : "bg-purple-300"
                          }`}
                        >
                          {agent.name.charAt(0)}
                        </div>
                        <div className="ml-2">
                          <h3 className="text-sm font-medium text-gray-900">{agent.name}</h3>
                          <p className="text-xs text-gray-500">{agent.description}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 leading-relaxed">
                        <p>{agent.response}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Synthesis - Clean, minimal with subtle highlight */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500"
            >
              <h2 className="text-sm font-medium text-gray-900 mb-3">Final Synthesis</h2>
              <div className="text-sm text-gray-700 leading-relaxed">
                {results.synthesis.split("\n\n").map((paragraph, i) => (
                  <p key={i} className={i > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          </div>
        )}
      </div>
    </div>
  )
}
