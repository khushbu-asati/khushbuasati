"use client";
import {
  Loader,
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Users,
  Briefcase,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constant/Routes";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// Form step interface
interface FormStep {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

// Form steps configuration
const formSteps: FormStep[] = [
  {
    title: "Let's Get Connected",
    subtitle:
      "Start by sharing your contact information so we can stay in touch throughout our conversation.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "What Brings You Here?",
    subtitle: "Help me understand how I can best assist you with your needs.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Share Your Vision",
    subtitle:
      "Tell me more about your ideas, requirements, or any questions you have.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
];

const topicOptions = [
  {
    value: "interview",
    label: "Interview Request",
    description: "Schedule an interview or professional discussion",
    icon: "🤝",
  },
  {
    value: "discuss-project",
    label: "Project Discussion",
    description: "Let's work together on your next big idea",
    icon: "💼",
  },
  {
    value: "technical-consultation",
    label: "Technical Consultation",
    description: "Get expert advice on technical challenges",
    icon: "💡",
  },
  {
    value: "partnership",
    label: "Partnership Inquiry",
    description: "Explore potential business collaborations",
    icon: "🤲",
  },
  {
    value: "request-callback",
    label: "Request Callback",
    description: "Schedule a phone call at your convenience",
    icon: "📞",
  },
  {
    value: "support",
    label: "Technical Support",
    description: "Get help with technical issues or questions",
    icon: "🛠",
  },
  {
    value: "feedback",
    label: "Feedback",
    description: "Share your thoughts and suggestions",
    icon: "📝",
  },
  {
    value: "general-inquiry",
    label: "General Inquiry",
    description: "Any other questions or information",
    icon: "❓",
  },
];

function ContactMeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 2:
        return formData.subject !== "";
      case 3:
        return formData.message.trim() !== "";
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setStatus("Sending...");
    setIsError(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      setIsError(true);
      console.error("Error sending message:", error);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-indigo-500/5 rounded-xl p-4 border border-indigo-500/10">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-indigo-500 mt-1" />
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Your information is protected and will only be used to
                  communicate about your inquiry. Expect a response within 24-48
                  hours.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Full Name<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-indigo-500/20 
                    bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/20 
                    transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email Address<span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-indigo-500/20 
                    bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/20 
                    transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {topicOptions.map((topic) => (
                <button
                  key={topic.value}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, subject: topic.value });
                    // Automatically proceed to next step after selection
                    setDirection(1);
                    setCurrentStep(3);
                  }}
                  className={`text-left p-4 rounded-xl transition-all duration-300 cursor-pointer shadow-xl 
              ${
                formData.subject === topic.value
                  ? " border-t-indigo-500 border-t-4 scale-[1.02] rounded-t-[0px]"
                  : " hover:border-t-indigo-500 hover:border-t-4 rounded-t-[0px] hover:bg-white/10 hover:scale-[1.02]"
              } border group`}
                >
                  <span className="text-2xl mb-3 block transform transition-transform group-hover:scale-110">
                    {topic.icon}
                  </span>
                  <h3 className="font-medium mb-2 text-primary">
                    {topic.label}
                  </h3>
                  <p className="text-sm text-neutral-700 line-clamp-2">
                    {topic.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-indigo-500/5 rounded-xl p-4 border border-indigo-500/10">
              <h3 className="font-medium mb-2">Quick Tips:</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  Include any relevant timelines or deadlines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  Mention your preferred communication method
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  Share any specific requirements or preferences
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                Your Message<span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-indigo-500/20 
                  bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/20 
                  transition-all duration-300 resize-none"
                rows={5}
                placeholder="Share the details of your project or inquiry..."
                required
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Let&apos;s Create Something Amazing
              </span>
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Share your ideas and let&apos;s bring them to life together
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-8 h-8 rounded-full 
                    ${
                      currentStep >= step
                        ? "bg-indigo-500 text-white"
                        : "bg-slate-100 text-slate-700 border-[1px] border-violet-500"
                    }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                initial={{ width: "33.33%" }}
                animate={{ width: `${(currentStep / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 overflow-hidden">
            {!isSubmitted && !isError ? (
              <form onSubmit={handleSubmit}>
                {/* Step Title */}
                <div className="mb-8">
                  <h2
                    className="text-2xl font-bold bg-gradient-to-r from-indigo-500 
                    to-violet-500 bg-clip-text text-transparent"
                  >
                    {formSteps[currentStep - 1].title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                    {formSteps[currentStep - 1].subtitle}
                  </p>
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {renderStepContent()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-3 py-2.5 bg-white/10 hover:bg-white/20 border-[1px] border-neutral-400 
                        rounded-lg transition-all duration-300 flex items-center gap-2 cursor-pointer text-neutral-700"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                  )}

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!validateStep()}
                      className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 
                        hover:from-indigo-600 hover:to-violet-600 text-white rounded-lg 
                        transition-all duration-300 flex items-center gap-2 ml-auto 
                        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Next
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!validateStep() || status === "Sending..."}
                      className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 
                        hover:from-indigo-600 hover:to-violet-600 text-white rounded-lg 
                        transition-all duration-300 flex items-center gap-2 ml-auto 
                        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "Sending..." ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            ) : isError ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                <p className="text-lg font-medium mb-4">{status}</p>
                <button
                  onClick={() => setIsError(false)}
                  className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg 
                    transition-all duration-300 cursor-pointer"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                <p className="text-lg font-medium mb-4">
                  Message Sent Successfully!
                </p>
                <button
                  onClick={() => router.push(ROUTES.default)}
                  className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg 
                    transition-all duration-300 cursor-pointer"
                >
                  Back to Home
                </button>
              </motion.div>
            )}
          </div>
        </div>
        <Footer className="bg-transparent mt-20" />
      </div>
    </div>
  );
}

export default ContactMeForm;
