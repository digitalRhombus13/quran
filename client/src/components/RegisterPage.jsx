import React, { useState ,useContext} from 'react';
import img1 from "../assets/design.jfif";
import { Link } from "react-router-dom";
import MainContext from '../context/main';
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const context = useContext(MainContext)
  const {SERVER_URL}  = context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${SERVER_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", JSON.stringify(data.token)); // Store token
        toast.success("Account Created")
        navigate("/")
        setFormData({ name: '', email: '', password: '' });
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      setMessage('Error connecting to server');
      console.error('Error:', error);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(to bottom, rgba(254, 252, 232, 0.8), rgba(208, 250, 230, 0.8)), url(${img1}) no-repeat center/cover`,
      fontFamily: 'sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {/* Inline Styles */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        background: 'linear-gradient(to bottom right, #065f46, #d97706)',
        padding: '3rem',
        borderRadius: '1.5rem',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
        maxWidth: '28rem',
        width: '100%',
        color: '#ffffff',
        animation: 'fadeIn 1s ease-out'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '2rem',
          textShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          letterSpacing: '0.05em'
        }}>
          Join Now
        </h1>
        <p style={{
          fontSize: '1.25rem',
          textAlign: 'center',
          marginBottom: '2.5rem',
          fontWeight: '300',
          opacity: '0.9'
        }}>
          Embark on a sacred journey with us
        </p>

        {message && (
          <p style={{
            textAlign: 'center',
            marginBottom: '1rem',
            fontSize: '1rem',
            color: message.includes('successful') ? '#f59e0b' : '#ff4444'
          }}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontSize: '1.125rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#1f2937',
                outline: 'none',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease'
              }}
              onFocus={e => e.target.style.boxShadow = '0 0 10px rgba(245, 158, 11, 0.5)'}
              onBlur={e => e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontSize: '1.125rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#1f2937',
                outline: 'none',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease'
              }}
              onFocus={e => e.target.style.boxShadow = '0 0 10px rgba(245, 158, 11, 0.5)'}
              onBlur={e => e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'}
            />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontSize: '1.125rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#1f2937',
                outline: 'none',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease'
              }}
              onFocus={e => e.target.style.boxShadow = '0 0 10px rgba(245, 158, 11, 0.5)'}
              onBlur={e => e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1.25rem',
              background: 'linear-gradient(to right, #f59e0b, #92400e)',
              color: '#ffffff',
              fontSize: '1.25rem',
              fontWeight: '700',
              borderRadius: '0.75rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'linear-gradient(to right, #d97706, #7c2d12)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'linear-gradient(to right, #f59e0b, #92400e)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Register
          </button>
        </form>
        <p style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          fontSize: '1rem',
          opacity: '0.9'
        }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#f59e0b', fontWeight: '600', textDecoration: 'underline' }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;