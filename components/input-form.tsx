"use client"

import type React from "react"
import { Switch } from "@headlessui/react"

interface InputFormProps {
  scenario: string
  setScenario: (scenario: string) => void
  isLoading: boolean
  isSecureMode: boolean
  setIsSecureMode: (isSecureMode: boolean) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
}

export function InputForm({
  scenario,
  setScenario,
  isLoading,
  isSecureMode,
  setIsSecureMode,
  handleSubmit,
}: InputFormProps) {
  return (
    <div className="bg-white rounded-xl border border-[#E8E1D8] shadow-sm overflow-hidden mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Describe your decision scenario..."
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          className="w-full p-4 text-[#2D2D2D] text-base resize-none focus:outline-none min-h-[120px]"
          rows={5}
          disabled={isLoading}
        />
        <div className="flex items-center justify-between border-t border-[#E8E1D8] p-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#6B5A55]">Secure Mode</span>
            <Switch
              checked={isSecureMode}
              onChange={setIsSecureMode}
              className={`${
                isSecureMode ? "bg-[#6B5A55]" : "bg-[#E8E1D8]"
              } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span
                className={`${
                  isSecureMode ? "translate-x-4" : "translate-x-1"
                } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
          <button
            type="submit"
            disabled={isLoading || !scenario.trim()}
            className={`px-4 py-2 rounded-md text-sm ${
              isLoading || !scenario.trim()
                ? "bg-[#E8E1D8] text-[#A39E99] cursor-not-allowed"
                : "bg-[#2D2D2D] text-white hover:bg-[#444444]"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
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
      </form>
    </div>
  )
}
