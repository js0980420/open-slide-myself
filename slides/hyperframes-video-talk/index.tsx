import type { CSSProperties, ReactNode } from 'react';

import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import demoShortVideo from './assets/demo-short.mp4';
import remotionlabShowcaseDemo from './assets/remotionlab-showcase-demo.mp4';

export const design: DesignSystem = {
  palette: {
    bg: '#f7f9ff',
    text: '#0f172a',
    accent: '#4f46e5',
  },
  fonts: {
    display: '"Poppins", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
    body: '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
  },
  typeScale: {
    hero: 96,
    body: 32,
  },
  radius: 28,
};

const palette = {
  ink: design.palette.text,
  accent: design.palette.accent,
  accentSoft: '#7c3aed',
  accentWash: '#eef0ff',
  panel: 'rgba(255,255,255,0.82)',
  panelStrong: '#ffffff',
  line: 'rgba(79,70,229,0.14)',
  lineStrong: 'rgba(79,70,229,0.28)',
  textSoft: '#334155',
  textMuted: '#64748b',
  green: '#16a34a',
  orange: '#f97316',
  sky: '#0ea5e9',
  rose: '#ec4899',
  navy: '#0b1020',
} as const;

const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative',
  overflow: 'hidden',
};

const styles = `
  @keyframes hf-float {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(0, -14px, 0); }
  }
  @keyframes hf-rise {
    from { opacity: 0; transform: translateY(22px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes hf-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.08); }
    50% { box-shadow: 0 0 0 18px rgba(124,58,237,0); }
  }
  .hf-rise {
    opacity: 0;
    animation: hf-rise 0.85s cubic-bezier(.2,.8,.2,1) forwards;
  }
  .hf-float {
    animation: hf-float 6s ease-in-out infinite;
  }
  .hf-cardIn {
    opacity: 0;
    animation:
      hf-rise 0.85s cubic-bezier(.2,.8,.2,1) forwards,
      hf-float 6s ease-in-out 0.9s infinite;
  }
  .hf-pulse {
    animation: hf-pulse 2.8s ease-in-out infinite;
  }
`;

const Styles = () => <style>{styles}</style>;

const Background = () => (
  <>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(circle at 20% 15%, rgba(99,102,241,0.18), transparent 28%), radial-gradient(circle at 84% 22%, rgba(14,165,233,0.16), transparent 22%), radial-gradient(circle at 75% 80%, rgba(236,72,153,0.11), transparent 24%), linear-gradient(180deg, #fcfdff 0%, #f7f9ff 100%)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(rgba(79,70,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.05) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
        opacity: 0.5,
      }}
    />
  </>
);

const Eyebrow = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <div
    style={{
      fontSize: 24,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: palette.accent,
      ...style,
    }}
  >
    {children}
  </div>
);

const Panel = ({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) => (
  <div
    className={className}
    style={{
      background: palette.panel,
      border: `1px solid ${palette.line}`,
      borderRadius: 'var(--osd-radius)',
      boxShadow: '0 28px 60px rgba(79,70,229,0.08)',
      backdropFilter: 'blur(18px)',
      ...style,
    }}
  >
    {children}
  </div>
);

const Dot = ({ color, children }: { color: string; children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: color,
        flexShrink: 0,
      }}
    />
    <span>{children}</span>
  </div>
);

