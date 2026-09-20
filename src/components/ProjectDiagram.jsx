/* eslint-disable react/prop-types */
import React, { memo } from "react";

// Hand-built system diagrams — one per project. No screenshots, no stock art:
// the drawing is the artefact. Flow is animated with a stroke-dash offset only.
const ink = "#221e19";
const soft = "#8c8378";
const pine = "#1d6a57";

const Box = ({ x, y, w = 76, h = 30, label, accent = false, mono = true }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={8}
      fill={accent ? pine : "none"}
      stroke={accent ? pine : ink}
      strokeWidth={1}
      opacity={accent ? 1 : 0.55}
    />
    <text
      x={x + w / 2}
      y={y + h / 2 + 3.5}
      textAnchor="middle"
      fontSize={9}
      fontFamily={mono ? "JetBrains Mono, monospace" : "Outfit, sans-serif"}
      fill={accent ? "#faf8f4" : ink}
    >
      {label}
    </text>
  </g>
);

const Flow = ({ d, delay = 0 }) => (
  <path
    d={d}
    fill="none"
    stroke={pine}
    strokeWidth={1.25}
    strokeDasharray="4 8"
    className="animate-dash"
    style={{ animationDelay: `${delay}ms` }}
  />
);

const Wire = ({ d }) => (
  <path d={d} fill="none" stroke={soft} strokeWidth={1} opacity={0.4} />
);

function Rag() {
  return (
    <>
      <Box x={6} y={85} w={62} label="query" />
      <Wire d="M68 100 H104" />
      <Flow d="M68 100 H104" />
      <Box x={104} y={52} w={74} label="FAISS" />
      <Box x={104} y={118} w={74} label="BM25" />
      <Wire d="M86 100 V67 H104 M86 100 V133 H104" />
      <Wire d="M178 67 H206 V100 M178 133 H206 V100" />
      <Flow d="M178 67 H206 V100" delay={120} />
      <Flow d="M178 133 H206 V100" delay={240} />
      <Box x={206} y={85} w={48} label="RRF" accent />
      <Wire d="M254 100 H286" />
      <Flow d="M254 100 H286" delay={360} />
      <Box x={286} y={85} w={62} label="Gemini" />
      <text x={6} y={38} fontSize={9} fontFamily="JetBrains Mono, monospace" fill={soft}>
        hybrid retrieval · reciprocal rank fusion
      </text>
      <text x={286} y={138} fontSize={9} fontFamily="JetBrains Mono, monospace" fill={pine}>
        cited answer
      </text>
    </>
  );
}

function Edge() {
  return (
    <>
      <Box x={6} y={85} w={66} label="client" />
      <Wire d="M72 100 H110" />
      <Flow d="M72 100 H110" />
      <rect
        x={110}
        y={46}
        width={120}
        height={108}
        rx={12}
        fill="none"
        stroke={pine}
        strokeWidth={1}
        strokeDasharray="3 4"
        opacity={0.5}
      />
      <text x={118} y={62} fontSize={8} fontFamily="JetBrains Mono, monospace" fill={pine}>
        cloudflare worker
      </text>
      <Box x={122} y={70} w={96} h={26} label="Hono router" accent />
      <Box x={122} y={110} w={96} h={26} label="unpdf extract" />
      <Wire d="M230 83 H270 M230 123 H270" />
      <Flow d="M230 83 H270" delay={200} />
      <Box x={270} y={70} w={78} h={26} label="Prisma → PG" />
      <Box x={270} y={110} w={78} h={26} label="JWT guard" />
      <text x={6} y={38} fontSize={9} fontFamily="JetBrains Mono, monospace" fill={soft}>
        edge runtime · no node apis
      </text>
    </>
  );
}

function Vision() {
  return (
    <>
      <rect x={6} y={48} width={118} height={104} rx={10} fill="none" stroke={ink} strokeWidth={1} opacity={0.55} />
      <text x={14} y={64} fontSize={8} fontFamily="JetBrains Mono, monospace" fill={soft}>
        stream 30fps
      </text>
      <g stroke={pine} strokeWidth={1.4} fill="none">
        <path d="M44 86 h-12 v-12" />
        <path d="M82 86 h12 v-12" />
        <path d="M44 122 h-12 v12" />
        <path d="M82 122 h12 v12" />
      </g>
      <rect x={44} y={86} width={38} height={36} rx={4} fill={pine} opacity={0.12} />
      <text x={44} y={82} fontSize={8} fontFamily="JetBrains Mono, monospace" fill={pine}>
        fire 0.94
      </text>
      <Wire d="M124 100 H160" />
      <Flow d="M124 100 H160" />
      <Box x={160} y={85} w={80} label="YOLOv5" accent />
      <Wire d="M240 100 H272" />
      <Flow d="M240 100 H272" delay={180} />
      <Box x={272} y={62} w={76} h={26} label="WebSocket" />
      <Box x={272} y={112} w={76} h={26} label="REST alert" />
      <Wire d="M256 100 V75 H272 M256 100 V125 H272" />
      <text x={6} y={38} fontSize={9} fontFamily="JetBrains Mono, monospace" fill={soft}>
        edge inference · 5g alerting
      </text>
    </>
  );
}

function Crud() {
  return (
    <>
      <Box x={6} y={85} w={70} label="editor" />
      <Wire d="M76 100 H112" />
      <Flow d="M76 100 H112" />
      <Box x={112} y={85} w={72} label="JWT" accent />
      <Wire d="M184 100 H220" />
      <Flow d="M184 100 H220" delay={160} />
      <g>
        {["create", "publish", "delete"].map((label, i) => (
          <g key={label}>
            <rect
              x={220}
              y={56 + i * 34}
              width={76}
              height={26}
              rx={7}
              fill="none"
              stroke={ink}
              strokeWidth={1}
              opacity={0.5}
            />
            <text
              x={258}
              y={72 + i * 34}
              textAnchor="middle"
              fontSize={9}
              fontFamily="JetBrains Mono, monospace"
              fill={ink}
            >
              {label}
            </text>
          </g>
        ))}
      </g>
      <Wire d="M296 69 H322 V100 M296 103 H322 M296 137 H322 V104" />
      <Box x={322} y={85} w={28} h={30} label="PG" />
      <text x={6} y={38} fontSize={9} fontFamily="JetBrains Mono, monospace" fill={soft}>
        protected routes · prisma orm
      </text>
    </>
  );
}

const MAP = { rag: Rag, edge: Edge, vision: Vision, crud: Crud };

function ProjectDiagram({ kind }) {
  const Shape = MAP[kind] ?? Rag;

  return (
    <svg
      viewBox="0 0 356 176"
      role="img"
      aria-label={`System diagram: ${kind} pipeline`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <Shape />
    </svg>
  );
}

export default memo(ProjectDiagram);
