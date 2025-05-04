"use client"

interface ExamplePromptsProps {
  prompts: string[]
  setExamplePrompt: (prompt: string) => void
}

export function ExamplePrompts({ prompts, setExamplePrompt }: ExamplePromptsProps) {
  return (
    <div className="mb-8">
      <div className="text-sm text-[#6B5A55] mb-3">Get started with an example below</div>
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => setExamplePrompt(prompt)}
            className="bg-[#F2E9E1] hover:bg-[#EAE0D5] text-[#6B5A55] text-sm py-2 px-4 rounded-md flex-grow md:flex-grow-0"
          >
            {prompt.length > 40 ? prompt.substring(0, 40) + "..." : prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