const CardIcon = ({ kind }: { kind: 'script' | 'edit' | 'voice' | 'caption' | 'music' | 'thumb' }) => {
  const common = {
    width: 34,
    height: 34,
    viewBox: '0 0 34 34',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (kind) {
    case 'script':
      return (
        <svg {...common}>
          <path d="M10 7h10l5 5v15H10z" />
          <path d="M20 7v5h5" />
          <path d="M13 17h8" />
          <path d="M13 22h8" />
        </svg>
      );
    case 'edit':
      return (
        <svg {...common}>
          <path d="M8 24l4.5-1 10-10-3.5-3.5-10 10z" />
          <path d="M17.5 9.5l3.5 3.5" />
          <path d="M8 24h6" />
        </svg>
      );
    case 'voice':
      return (
        <svg {...common}>
          <rect x="12.5" y="6.5" width="9" height="15" rx="4.5" />
          <path d="M9 16a8 8 0 0 0 16 0" />
          <path d="M17 24v4" />
        </svg>
      );
    case 'caption':
      return (
        <svg {...common}>
          <rect x="5.5" y="8" width="23" height="18" rx="4" />
          <path d="M10 16h14" />
          <path d="M10 21h10" />
        </svg>
      );
    case 'music':
      return (
        <svg {...common}>
          <path d="M21 7v14.5a3.5 3.5 0 1 1-2-3.16V10l8-2v11.5a3.5 3.5 0 1 1-2-3.16V7z" />
        </svg>
      );
    case 'thumb':
      return (
        <svg {...common}>
          <rect x="5.5" y="7" width="23" height="20" rx="4" />
          <path d="M10 22l4.5-5 3.5 3 5-6" />
          <circle cx="11" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
  }
};

const Cover: Page = () => (
  <div style={fill}>
    <Styles />
    <Background />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '0',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 96,
          top: 112,
          width: 1280,
        }}
      >
        <Eyebrow style={{ marginBottom: 18 }}>只靠對話，也能完成整支影片</Eyebrow>
        <h1
          className="hf-rise"
          style={{
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 'var(--osd-size-hero)',
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontWeight: 900,
            maxWidth: 1260,
          }}
        >
          如何只靠跟
          <span style={{ color: palette.accent, whiteSpace: 'nowrap' }}> AI Agent 對話</span>
          <br />
          就能拍完整支影片
        </h1>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 96,
          top: 560,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 22,
          width: 1320,
        }}
      >
        {[
          { label: '腳本', kind: 'script' as const },
          { label: '剪輯', kind: 'edit' as const },
          { label: '配音', kind: 'voice' as const },
          { label: '字幕', kind: 'caption' as const },
          { label: '背景音樂', kind: 'music' as const },
          { label: '封面縮圖', kind: 'thumb' as const },
        ].map(({ label, kind }, index) => (
          <Panel
            key={label}
            className="hf-cardIn"
            style={{
              padding: '22px 22px',
              minHeight: 122,
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              animationDelay: `${0.12 + index * 0.06}s`,
              background: 'rgba(255,255,255,0.94)',
              border: `1px solid ${palette.lineStrong}`,
              boxShadow: '0 20px 40px rgba(79,70,229,0.10)',
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                background: 'linear-gradient(135deg, rgba(79,70,229,0.14), rgba(14,165,233,0.16))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: palette.accent,
                flexShrink: 0,
              }}
            >
              <CardIcon kind={kind} />
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.2,
                color: palette.ink,
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              {label}
            </div>
          </Panel>
        ))}
      </div>
    </div>
  </div>
);

