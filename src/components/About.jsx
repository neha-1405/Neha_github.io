import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="section-header">
          <span className="section-header__tag">About Me</span>
          <h2 className="section-header__title">
            Engineering Serverless Cloud Architectures &amp; Intelligent AI Systems
          </h2>
          <p className="section-header__desc">
            I am a passionate software, cloud, and AI engineer with deep technical expertise in AWS serverless processing
            (Lambda, S3, API Gateway, DynamoDB, SQS), privacy-first RAG AI architectures, computer vision (YOLOv8 &amp;
            OpenCV), and full-stack web development.
          </p>
        </div>

        <div className="grid-3">
          {/* Card 1 */}
          <div className="card">
            <div className="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            </div>
            <h3 className="card__title">Cloud &amp; Serverless Architecture</h3>
            <p className="card__desc">
              Designing scalable, event-driven platforms on AWS using S3, Lambda, API Gateway, DynamoDB, SQS, IAM
              least-privilege security, and CloudWatch observability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="card__title">AI &amp; Machine Learning</h3>
            <p className="card__desc">
              Designing privacy-first RAG pipelines with LangChain &amp; ChromaDB, training neural networks, NLP, and
              implementing computer vision models (YOLOv8) for real-time edge processing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="card__title">Full-Stack Development</h3>
            <p className="card__desc">
              Building responsive, modular web interfaces using React, Node.js, and FastAPI. Creating robust RESTful
              microservices paired with SQL databases and modern design systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
