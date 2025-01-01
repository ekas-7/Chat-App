import React, { useContext } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/service';

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (response) => {
    const dec = jwtDecode(response.credential);
    setAccount(dec);
    await addUser(dec);
  };

  const onLoginFailure = (error) => {
    console.log("Login Failure", error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 animate-gradient">
      <div className="w-full max-w-md px-6 py-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden animate-slideUp">
          {/* Header Section */}
          <div className="px-8 pt-8 pb-6">
            {/* Logo */}
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-fadeIn">
              <svg 
                className="w-10 h-10 text-blue-600 animate-float"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            
            {/* Title */}
            <div className="text-center animate-fadeInDelay">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Welcome to Chat
              </h1>
              <p className="text-gray-600">
                Connect with friends and start chatting
              </p>
            </div>
          </div>

          {/* Login Section */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 animate-fadeInDelay2">
            {/* Google Login */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-6 transform transition-all duration-300 hover:scale-102 hover:shadow-md">
              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={onLoginSuccess}
                  onError={onLoginFailure}
                  shape="rectangular"
                  size="large"
                />
              </div>
            </div>

            {/* Terms Text */}
            <p className="text-sm text-center text-gray-500 mb-4">
              By continuing, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                Privacy Policy
              </a>
            </p>

            {/* Support Link */}
            <p className="text-sm text-center text-gray-500">
              Need help?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* App Stats */}
        <div className="mt-8 flex justify-center space-x-12 animate-fadeInDelay3">
          {['Active Users', 'Countries', 'Messages/Day'].map((label, index) => (
            <div 
              key={label}
              className="text-center transform transition-transform hover:scale-105"
            >
              <p className="text-2xl font-bold text-gray-900 counter">
                {['1M+', '150+', '5M+'][index]}
              </p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fadeInDelay {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.3s forwards;
        }

        .animate-fadeInDelay2 {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.6s forwards;
        }

        .animate-fadeInDelay3 {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.9s forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }

        .counter {
          transition: transform 0.3s ease;
        }

        .counter:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default LoginDialog;