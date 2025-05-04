export interface Agent {
  id: string
  name: string
  description: string
  response: string
}

export interface AnalysisResult {
  agents: Agent[]
  synthesis: string
}