const StepBadge = ({
  number,
  color,
  title,
  desc,
}: {
  number: string;
  color: string;
  title: string;
  desc: string;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center' }}>
    <div
      style={{
        width: 54,
        height: 54,
        borderRadius: '50%',
        background: color,
        color: '#fff',
        fontSize: 28,
        fontWeight: 900,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 12px 28px rgba(15,23,42,0.10)',
      }}
    >
      {number}
    </div>
    <div style={{ fontSize: 22, fontWeight: 900, color: palette.ink }}>{title}</div>
    <div style={{ fontSize: 16, lineHeight: 1.45, color: palette.textMuted, maxWidth: 180 }}>{desc}</div>
  </div>
);

const Arrow = () => (
  <div style={{ alignSelf: 'start', marginTop: 22, fontSize: 40, color: '#94a3b8', fontWeight: 700 }}>→</div>
);

const Workflow: Page = () => (
  <div style={fill}>
    <Styles />
    <Background />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '42px 42px 68px',
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr auto',
        gap: 14,
      }}
    >
      <div>
        <Eyebrow style={{ textAlign: 'center' }}>Heygen 推出的開源工具</Eyebrow>
        <h2
          style={{
            margin: '8px 0 10px',
            fontFamily: 'var(--osd-font-display)',
            fontSize: 82,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontWeight: 900,
            textAlign: 'center',
          }}
        >
          <span style={{ color: palette.accent }}>Hyperframes</span> 工作原理
        </h2>
        <p style={{ margin: 0, fontSize: 26, lineHeight: 1.5, color: palette.textSoft, textAlign: 'center' }}>
          用自然語言描述影片需求，AI Agent 生成 DOM 結構，GSAP 控制動畫，再由 FFmpeg 輸出影片
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 34px 1fr 34px 1fr 34px 1fr 34px 1fr', alignItems: 'start', gap: 8 }}>
        <StepBadge number="1" color="#2563eb" title="自然語言輸入" desc="用文字描述想要的影片效果" />
        <Arrow />
        <StepBadge number="2" color="#7c3aed" title="AI Agent 理解需求" desc="規劃結構、鏡頭與視覺流程" />
        <Arrow />
        <StepBadge number="3" color="#16a34a" title="生成程式碼" desc="HTML 控制結構，CSS 負責樣式" />
        <Arrow />
        <StepBadge number="4" color="#f59e0b" title="GSAP 執行動畫" desc="以時間軸控制所有動態效果" />
        <Arrow />
        <StepBadge number="5" color="#2563eb" title="生成影片" desc="用 FFmpeg 輸出影片或做即時預覽" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr 1fr 0.92fr', gap: 16 }}>
        <Panel style={{ padding: '24px 20px', minHeight: 400 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: palette.accent, marginBottom: 18 }}>自然語言需求</div>
          <div
            style={{
              borderRadius: 24,
              border: `2px solid rgba(79,70,229,0.20)`,
              background: '#fff',
              padding: '28px 22px',
              fontSize: 24,
              lineHeight: 1.68,
              color: palette.ink,
            }}
          >
            「製作一個 Hyperframes 介紹影片，開頭先破題，接著展示工作流程，最後用卡片整理重點。」
          </div>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginTop: 20 }}>
            <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'linear-gradient(180deg, #60a5fa, #2563eb)' }} />
            <div
              style={{
                width: 94,
                height: 60,
                borderRadius: 16,
                border: `2px solid rgba(15,23,42,0.10)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 34,
                color: '#64748b',
              }}
            >
              •••
            </div>
          </div>
        </Panel>

        <Panel style={{ padding: '24px 20px', minHeight: 400 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: palette.accentSoft, marginBottom: 18 }}>規劃影片結構</div>
          <div
            style={{
              borderRadius: 24,
              border: `1px solid ${palette.lineStrong}`,
              background: 'rgba(255,255,255,0.92)',
              padding: '22px 18px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 18 }}>
              {['場景拆解', '元素規劃', '動畫規劃', '時間分配'].map((item) => (
                <div key={item} style={{ display: 'grid', justifyItems: 'center', gap: 8 }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      background: 'rgba(124,58,237,0.12)',
                      color: palette.accentSoft,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      fontWeight: 900,
                    }}
                  >
                    {item[0]}
                  </div>
                  <div style={{ fontSize: 15, lineHeight: 1.3, color: palette.ink, textAlign: 'center', fontWeight: 700 }}>{item}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 20, lineHeight: 1.55, color: palette.textSoft }}>
              AI 會先把需求切成場景，再決定畫面元素、動畫節奏與每段停留時間。
            </div>
          </div>
        </Panel>

        <Panel style={{ padding: '24px 20px', minHeight: 400 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: palette.green, marginBottom: 18 }}>DOM-Based System</div>
          <div
            style={{
              borderRadius: 24,
              background: '#0f172a',
              color: '#dbeafe',
              padding: '20px',
              fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, monospace',
              fontSize: 16,
              lineHeight: 1.65,
            }}
          >
            <div style={{ color: '#67e8f9' }}>&lt;div className="scene"&gt;</div>
            <div style={{ paddingLeft: 16, color: '#c4b5fd' }}>&lt;Title enter="fade-up" /&gt;</div>
            <div style={{ paddingLeft: 16, color: '#86efac' }}>&lt;Caption sync="voice" /&gt;</div>
            <div style={{ paddingLeft: 16, color: '#fde68a' }}>&lt;div className="card"&gt;&lt;/div&gt;</div>
            <div style={{ color: '#67e8f9' }}>&lt;/div&gt;</div>
          </div>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 18 }}>
            {[
              ['HTML', '#f97316'],
              ['CSS', '#2563eb'],
              ['GSAP', '#16a34a'],
            ].map(([label, color]) => (
              <div key={label} style={{ display: 'grid', justifyItems: 'center', gap: 6 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: color,
                    color: '#fff',
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: 14, color: palette.textMuted, fontWeight: 700 }}>{label}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel style={{ padding: '24px 20px', minHeight: 400 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#16a34a', marginBottom: 18, textAlign: 'center' }}>GSAP</div>
          <div style={{ position: 'relative', height: 250 }}>
            <div style={{ position: 'absolute', left: 50, top: 10, bottom: 0, width: 2, background: '#ef4444' }} />
            <div style={{ position: 'absolute', left: 62, right: 0, top: 0, display: 'flex', justifyContent: 'space-between', fontSize: 14, color: palette.textMuted }}>
              {['0s', '1s', '2s', '3s', '4s'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {[
              ['標題淡入', '#8b5cf6', 34, 0, 42],
              ['畫面滑入', '#38bdf8', 86, 34, 84],
              ['卡片出現', '#4ade80', 138, 92, 56],
              ['字幕出現', '#f59e0b', 190, 134, 52],
            ].map(([label, color, top, left, width]) => (
              <div key={label} style={{ position: 'absolute', top: Number(top), left: 0, right: 0 }}>
                <div style={{ position: 'absolute', left: 0, width: 46, fontSize: 14, color: palette.ink, fontWeight: 700 }}>{label}</div>
                <div
                  style={{
                    position: 'absolute',
                    left: 62 + Number(left),
                    width: Number(width),
                    height: 20,
                    borderRadius: 8,
                    background: color,
                  }}
                />
              </div>
            ))}
          </div>
        </Panel>

        <Panel style={{ padding: '24px 18px', minHeight: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#2563eb', marginBottom: 18 }}>FFmpeg 輸出影片</div>
          <div
            style={{
              width: '100%',
              flex: 1,
              borderRadius: 28,
              background: 'linear-gradient(180deg, #6b7280, #4b5563)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 112,
                height: 202,
                borderRadius: 34,
                background: 'linear-gradient(180deg, #111827, #1f2937)',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 48 }}>▶</div>
            </div>
            <div style={{ position: 'absolute', left: 16, right: 16, bottom: 22, height: 8, borderRadius: 999, background: 'rgba(255,255,255,0.72)' }}>
              <div style={{ width: '72%', height: '100%', borderRadius: 999, background: '#fff' }} />
            </div>
          </div>
          <div style={{ marginTop: 16, fontSize: 18, lineHeight: 1.45, color: palette.textSoft, textAlign: 'center', fontWeight: 700 }}>
            把 DOM 畫面逐格渲染，再交給 FFmpeg 合成成影片檔
          </div>
        </Panel>
      </div>

      <Panel
        style={{
          padding: '16px 18px',
          display: 'grid',
          gridTemplateColumns: '180px repeat(4, 1fr)',
          gap: 12,
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 900, color: palette.accent, textAlign: 'center' }}>技術核心</div>
        {[
          'HTML 控制結構：畫面本質是 DOM 結構，可拆解、可重組',
          'CSS 負責樣式：字體、配色、卡片與版面都由樣式系統控制',
          'GSAP 控制動畫：用時間軸精準安排進場、轉場與節奏',
          'FFmpeg 輸出影片：把畫面渲染後合成成影片檔案',
        ].map((item) => (
          <div
            key={item}
            style={{
              padding: '13px 14px',
              borderRadius: 20,
              background: '#fff',
              border: `1px solid ${palette.line}`,
              fontSize: 17,
              lineHeight: 1.42,
              color: palette.textSoft,
              fontWeight: 700,
            }}
          >
            {item}
          </div>
        ))}
      </Panel>
    </div>
  </div>
);

const PipelineCard = ({
  index,
  title,
  desc,
  color,
}: {
  index: string;
  title: string;
  desc: string;
  color: string;
}) => {
  const icon = (() => {
    const common = {
      width: 124,
      height: 124,
      viewBox: '0 0 110 110',
      fill: 'none',
      stroke: color,
      strokeWidth: 3.4,
      strokeLinecap: 'round' as const,
      strokeLinejoin: 'round' as const,
    };

    switch (index) {
      case '1':
        return (
          <svg {...common}>
            <rect x="18" y="20" width="74" height="52" rx="12" opacity="0.18" fill={color} stroke="none" />
            <path d="M28 34h24" />
            <path d="M28 46h18" />
            <circle cx="70" cy="42" r="11" />
            <path d="M78 50l12 12" />
            <rect x="26" y="80" width="58" height="12" rx="6" />
            <circle cx="38" cy="86" r="2" fill={color} stroke="none" />
            <circle cx="48" cy="86" r="2" fill={color} stroke="none" />
          </svg>
        );
      case '2':
        return (
          <svg {...common}>
            <rect x="16" y="16" width="78" height="58" rx="12" />
            <rect x="24" y="24" width="24" height="16" rx="4" opacity="0.18" fill={color} stroke="none" />
            <rect x="54" y="24" width="32" height="16" rx="4" opacity="0.18" fill={color} stroke="none" />
            <path d="M24 50h62" />
            <path d="M24 60h26" />
            <path d="M58 60h28" />
            <path d="M24 86h62" />
            <circle cx="32" cy="86" r="3" fill={color} stroke="none" />
            <circle cx="78" cy="86" r="3" fill={color} stroke="none" />
          </svg>
        );
      case '3':
        return (
          <svg {...common}>
            <path d="M24 18h42l18 18v56H24z" />
            <path d="M66 18v18h18" />
            <path d="M36 46h36" />
            <path d="M36 58h24" />
            <path d="M36 70h30" />
            <path d="M36 82h18" />
            <circle cx="76" cy="74" r="10" opacity="0.18" fill={color} stroke="none" />
            <path d="M72 74l3 3 7-8" />
          </svg>
        );
      case '4':
        return (
          <svg {...common}>
            <rect x="14" y="18" width="34" height="22" rx="6" />
            <rect x="62" y="18" width="34" height="22" rx="6" />
            <rect x="14" y="54" width="34" height="22" rx="6" />
            <rect x="62" y="54" width="34" height="22" rx="6" />
            <rect x="38" y="84" width="34" height="10" rx="5" opacity="0.18" fill={color} stroke="none" />
            <path d="M48 29h14" />
            <path d="M31 40v14" />
            <path d="M79 40v14" />
            <path d="M48 65h14" />
            <circle cx="55" cy="84" r="16" opacity="0.08" fill={color} stroke="none" />
          </svg>
        );
      case '5':
        return (
          <svg {...common}>
            <rect x="16" y="22" width="78" height="50" rx="12" />
            <path d="M26 34h20" />
            <path d="M26 46h32" />
            <path d="M26 58h24" />
            <path d="M68 36l12 10-12 10" />
            <path d="M58 46h22" />
            <rect x="24" y="82" width="62" height="10" rx="5" opacity="0.18" fill={color} stroke="none" />
          </svg>
        );
      case '6':
        return (
          <svg {...common}>
            <rect x="18" y="18" width="24" height="42" rx="12" />
            <path d="M14 48a16 16 0 0 0 32 0" />
            <path d="M30 64v12" />
            <path d="M22 82h16" />
            <rect x="54" y="24" width="34" height="20" rx="6" />
            <path d="M58 54h30" />
            <path d="M58 66h24" />
            <path d="M58 78h18" />
            <circle cx="82" cy="34" r="16" opacity="0.10" fill={color} stroke="none" />
          </svg>
        );
      default:
        return (
          <svg {...common}>
            <rect x="16" y="18" width="78" height="48" rx="12" />
            <path d="M28 52l14-14 10 10 20-20" />
            <circle cx="28" cy="52" r="3" fill={color} stroke="none" />
            <circle cx="42" cy="38" r="3" fill={color} stroke="none" />
            <circle cx="52" cy="48" r="3" fill={color} stroke="none" />
            <circle cx="72" cy="28" r="3" fill={color} stroke="none" />
            <rect x="24" y="78" width="62" height="12" rx="6" opacity="0.18" fill={color} stroke="none" />
          </svg>
        );
    }
  })();

  return (
  <Panel
    className="hf-rise"
    style={{
      padding: '20px 14px 24px',
      minHeight: 560,
      background: 'rgba(255,255,255,0.92)',
      border: `1px solid ${palette.lineStrong}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
    }}
    >
      <div style={{ display: 'grid', justifyItems: 'center', gap: 14 }}>
      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: '50%',
          background: color,
          color: '#fff',
          fontSize: 22,
          fontWeight: 900,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {index}
      </div>
      <div style={{ fontSize: 28, fontWeight: 900, color: palette.ink, letterSpacing: '-0.03em', textAlign: 'center', lineHeight: 1.15 }}>{title}</div>
    </div>
    <div style={{ fontSize: 19, lineHeight: 1.65, color: palette.textSoft, fontWeight: 600, textAlign: 'center' }}>{desc}</div>
    <div
      style={{
        marginTop: 'auto',
        minHeight: 148,
        borderRadius: 24,
        background: `radial-gradient(circle at top, ${color}22, transparent 48%), linear-gradient(180deg, ${color}12, ${color}06)`,
        boxShadow: `inset 0 0 0 1px ${color}22`,
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          opacity: 0.28,
        }}
      />
      {icon}
    </div>
  </Panel>
  );
};

