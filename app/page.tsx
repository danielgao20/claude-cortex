"use client"

import { SunburstIcon } from "@/components/ui/sunburst-icon"
import { AgentCard } from "@/components/agent-card"
import { CortexSidebar } from "@/components/sidebar"
import { ExamplePrompts } from "@/components/example-prompts"
import { InputForm } from "@/components/input-form"
import { RecentAnalyses } from "@/components/recent-analyses"
import { Synthesis } from "@/components/synthesis"
import { useCortex } from "@/hooks/use-cortex"

export default function Home() {
  const {
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
  } = useCortex()

  return (
    <div className="flex h-screen bg-[#F9F5F1]">
      {/* Left sidebar */}
      <CortexSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 max-w-3xl mx-auto w-full">
          {/* Header with sunburst icon */}
          <div className="flex items-center mb-8">
            <SunburstIcon className="text-[#D97A4D] mr-3" />
            <h1 className="text-3xl text-[#2D2D2D] font-normal">Welcome, username</h1>
          </div>

          {!results && (
            <>
              {/* Input form */}
              <InputForm
                scenario={scenario}
                setScenario={setScenario}
                isLoading={isLoading}
                isSecureMode={isSecureMode}
                setIsSecureMode={setIsSecureMode}
                handleSubmit={handleSubmit}
              />

              {/* Example prompts */}
              <ExamplePrompts prompts={examplePrompts} setExamplePrompt={setExamplePrompt} />

              {/* Recent chats section */}
              <RecentAnalyses />
            </>
          )}

          {/* Results */}
          {results && (
            <div className="space-y-6">
              {/* Back button */}
              <button onClick={resetForm} className="flex items-center text-[#6B5A55] hover:text-[#2D2D2D] mb-4">
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
                  className="mr-1"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                New Analysis
              </button>

              {/* Agent Cards */}
              <div className="space-y-4">
                {results.agents.map((agent, index) => (
                  <AgentCard key={agent.id} agent={agent} index={index} />
                ))}
              </div>

              {/* Synthesis */}
              <Synthesis synthesis={results.synthesis} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
