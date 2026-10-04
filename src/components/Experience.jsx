import React from 'react';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        {/* Work Experience */}
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <span className="section-header__tag">Work Experience</span>
          <h2 className="section-header__title">Industry Experience</h2>
        </div>

        <div className="grid-2" style={{ marginBottom: '56px' }}>
          <div className="card">
            <div className="card__meta">
              <span className="card__meta-tag">Backend Engineer Intern</span>
              <span className="card__meta-tag">RAG / LLM &amp; APIs</span>
            </div>
            <h3 className="card__title">Invisible Fiction</h3>
            <div style={{ fontWeight: 500, color: 'var(--accent)', marginBottom: '12px' }}>
              Backend Engineer Intern
            </div>
            <ul className="card__bullets">
              <li>Architected and developed production RESTful APIs and high-performance FastAPI microservices.</li>
              <li>Engineered enterprise and client-based AI projects utilizing Ollama open-source models with Retrieval-Augmented Generation (RAG) based architectures.</li>
              <li>Practiced rigorous Version Control (VC) using Git for collaborative code development, feature branching, and pull request workflows.</li>
              <li>Integrated local open-source LLMs into backend services to deliver secure, scalable, and context-aware AI solutions.</li>
            </ul>
            <div className="tags">
              <span className="tag">FastAPI</span>
              <span className="tag">REST APIs</span>
              <span className="tag">Ollama Models</span>
              <span className="tag">RAG Architecture</span>
              <span className="tag">Git / VC</span>
              <span className="tag">Python</span>
              <span className="tag">Backend</span>
            </div>
          </div>

          <div className="card">
            <div className="card__meta">
              <span className="card__meta-tag">May 2025 – June 2025</span>
              <span className="card__meta-tag">Hybrid, India</span>
            </div>
            <h3 className="card__title">Tech Elecon Pvt. Ltd.</h3>
            <div style={{ fontWeight: 500, color: 'var(--accent)', marginBottom: '12px' }}>
              Web Development Intern
            </div>
            <ul className="card__bullets">
              <li>Completed a 4-week internship focused on front-end web development using modern JavaScript frameworks.</li>
              <li>Developed responsive, user-friendly web interfaces adhering to component-based architecture.</li>
              <li>Collaborated with engineering teams on UI design implementation, cross-browser compatibility, and DOM optimization.</li>
              <li>Applied RESTful API integration for dynamic frontend data rendering and form validation workflows.</li>
            </ul>
            <div className="tags">
              <span className="tag">JavaScript</span>
              <span className="tag">React</span>
              <span className="tag">HTML/CSS</span>
              <span className="tag">REST APIs</span>
              <span className="tag">Frontend</span>
              <span className="tag">UI Design</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div id="certifications">
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="section-header__tag">Certifications</span>
            <h2 className="section-header__title">Credentials &amp; Awards</h2>
          </div>

          <div className="grid-2">
            <div className="card">
              <div className="card__meta">
                <span className="card__meta-tag">Data &amp; Security</span>
                <span className="card__meta-tag">Certified</span>
              </div>
              <h3 className="card__title">Data Science &amp; Cybersecurity</h3>
              <div style={{ fontWeight: 500, color: 'var(--accent)', marginBottom: '12px' }}>
                Professional Certifications
              </div>
              <ul className="card__bullets" style={{ paddingLeft: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px' }}>🎓</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--ink)' }}>
                      The Ultimate Job Ready Data Science Course
                    </strong>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                      Advanced Data Science, Machine Learning &amp; Analytics
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px' }}>🔐</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--ink)' }}>
                      Foundations of Cybersecurity
                    </strong>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Google Career Certificate</span>
                  </div>
                </li>
              </ul>
              <div className="tags">
                <span className="tag">Data Science</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">Cybersecurity</span>
                <span className="tag">Google Certified</span>
              </div>
            </div>

            <div className="card">
              <div className="card__meta">
                <span className="card__meta-tag">Cloud &amp; Ethical Hacking</span>
                <span className="card__meta-tag">Certified</span>
              </div>
              <h3 className="card__title">AWS Cloud &amp; Ethical Hacking</h3>
              <div style={{ fontWeight: 500, color: 'var(--accent)', marginBottom: '12px' }}>
                Professional Certifications
              </div>
              <ul className="card__bullets" style={{ paddingLeft: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px' }}>🛡️</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--ink)' }}>
                      Ethical Hacking Essentials (EHE)
                    </strong>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>EC-Council Certification</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px' }}>☁️</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--ink)' }}>
                      AWS Academy Graduate
                    </strong>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>AWS Cloud Foundations &amp; Architecture</span>
                  </div>
                </li>
              </ul>
              <div className="tags">
                <span className="tag">AWS Cloud</span>
                <span className="tag">Ethical Hacking</span>
                <span className="tag">EC-Council</span>
                <span className="tag">Cloud Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