const SevenStepFlow: Page = () => (
  <div style={fill}>
    <Styles />
    <Background />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '52px 34px 68px',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gap: 18,
      }}
    >
      <div>
        <Eyebrow>Page 3 / 工作流程</Eyebrow>
        <h2
          style={{
            margin: '10px 0 12px',
            fontFamily: 'var(--osd-font-display)',
            fontSize: 84,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontWeight: 900,
          }}
        >
          工作 7 步流程
        </h2>
        <p style={{ margin: 0, fontSize: 28, lineHeight: 1.5, color: palette.textSoft, maxWidth: 1340 }}>
          從參考網頁開始，把結構抽成 DOM，整理腳本與分鏡場景，再交給動畫、旁白、字幕與渲染流程完成整支影片。
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
          gap: 14,
          alignItems: 'stretch',
        }}
      >
        <PipelineCard index="1" title="爬蟲網頁" desc="先抓參考頁面或既有內容，拿到可以分析的畫面來源與文案素材。" color="#2563eb" />
        <PipelineCard index="2" title="提取 DOM 結構" desc="把網頁內容拆成標題、段落、卡片、圖片區塊，轉成可編排的 DOM base system。" color="#4f46e5" />
        <PipelineCard index="3" title="寫腳本" desc="根據主題、觀眾與影片長度，整理成口播節奏、段落重點與敘事順序。" color="#7c3aed" />
        <PipelineCard index="4" title="安排分鏡場景" desc="把腳本轉成每一幕的畫面安排，決定哪些卡片先出現、哪些內容後補。" color="#db2777" />
        <PipelineCard index="5" title="生成動畫 HTML" desc="用 HTML 描述結構，CSS 負責樣式，再讓 GSAP 接手每個元素的時間軸與轉場。" color="#16a34a" />
        <PipelineCard index="6" title="生成配音 / 字幕" desc="依照腳本生成旁白與字幕，再把文字時間點對齊到對應的畫面節奏。" color="#f59e0b" />
        <PipelineCard index="7" title="渲染影片" desc="把畫面、動畫、音訊與字幕整合後輸出，最後由 FFmpeg 合成成可交付的影片檔。" color="#0ea5e9" />
      </div>
    </div>
  </div>
);

