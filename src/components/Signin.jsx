import React, { useState } from 'react';


const SignIn = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };



  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Sign In Data:', formData);
      alert('Sign in successful!');
      setIsLoading(false);
      if (onClose) onClose();
      // In real app, you would:
      // 1. Call your authentication API
      // 2. Store the token
      // 3. Redirect to dashboard or home
      // window.location.href = '/dashboard';
    }, 1500);
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality would be implemented here');
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login would be implemented here`);
  };

  return (
    <section id="signin" >
    <div  className="signin-container">
      <div className="signin-card">
        <div className="signin-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>

        {/* <div className="social-login-section">
          <button 
            type="button" 
            className="social-btn google-btn"
            onClick={() => handleSocialLogin('Google')}
          >
            <span className="social-icon">🔍</span>
            Continue with Google
          </button>
          <button 
            type="button" 
            className="social-btn facebook-btn"
            onClick={() => handleSocialLogin('Facebook')}
          >
            <span className="social-icon">📘</span>
            Continue with Facebook
          </button>
        </div> */}

        {/* <div className="divider">
          <span>or</span>
        </div> */}

        <div className="signin-form-container">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              Remember me
            </label>
            <button 
              type="button" 
              className="forgot-password-btn"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>

          <button 
            className={`signin-btn ${isLoading ? 'loading' : ''}`}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </div>

        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up here</a></p>
        </div>
      </div>

      <style jsx>{`
       

        .signin-card {
          background: white;
          border-radius: 20px;
          padding: 1.5rem 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          position: relative;
        }

        .signin-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .signin-header h1 {
          color: #333;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .signin-header p {
          color: #666;
          font-size: 1rem;
          margin: 0;
        }

        .social-login-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 12px 20px;
          border: 2px solid #e1e5e9;
          border-radius: 10px;
          background: white;
          color: #333;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .social-btn:hover {
          border-color: #007bff;
          background: #f8f9fa;
        }

        .social-icon {
          font-size: 18px;
        }

        .google-btn:hover {
          border-color: #4285f4;
        }

        .facebook-btn:hover {
          border-color: #1877f2;
        }

        .divider {
          text-align: center;
          margin: 1.5rem 0;
          position: relative;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e1e5e9;
        }

        .divider span {
          background: white;
          color: #666;
          padding: 0 1rem;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 500;
          font-size: 14px;
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e1e5e9;
          border-radius: 10px;
          font-size: 16px;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
          font-family: inherit;
        }

        .form-group input:focus {
          outline: none;
          border-color: #007bff;
        }

        .form-group input.error {
          border-color: #dc3545;
        }

        .error-message {
          color: #dc3545;
          font-size: 12px;
          margin-top: 0.25rem;
          display: block;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 14px;
          color: #333;
          position: relative;
        }

        .checkbox-label input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .checkmark {
          height: 18px;
          width: 18px;
          background-color: white;
          border: 2px solid #e1e5e9;
          border-radius: 4px;
          margin-right: 0.5rem;
          transition: all 0.3s ease;
        }

        .checkbox-label input:checked ~ .checkmark {
          background-color: #007bff;
          border-color: #007bff;
        }

        .checkbox-label input:checked ~ .checkmark::after {
          content: '✓';
          color: white;
          font-size: 12px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .forgot-password-btn {
          background: none;
          border: none;
          color: #007bff;
          font-size: 14px;
          cursor: pointer;
          text-decoration: underline;
          font-family: inherit;
        }

        .forgot-password-btn:hover {
          color: #0056b3;
        }

        .signin-btn {
          width: 100%;
          padding: 14px 20px;
          background: linear-gradient(135deg, #667eea 0%, #014aad 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: inherit;
        }

        .signin-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .signin-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .signup-link {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e1e5e9;
        }

        .signup-link p {
          color: #666;
          font-size: 14px;
          margin: 0;
        }

        .signup-link a {
          color: #007bff;
          text-decoration: none;
          font-weight: 500;
        }

        .signup-link a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .signin-card {
            padding: 2rem 1.5rem;
          }

          .form-options {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
    </section>
  );
};

export default SignIn;