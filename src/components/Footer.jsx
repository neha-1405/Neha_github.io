import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <h2 className="footer__title">Let's Connect &amp; Build Together</h2>
        <p className="footer__desc">
          Recruiters and HR can reach me directly via email at <strong>nancyyy1405@gmail.com</strong> or view my
          repositories on GitHub at <strong>github.com/neha-1405</strong>.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            className="btn-dark"
            href="mailto:nancyyy1405@gmail.com"
            style={{ background: '#fff', color: '#141414' }}
          >
            Email: nancyyy1405@gmail.com
          </a>
          <a
            className="btn-dark"
            href="https://github.com/neha-1405"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#24292e', color: '#fff' }}
          >
            GitHub: neha-1405
          </a>
          <a
            className="btn-dark btn-accent"
            href="Resume_Neha.pdf"
            download="Resume_Neha.pdf"
          >
            Download Resume
          </a>
          <a className="btn-dark" href="#hero">
            Back to Top
          </a>
        </div>

        <div className="footer__copy">
          &copy; {new Date().getFullYear()} Neha Patel.
        </div>
      </div>
    </footer>
  );
}
