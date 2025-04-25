import React from 'react';
import { Link } from 'react-router-dom';

const ResourcesSection = () => {
  const resources = [
    { label: 'Digital Holy Quran', href: '/resources/holyquran', isInternal: true },
    { label: 'PDF Quran Chapters', href: '/resources/pdf-chapters', isInternal: true },
    { label: 'Short Surahs', href: 'https://drive.google.com/file/d/1yDyEkKjNkl2hujbxgKYyvnc2JzjAA0lG/view?usp=drive_link', isInternal: false },
    { label: 'Essential Duas', href: '/duas', isInternal: false },
    { label: 'English Qaida', href: 'https://drive.google.com/file/d/1p688_BMoUY35XiFEzjWydq1pZL-G50nL/view?usp=drive_link', isInternal: false },
  ];

  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(to bottom right, #fefce8, #d0fae6, #ffffff)'
    }}> 
      {/* Inline Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        {/* Description */}
        <p style={{
          textAlign: 'center',
          color: '#374151',
          fontSize: '1.5rem',
          fontWeight: '300',
          maxWidth: '64rem',
          margin: '0 auto 4rem auto',
          lineHeight: '1.75',
          animation: 'fadeIn 1s ease-out'
        }}>
          Discover a range of online Quran learning resources—from foundational Arabic courses to advanced Islamic teachings, including Short Surahs, Essential Duas, and more. Explore the materials below to begin your journey.
        </p>

        {/* Resource Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '80rem',
          margin: '0 auto'
        }}>
          {resources.map((resource, index) =>
            resource.isInternal ? (
              <Link
                key={index}
                to={resource.href}
                style={{
                  position: 'relative',
                  background: 'linear-gradient(to right, #d97706, #065f46)',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '1.125rem',
                  textAlign: 'center',
                  padding: '1.25rem 2rem',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)',
                  textDecoration: 'none',
                  textTransform: 'uppercase'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #b45309, #064e3b)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #d97706, #065f46)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                <span style={{ position: 'relative', zIndex: 10 }}>{resource.label.toUpperCase()}</span>
                <span style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#f59e0b',
                  opacity: 0,
                  borderRadius: '0.75rem',
                  transition: 'opacity 0.3s ease'
                }} onMouseOver={e => e.currentTarget.style.opacity = '0.2'}
                       onMouseOut={e => e.currentTarget.style.opacity = '0'}></span>
              </Link>
            ) : (
              <a
                key={index}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'relative',
                  background: 'linear-gradient(to right, #d97706, #065f46)',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '1.125rem',
                  textAlign: 'center',
                  padding: '1.25rem 2rem',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)',
                  textDecoration: 'none',
                  textTransform: 'uppercase'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #b45309, #064e3b)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #d97706, #065f46)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                <span style={{ position: 'relative', zIndex: 10 }}>{resource.label.toUpperCase()}</span>
                <span style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#f59e0b',
                  opacity: 0,
                  borderRadius: '0.75rem',
                  transition: 'opacity 0.3s ease'
                }} onMouseOver={e => e.currentTarget.style.opacity = '0.2'}
                       onMouseOut={e => e.currentTarget.style.opacity = '0'}></span>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;