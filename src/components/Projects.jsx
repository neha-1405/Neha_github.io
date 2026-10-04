import React from 'react';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="shell">
        <div className="section-header">
          <span className="section-header__tag">Featured Projects</span>
          <h2 className="section-header__title">Innovative Software, Cloud &amp; AI Builds</h2>
        </div>

        <div className="grid-2">
          {/* Project 1 */}
          <div className="card">
            <div className="card__meta">
              <span className="card__meta-tag">January 2026</span>
              <span className="card__meta-tag">AWS Cloud / Serverless</span>
            </div>
            <h3 className="card__title">Cloud-Based Document Processing Platform</h3>
            <p className="card__desc">
              A serverless, event-driven document processing management system engineered on AWS for scalable processing,
              metadata tracking, and security monitoring.
            </p>
            <ul className="card__bullets">
              <li>Developed automated upload &amp; processing workflows using S3 event triggers invoking AWS Lambda.</li>
              <li>Designed RESTful APIs with API Gateway integrated with DynamoDB for real-time document status tracking.</li>
              <li>Utilized SQS queues for reliable, scalable asynchronous message buffering and event processing.</li>
              <li>Configured IAM least-privilege security policies and CloudWatch logging for deep system observability.</li>
              <li>Built a responsive React interface for file uploading, status tracking, and processed result retrieval.</li>
            </ul>
            <div className="tags">
              <span className="tag">AWS S3</span>
              <span className="tag">AWS Lambda</span>
              <span className="tag">API Gateway</span>
              <span className="tag">DynamoDB</span>
              <span className="tag">SQS</span>
              <span className="tag">React</span>
              <span className="tag">Python</span>
              <span className="tag">CloudWatch</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="card">
            <div className="card__meta">
              <span className="card__meta-tag">April 2026</span>
              <span className="card__meta-tag">AI / RAG / Cloud</span>
            </div>
            <h3 className="card__title">ALP — Autonomous Learning Partner</h3>
            <p className="card__desc">
              A privacy-first AI assistant utilizing Retrieval-Augmented Generation (RAG) to process large datasets
              offline with zero data leakage.
            </p>
            <ul className="card__bullets">
              <li>Engineered local open-source LLM execution pipeline using Ollama models ensuring 100% offline data privacy and zero cloud leakage.</li>
              <li>Built an automated document parsing pipeline using PyMuPDF for intelligent semantic text chunking and vector embedding generation.</li>
              <li>Integrated ChromaDB vector database for high-speed similarity search, context retrieval, and low-latency QA indexing.</li>
              <li>Developed scalable FastAPI REST microservices deployed on AWS EC2 for seamless client-side querying.</li>
              <li>Designed contextual prompt engineering workflows delivering accurate, hallucination-free answers with source citations.</li>
            </ul>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">Ollama</span>
              <span className="tag">RAG Architecture</span>
              <span className="tag">LangChain</span>
              <span className="tag">HuggingFace</span>
              <span className="tag">FastAPI</span>
              <span className="tag">ChromaDB</span>
              <span className="tag">AWS EC2</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="card">
            <div className="card__meta">
              <span className="card__meta-tag">December 2025</span>
              <span className="card__meta-tag">Computer Vision / ML</span>
            </div>
            <h3 className="card__title">Traffic Light Time Prediction</h3>
            <p className="card__desc">
              An intelligent traffic system predicting signal phase duration using historical traffic data and real-time
              vehicle density streaming.
            </p>
            <ul className="card__bullets">
              <li>Preprocessed large-scale urban traffic datasets using Pandas &amp; NumPy with time-of-day feature engineering.</li>
              <li>Trained and evaluated multi-variable regression models (Random Forest &amp; XGBoost) to estimate signal timing in seconds.</li>
              <li>Integrated OpenCV and YOLO models to count vehicle density live from real-time video feeds.</li>
              <li>Optimized inference latency for edge hardware deployment on traffic camera processors with sub-50ms processing.</li>
              <li>Engineered automated signal phase adjustment logic reducing average intersection wait times significantly.</li>
            </ul>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">OpenCV</span>
              <span className="tag">YOLOv8</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">Pandas</span>
              <span className="tag">NumPy</span>
              <span className="tag">Edge CV</span>
              <span className="tag">XGBoost</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="card">
            <div className="card__meta">
              <span className="card__meta-tag">June 2025</span>
              <span className="card__meta-tag">Full-Stack Web</span>
            </div>
            <h3 className="card__title">Book Recommendation Platform</h3>
            <p className="card__desc">
              A full-stack web application designed for interactive book discovery, personalized user recommendations, and
              responsive UI navigation.
            </p>
            <ul className="card__bullets">
              <li>Developed a modular, responsive frontend interface using React components with smooth genre filtering and instant search.</li>
              <li>Configured robust RESTful API microservice endpoints powered by Node.js to handle user queries and recommendation requests.</li>
              <li>Engineered relational SQL database schemas with optimized query indexing for rapid recommendation retrieval and user data persistence.</li>
              <li>Implemented content-based recommendation logic matching user reading histories and preferences with catalog genres and ratings.</li>
              <li>Designed interactive features including user rating systems, custom bookmarking, reading lists, and mobile-friendly responsive navigation.</li>
            </ul>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">REST APIs</span>
              <span className="tag">SQL</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Express.js</span>
              <span className="tag">Full-Stack</span>
              <span className="tag">UI Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
