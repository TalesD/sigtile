import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroAssetPath, quizImagesPath } from './assets/assetPaths';

const quizQuestions = [
  {
    id: 1,
    question: "Which room are you shopping for?",
    subtitle: "This helps us recommend products with the correct durability",
    options: [
      { image: quizImagesPath.livingRoom, label: "Living Room / Bedrooms", value: "living_bedroom" },
      { image: quizImagesPath.kitchen, label: "Kitchen / Laundry Room", value: "kitchen_laundry" },
      { image: quizImagesPath.bathroom, label: "Bathroom / Wet Areas", value: "bathroom_wet" },
      { image: quizImagesPath.commercial, label: "Commercial Space / Office", value: "commercial" },
      { image: quizImagesPath.entireHome, label: "Entire Home / Full Project", value: "entire_home" }
    ]
  },
  {
    id: 2,
    question: "What's your preferred style or atmosphere?",
    subtitle: "This helps us filter colors and textures that match your vision",
    options: [
      { image: quizImagesPath.modernMinimal, label: "Modern & Minimal", description: "Neutral tones, clean lines", value: "modern_minimal" },
      { image: quizImagesPath.cozyRustic, label: "Cozy & Rustic", description: "Textured, wood & stone looks", value: "cozy_rustic" },
      { image: quizImagesPath.classicElegant, label: "Classic & Elegant", description: "Marble looks, decorative patterns", value: "classic_elegant" },
      { image: quizImagesPath.creativeColorful, label: "Creative & Colorful", description: "Vibrant colors, bold patterns", value: "creative_colorful" },
      { image: quizImagesPath.notSure, label: "I'm not sure yet", description: "I want to see options", value: "not_sure" }
    ]
  },
  {
    id: 3,
    question: "What is the MOST important feature for you?",
    subtitle: "This directs us to the right product category for your needs",
    options: [
      { image: quizImagesPath.durability, label: "Durability & High Resistance", description: "For high-traffic areas", value: "durability" },
      { image: quizImagesPath.waterResistance, label: "Water Resistance", description: "Ideal for bathrooms, kitchens", value: "water_resistance" },
      { image: quizImagesPath.comfortWarmth, label: "Comfort & Warmth", description: "Warmer, softer underfoot", value: "comfort_warmth" },
      { image: quizImagesPath.budgetFriendly, label: "Budget-Friendly Value", description: "Beauty with a great price", value: "budget_friendly" },
      { image: quizImagesPath.ecoFriendly, label: "Eco-Friendly & Natural", description: "Natural or sustainable products", value: "eco_friendly" }
    ]
  },
  {
    id: 4,
    question: "When it comes to maintenance, you prefer:",
    subtitle: "This ensures we recommend options that fit your lifestyle",
    options: [
      { image: quizImagesPath.easyCleaning, label: "Easy Cleaning", description: "Quick and practical", value: "easy_cleaning" },
      { image: quizImagesPath.lowMaintenance, label: "Low Maintenance", description: "No waxing or refinishing needed", value: "low_maintenance" },
      { image: quizImagesPath.periodicCare, label: "Periodic Care", description: "Willing to maintain for long-term beauty", value: "periodic_care" },
      { image: quizImagesPath.notConcern, label: "Not a big concern", description: "As long as it looks beautiful", value: "not_concern" }
    ]
  },
  {
    id: 5,
    question: "What is your estimated budget range?",
    subtitle: "This helps us show you the best options within your investment",
    options: [
      { image: quizImagesPath.budget, label: "Budget-Friendly", description: "Best options in tile and laminate", value: "budget" },
      { image: quizImagesPath.midRange, label: "Mid-Range", description: "Great value in luxury vinyl and porcelain", value: "mid_range" },
      { image: quizImagesPath.premium, label: "Premium", description: "High-end products like hardwood and special porcelain", value: "premium" },
      { image: quizImagesPath.discussLater, label: "Prefer to discuss later", description: "After choosing a product", value: "discuss_later" }
    ]
  }
];

const QuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
    
    // Auto-advance to next question after selection
    setTimeout(() => {
      if (currentStep < quizQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit({ ...answers, [currentQuestion.id]: value });
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (finalAnswers) => {
    setIsSubmitting(true);
    
    // Simulate API call or form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically send the data to your backend or CRM
    console.log('Quiz Answers:', finalAnswers);
    
    setIsSubmitting(false);
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 md:px-12 py-10 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg"
            >
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Thank You for Your Time
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100">
              We've received your preferences and will prepare a personalized flooring proposal
            </p>
          </div>

          {/* Content Section */}
          <div className="px-8 md:px-12 py-10">
            {/* What Happens Next */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What Happens Next?
              </h2>
              
              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Consultation</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our flooring specialist will contact you within 24 hours to discuss your project in detail
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Free Detailed Estimate</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Receive a comprehensive quote with transparent pricing and no hidden fees
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Personalized Recommendations</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Get curated flooring options that perfectly match your style, needs, and budget
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="tel:7325586559"
                className="flex items-center justify-center space-x-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Us Now: (732) 558-6559</span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  to="/"
                  className="flex items-center justify-center space-x-2 w-full bg-white hover:bg-slate-50 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all border-2 border-slate-200"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
              </motion.div>
            </div>

            {/* Footer Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200"
            >
              Your information is secure and will only be used to provide you with flooring recommendations
            </motion.p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Analyzing Your Preferences...
          </h2>
          <p className="text-gray-600">
            We're preparing your personalized recommendations
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 px-4">
      {/* Header with Glass Effect */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back to Home</span>
        </Link>
        
        {/* Glass Header Card */}
        <div className="relative backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-2xl p-6 mb-4">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/20 rounded-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <img 
                src={heroAssetPath.logoMain} 
                alt="SigTile Logo" 
                className="h-12 w-auto drop-shadow-sm"
              />
              <div className="text-right">
                <p className="text-sm text-gray-700 font-semibold">
                  Question {currentStep + 1} of {quizQuestions.length}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/50 backdrop-blur-sm rounded-full h-3 overflow-hidden shadow-inner border border-white/60">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            {/* Question Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {currentQuestion.question}
              </h2>
              <p className="text-lg text-gray-600">
                {currentQuestion.subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswer(option.value)}
                  className={`
                    relative overflow-hidden rounded-2xl border-3 transition-all duration-300 text-left group
                    ${answers[currentQuestion.id] === option.value
                      ? 'border-blue-500 shadow-2xl scale-105 ring-4 ring-blue-200'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-xl hover:scale-102'
                    }
                  `}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={option.image} 
                      alt={option.label}
                      className={`
                        w-full h-full object-cover transition-all duration-500
                        ${answers[currentQuestion.id] === option.value
                          ? 'scale-110 brightness-110'
                          : 'group-hover:scale-110 group-hover:brightness-105'
                        }
                      `}
                      onError={(e) => {
                        // Fallback to gradient if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                      transition-opacity duration-300
                      ${answers[currentQuestion.id] === option.value ? 'opacity-70' : 'opacity-50'}
                    `} />
                    
                    {/* Selected Checkmark */}
                    {answers[currentQuestion.id] === option.value && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="absolute top-4 right-4 bg-blue-600 rounded-full p-2 shadow-lg"
                      >
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </motion.div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="p-5 bg-white">
                    <h3 className={`
                      text-lg font-bold mb-1 transition-colors duration-300
                      ${answers[currentQuestion.id] === option.value
                        ? 'text-blue-600'
                        : 'text-gray-900 group-hover:text-blue-600'
                      }
                    `}>
                      {option.label}
                    </h3>
                    {option.description && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {option.description}
                      </p>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all
                  ${currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              <div className="flex space-x-2">
                {quizQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${index === currentStep
                        ? 'bg-blue-600 w-8'
                        : index < currentStep
                        ? 'bg-blue-400'
                        : 'bg-gray-300'
                      }
                    `}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  if (answers[currentQuestion.id]) {
                    if (currentStep < quizQuestions.length - 1) {
                      setCurrentStep(currentStep + 1);
                    } else {
                      handleSubmit(answers);
                    }
                  }
                }}
                disabled={!answers[currentQuestion.id]}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all
                  ${answers[currentQuestion.id]
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                <span>{currentStep === quizQuestions.length - 1 ? 'Finish' : 'Next'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            Need help right away? Our team is ready to assist you!
          </p>
          <a
            href="tel:7325586559"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition"
          >
            📞 Call (732) 558-6559
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizPage;
