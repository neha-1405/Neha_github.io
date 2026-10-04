import React from 'react';

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="shell">
        <div className="section-header">
          <span className="section-header__tag">Technical Skills</span>
          <h2 className="section-header__title">Technologies, Cloud &amp; Frameworks</h2>
        </div>

        <div className="grid-2">
          <div>
            <div className="skills-group">
              <div className="skills-group__title">☁️ Database &amp; AWS Cloud Services</div>
              <div className="skills-pills">
                <span className="skill-pill">Amazon S3</span>
                <span className="skill-pill">AWS Lambda (Serverless)</span>
                <span className="skill-pill">Amazon API Gateway</span>
                <span className="skill-pill">DynamoDB</span>
                <span className="skill-pill">Amazon SQS</span>
                <span className="skill-pill">AWS IAM (Least Privilege)</span>
                <span className="skill-pill">Amazon CloudWatch</span>
                <span className="skill-pill">AWS EC2</span>
                <span className="skill-pill">SQL &amp; Cloud Deployment</span>
              </div>
            </div>

            <div className="skills-group">
              <div className="skills-group__title">💻 Programming Languages</div>
              <div className="skills-pills">
                <span className="skill-pill">Python</span>
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">C++</span>
                <span className="skill-pill">C</span>
                <span className="skill-pill">SQL</span>
              </div>
            </div>
          </div>

          <div>
            <div className="skills-group">
              <div className="skills-group__title">🤖 AI &amp; Machine Learning</div>
              <div className="skills-pills">
                <span className="skill-pill">Machine Learning</span>
                <span className="skill-pill">Neural Networks</span>
                <span className="skill-pill">NLP</span>
                <span className="skill-pill">RAG Architecture</span>
                <span className="skill-pill">LangChain</span>
                <span className="skill-pill">HuggingFace</span>
                <span className="skill-pill">YOLOv8 &amp; OpenCV</span>
                <span className="skill-pill">ChromaDB Vector DB</span>
                <span className="skill-pill">Model Evaluation</span>
              </div>
            </div>

            <div className="skills-group">
              <div className="skills-group__title">🌐 Web &amp; Security Tools</div>
              <div className="skills-pills">
                <span className="skill-pill">React</span>
                <span className="skill-pill">Node.js</span>
                <span className="skill-pill">FastAPI</span>
                <span className="skill-pill">REST APIs</span>
                <span className="skill-pill">Docker &amp; Git</span>
                <span className="skill-pill">Cybersecurity &amp; Ethical Hacking</span>
                <span className="skill-pill">Data Analysis (Pandas/NumPy)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
