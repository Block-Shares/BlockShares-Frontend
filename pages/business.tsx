'use client';

import '@/app/globals.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

const questions = [
  { id: 'name', label: 'What is your company name?', type: 'text' },
  { id: 'logo', label: 'Please provide a URL to your company logo:', type: 'text' },
  { id: 'description', label: 'Briefly describe your company:', type: 'textarea' },
  { id: 'industry', label: 'What industry does your company operate in?', type: 'text' },
  { id: 'founded', label: 'When was your company founded?', type: 'text' },
  { id: 'employees', label: 'How many employees does your company have?', type: 'text' },
  { id: 'revenue', label: "What was your company's revenue last year?", type: 'text' },
  { id: 'tokenization', label: 'Why do you want to tokenize your business?', type: 'textarea' },
];

type Answers = { [key: string]: string };

const Business = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentAnswer = answers[questions[currentQuestion].id];
    if (!currentAnswer) {
      setError('Please answer the question before proceeding.');
      return;
    }
    setError('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: e.target.value });
    setError('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-emerald-800">
        <span className="text-lg font-bold text-emerald-500">TokenizedBiz For Business</span>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/marketplace">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/business">
            For Businesses
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key={currentQuestion}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-emerald-500 mb-8">
                  {currentQuestion + 1}. {questions[currentQuestion].label}
                </h2>
                {questions[currentQuestion].type === 'textarea' ? (
                  <Textarea
                    id={questions[currentQuestion].id}
                    value={answers[questions[currentQuestion].id] || ''}
                    onChange={handleInputChange}
                    className="bg-emerald-900/20 border-emerald-500 text-white text-lg p-4"
                    rows={6}
                  />
                ) : (
                  <Input
                    type="text"
                    id={questions[currentQuestion].id}
                    value={answers[questions[currentQuestion].id] || ''}
                    onChange={handleInputChange}
                    className="bg-emerald-900/20 border-emerald-500 text-white text-lg p-4 h-16"
                  />
                )}
                {error && (
                  <div className="text-red-500 flex items-center">
                    <AlertCircle className="mr-2" />
                    {error}
                  </div>
                )}
                <Button type="submit" className="w-full bg-emerald-500 text-black hover:bg-emerald-600 text-lg py-6">
                  {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <h2 className="text-3xl font-bold text-emerald-500">Thank you for your submission!</h2>
                <p className="text-gray-300 text-lg">
                  Filling this form does not guarantee listing on this platform. Your application will be subject to
                  vetting and compliance with governmental policies.
                </p>
                <p className="text-gray-300 text-lg">We will contact you soon with further information.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Business;