const UseCaseTag = ({
  kind,
  label,
}: {
  kind: 'good' | 'bad';
  label: string;
}) => (
  <div
    style={{
      padding: '18px 22px',
      borderRadius: 22,
      background: kind === 'good' ? 'rgba(34,197,94,0.10)' : 'rgba(239,68,68,0.08)',
      border: `1px solid ${kind === 'good' ? 'rgba(34,197,94,0.18)' : 'rgba(239,68,68,0.16)'}`,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontSize: 28,
      fontWeight: 800,
      color: palette.ink,
    }}
  >
    <span style={{ fontSize: 30 }}>{kind === 'good' ? '✅' : '❌'}</span>
    <span>{label}</span>
  </div>
);

const UseCases: Page = () => (
  <div style={fill}>
    <Styles />
    <Background />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '66px 82px 72px',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gap: 28,
      }}
    >
      <div>
        <Eyebrow>Page 5 / 適合用途</Eyebrow>
        <h2
          style={{
            margin: '12px 0 14px',
            fontFamily: 'var(--osd-font-display)',
            fontSize: 92,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontWeight: 900,
          }}
        >
          Hyperframes 適合做什麼？
        </h2>
        <p style={{ margin: 0, fontSize: 32, lineHeight: 1.5, color: palette.textSoft, maxWidth: 1280 }}>
          它特別擅長 3 到 5 分鐘的短片動畫，但不適合拿來硬做 10 分鐘以上的長片內容。
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <Panel
          style={{
            padding: '30px 30px 34px',
            background: 'rgba(255,255,255,0.92)',
            border: '1px solid rgba(34,197,94,0.16)',
            display: 'grid',
            gridTemplateRows: 'auto auto 1fr',
            gap: 22,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                background: 'rgba(34,197,94,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 34,
              }}
            >
              ✅
            </div>
            <div>
              <div style={{ fontSize: 34, fontWeight: 900, color: '#15803d' }}>特別擅長</div>
              <div style={{ fontSize: 22, color: palette.textMuted, fontWeight: 700 }}>3–5 分鐘短片動畫</div>
            </div>
          </div>

          <div style={{ fontSize: 24, lineHeight: 1.55, color: palette.textSoft, fontWeight: 600 }}>
            適合資訊密度高、需要結構清楚、反覆微調文案與畫面的內容類型。
          </div>

          <div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
            {['教學短片', 'SaaS 介紹', '流程說明', '簡報動畫', '數據動畫'].map((item) => (
              <UseCaseTag key={item} kind="good" label={item} />
            ))}
          </div>
        </Panel>

        <Panel
          style={{
            padding: '30px 30px 34px',
            background: 'rgba(255,255,255,0.92)',
            border: '1px solid rgba(239,68,68,0.14)',
            display: 'grid',
            gridTemplateRows: 'auto auto 1fr',
            gap: 22,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                background: 'rgba(239,68,68,0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 34,
              }}
            >
              ❌
            </div>
            <div>
              <div style={{ fontSize: 34, fontWeight: 900, color: '#b91c1c' }}>不擅長</div>
              <div style={{ fontSize: 22, color: palette.textMuted, fontWeight: 700 }}>10 分鐘以上長片</div>
            </div>
          </div>

          <div style={{ fontSize: 24, lineHeight: 1.55, color: palette.textSoft, fontWeight: 600, whiteSpace: 'nowrap' }}>
            不適合重度真人素材、情緒剪輯與長時間敘事，做起來成本高，維護難度高。
          </div>

          <div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
            {['電影', 'Vlog', '旅遊影片', '真人剪輯', '深度教學'].map((item) => (
              <UseCaseTag key={item} kind="bad" label={item} />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  </div>
);

const DemoShowcase: Page = () => (
  <div style={fill}>
    <Styles />
    <Background />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '42px 74px 88px',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gap: 16,
      }}
    >
      <div>
        <Eyebrow>Page 4 / 成品展示</Eyebrow>
        <h2
          style={{
            margin: '8px 0 10px',
            fontFamily: 'var(--osd-font-display)',
            fontSize: 76,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontWeight: 900,
          }}
        >
          實際做出來的動畫短片
        </h2>
        <p style={{ margin: 0, fontSize: 26, lineHeight: 1.42, color: palette.textSoft, maxWidth: 1100 }}>
          先讓大家直接看成品。這支短片示範的是：當畫面結構清楚、節奏明確時，Hyperframes 可以很快把內容做成可看的影片。
        </p>
      </div>

      <Panel
        style={{
          padding: '22px 22px 18px',
          background: 'rgba(255,255,255,0.88)',
          border: `2px dashed ${palette.lineStrong}`,
          display: 'grid',
          gridTemplateRows: 'auto auto auto',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: palette.accent }}>成品播放示範</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: palette.textMuted }}>以實際完成的動畫短片作為展示</div>
        </div>

        <div style={{ padding: '4px 20px 0' }}>
          <div
            style={{
              minHeight: 410,
              maxWidth: 1180,
              margin: '0 auto',
              borderRadius: 34,
              background: 'linear-gradient(180deg, #111827, #1f2937)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 26px 48px rgba(15,23,42,0.16)',
            }}
          >
            <video
              src={demoShortVideo}
              autoPlay
              muted
              loop
              controls
              playsInline
              preload="auto"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                background: '#0f172a',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 18,
                top: 18,
                padding: '8px 12px',
                borderRadius: 999,
                background: 'rgba(15,23,42,0.60)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Demo Short
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', padding: '0 20px' }}>
          {['這是實際輸出的短片', '重點看節奏、排版與動畫語言', '先看成品，再回頭拆解流程'].map((item) => (
            <div
              key={item}
              style={{
                padding: '8px 12px',
                borderRadius: 999,
                background: '#fff',
                border: `1px solid ${palette.line}`,
                fontSize: 16,
                color: palette.textSoft,
                fontWeight: 700,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </Panel>
    </div>
  </div>
);

const ReplaceCapCut: Page = () => (
  <div style={fill}>
    <Styles />
    <Background />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '88px 94px 76px',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gap: 26,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: 1380,
        }}
      >
        <Eyebrow style={{ marginBottom: 22 }}>關鍵問題</Eyebrow>
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 128,
            lineHeight: 1.02,
            letterSpacing: '-0.05em',
            fontWeight: 900,
            color: palette.ink,
          }}
        >
          Hyperframes
          <br />
          可以取代剪映嗎？
        </h2>
      </div>

      <Panel
        style={{
          alignSelf: 'end',
          padding: '24px 28px',
          background: 'rgba(255,255,255,0.90)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{ fontSize: 28, color: palette.accent, fontWeight: 900 }}>短答案</div>
        <div style={{ fontSize: 24, lineHeight: 1.5, color: palette.textSoft, fontWeight: 700 }}>
          不能全面取代，但可以吃掉一大塊原本要在剪映裡反覆重做的工作。
        </div>
      </Panel>
    </div>
  </div>
);

const ReplaceCapCutAnswer: Page = () => (
  <div style={fill}>
    <Styles />
    <Background />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '88px 94px 76px',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gap: 26,
      }}
    >
      <div>
        <Eyebrow>重新分工</Eyebrow>
        <h2
          style={{
            margin: '12px 0 14px',
            fontFamily: 'var(--osd-font-display)',
            fontSize: 94,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontWeight: 900,
          }}
        >
          不是取代
          <br />
          而是重新分工
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px 1fr', gap: 24, alignItems: 'center' }}>
        <Panel
          style={{
            padding: '30px 30px 34px',
            background: 'rgba(255,255,255,0.92)',
            border: '1px solid rgba(34,197,94,0.16)',
            display: 'grid',
            gap: 18,
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 900, color: '#15803d' }}>可以取代一部分</div>
          <div style={{ fontSize: 24, lineHeight: 1.55, color: palette.textSoft, fontWeight: 700 }}>
            對於教學短片、SaaS 解說、流程型動畫、簡報式內容，Hyperframes 很可能比剪映更快，而且更好改。
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            {['需要反覆改文案', '畫面結構規則明確', '希望模板可重用', '想把 AI 協作放進流程'].map((item) => (
              <div key={item} style={{ fontSize: 22, color: palette.ink, fontWeight: 800 }}>
                ✅ {item}
              </div>
            ))}
          </div>
        </Panel>

        <div
          style={{
            display: 'grid',
            justifyItems: 'center',
            gap: 18,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'rgba(79,70,229,0.10)',
              border: `1px solid ${palette.lineStrong}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: palette.accent,
              fontSize: 42,
              fontWeight: 900,
            }}
          >
            分工
          </div>
          <div style={{ fontSize: 28, color: palette.textMuted, fontWeight: 800, textAlign: 'center', lineHeight: 1.4 }}>
            各做各最強的
          </div>
        </div>

        <Panel
          style={{
            padding: '30px 30px 34px',
            background: 'rgba(255,255,255,0.92)',
            border: '1px solid rgba(239,68,68,0.14)',
            display: 'grid',
            gap: 18,
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 900, color: '#b91c1c' }}>不能全部取代</div>
          <div style={{ fontSize: 24, lineHeight: 1.55, color: palette.textSoft, fontWeight: 700 }}>
            只要進入真人素材、長時間敘事、情緒剪輯或大量手工後期，剪映這類工具仍然更成熟、更直接。
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            {['長片節奏控制', '真人鏡頭挑選', 'Vlog 與旅遊剪輯', '複雜素材管理'].map((item) => (
              <div key={item} style={{ fontSize: 22, color: palette.ink, fontWeight: 800 }}>
                ❌ {item}
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel
        style={{
          padding: '18px 22px',
          background: 'rgba(255,255,255,0.88)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{ fontSize: 24, color: palette.accent, fontWeight: 900 }}>結論</div>
        <div style={{ fontSize: 24, lineHeight: 1.5, color: palette.textSoft, fontWeight: 700 }}>
          Hyperframes 不是拿來全面取代剪映，而是優先吃掉那些「規則明確、反覆修改、適合模板化」的影片工作。
        </div>
      </Panel>
    </div>
  </div>
);

const QuestionBridge: Page = () => (
  <div style={fill}>
    <Styles />
    <Background />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '110px 110px 94px',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        gap: 36,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: 1460,
        }}
      >
        <Eyebrow style={{ marginBottom: 28 }}>Page 8 / 真實卡點</Eyebrow>
        <div
          style={{
            fontSize: 30,
            fontWeight: 800,
            color: palette.accent,
            marginBottom: 20,
          }}
        >
          很多人在這裡就卡住了
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 118,
            lineHeight: 1.02,
            letterSpacing: '-0.05em',
            fontWeight: 900,
            color: palette.ink,
          }}
        >
          如果我根本不知道
          <br />
          怎麼把想拍的影片
          <br />
          用自然語言表達怎麼辦？
        </h2>
      </div>

      <Panel
        style={{
          padding: '22px 26px',
          background: 'rgba(255,255,255,0.9)',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: 'rgba(79,70,229,0.12)',
            color: palette.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 900,
            flexShrink: 0,
          }}
        >
          ?
        </div>
        <div style={{ fontSize: 28, lineHeight: 1.5, color: palette.textSoft, fontWeight: 700 }}>
          我自己經常參考的模板，以及把模糊想法轉成提示詞的方法，都會在後面直接整理出來。
        </div>
      </Panel>
    </div>
  </div>
);

const TemplatesAndPrompts: Page = () => (
  <div style={fill}>
    <Styles />
    <Background />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '52px 58px 68px',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gap: 18,
      }}
    >
      <div>
        <Eyebrow>Page 9 / 模板與提示詞</Eyebrow>
        <h2
          style={{
            margin: '10px 0 12px',
            fontFamily: 'var(--osd-font-display)',
            fontSize: 82,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontWeight: 900,
          }}
        >
          我經常參考的模板
        </h2>
        <p style={{ margin: 0, fontSize: 36, lineHeight: 1.45, color: palette.textSoft, maxWidth: 1500, fontWeight: 700 }}>
          參考來源：remotionlabs.com　作者：Youtuber-Debug土撥鼠
        </p>
      </div>

      <Panel
        style={{
          padding: '22px 22px 20px',
          background: 'rgba(255,255,255,0.90)',
          border: `2px dashed ${palette.lineStrong}`,
          display: 'grid',
          gridTemplateRows: '1fr auto',
          gap: 16,
        }}
      >
        <div
          style={{
            borderRadius: 28,
            overflow: 'hidden',
            border: `1px solid ${palette.line}`,
            background: '#fff',
            boxShadow: '0 22px 48px rgba(79,70,229,0.08)',
            minHeight: 700,
          }}
        >
          <video
            src={remotionlabShowcaseDemo}
            autoPlay
            muted
            loop
            controls
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              background: '#0f172a',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {['我常參考它的節奏', '會看版型與畫面語言', '也會直接錄成整段示範影片'].map((item) => (
            <div
              key={item}
              style={{
                padding: '10px 14px',
                borderRadius: 999,
                background: '#fff',
                border: `1px solid ${palette.line}`,
                fontSize: 18,
                color: palette.textSoft,
                fontWeight: 700,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </Panel>
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: '如何只靠跟 AI Agent 對話 就能拍完整支影片',
  createdAt: '2026-05-31T14:09:40.481Z',
};

// Legacy comparison page replaced by workflow page per request.
export default [Cover, Workflow, SevenStepFlow, DemoShowcase, UseCases, ReplaceCapCut, ReplaceCapCutAnswer, QuestionBridge, TemplatesAndPrompts] satisfies Page[];
