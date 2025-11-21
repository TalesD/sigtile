import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { heroAssetPath } from './assets/assetPaths';

const QuizPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={heroAssetPath.logoMain} 
              alt="SigTile Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Flooring Quiz
          </h1>
          <p className="text-xl text-gray-600">
            Coming Soon! We're building an interactive quiz to help you find the perfect flooring solution.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            In the meantime, contact us directly for a free consultation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7325586559"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition"
            >
              Call (732) 558-6559
            </a>
            <Link
              to="/"
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-bold transition border-2 border-gray-200 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

