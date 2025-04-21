"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { QuizQuestion, QuizResult } from "@/lib/types"
import { CheckIcon, XIcon, RefreshCwIcon, HomeIcon, ClockIcon } from "lucide-react"

interface QuizProps {
  questions: QuizQuestion[]
  title: string
  partId: string
}

export default function Quiz({ questions, title, partId }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(questions.length).fill(""))
  const [showResult, setShowResult] = useState(false)
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null)
  const [incorrectQuestions, setIncorrectQuestions] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(0)
  const [retakeMode, setRetakeMode] = useState(false)
  const [retakeQuestions, setRetakeQuestions] = useState<QuizQuestion[]>([])
  const [retakeIndices, setRetakeIndices] = useState<number[]>([])
  const [debugIncorrectQuestions, setDebugIncorrectQuestions] = useState<string[]>([])

  const router = useRouter()

  const displayQuestions = retakeMode ? retakeQuestions : questions
  const displayCurrentQuestion = displayQuestions[currentQuestionIndex]
  const displayTotal = displayQuestions.length

  const progress = ((currentQuestionIndex + 1) / displayTotal) * 100

  // Add keyboard event listener for spacebar navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space' && selectedOption && !showResult) {
        event.preventDefault() // Prevent page scroll
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedOption, showResult]) // Add dependencies

  // Timer effect
  useEffect(() => {
    if (!showResult) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [showResult])

  // Format timer to HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleOptionSelect = (option: string) => {
    if (selectedOption) return // Prevent changing answer after selection

    setSelectedOption(option)

    // Save the user's answer
    let newUserAnswers
    if (retakeMode) {
      newUserAnswers = [...userAnswers]
      newUserAnswers[currentQuestionIndex] = option
      setUserAnswers(newUserAnswers)
      // Check if answer is correct and update score
      if (option === retakeQuestions[currentQuestionIndex].correct) {
        setScore(score + 1)
      } else {
        setIncorrectQuestions([...incorrectQuestions, currentQuestionIndex])
      }
    } else {
      newUserAnswers = [...userAnswers]
      newUserAnswers[currentQuestionIndex] = option
      setUserAnswers(newUserAnswers)
      if (option === questions[currentQuestionIndex].correct) {
        setScore(score + 1)
      } else {
        setIncorrectQuestions([...incorrectQuestions, currentQuestionIndex])
      }
    }
  }

  const handleNext = () => {
    if (!selectedOption) return

    setSelectedOption(null)

    if (retakeMode) {
      if (currentQuestionIndex < retakeQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        calculateRetakeResults()
      }
    } else {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        calculateResults()
      }
    }
  }

  const handleRetakeIncorrect = () => {
    // Determine which question set to use for indices and mapping
    const baseQuestions = retakeMode ? retakeQuestions : questions
    // Use the latest incorrect questions relative to the current question set
    const indices = incorrectQuestions
    if (indices.length > 0) {
      setRetakeIndices(indices)
      setRetakeQuestions(indices.map(idx => baseQuestions[idx]))
      setRetakeMode(true)
      setCurrentQuestionIndex(0)
      setScore(0)
      setIncorrectQuestions([])
      setUserAnswers(Array(indices.length).fill(""))
      // For debugging: show the questions being served
      setDebugIncorrectQuestions(indices.map(idx => baseQuestions[idx]?.question || `Q${idx+1}`))
    }
  }

  const calculateResults = () => {
    setQuizResult({
      score,
      total: questions.length,
      incorrectAnswers: incorrectQuestions.map((index) => ({
        question: questions[index],
        userAnswer: userAnswers[index],
      })),
    })
    setShowResult(true)
  }

  const calculateRetakeResults = () => {
    setQuizResult({
      score,
      total: retakeQuestions.length,
      incorrectAnswers: incorrectQuestions.map((index) => ({
        question: retakeQuestions[index],
        userAnswer: userAnswers[index],
      })),
    })
    setShowResult(true)
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setUserAnswers(Array(questions.length).fill(""))
    setShowResult(false)
    setScore(0)
    setIncorrectQuestions([])
    setTimer(0)
    setRetakeMode(false)
    setRetakeQuestions([])
    setRetakeIndices([])
  }

  const handleExit = () => {
    router.push("/menu")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-3xl relative">
        {/* Timer in the upper left */}
        <div className="absolute top-4 left-4 flex items-center text-gray-600 text-sm">
          <ClockIcon className="h-4 w-4 mr-1" />
          <span>{formatTime(timer)}</span>
        </div>

        {/* Exit button in the upper right */}
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="sm" onClick={handleExit} className="text-gray-500 hover:text-gray-700">
            <HomeIcon className="h-4 w-4 mr-1" /> Exit
          </Button>
        </div>

        <CardHeader className="space-y-4 pt-12">
          <div>
            <h1 className="text-2xl font-bold text-center">{title}</h1>
            <p className="text-center text-gray-600">
              Test your knowledge of Philippine real estate laws and regulations
            </p>
          </div>

          <div className="space-y-2">
            <Progress value={progress} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} of {displayTotal}
              </div>
              {!showResult && (
                <div className="text-sm text-gray-600">
                  Score: {score}/{currentQuestionIndex + (selectedOption ? 1 : 0)}
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {debugIncorrectQuestions.length > 0 && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-300 rounded">
              <div className="font-bold text-yellow-700">[DEBUG] Questions served as incorrect this retake:</div>
              <ul className="list-disc pl-5 text-yellow-800">
                {debugIncorrectQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          )}
          {showResult ? (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">
                  Your Score: {quizResult?.score} / {quizResult?.total}
                </h2>
                <p className="text-lg">{(((quizResult?.score || 0) / (quizResult?.total || 1)) * 100).toFixed(2)}%</p>
                <div className="mt-4">
                  {(quizResult?.score || 0) / (quizResult?.total || 1) >= 0.75 ? (
                    <div className="text-green-600 font-semibold">Congratulations! You passed the test.</div>
                  ) : (
                    <div className="text-red-600 font-semibold">Unfortunately, you did not pass the test.</div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">Time taken: {formatTime(timer)}</p>
              </div>

              {quizResult?.incorrectAnswers.length ? (
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-4">Incorrect Answers:</h3>
                  <div className="space-y-4">
                    {quizResult.incorrectAnswers.map((item, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <p className="font-medium">{item.question.question}</p>
                        <p className="text-red-600 mt-2">Your answer: {item.userAnswer || "No answer"}</p>
                        <p className="text-green-600 mt-1">Correct answer: {item.question.correct}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center text-green-600 font-semibold mt-4">
                  Perfect score! You answered all questions correctly.
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-lg font-medium bg-gray-50 p-4 rounded-lg">{displayCurrentQuestion.question}</div>

              <div className="space-y-3">
                {displayCurrentQuestion.options.map((option) => {
                  const isSelected = selectedOption === option
                  const isCorrect = option === displayCurrentQuestion.correct
                  const showCorrect = isSelected && isCorrect
                  const showIncorrect = isSelected && !isCorrect

                  return (
                    <div
                      key={option}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        isSelected ? "border-2" : "hover:bg-gray-50"
                      } ${showCorrect ? "border-green-500 bg-green-50" : ""} ${
                        showIncorrect ? "border-red-500 bg-red-50" : ""
                      } ${!isSelected && selectedOption && isCorrect ? "border-green-500 bg-green-50" : ""}`}
                      onClick={() => !selectedOption && handleOptionSelect(option)}
                    >
                      <div className="flex items-center justify-between">
                        <div>{option}</div>
                        {showCorrect && <CheckIcon className="h-5 w-5 text-green-600" />}
                        {showIncorrect && <XIcon className="h-5 w-5 text-red-600" />}
                        {!isSelected && selectedOption && isCorrect && <CheckIcon className="h-5 w-5 text-green-600" />}
                      </div>
                    </div>
                  )
                })}
              </div>

              {selectedOption && (
                <div
                  className={`p-4 rounded-lg ${
                    selectedOption === displayCurrentQuestion.correct ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  }`}
                >
                  {selectedOption === displayCurrentQuestion.correct
                    ? "Correct!"
                    : `Incorrect. The correct answer is: ${displayCurrentQuestion.correct}`}
                </div>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-center">
          {showResult ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
              {quizResult?.incorrectAnswers.length ? (
                <Button onClick={handleRetakeIncorrect} className="flex items-center bg-blue-600 hover:bg-blue-700">
                  <RefreshCwIcon className="mr-2 h-4 w-4" /> Retake Incorrect
                </Button>
              ) : (
                <div></div>
              )}
              <Button onClick={handleRestart} variant="outline" className="flex items-center">
                <RefreshCwIcon className="mr-2 h-4 w-4" /> Restart Test
              </Button>
              <Button onClick={handleExit} variant="secondary" className="flex items-center">
                <HomeIcon className="mr-2 h-4 w-4" /> Exit to Menu
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!selectedOption}
              className="flex items-center bg-blue-600 hover:bg-blue-700 w-full md:w-auto"
            >
              {currentQuestionIndex < displayTotal - 1 ? "Next" : "Finish"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
