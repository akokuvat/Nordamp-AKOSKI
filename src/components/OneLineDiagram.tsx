// Correct radial single-line: earthed neutral, open feeders, no fault loop.
export default function OneLineDiagram() {
  return (
    <svg viewBox="0 0 440 340" role="img">
      <text className="lbl" x="34" y="30">GRID · 110 kV</text>
      <circle className="node" cx="70" cy="42" r="4.5" />
      <line className="live" x1="70" y1="42" x2="70" y2="86" />
      <rect className="sym" x="61" y="86" width="18" height="26" />
      <text className="lbl" x="86" y="104">CB</text>
      <line className="live" x1="70" y1="112" x2="70" y2="149" />
      <circle className="sym" cx="70" cy="161" r="13" />
      <circle className="sym" cx="70" cy="179" r="13" />
      <text className="lbl" x="92" y="176">TX 110/20kV</text>
      <line className="conductor" x1="70" y1="192" x2="70" y2="214" />
      {/* star point + earthed neutral (single earth) */}
      <circle className="node" cx="70" cy="214" r="4" />
      <line className="conductor" x1="70" y1="214" x2="38" y2="214" />
      <line className="conductor" x1="38" y1="214" x2="38" y2="238" />
      <line className="sym" x1="26" y1="238" x2="50" y2="238" />
      <line className="sym" x1="30" y1="244" x2="46" y2="244" />
      <line className="sym" x1="34" y1="250" x2="42" y2="250" />
      <text className="lbl" x="16" y="230">N</text>
      {/* LV busbar */}
      <line className="conductor" x1="70" y1="214" x2="70" y2="266" />
      <line className="conductor" x1="70" y1="266" x2="392" y2="266" />
      <text className="lbl" x="300" y="258">20 kV BUS</text>
      {/* feeder 1 (live) to load */}
      <line className="live" x1="162" y1="266" x2="162" y2="300" />
      <rect className="sym" x="151" y="300" width="22" height="16" />
      <text className="lbl" x="150" y="330">LOAD</text>
      {/* feeder 2 to motor */}
      <line className="conductor" x1="272" y1="266" x2="272" y2="296" />
      <circle className="sym" cx="272" cy="307" r="11" />
      <text className="lbl" x="268" y="311">M</text>
      {/* feeder 3 to load */}
      <line className="conductor" x1="372" y1="266" x2="372" y2="300" />
      <rect className="sym" x="361" y="300" width="22" height="16" />
      <text className="lbl" x="360" y="330">LOAD</text>
      <circle className="node" cx="162" cy="266" r="3.5" />
      <circle className="node" cx="272" cy="266" r="3.5" />
      <circle className="node" cx="372" cy="266" r="3.5" />
      {/* live pulses: open radial, none touch earth */}
      <circle r="4" fill="#7E9CFF" filter="drop-shadow(0 0 6px #2C51E6)" className="pulse-anim">
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M70,42 L70,149" />
      </circle>
      <circle r="4" fill="#7E9CFF" filter="drop-shadow(0 0 6px #2C51E6)" className="pulse-anim">
        <animateMotion dur="2.6s" begin="0.7s" repeatCount="indefinite" path="M162,266 L162,300" />
      </circle>
    </svg>
  );
}
