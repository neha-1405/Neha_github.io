import React, { useState, useRef, useEffect } from 'react';

export default function AiAssistant() {
  const [inputText, setInputText] = useState('');
  const [responseHtml, setResponseHtml] = useState('');
  const [isResponseVisible, setIsResponseVisible] = useState(false);

  const canvasRef = useRef(null);
  const inputRef = useRef(null);
  const animIdRef = useRef(null);

  const generateReply = (rawText) => {
    const text = rawText.toLowerCase();

    if (
      text.includes("email") ||
      text.includes("github") ||
      text.includes("contact") ||
      text.includes("hr") ||
      text.includes("mail") ||
      text.includes("reach") ||
      text.includes("hire")
    ) {
      return "<strong>📬 Contact Information for HR & Recruiters:</strong><br>• <strong>Email:</strong> <a href='mailto:nancyyy1405@gmail.com' style='color:#2e7d32; font-weight:600;'>nancyyy1405@gmail.com</a><br>• <strong>GitHub Profile:</strong> <a href='https://github.com/neha-1405' target='_blank' rel='noreferrer' style='color:#2e7d32; font-weight:600;'>github.com/neha-1405</a>";
    } else if (
      text.includes("resume") ||
      text.includes("tech") ||
      text.includes("stack") ||
      text.includes("background") ||
      text.includes("about") ||
      text.includes("things") ||
      text.includes("skill") ||
      text.includes("python") ||
      text.includes("cpp") ||
      text.includes("c++") ||
      text.includes("react")
    ) {
      return "<strong>📄 Resume &amp; Technical Expertise:</strong><br>• <strong>Core Tech Stack:</strong> Python, C++, JavaScript, C, SQL, React, Node.js, FastAPI, HTML/CSS, Git, Docker.<br>• <strong>Cloud &amp; Serverless:</strong> AWS Lambda, S3, API Gateway, DynamoDB, SQS, CloudWatch, IAM, EC2.<br>• <strong>AI &amp; Data Science:</strong> RAG (LangChain + ChromaDB), PyTorch, YOLOv8, Computer Vision, SUMO Simulation, Pandas, NumPy.<br>• <strong>Publications &amp; Certs:</strong> Springer ICT4SD 2026 Paper, AWS Academy Graduate, Google Cybersecurity, EC-Council EHE.";
    } else if (
      text.includes("doc") ||
      text.includes("aws") ||
      text.includes("s3") ||
      text.includes("lambda") ||
      text.includes("dynamo") ||
      text.includes("sqs") ||
      text.includes("cloudwatch") ||
      text.includes("serverless")
    ) {
      return "<strong>☁️ Cloud Document Processing System (January 2026):</strong> Neha developed an event-driven serverless platform on AWS using S3 triggers, Lambda functions, API Gateway REST endpoints, DynamoDB for metadata tracking, SQS queues, IAM least-privilege security, CloudWatch monitoring, and a responsive React frontend!";
    } else if (text.includes("alp") || text.includes("rag") || text.includes("assistant")) {
      return "<strong>🤖 ALP (Autonomous Learning Partner):</strong> Neha built a privacy-first AI assistant using RAG (Retrieval-Augmented Generation). Key features include offline LLM processing to prevent data leakage, document parsing with PyMuPDF, ChromaDB vector semantic search, and FastAPI microservices deployed on AWS EC2!";
    } else if (
      text.includes("research") ||
      text.includes("yolo") ||
      text.includes("sumo") ||
      text.includes("traffic") ||
      text.includes("paper") ||
      text.includes("springer")
    ) {
      return "<strong>📑 Springer Publication (ICT4SD 2026):</strong> Neha published research titled <em>'Transponder-Free emergency vehicle preemption and adaptive signal control for heterogeneous Indian urban Traffic using DQN in YOLO V8'</em>. It achieved 91.3% faster emergency clearance, 13.6%-16.8% delay reduction, and ~41ms edge response time tested via SUMO in Ahmedabad.";
    } else if (
      text.includes("experience") ||
      text.includes("elecon") ||
      text.includes("invisible") ||
      text.includes("fiction") ||
      text.includes("intern") ||
      text.includes("backend") ||
      text.includes("ollama") ||
      text.includes("fastapi")
    ) {
      return "<strong>💼 Internship Experience:</strong><br>• <strong>Invisible Fiction (Backend Engineer Intern):</strong> Developed REST and FastAPI microservices, version control (VC) with Git, and client-based RAG projects powered by Ollama local models.<br>• <strong>Tech Elecon Pvt. Ltd. (Web Development Intern):</strong> Focused on front-end JavaScript frameworks, component architectures, and UI performance optimization.";
    } else if (text.includes("certif") || text.includes("google") || text.includes("security")) {
      return "<strong>📜 Certifications:</strong> AWS Academy Graduate, Google Foundations of Cybersecurity, EC-Council Ethical Hacking Essentials (EHE), and The Ultimate Job Ready Data Science Course.";
    } else {
      return "<strong>💡 Neha's AI Portfolio Assistant:</strong> Neha Patel is an AI & Cloud Solutions Developer specializing in Serverless AWS Platforms (S3/Lambda/DynamoDB/SQS), RAG AI Pipelines, Computer Vision (YOLOv8), Full-Stack Web (React/Node/FastAPI), and C++/Python development. Contact her via email at <strong>nancyyy1405@gmail.com</strong> or check out <strong>github.com/neha-1405</strong>!";
    }
  };

  const triggerVanishingAnimation = (onComplete, isBackspace = false) => {
    const input = inputRef.current;
    const canvas = canvasRef.current;
    if (!input || !canvas) {
      if (onComplete) onComplete();
      return;
    }

    const text = input.value;
    if (!text.trim() && !isBackspace) {
      if (onComplete) onComplete();
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);

    const offCanvas = document.createElement('canvas');
    offCanvas.width = w * dpr;
    offCanvas.height = h * dpr;
    const offCtx = offCanvas.getContext('2d');
    if (offCtx) offCtx.scale(dpr, dpr);

    const style = window.getComputedStyle(input);
    const fontSize = style.fontSize || '16px';
    const fontFamily = style.fontFamily || 'Poppins, sans-serif';
    const fontWeight = style.fontWeight || '400';
    const textColor = style.color || '#111111';

    offCtx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
    offCtx.fillStyle = textColor;
    offCtx.textBaseline = 'top';

    const paddingLeft = parseFloat(style.paddingLeft) || 8;
    const paddingTop = parseFloat(style.paddingTop) || 8;

    const chars = text.split('');
    const totalChars = chars.length;
    const charBounds = [];

    let currentX = paddingLeft;
    for (let i = 0; i < totalChars; i++) {
      const ch = chars[i];
      const charWidth = offCtx.measureText(ch).width;
      const charDelay = isBackspace ? i * 50 : (totalChars - 1 - i) * 65;

      charBounds.push({
        char: ch,
        index: i,
        minX: currentX,
        maxX: currentX + Math.max(charWidth, 4),
        delay: charDelay,
      });
      currentX += charWidth;
    }

    const minTextX = paddingLeft;
    const maxTextX = Math.max(currentX, paddingLeft + 10);

    offCtx.fillText(text, paddingLeft, paddingTop);

    let imgData;
    try {
      imgData = offCtx.getImageData(0, 0, w * dpr, h * dpr);
    } catch (e) {
      if (onComplete) onComplete();
      return;
    }

    const data = imgData.data;
    const particles = [];
    const step = 1;
    const bufW = Math.floor(w * dpr);
    const bufH = Math.floor(h * dpr);
    const themeColors = ['#111111', '#181818', '#2e7d32', '#388e3c', '#1b5e20', '#4caf50', '#81c784'];

    for (let py = 0; py < bufH; py += step * 2) {
      for (let px = 0; px < bufW; px += step * 2) {
        const idx = (py * bufW + px) * 4;
        const alpha = data[idx + 3];
        if (alpha > 25) {
          const cssX = px / dpr;
          const cssY = py / dpr;

          const charItem =
            charBounds.find((c) => cssX >= c.minX - 1.5 && cssX <= c.maxX + 1.5) || { delay: 0 };

          const devourDelay = charItem.delay + Math.random() * 14;
          const chosenColor = themeColors[Math.floor(Math.random() * themeColors.length)];

          particles.push({
            x: cssX,
            y: cssY,
            vx: (Math.random() * 2.2 + 0.6) * (isBackspace ? -1 : 1),
            vy: (Math.random() - 0.7) * 2.2,
            size: Math.random() * 1.6 + 0.9,
            alpha: 1,
            decay: Math.random() * 0.028 + 0.018,
            delay: devourDelay,
            seed: Math.random() * 100,
            color: chosenColor,
          });
        }
      }
    }

    if (particles.length === 0) {
      setInputText('');
      if (onComplete) onComplete();
      return;
    }

    input.style.opacity = '1';
    const startTime = performance.now();
    const totalDuration = Math.max(totalChars * 65 + 180, 400);

    function renderParticles(now) {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const elapsed = now - startTime;
      let activeCount = 0;

      const progress = Math.min(elapsed / (totalChars * 65 || 1), 1);
      const sweepX = isBackspace
        ? minTextX + progress * (maxTextX - minTextX + 10)
        : maxTextX - progress * (maxTextX - minTextX + 10);

      if (isBackspace) {
        const clipLeft = Math.max(0, sweepX);
        input.style.clipPath = `inset(0 0 0 ${clipLeft}px)`;
      } else {
        const clipRight = Math.max(0, w - sweepX);
        input.style.clipPath = `inset(0 ${clipRight}px 0 0)`;
      }

      particles.forEach((p) => {
        if (elapsed >= p.delay && p.alpha > 0) {
          activeCount++;
          p.x += p.vx + Math.sin(elapsed * 0.008 + p.seed) * 0.4;
          p.y += p.vy;
          p.vy -= 0.028;
          p.size = Math.max(0.3, p.size * 0.98);
          p.alpha -= p.decay;

          if (p.alpha > 0) {
            ctx.save();
            ctx.globalAlpha = Math.max(p.alpha, 0);
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      });

      if (elapsed < totalDuration || activeCount > 0) {
        animIdRef.current = requestAnimationFrame(renderParticles);
      } else {
        ctx.clearRect(0, 0, w, h);
        input.style.clipPath = '';
        setInputText('');
        input.style.opacity = '1';
        if (onComplete) onComplete();
      }
    }

    if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    animIdRef.current = requestAnimationFrame(renderParticles);
  };

  const handleChipClick = (questionText) => {
    setInputText(questionText);
    setTimeout(() => {
      triggerVanishingAnimation(() => {
        setResponseHtml(generateReply(questionText));
        setIsResponseVisible(true);
      });
    }, 40);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const query = inputText.trim();
    if (!query) return;

    triggerVanishingAnimation(() => {
      setResponseHtml(generateReply(query));
      setIsResponseVisible(true);
    });
  };

  const handleClear = () => {
    triggerVanishingAnimation(() => {
      setInputText('');
      setIsResponseVisible(false);
      setResponseHtml('');
    }, true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === 'Backspace' && inputText.length === 1) {
      triggerVanishingAnimation(null, true);
    }
  };

  return (
    <form className="prompt rise" style={{ '--i': 14 }} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="prompt-input">
        Ask Neha's AI Assistant
      </label>
      <div style={{ position: 'relative', width: '100%' }}>
        <textarea
          ref={inputRef}
          id="prompt-input"
          className="prompt__input"
          rows={2}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about my resume, tech stack, serverless AWS cloud platform, RAG AI assistant, or research..."
        />
        <canvas
          ref={canvasRef}
          id="disintegrate-canvas"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      </div>

      <div className="prompt__bar">
        <div className="prompt__chips">
          <span className="chip" onClick={() => handleChipClick('What is your contact email and GitHub?')}>
            📬 Email &amp; GitHub
          </span>
          <span
            className="chip"
            onClick={() => handleChipClick('Tell me about your resume, tech stack, and background')}
          >
            📄 Resume &amp; Tech
          </span>
          <span
            className="chip"
            onClick={() => handleChipClick('Tell me about your AWS Cloud Document Processing project')}
          >
            ☁️ Cloud Doc System
          </span>
          <span className="chip" onClick={() => handleChipClick('Tell me about ALP AI Assistant')}>
            🤖 ALP RAG Project
          </span>
          <span className="chip" onClick={() => handleChipClick('Explain your SUMO/YOLO research paper')}>
            📑 Research Paper
          </span>
        </div>

        <div className="prompt__right">
          <button
            type="button"
            className="icon-btn icon-btn--bare"
            aria-label="Quick clear"
            onClick={handleClear}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button type="submit" className="icon-btn icon-btn--send" aria-label="Send query">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {isResponseVisible && (
        <div
          className="prompt__response"
          dangerouslySetInnerHTML={{ __html: responseHtml }}
        />
      )}
    </form>
  );
}
