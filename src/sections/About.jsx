import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { title: "Machine Learning", desc: "Developing predictive modeling systems and dataset classification." },
  { title: "Artificial Intelligence", desc: "Building intelligent applications, neural logic, and AI solutions." },
  { title: "Full Stack Development", desc: "Designing client-side interfaces and scalable API backend systems." },
  { title: "Data Analytics", desc: "Extracting insights using statistical preprocessing and visualizations." },
  { title: "Generative AI", desc: "Integrating LLM architectures and prompt engineering patterns." },
  { title: "Database Systems", desc: "Structuring relational and document-based data schemas." },
  { title: "Web Applications", desc: "Building responsive frontends and Python Streamlit services." },
  { title: "Modern Tools", desc: "Managing Git control pipelines, cloud hosting, and workspace tools." }
];

export default function About() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Fade in left side on scroll
    gsap.fromTo(leftColRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Fade in capabilities cards sequentially
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--background-secondary)',
        borderTop: '1px solid var(--border-primary)',
        borderBottom: '1px solid var(--border-primary)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '60px',
          }}
          className="about-grid"
        >
          {/* Left Column - Biography */}
          <div
            ref={leftColRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              textAlign: 'left'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--accent-secondary)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              ABOUT ME
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.15,
                fontWeight: 500,
                marginBottom: '24px'
              }}
            >
              Developer by skill.<br />
              <span className="text-gradient-purple">AI Engineer by heart.</span>
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                fontWeight: 300
              }}
            >
              I am currently pursuing my Bachelor of Technology in Artificial Intelligence and Machine Learning at Srinivasa Institute of Engineering and Technology. I have a strong interest in Artificial Intelligence, Machine Learning, Data Analytics, and Web Development.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0,
                fontWeight: 300
              }}
            >
              I enjoy participating in hackathons, internships, and real-world projects where I can apply my technical knowledge to solve practical problems. I continuously improve my programming, problem-solving, teamwork, and communication skills while exploring modern AI technologies to build impactful software products that make people's lives easier.
            </p>
          </div>

          {/* Right Column - Capabilities Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                margin: 0,
                textAlign: 'left',
                borderBottom: '1px solid var(--border-primary)',
                paddingBottom: '12px'
              }}
            >
              Core Capabilities
            </h3>
            
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '20px',
              }}
            >
              {capabilities.map((cap, idx) => (
                <div
                  key={cap.title}
                  ref={el => cardsRef.current[idx] = el}
                  className="glass-panel capability-card"
                  style={{
                    padding: '24px',
                    textAlign: 'left',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        marginBottom: '8px'
                      }}
                    >
                      {cap.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0,
                        fontWeight: 300
                      }}
                    >
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
        .capability-card {
          border-left: 3px solid var(--border-primary) !important;
        }
        .capability-card:hover {
          border-left-color: var(--accent-secondary) !important;
        }
      `}</style>
    </section>
  );
}
