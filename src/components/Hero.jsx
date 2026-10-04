import React from 'react';
import Navbar from './Navbar';
import AiAssistant from './AiAssistant';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* BACKGROUND VIDEO */}
      <div className="hero__bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260831_223518_f11bfa03-4e65-47e1-a4a7-30e42a7a8c2f.png&amp;w=1920&amp;q=85"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260831_232706_43757be4-2250-4f09-8cd7-23aebbf147ad.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="hero__inner">
        <Navbar />

        <main className="stage">
          {/* BADGE */}
          <div className="badge rise" style={{ '--i': 8 }}>
            <span className="badge__tag">Available for Opportunities</span>
            <span>AI &amp; Cloud Systems Engineer</span>
          </div>

          {/* HEADLINE */}
          <h1 className="headline rise" style={{ '--i': 10 }}>
            Neha Patel<br className="brk" /> AI &amp; Cloud Solutions Developer
          </h1>

          {/* SUBCOPY */}
          <p className="sub rise" style={{ '--i': 12 }}>
            Building serverless AWS cloud architectures, privacy-first RAG AI assistants, and deep learning traffic models.<br className="brk" />

          </p>

          {/* PROMPT CARD AI ASSISTANT */}
          <AiAssistant />
        </main>
      </div>
    </section>
  );
}
