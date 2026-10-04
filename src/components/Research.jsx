import React from 'react';

export default function Research() {
  return (
    <section className="section section--alt" id="research">
      <div className="shell">
        <div className="section-header">
          <span className="section-header__tag">Research Publication</span>
          <h2 className="section-header__title">Peer-Reviewed Scientific Work</h2>
        </div>

        <div className="pub-card">
          <div className="pub-card__badge">Springer Conference — ICT4SD 2026</div>
          <h3 className="pub-card__title">
            Transponder-Free Emergency Vehicle Preemption and Adaptive Signal Control for Heterogeneous Indian Urban
            Traffic using DQN in YOLOv8
          </h3>
          <div className="pub-card__venue">
            11th International ICT Summit &amp; Awards — Goa, India | Accepted for Publication in Springer Proceedings
          </div>

          <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#3d3d3d', marginBottom: '20px' }}>
            Proposed a camera-based adaptive traffic signal control system using YOLOv8 for real-time vehicle detection
            and Deep Q-Network (DQN) for dynamic signal optimization. The system eliminates the need for expensive
            transponders and inductive loops, enabling seamless deployment using existing CCTV infrastructure.
          </p>

          <div className="pub-card__grid">
            <div className="stat-box">
              <div className="stat-box__val">13.6% – 16.8%</div>
              <div className="stat-box__lbl">Delay Reduction</div>
            </div>
            <div className="stat-box">
              <div className="stat-box__val">91.3%</div>
              <div className="stat-box__lbl">Faster Emergency Clearance</div>
            </div>
            <div className="stat-box">
              <div className="stat-box__val">~41 ms</div>
              <div className="stat-box__lbl">Response Time (Edge Ready)</div>
            </div>
          </div>

          <ul className="card__bullets" style={{ marginTop: '16px' }}>
            <li>Implemented and evaluated using SUMO simulation (v1.24.0) on real-world traffic data from Ahmedabad.</li>
            <li>Maintained &gt;89% vehicle detection accuracy under adverse environmental conditions (rain, fog, night).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
