import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';
import chatgptLogo from './assets/chatgpt-logo.svg';
import coachClaude from './assets/coach-claude.png';
import coachOpenclaw from './assets/coach-openclaw.png';
import coachThreads from './assets/coach-threads.png';
import coachWordpress from './assets/coach-wordpress.png';
import faceDistortion2 from './assets/face-distortion-2.png';
import hyperframesTemplateShowcase from './assets/hyperframes-template-showcase.mp4';
import hyperframesTemplateShowcasePoster from './assets/hyperframes-template-showcase.png';
import lineGainfriendsQr from './assets/line-gainfriends-qr.png';
import photoroomBody from './assets/photoroom-body.png';
import photoroomName from './assets/photoroom-name.png';
import realSpeakerBody from './assets/real-speaker-body.jpg';
import remotionAiAdPoster from './assets/remotion-ai-ad-poster.png';
import remotionGithubRepo from './assets/remotion-github-repo.png';
import remotionReelsPage24Cover from './assets/remotion-reels-page-24-cover.png';
import remotionStudioPreview from './assets/remotion-studio-preview-reel.png';
import shortVideoCoverExample from './assets/short-video-cover-yunlin-1.png';
import removePersonExample from './assets/social-slide-1-replaced.png';
import socialSlide1Real from './assets/social-slide-1-replaced.png';
import socialSlide2 from './assets/social-slide-2.png';
import socialSlide3 from './assets/social-slide-3.png';
import socialSlide4 from './assets/social-slide-4.png';
import speakerAlex from './assets/speaker-alex.png';
import talkMixerbox from './assets/talk-mixerbox.png';
import talkTaia from './assets/talk-taia.png';
import workshopPoster from './assets/workshop-poster.png';

export const meta: SlideMeta = {
  title: '2026/07/03 台中公益講座',
  createdAt: '2026-06-27T10:06:36.946Z',
};

export const design: DesignSystem = {
  palette: { bg: '#f7f2ea', text: '#1d1b18', accent: '#0c7c59' },
  fonts: {
    display: '"Noto Serif TC", "Songti TC", "PingFang TC", "Microsoft JhengHei", serif',
    body: '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
  },
  typeScale: { hero: 176, body: 34 },
  radius: 28,
};

const palette = {
  bg: '#f7f2ea',
  surface: '#fffcf7',
  text: '#1d1b18',
  muted: '#6b6258',
  line: '#dfd1bf',
  accent: '#0c7c59',
  accentSoft: '#dcefe8',
  gold: '#d28b28',
} as const;

const frame: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  background: palette.bg,
  color: palette.text,
  fontFamily: 'var(--osd-font-body)',
};

const shell: CSSProperties = {
  position: 'absolute',
  inset: 54,
  border: `1px solid ${palette.line}`,
  borderRadius: 40,
  background: 'rgba(255, 252, 247, 0.76)',
  boxShadow: '0 30px 80px rgba(61, 39, 15, 0.08)',
};

const contentPad: CSSProperties = {
  position: 'absolute',
  inset: 0,
  padding: '120px 140px',
  boxSizing: 'border-box',
};

const Label = ({ children, color = palette.accent }: { children: ReactNode; color?: string }) => (
  <div
    style={{
      fontSize: 24,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color,
    }}
  >
    {children}
  </div>
);

const PageTitle = ({ children }: { children: ReactNode }) => (
  <h2
    style={{
      margin: 0,
      fontFamily: 'var(--osd-font-display)',
      fontSize: 88,
      lineHeight: 1.02,
      letterSpacing: '-0.04em',
      fontWeight: 700,
    }}
  >
    {children}
  </h2>
);

const Subline = ({ children }: { children: ReactNode }) => (
  <p
    style={{
      margin: '28px 0 0',
      fontSize: 34,
      lineHeight: 1.55,
      color: palette.muted,
      maxWidth: 1120,
    }}
  >
    {children}
  </p>
);

const CoachCard = ({
  client,
  summary,
  photo,
  photoAlt,
  photoBg = '#111111',
}: {
  client: string;
  summary: string;
  photo: string;
  photoAlt: string;
  photoBg?: string;
}) => (
  <div
    style={{
      borderRadius: 20,
      overflow: 'hidden',
      background: palette.surface,
      border: `1px solid ${palette.line}`,
      height: '100%',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        height: 108,
        background: photoBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        boxSizing: 'border-box',
      }}
    >
      <img
        src={photo}
        alt={photoAlt}
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
      />
    </div>
    <div style={{ padding: '20px 22px 22px' }}>
      <div style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.25 }}>{client}</div>
      <div style={{ marginTop: 10, fontSize: 24, lineHeight: 1.45, color: palette.muted }}>
        {summary}
      </div>
    </div>
  </div>
);

const TalkCard = ({
  org,
  topic,
  detail,
  photo,
  photoAlt,
}: {
  org: string;
  topic: string;
  detail: string;
  photo: string;
  photoAlt: string;
}) => (
  <div
    style={{
      borderRadius: 24,
      overflow: 'hidden',
      background: palette.surface,
      border: `1px solid ${palette.line}`,
    }}
  >
    <img
      src={photo}
      alt={photoAlt}
      style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }}
    />
    <div style={{ padding: 24 }}>
      <div style={{ fontSize: 20, letterSpacing: '0.16em', color: palette.accent }}>{org}</div>
      <div style={{ marginTop: 12, fontSize: 32, fontWeight: 600, lineHeight: 1.2 }}>{topic}</div>
      <div style={{ marginTop: 10, fontSize: 26, lineHeight: 1.45, color: palette.muted }}>
        {detail}
      </div>
    </div>
  </div>
);

const IntroPoint = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontSize: 32,
      lineHeight: 1.5,
      paddingLeft: 28,
      borderLeft: `4px solid ${palette.accent}`,
    }}
  >
    {children}
  </div>
);

const DEMO_PROMPT = `請以這張圖作為素材，改寫成 4 張 IG 圖。

第一張：擷取王士麟講師、「手把手一小時帶你學會」、「免費公益講座」、主辦單位、指導單位。

中間：活動地點、教學內容。

最後一張：報名 QR code；留言「公益講座」，我傳報名連結給你。`;

const PromptOutline = ({ num, title, body }: { num: string; title: string; body: string }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '56px 1fr',
      gap: 16,
      alignItems: 'start',
    }}
  >
    <div style={{ fontSize: 24, color: palette.accent, fontWeight: 600 }}>{num}</div>
    <div>
      <div style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.3 }}>{title}</div>
      <div style={{ marginTop: 6, fontSize: 24, lineHeight: 1.45, color: palette.muted }}>
        {body}
      </div>
    </div>
  </div>
);

const carouselKeyframes = `
@keyframes igCardDrift {
  0%, 18% { transform: translate3d(0, 0, 0) rotate(var(--r)) scale(1); box-shadow: 0 24px 48px rgba(31, 24, 18, 0.16); }
  24%, 42% { transform: translate3d(-12px, -18px, 0) rotate(calc(var(--r) - 1.5deg)) scale(1.05); box-shadow: 0 34px 64px rgba(31, 24, 18, 0.22); }
  48%, 100% { transform: translate3d(0, 0, 0) rotate(var(--r)) scale(1); box-shadow: 0 24px 48px rgba(31, 24, 18, 0.16); }
}
@keyframes igDotPulse {
  0%, 18% { opacity: 0.35; transform: scale(1); }
  24%, 42% { opacity: 1; transform: scale(1.18); }
  48%, 100% { opacity: 0.35; transform: scale(1); }
}
@keyframes igSwipeTrack {
  0%, 16% { transform: translateX(0%); }
  22%, 38% { transform: translateX(-100%); }
  44%, 60% { transform: translateX(-200%); }
  66%, 82% { transform: translateX(-300%); }
  100% { transform: translateX(-300%); }
}
@keyframes igTrackSweep {
  0%, 12% { transform: translateX(0); }
  24%, 36% { transform: translateX(46px); }
  48%, 60% { transform: translateX(92px); }
  72%, 84% { transform: translateX(138px); }
  100% { transform: translateX(0); }
}
`;

const exportCaptureStyles = `
  .os-pptx-capture .material-carousel-live,
  [data-osd-freeze-motion] .material-carousel-live,
  .os-pptx-capture .canva-video-live,
  [data-osd-freeze-motion] .canva-video-live,
  .os-pptx-capture .remotion-ai-ad-video-live,
  [data-osd-freeze-motion] .remotion-ai-ad-video-live,
  .os-pptx-capture .hyperframes-video-live,
  [data-osd-freeze-motion] .hyperframes-video-live {
    display: none !important;
  }
  .os-pptx-capture .material-carousel-static,
  [data-osd-freeze-motion] .material-carousel-static {
    display: grid !important;
  }
  .os-pptx-capture .canva-video-static,
  [data-osd-freeze-motion] .canva-video-static,
  .os-pptx-capture .remotion-ai-ad-video-static,
  [data-osd-freeze-motion] .remotion-ai-ad-video-static,
  .os-pptx-capture .hyperframes-video-static,
  [data-osd-freeze-motion] .hyperframes-video-static {
    display: block !important;
  }
`;

const noCaptionsTrack = 'data:text/vtt;charset=utf-8,WEBVTT%0A%0A';

const igCarouselSlides = [
  {
    index: '1/4',
    image: socialSlide1Real,
    imageAlt: 'IG 輪播第一張',
    objectPosition: 'center center',
  },
  {
    index: '2/4',
    image: socialSlide2,
    imageAlt: 'IG 輪播第二張',
    objectPosition: 'center center',
  },
  {
    index: '3/4',
    image: socialSlide3,
    imageAlt: 'IG 輪播第三張',
    objectPosition: 'center center',
  },
  {
    index: '4/4',
    image: socialSlide4,
    imageAlt: 'IG 輪播第四張',
    objectPosition: 'center center',
  },
] as const;

const CarouselFrame = ({
  index,
  image,
  imageAlt,
  objectPosition = 'center top',
}: {
  index: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
}) => (
  <div
    style={{
      minWidth: '100%',
      height: '100%',
      position: 'relative',
      flexShrink: 0,
      overflow: 'hidden',
      background: '#fffdf9',
    }}
  >
    <img
      src={image}
      alt={imageAlt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition,
        display: 'block',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 16,
        right: 16,
        padding: '8px 12px',
        borderRadius: 999,
        background: 'rgba(24, 21, 17, 0.72)',
        color: '#fffdf9',
        fontSize: 18,
        letterSpacing: '0.14em',
        backdropFilter: 'blur(8px)',
      }}
    >
      {index}
    </div>
  </div>
);

const Cover: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }} />

      <div style={{ maxWidth: 1260 }}>
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 'var(--osd-size-hero)',
            lineHeight: '0.8',
            letterSpacing: '-0.045em',
            fontWeight: 700,
          }}
        >
          AI製作社群貼文
        </h1>
        <p
          style={{
            margin: '38px 0 0',
            fontSize: 42,
            lineHeight: 1.5,
            color: palette.muted,
            maxWidth: 1120,
          }}
        >
          現場帶你實作用 AI 做出社群圖文，解決跑版、失真、不會使用設計工具的問題。
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 36,
          alignItems: 'end',
        }}
      >
        <div
          style={{
            padding: 34,
            borderRadius: 28,
            background: palette.surface,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: palette.gold,
            }}
          >
            AI 工作流
          </div>
          <div style={{ marginTop: 18, fontSize: 34, lineHeight: 1.55 }}>
            從生成、修正到 Canva 精修，現場做出可直接發布的圖文版本。
          </div>
        </div>

        <div
          style={{
            justifySelf: 'end',
            width: 360,
            height: 360,
            borderRadius: '50%',
            border: `1px solid ${palette.line}`,
            background:
              'radial-gradient(circle at 35% 35%, rgba(210,139,40,0.24), transparent 42%), radial-gradient(circle at 68% 62%, rgba(12,124,89,0.22), transparent 38%), #fffaf2',
          }}
        />
      </div>
    </div>
  </div>
);

const TeachItem = ({ title, detail }: { title: string; detail: string }) => (
  <div
    style={{
      padding: '18px 22px',
      borderRadius: 18,
      background: palette.surface,
      border: `1px solid ${palette.line}`,
    }}
  >
    <div style={{ fontSize: 26, fontWeight: 600, color: palette.accent }}>{title}</div>
    <div style={{ marginTop: 8, fontSize: 24, lineHeight: 1.45, color: palette.muted }}>
      {detail}
    </div>
  </div>
);

const SpeakerIntro: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 28,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.75fr',
          gap: 48,
          alignItems: 'center',
          flex: 1,
        }}
      >
        <div>
          <Label>Speaker</Label>
          <div style={{ marginTop: 20 }}>
            <PageTitle>王士麟 Alex</PageTitle>
          </div>
          <Subline>TAIA 台灣人工智慧協會講師 · 新北市</Subline>
          <div style={{ marginTop: 32, display: 'grid', gap: 20 }}>
            <IntroPoint>全職接案軟體工程師，LINE AI客服、LIFF網頁、LINE Message API</IntroPoint>
            <IntroPoint>
              20 萬人小龍蝦FB社團版主，以 AI 同步經營 YouTube、FB、IG、Threads。
            </IntroPoint>
          </div>
        </div>
        <div
          style={{
            justifySelf: 'end',
            width: '100%',
            maxWidth: 400,
            height: 500,
            borderRadius: 28,
            overflow: 'hidden',
            border: `1px solid ${palette.line}`,
            background: palette.surface,
            boxShadow: '0 24px 60px rgba(61, 39, 15, 0.1)',
          }}
        >
          <img
            src={speakerAlex}
            alt="王士麟 Alex"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </div>
      </div>
      <div>
        <div
          style={{ fontSize: 22, letterSpacing: '0.2em', color: palette.gold, marginBottom: 14 }}
        >
          過去教學內容
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          <TeachItem title="AI Agent" detail="安裝、環境建置、常用指令、救援" />
          <TeachItem title="社群自動化" detail="自動發文、留言、私訊、爬蟲" />
          <TeachItem title="對話式拍片" detail="剪輯、字幕、配音、封面、多平台上傳" />
        </div>
      </div>
    </div>
  </div>
);

const PublicTalks: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div style={contentPad}>
      <Label>講課經驗</Label>
      <div style={{ marginTop: 24 }}>
        <PageTitle>公眾演講</PageTitle>
      </div>
      <div
        style={{
          marginTop: 36,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
        }}
      >
        <TalkCard
          org="MixerBox"
          topic="OpenClaw 斷線自動恢復"
          detail="Tailscale 雙機互連、現場演示互相救援。"
          photo={talkMixerbox}
          photoAlt="王士麟於 MixerBox 分享雙機自癒系統"
        />
        <TalkCard
          org="TAIA 台灣人工智慧協會"
          topic="只靠對話一條龍完成拍片"
          detail="Hyperframes：剪輯、字幕、配音、封面、多平台上傳。"
          photo={talkTaia}
          photoAlt="王士麟於 TAIA 分享 Hyperframes 工作原理"
        />
      </div>
    </div>
  </div>
);

const PrivateCoaching: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div style={contentPad}>
      <Label>一對一私教</Label>
      <div style={{ marginTop: 24 }}>
        <PageTitle>私教經驗</PageTitle>
      </div>
      <div
        style={{
          marginTop: 32,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20,
        }}
      >
        <CoachCard
          client="WP 工程師"
          summary="Threads × WordPress 自動發文，流程整理成 Skills。"
          photo={coachWordpress}
          photoAlt="WordPress"
        />
        <CoachCard
          client="香港行銷公司"
          summary="Threads 輿情蒐集、腳本撰寫、GitHub 交付。"
          photo={coachThreads}
          photoAlt="Threads"
        />
        <CoachCard
          client="補教業"
          summary="Email、行事曆串 LINE，排程推送 AI 工作流。"
          photo={coachClaude}
          photoAlt="Claude Code"
          photoBg="#c15f3c"
        />
        <CoachCard
          client="精神科醫師"
          summary="OpenClaw 設定救援，修復模型與 JSON 格式。"
          photo={coachOpenclaw}
          photoAlt="OpenClaw"
          photoBg="#ff6b35"
        />
      </div>
    </div>
  </div>
);

const WhyChatGPT: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '1fr 320px',
        gap: 48,
        alignItems: 'center',
      }}
    >
      <div>
        <Label>Why ChatGPT</Label>
        <div
          style={{
            marginTop: 32,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 96,
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            maxWidth: 1200,
          }}
        >
          為什麼生圖用 ChatGPT，不用其他 AI 模型？
        </div>
      </div>
      <div
        style={{
          width: 280,
          height: 280,
          borderRadius: 48,
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(61, 39, 15, 0.12)',
          justifySelf: 'end',
        }}
      >
        <img
          src={chatgptLogo}
          alt="ChatGPT"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </div>
  </div>
);

const WhyChatGPTAnswer: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Label color={palette.gold}>Answer</Label>
      <div
        style={{
          marginTop: 32,
          fontFamily: 'var(--osd-font-display)',
          fontSize: 88,
          lineHeight: 1.12,
          letterSpacing: '-0.04em',
          maxWidth: 1500,
        }}
      >
        因為 GPT 的中文辨識能力最強，美術能力也不錯。
      </div>
    </div>
  </div>
);

const HowToOperate: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.92fr 1.08fr',
        gap: 40,
        alignItems: 'center',
      }}
    >
      <div>
        <div
          style={{
            fontSize: 24,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: palette.accent,
          }}
        >
          How To Operate
        </div>
        <div style={{ marginTop: 24 }}>
          <h2
            style={{
              margin: 0,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 88,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              fontWeight: 700,
            }}
          >
            如何操作？
          </h2>
        </div>
        <p
          style={{
            margin: '28px 0 0',
            fontSize: 34,
            lineHeight: 1.55,
            color: palette.muted,
            maxWidth: 1120,
          }}
        >
          今天用我自己做的活動宣傳貼文當例子，走一遍 ChatGPT → Canva → IG 輪播。
        </p>
      </div>

      <div
        style={{
          padding: 32,
          borderRadius: 28,
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          boxShadow: '0 24px 60px rgba(61, 39, 15, 0.06)',
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: '0.16em',
            color: palette.muted,
            marginBottom: 24,
          }}
        >
          流程示意
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 28px 1fr 28px 1fr 28px 1fr',
            gap: 0,
            alignItems: 'center',
          }}
        >
          {[
            {
              title: '簡報 / 素材',
              hint: '活動資訊、照片',
              body: (
                <div style={{ padding: '18px 16px', display: 'grid', gap: 8 }}>
                  {[0.9, 0.65, 0.75, 0.5].map((w) => (
                    <div
                      key={w}
                      style={{
                        height: 8,
                        width: `${w * 100}%`,
                        borderRadius: 999,
                        background: '#e8ddd0',
                      }}
                    />
                  ))}
                  <div
                    style={{
                      marginTop: 6,
                      height: 72,
                      borderRadius: 10,
                      background: 'linear-gradient(135deg, #efe4d4, #f7f2ea)',
                      border: `1px dashed ${palette.line}`,
                    }}
                  />
                </div>
              ),
            },
            {
              title: 'ChatGPT',
              hint: '文案 + 草稿',
              body: (
                <div
                  style={{
                    height: 140,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: palette.accentSoft,
                  }}
                >
                  <img src={chatgptLogo} alt="" style={{ width: 72, height: 72, opacity: 0.92 }} />
                </div>
              ),
            },
            {
              title: 'Canva',
              hint: '排版 + 加字',
              body: (
                <div style={{ padding: 16, background: '#faf8f5' }}>
                  <div
                    style={{
                      height: 108,
                      borderRadius: 10,
                      background: '#fff',
                      border: `1px solid ${palette.line}`,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 18,
                        background: 'linear-gradient(90deg, #7d2ae8, #b06cff)',
                        opacity: 0.85,
                      }}
                    />
                    <div style={{ padding: '28px 14px 12px', display: 'grid', gap: 7 }}>
                      <div
                        style={{
                          height: 7,
                          width: '70%',
                          borderRadius: 999,
                          background: '#ece6dc',
                        }}
                      />
                      <div
                        style={{
                          height: 7,
                          width: '45%',
                          borderRadius: 999,
                          background: '#ece6dc',
                        }}
                      />
                      <div
                        style={{
                          marginTop: 8,
                          height: 36,
                          borderRadius: 8,
                          background: palette.accentSoft,
                          border: `1px dashed ${palette.accent}`,
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: 'IG 輪播',
              hint: '4:5 貼文',
              body: (
                <div
                  style={{
                    height: 140,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {[28, 14, 0].map((offset, i) => (
                    <div
                      key={offset}
                      style={{
                        position: 'absolute',
                        width: 68,
                        aspectRatio: '4 / 5',
                        borderRadius: 12,
                        background: i === 2 ? '#fff' : '#f3ebe0',
                        border: `1px solid ${palette.line}`,
                        transform: `translateX(${offset - 14}px) rotate(${i === 0 ? -6 : i === 1 ? 3 : 0}deg)`,
                        boxShadow: i === 2 ? '0 12px 28px rgba(31, 24, 18, 0.12)' : 'none',
                        zIndex: i,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: 8,
                        gap: 5,
                      }}
                    >
                      <div
                        style={{
                          height: 4,
                          width: '80%',
                          borderRadius: 999,
                          background: '#e8ddd0',
                        }}
                      />
                      <div
                        style={{
                          height: 4,
                          width: '55%',
                          borderRadius: 999,
                          background: '#e8ddd0',
                        }}
                      />
                    </div>
                  ))}
                </div>
              ),
            },
          ].flatMap((step, index, items) => {
            const card = (
              <div key={step.title}>
                <div
                  style={{
                    borderRadius: 18,
                    overflow: 'hidden',
                    border: `1px solid ${palette.line}`,
                    background: '#fffaf2',
                  }}
                >
                  {step.body}
                </div>
                <div style={{ marginTop: 12, fontSize: 22, fontWeight: 600 }}>{step.title}</div>
                <div style={{ marginTop: 4, fontSize: 18, color: palette.muted }}>{step.hint}</div>
              </div>
            );
            if (index === items.length - 1) return [card];
            return [
              card,
              <div
                key={`arrow-${step.title}`}
                style={{
                  textAlign: 'center',
                  fontSize: 28,
                  color: palette.accent,
                  lineHeight: 1,
                }}
                aria-hidden
              >
                →
              </div>,
            ];
          })}
        </div>
      </div>
    </div>
  </div>
);

const MaterialExample: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div style={contentPad}>
      <style>{carouselKeyframes}</style>
      <style>{exportCaptureStyles}</style>
      <Label color={palette.gold}>Material Example</Label>
      <div style={{ marginTop: 20 }}>
        <PageTitle>實際舉例：把海報轉成IG貼文</PageTitle>
      </div>
      <p style={{ margin: '20px 0 0', fontSize: 30, lineHeight: 1.5, color: palette.muted }}>
        活動海報當素材 → 生出 4 張 IG 輪播，逐張拆開封面、資訊、場次與報名。
      </p>
      <div
        style={{
          marginTop: 36,
          display: 'grid',
          gridTemplateColumns: '1fr 72px 1fr',
          gap: 20,
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.16em',
              color: palette.muted,
              marginBottom: 12,
            }}
          >
            素材 · 活動海報
          </div>
          <div
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: `1px solid ${palette.line}`,
              background: palette.surface,
              height: 520,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={workshopPoster}
              alt="雲林 x 臺中地方創生 x AI 應用工作坊活動海報"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
        <div
          style={{
            fontSize: 48,
            color: palette.accent,
            textAlign: 'center',
            fontFamily: 'var(--osd-font-display)',
          }}
          aria-hidden
        >
          →
        </div>
        <div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.16em',
              color: palette.muted,
              marginBottom: 12,
            }}
          >
            產出 · 4 張 IG 輪播
          </div>
          <div
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: `1px solid ${palette.line}`,
              background: palette.surface,
              height: 520,
              position: 'relative',
            }}
          >
            <div
              className="material-carousel-static"
              style={{
                display: 'none',
                gridTemplateColumns: '1fr 1fr',
                gap: 14,
                padding: 14,
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              {igCarouselSlides.map((slide) => (
                <div
                  key={slide.index}
                  style={{
                    position: 'relative',
                    borderRadius: 16,
                    overflow: 'hidden',
                    border: `1px solid ${palette.line}`,
                    background: '#fffdf9',
                    minHeight: 0,
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: slide.objectPosition,
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      padding: '6px 10px',
                      borderRadius: 999,
                      background: 'rgba(24, 21, 17, 0.72)',
                      color: '#fffdf9',
                      fontSize: 16,
                      letterSpacing: '0.14em',
                    }}
                  >
                    {slide.index}
                  </div>
                </div>
              ))}
            </div>
            <div className="material-carousel-live" style={{ height: '100%' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  left: '50%',
                  width: 488,
                  height: 488,
                  transform: 'translateX(-50%)',
                  borderRadius: 26,
                  overflow: 'hidden',
                  border: `1px solid ${palette.line}`,
                  boxShadow: '0 24px 48px rgba(31, 24, 18, 0.14)',
                  background: '#f6ecdc',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    animation: 'igSwipeTrack 10s cubic-bezier(0.22, 1, 0.36, 1) infinite',
                  }}
                >
                  {igCarouselSlides.map((slide) => (
                    <CarouselFrame
                      key={slide.index}
                      index={slide.index}
                      image={slide.image}
                      imageAlt={slide.imageAlt}
                      objectPosition={slide.objectPosition}
                    />
                  ))}
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: 26,
                  right: 26,
                  bottom: 22,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: 18, letterSpacing: '0.16em', color: palette.muted }}>
                  CAROUSEL STORYBOARD
                </div>
                <div style={{ position: 'relative', display: 'flex', gap: 18 }}>
                  {[0, 1, 2, 3].map((item) => (
                    <span
                      key={item}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: item === 3 ? '#264b96' : palette.accent,
                        animation: `igDotPulse 10s ease-in-out ${item * 2.5}s infinite`,
                      }}
                    />
                  ))}
                  <span
                    style={{
                      position: 'absolute',
                      top: 1,
                      left: -1,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      border: `2px solid ${palette.text}`,
                      animation: 'igTrackSweep 10s cubic-bezier(0.22, 1, 0.36, 1) infinite',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DemoPrompt: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div style={contentPad}>
      <Label>Demo Prompt</Label>
      <div style={{ marginTop: 20 }}>
        <PageTitle>示範提示詞</PageTitle>
      </div>
      <p style={{ margin: '16px 0 0', fontSize: 28, lineHeight: 1.5, color: palette.muted }}>
        有素材時：貼上海報，一次講清楚 4 張 IG 各放什麼。
      </p>
      <div
        style={{
          marginTop: 32,
          display: 'grid',
          gridTemplateColumns: '0.72fr 1.28fr',
          gap: 28,
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            padding: 28,
            borderRadius: 24,
            background: palette.surface,
            border: `1px solid ${palette.line}`,
            display: 'grid',
            gap: 22,
            alignContent: 'start',
          }}
        >
          <PromptOutline
            num="1/4"
            title="封面"
            body="王士麟講師 · 手把手 · 免費公益講座 · 主辦 · 指導"
          />
          <PromptOutline num="2–3/4" title="資訊" body="地點 · 教學內容" />
          <PromptOutline num="4/4" title="行動" body="報名 QR · 留言「公益講座」換連結" />
        </div>
        <div
          style={{
            padding: 32,
            borderRadius: 24,
            background: palette.accentSoft,
            border: `1px solid ${palette.line}`,
            fontSize: 26,
            lineHeight: 1.65,
            whiteSpace: 'pre-wrap',
          }}
        >
          {DEMO_PROMPT}
        </div>
      </div>
    </div>
  </div>
);

const StepTwo: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 34,
        alignItems: 'center',
      }}
    >
      <div>
        <Label>Rarely One-Shot</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>通常不會一次就成功</PageTitle>
        </div>
        <Subline>真正的流程通常是先出第一版，發現裁切、尺寸、重點不對，再補提示詞繼續修。</Subline>
        <div
          style={{
            marginTop: 30,
            padding: 28,
            borderRadius: 24,
            background: palette.surface,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: '0.16em', color: palette.gold }}>常見狀況</div>
          <div style={{ marginTop: 16, fontSize: 30, lineHeight: 1.6 }}>
            前面只說要做 <strong>IG 圖片</strong>，沒有指定尺寸。
            <br />
            上傳後才發現畫面被切到，重要資訊跑出框外。
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gap: 20,
        }}
      >
        <div
          style={{
            padding: 26,
            borderRadius: 24,
            background: '#f8efe3',
            border: `1px solid ${palette.line}`,
          }}
        >
          <div style={{ fontSize: 20, letterSpacing: '0.16em', color: palette.muted }}>
            第一次提示詞
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 26,
              lineHeight: 1.65,
              whiteSpace: 'pre-wrap',
            }}
          >
            {`請幫我做 4 張 IG 圖片輪播，延續這張海報風格。`}
          </div>
        </div>

        <div
          style={{
            padding: 26,
            borderRadius: 24,
            background: palette.accentSoft,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div style={{ fontSize: 20, letterSpacing: '0.16em', color: palette.accent }}>
            補修提示詞
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 26,
              lineHeight: 1.65,
              whiteSpace: 'pre-wrap',
            }}
          >
            {`圖片尺寸改為 4:5，1080 × 1350。
這是最適合 IG 貼文、輪播圖文的比例，手機螢幕佔版面最大，文字也比較有空間。
請重新輸出 IG 輪播，避免文字和主體被裁切。`}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StepTwoTips: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Label>Draft, Review, Refine</Label>
      <div style={{ marginTop: 24 }}>
        <PageTitle>先出稿，再看問題，再補詞</PageTitle>
      </div>
      <div
        style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 28,
        }}
      >
        {[
          ['先出稿', '先讓 AI 給你第一版，不要一開始就追求完美。'],
          ['看問題', '上傳到實際版位，看有沒有裁切、字太小、比例不對。'],
          ['再補詞', '把尺寸、構圖、保留範圍講清楚，再叫它重跑。'],
        ].map(([title, body]) => (
          <div
            key={title}
            style={{
              padding: 36,
              borderRadius: 24,
              background: palette.surface,
              border: `1px solid ${palette.line}`,
            }}
          >
            <div style={{ fontSize: 36, fontWeight: 700, fontFamily: 'var(--osd-font-display)' }}>
              {title}
            </div>
            <div style={{ marginTop: 18, fontSize: 28, lineHeight: 1.55, color: palette.muted }}>
              {body}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StepThree: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.92fr 1.08fr',
        gap: 36,
        alignItems: 'center',
      }}
    >
      <div>
        <Label>Distorted Portraits</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>人物失真怎麼辦</PageTitle>
        </div>
        <Subline>
          AI 很常把手、臉、眼神、比例做壞。這時候不要硬修字，先判斷這張圖值不值得救。
        </Subline>
        <div
          style={{
            marginTop: 26,
            padding: '18px 22px',
            borderRadius: 22,
            background: '#f8efe3',
            border: `1px solid ${palette.line}`,
            fontSize: 24,
            lineHeight: 1.55,
          }}
        >
          這張範例的講師臉部已經有失真感，雖然整體海報氛圍成立，但人物可信度會先掉。
        </div>
        <div
          style={{
            marginTop: 18,
            padding: '18px 22px',
            borderRadius: 22,
            background: palette.accentSoft,
            border: `1px solid ${palette.line}`,
            fontSize: 24,
            lineHeight: 1.55,
          }}
        >
          最簡單的作法，是再給 AI 一次真實照片，請它依照真人長相重做，而不是一直修失真的假臉。
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 18,
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 0.62fr',
            gap: 18,
          }}
        >
          <div
            style={{
              borderRadius: 22,
              overflow: 'hidden',
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                padding: '16px 18px',
                fontSize: 20,
                letterSpacing: '0.16em',
                color: palette.gold,
                borderBottom: `1px solid ${palette.line}`,
              }}
            >
              失真範例
            </div>
            <img
              src={faceDistortion2}
              alt="AI 生成人物海報中講師臉部失真的範例"
              style={{
                width: '100%',
                height: 372,
                objectFit: 'contain',
                objectPosition: 'center center',
                background: '#efe4d4',
              }}
            />
          </div>

          <div
            style={{
              borderRadius: 22,
              overflow: 'hidden',
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                padding: '16px 18px',
                fontSize: 20,
                letterSpacing: '0.16em',
                color: palette.accent,
                borderBottom: `1px solid ${palette.line}`,
              }}
            >
              真實照片
            </div>
            <img
              src={realSpeakerBody}
              alt="講師真實半身白襯衫照片"
              style={{
                width: '100%',
                height: 372,
                objectFit: 'contain',
                objectPosition: 'center top',
                background: '#efe4d4',
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 18,
          }}
        >
          {[
            ['小問題可救', '只有手指、耳朵、衣角怪怪的，或構圖很好但局部失真。'],
            ['大問題重跑', '臉型走樣、人物氣質不對、姿勢扭曲，直接重生成比較快。'],
            ['補照片再試', '把真人半身照一起給 AI，要求依照本人五官與髮型重做。'],
            ['Canva 收尾', '人像定稿後，再進 Canva 補標題、單位、時間與 QR code。'],
          ].map(([title, body]) => (
            <div
              key={title}
              style={{
                padding: 24,
                borderRadius: 22,
                background: palette.surface,
                border: `1px solid ${palette.line}`,
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.25 }}>{title}</div>
              <div style={{ marginTop: 12, fontSize: 24, lineHeight: 1.55, color: palette.muted }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const GoldenRule: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 34,
        alignItems: 'center',
      }}
    >
      <div>
        <Label color={palette.gold}>Remove Problem Elements</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>先請 ChatGPT 去掉問題元素</PageTitle>
        </div>
        <Subline>
          如果人物失真太明顯，或某個物件怎麼看都不對，最乾脆的做法是先把它移掉，再進 Canva
          人工補回去。
        </Subline>
        <div
          style={{
            marginTop: 24,
            padding: 24,
            borderRadius: 22,
            background: palette.accentSoft,
            border: `1px solid ${palette.line}`,
            fontSize: 24,
            lineHeight: 1.6,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`範例提示詞：
請把這張圖裡的講師人物去掉，保留原本海報背景、標題、標章與版面結構。`}
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gap: 18,
        }}
      >
        <div
          style={{
            borderRadius: 24,
            overflow: 'hidden',
            background: palette.surface,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div
            style={{
              padding: '16px 18px',
              fontSize: 20,
              letterSpacing: '0.16em',
              color: palette.gold,
              borderBottom: `1px solid ${palette.line}`,
            }}
          >
            去掉人物後的底圖
          </div>
          <img
            src={removePersonExample}
            alt="把人物去掉後留下海報背景與版面的範例"
            style={{ width: '100%', height: 430, objectFit: 'contain', background: '#efe4d4' }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {[
            ['1. 先去掉', '先讓 ChatGPT 把失真的人物或怪元素移除，留一張乾淨底圖。'],
            ['2. Canva 補回', '把真實人物照拉進 Canva，自己決定大小、位置、裁切。'],
            ['3. 再排文字', '順手把標題、單位、日期與 CTA 一起重排乾淨。'],
          ].map(([title, body]) => (
            <div
              key={title}
              style={{
                padding: '18px 20px',
                borderRadius: 20,
                background: '#fffaf2',
                border: `1px solid ${palette.line}`,
              }}
            >
              <div style={{ fontSize: 26, fontWeight: 600 }}>{title}</div>
              <div style={{ marginTop: 8, fontSize: 22, lineHeight: 1.5, color: palette.muted }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Closing: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 34,
        alignItems: 'stretch',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 0,
        }}
      >
        <div>
          <Label>Remove BG, Add Back</Label>
          <div style={{ marginTop: 24 }}>
            <PageTitle>先去背，再把人物加回去</PageTitle>
          </div>
          <Subline>
            我會先用免費去背工具把人物改成透明背景，再把人物加回 Canva，位置和大小就能自己掌控。
          </Subline>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 14,
          }}
        >
          {[
            ['1. 去背', '先把真人照片去成透明背景，方便疊回海報或貼文上。'],
            ['2. 加回 Canva', '把透明 PNG 拖回 Canva，自由調整位置、比例、圖層。'],
            ['3. 最後收尾', '再補文字、日期、CTA 與安全邊界，做成正式版。'],
          ].map(([title, body]) => (
            <div
              key={title}
              style={{
                padding: 18,
                borderRadius: 20,
                background: palette.surface,
                border: `1px solid ${palette.line}`,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.2 }}>{title}</div>
              <div style={{ marginTop: 8, fontSize: 20, lineHeight: 1.45, color: palette.muted }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          borderRadius: 24,
          overflow: 'hidden',
          border: `1px solid ${palette.line}`,
          background: '#fff',
        }}
      >
        <img
          src={photoroomName}
          alt="Photoroom 品牌名稱"
          style={{ width: '100%', height: 'auto', display: 'block', flexShrink: 0 }}
        />
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            borderTop: `1px solid ${palette.line}`,
          }}
        >
          <img
            src={photoroomBody}
            alt="Photoroom 去背工具操作畫面"
            style={{ width: '100%', height: 'auto', display: 'block', flexShrink: 0 }}
          />
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '22px 28px',
              background: palette.accentSoft,
              borderTop: `1px solid ${palette.line}`,
            }}
          >
            <div
              style={{
                fontSize: 26,
                lineHeight: 1.5,
                color: palette.text,
                textAlign: 'center',
              }}
            >
              免費去背工具 · Google 搜尋{' '}
              <span style={{ fontWeight: 700, color: palette.accent }}>Photoroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CanvaDemo: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Label>Add Person in Canva</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>在 Canva 把人物加回去</PageTitle>
        </div>
        <Subline>
          這一步不用播放影片示範，重點是觀念：把真實人物當成一個可移動圖層，自己控制大小、位置與遮擋。
        </Subline>
        <div
          style={{
            marginTop: 34,
            padding: 28,
            borderRadius: 26,
            background: '#1f1b16',
            color: '#fff8ed',
            fontSize: 28,
            lineHeight: 1.55,
            fontWeight: 800,
          }}
        >
          不要讓 AI 硬修失真人物。
          <br />
          先去掉，再用真實照片補回。
        </div>
      </div>

      <div style={{ display: 'grid', gap: 18 }}>
        {[
          ['1', '拖進透明 PNG', '把去背後的人物照片丟進 Canva，當成獨立圖層。'],
          ['2', '調整大小位置', '人物可以縮放、左右移動、避開標題與主辦資訊。'],
          ['3', '最後再排文字', '確認人物不擋重點，再補回標題、CTA、日期與單位。'],
        ].map(([num, title, body]) => (
          <div
            key={num}
            style={{
              display: 'grid',
              gridTemplateColumns: '78px 1fr',
              gap: 20,
              alignItems: 'center',
              padding: '24px 28px',
              borderRadius: 26,
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              boxShadow: '0 20px 48px rgba(61, 39, 15, 0.08)',
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 18,
                display: 'grid',
                placeItems: 'center',
                background: palette.accentSoft,
                color: palette.accent,
                fontSize: 30,
                fontWeight: 950,
              }}
            >
              {num}
            </div>
            <div>
              <div style={{ fontSize: 34, fontWeight: 950 }}>{title}</div>
              <div style={{ marginTop: 8, fontSize: 25, lineHeight: 1.45, color: palette.muted }}>
                {body}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            padding: 26,
            borderRadius: 26,
            background: palette.accentSoft,
            border: `1px solid ${palette.line}`,
            fontSize: 26,
            lineHeight: 1.5,
            color: palette.text,
          }}
        >
          小提醒：Canva 不是拿來「生成」，而是拿來做最後的人工控制與排版收尾。
        </div>
      </div>
    </div>
  </div>
);

const RepeatUntilDone: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Label>Repeat Until Done</Label>
      <div style={{ marginTop: 24 }}>
        <PageTitle>不斷重複以上步驟，直到完成所有內容</PageTitle>
      </div>
      <Subline>
        每一張輪播、每一個版型，都走同一套流程。出稿、檢查、補修、去背、加回 Canva，滿意了再匯出。
      </Subline>
      <div
        style={{
          marginTop: 56,
          display: 'flex',
          gap: 12,
          alignItems: 'stretch',
        }}
      >
        {[
          ['ChatGPT 出稿', '文案與圖片草稿'],
          ['看問題補詞', '尺寸、構圖、失真'],
          ['修版去元素', '不值得救就重跑'],
          ['去背加回', 'Photoroom → Canva'],
          ['Canva 收尾', '加字、排版、匯出'],
        ].map(([title, body], index, items) => (
          <div key={title} style={{ display: 'contents' }}>
            <div
              style={{
                flex: 1,
                padding: 28,
                borderRadius: 24,
                background: palette.surface,
                border: `1px solid ${palette.line}`,
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.25 }}>{title}</div>
              <div style={{ marginTop: 12, fontSize: 22, lineHeight: 1.45, color: palette.muted }}>
                {body}
              </div>
            </div>
            {index < items.length - 1 ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 32,
                  color: palette.accent,
                  flexShrink: 0,
                  padding: '0 4px',
                }}
                aria-hidden
              >
                →
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TemplatePreviewCard = ({
  title,
  kicker,
  color,
  personX = 58,
  personWidth = 168,
  titleMaxWidth = 270,
}: {
  title: string;
  kicker: string;
  color: string;
  personX?: number;
  personWidth?: number;
  titleMaxWidth?: number;
}) => (
  <div
    style={{
      position: 'relative',
      height: 420,
      borderRadius: 26,
      overflow: 'hidden',
      border: `1px solid ${palette.line}`,
      background: color,
      boxShadow: '0 26px 60px rgba(61, 39, 15, 0.12)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 24,
        border: '1px solid rgba(29, 27, 24, 0.18)',
        borderRadius: 20,
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 42,
        left: 42,
        right: 42,
        fontSize: 18,
        letterSpacing: '0.18em',
        color: 'rgba(29, 27, 24, 0.62)',
      }}
    >
      {kicker}
    </div>
    <div
      style={{
        position: 'absolute',
        left: 42,
        bottom: 42,
        maxWidth: titleMaxWidth,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 48,
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: '-0.04em',
        zIndex: 2,
      }}
    >
      {title}
    </div>
    <img
      src={speakerAlex}
      alt="講師人物示意"
      style={{
        position: 'absolute',
        left: `${personX}%`,
        bottom: -8,
        width: personWidth,
        transform: 'translateX(-50%)',
        filter: 'drop-shadow(0 22px 26px rgba(61, 39, 15, 0.25))',
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: 'absolute',
        right: 30,
        bottom: 30,
        padding: '12px 16px',
        borderRadius: 999,
        background: palette.text,
        color: palette.surface,
        fontSize: 18,
        fontWeight: 700,
      }}
    >
      留言拿連結
    </div>
  </div>
);

const ShortVideoPrompt: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Advanced · 1080 × 1920</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>先用 GPT 提示轉成短影音尺寸</PageTitle>
        </div>
        <Subline>同一張 IG 貼文，先改成直式短影音比例。不是重做內容，而是重新安排畫面。</Subline>
        <div
          style={{
            marginTop: 32,
            padding: 28,
            borderRadius: 24,
            background: '#1f1b16',
            color: '#fff8ed',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 24,
            lineHeight: 1.58,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`請把這張 IG 貼文改成短影音封面尺寸。

尺寸：1080 × 1920，9:16 直式
保留：講師、主標、公益講座、報名 CTA
調整：人物放下方，標題放上方，文字不要太小
風格：乾淨、公益感、適合 Reels / Shorts / TikTok`}
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 96px 0.64fr',
          gap: 18,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            height: 520,
            borderRadius: 26,
            overflow: 'hidden',
            border: `1px solid ${palette.line}`,
            background: palette.surface,
          }}
        >
          <img
            src={socialSlide1Real}
            alt="原本 IG 貼文"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              left: 20,
              bottom: 20,
              padding: '10px 14px',
              borderRadius: 999,
              background: 'rgba(29, 27, 24, 0.78)',
              color: palette.surface,
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: '0.08em',
            }}
          >
            IG 1080 × 1350
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: 54, color: palette.accent }}>→</div>
        <div
          style={{
            position: 'relative',
            height: 560,
            borderRadius: 34,
            overflow: 'hidden',
            border: `1px solid ${palette.line}`,
            background: '#f1d39a',
            boxShadow: '0 30px 70px rgba(61, 39, 15, 0.14)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 28,
              border: '1px solid rgba(29, 27, 24, 0.2)',
              borderRadius: 24,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 44,
              left: 32,
              right: 32,
              fontSize: 18,
              letterSpacing: '0.16em',
              color: 'rgba(29, 27, 24, 0.62)',
            }}
          >
            1080 × 1920
          </div>
          <div
            style={{
              position: 'absolute',
              top: 92,
              left: 32,
              right: 32,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 48,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
            }}
          >
            AI 公益講座
            <br />
            一小時實作
          </div>
          <img
            src={speakerAlex}
            alt="講師人物示意"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 56,
              width: 178,
              transform: 'translateX(-50%)',
              filter: 'drop-shadow(0 22px 26px rgba(61, 39, 15, 0.25))',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 30,
              right: 30,
              bottom: 28,
              padding: '14px 18px',
              borderRadius: 999,
              background: palette.text,
              color: palette.surface,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            Reels / Shorts / TikTok 封面
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ImageBeforeVideo: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Image First</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>為什麼要先生圖，再轉成影片？</PageTitle>
        </div>
        <Subline>
          因為 AI
          比較容易理解結構化的語言。先把畫面做成一張清楚的圖，等於先確認構圖、元素與文字層級。
        </Subline>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 86px 1fr',
          gap: 18,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            padding: 28,
            borderRadius: 28,
            background: palette.surface,
            border: `1px solid ${palette.line}`,
            minHeight: 430,
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: '0.14em', color: palette.muted }}>
            先固定畫面
          </div>
          <div style={{ marginTop: 26, display: 'grid', gap: 16 }}>
            {['背景風格', '主標題', '人物位置', '資訊層級', 'CTA 區塊'].map((item) => (
              <div
                key={item}
                style={{
                  padding: '18px 20px',
                  borderRadius: 18,
                  background: palette.accentSoft,
                  border: `1px solid ${palette.line}`,
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: 54, color: palette.accent }}>→</div>
        <div
          style={{
            padding: 28,
            borderRadius: 28,
            background: palette.surface,
            border: `1px solid ${palette.line}`,
            minHeight: 430,
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: '0.14em', color: palette.muted }}>
            再描述動態
          </div>
          <div style={{ marginTop: 26, display: 'grid', gap: 16 }}>
            {['哪個先出現', '停留幾秒', '怎麼移動', '字幕怎麼跟', '最後怎麼收尾'].map((item) => (
              <div
                key={item}
                style={{
                  padding: '18px 20px',
                  borderRadius: 18,
                  background: '#f8ead7',
                  border: `1px solid ${palette.line}`,
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenshotMaterialPitfalls: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.86fr 1.14fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Screenshots First</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>教學影片最常卡在截圖素材</PageTitle>
        </div>
        <Subline>
          截圖是影片的「畫面證據」。順序錯、沒對齊、或被字幕遮住，觀眾就會看不懂，也會直接接到短影音安全區問題。
        </Subline>
      </div>
      <div style={{ display: 'grid', gap: 18 }}>
        {[
          ['截圖順序', '先看到哪個畫面、後看到哪個結果，要跟旁白順序一致。'],
          ['畫面對齊', '每張截圖的視窗大小、縮放比例、重點位置要一致。'],
          ['素材遮擋', '人物、字幕、CTA、平台按鈕，不要蓋住真正要教的畫面。'],
        ].map(([title, body], index) => (
          <div
            key={title}
            style={{
              display: 'grid',
              gridTemplateColumns: '96px 1fr',
              gap: 22,
              alignItems: 'center',
              padding: 24,
              borderRadius: 26,
              background: index === 2 ? '#f8ead7' : palette.surface,
              border: `1px solid ${palette.line}`,
              boxShadow: '0 20px 48px rgba(61, 39, 15, 0.08)',
            }}
          >
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: 22,
                display: 'grid',
                placeItems: 'center',
                background: index === 2 ? '#f1d39a' : palette.accentSoft,
                color: index === 2 ? '#9a5a09' : palette.accent,
                fontSize: 34,
                fontWeight: 900,
              }}
            >
              {index + 1}
            </div>
            <div>
              <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.15 }}>{title}</div>
              <div style={{ marginTop: 10, fontSize: 26, lineHeight: 1.45, color: palette.muted }}>
                {body}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            padding: '20px 24px',
            borderRadius: 24,
            background: palette.text,
            color: palette.surface,
            fontSize: 28,
            lineHeight: 1.45,
            fontWeight: 800,
          }}
        >
          提示詞要講清楚：重要畫面不要被字幕、人物、平台 UI 擋住。
        </div>
      </div>
    </div>
  </div>
);

const ShortVideoSafeZone: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Safe Zone</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>短影音一定要檢查安全區域</PageTitle>
        </div>
        <Subline>
          Reels、Shorts、TikTok 都會有帳號、按讚、留言、分享按鈕。重要文字與教學畫面要避開上下與右側
          UI。
        </Subline>
        <div
          style={{
            marginTop: 34,
            padding: 24,
            borderRadius: 24,
            background: palette.text,
            color: palette.surface,
            fontSize: 28,
            lineHeight: 1.45,
            fontWeight: 800,
          }}
        >
          提示詞要寫：字幕、人物、CTA 不要擋住操作步驟與平台按鈕。
        </div>
      </div>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div
          style={{
            position: 'relative',
            width: 344,
            height: 612,
            borderRadius: 42,
            overflow: 'hidden',
            background: '#f1d39a',
            border: `1px solid ${palette.line}`,
            boxShadow: '0 30px 70px rgba(61, 39, 15, 0.16)',
          }}
        >
          <img
            src={shortVideoCoverExample}
            alt="短影音封面安全區示意"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </div>
  </div>
);

const TemplateMindset: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.95fr 1.05fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Advanced · Template Next</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>進階：把圖片變成可控制的模板</PageTitle>
        </div>
        <Subline>不是只生一張圖，而是把版面拆成資料、樣式、位置，之後每次只換內容。</Subline>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 88px 1fr',
          gap: 18,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: 460,
            borderRadius: 26,
            overflow: 'hidden',
            border: `1px solid ${palette.line}`,
            background: palette.surface,
          }}
        >
          <img
            src={workshopPoster}
            alt="原本的活動海報"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ textAlign: 'center', fontSize: 54, color: palette.accent }}>→</div>
        <div
          style={{
            display: 'grid',
            gap: 14,
          }}
        >
          {[
            ['資料', '標題、日期、講師、CTA'],
            ['樣式', '字體、顏色、圓角、陰影'],
            ['位置', '人物 x/y、標題寬度、安全邊界'],
            ['輸出', 'IG 4:5、簡報 16:9、海報直式'],
          ].map(([title, body]) => (
            <div
              key={title}
              style={{
                padding: '22px 24px',
                borderRadius: 22,
                background: palette.surface,
                border: `1px solid ${palette.line}`,
              }}
            >
              <div style={{ fontSize: 30, fontWeight: 700 }}>{title}</div>
              <div style={{ marginTop: 6, fontSize: 23, lineHeight: 1.4, color: palette.muted }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TemplateLayers: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div style={contentPad}>
      <Label>React Template</Label>
      <div style={{ marginTop: 24 }}>
        <PageTitle>先拆元素，再精準控制位置</PageTitle>
      </div>
      <div
        style={{
          marginTop: 42,
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 34,
          alignItems: 'stretch',
        }}
      >
        <TemplatePreviewCard title="AI 公益講座" kicker="TAICHUNG × AI" color="#f1d39a" />
        <div
          style={{
            display: 'grid',
            gridTemplateRows: 'repeat(5, 1fr)',
            gap: 12,
          }}
        >
          {[
            ['background', '背景色、紋理、留白'],
            ['person', '人物圖片、大小、x/y、圖層'],
            ['title', '標題內容、字級、行高'],
            ['meta', '日期、地點、主辦單位'],
            ['cta', '按鈕文字、QR、報名提醒'],
          ].map(([name, body], index) => (
            <div
              key={name}
              style={{
                display: 'grid',
                gridTemplateColumns: '150px 1fr',
                gap: 18,
                alignItems: 'center',
                padding: '18px 22px',
                borderRadius: 20,
                background: index % 2 === 0 ? palette.surface : palette.accentSoft,
                border: `1px solid ${palette.line}`,
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  letterSpacing: '0.08em',
                  color: palette.accent,
                  fontWeight: 800,
                }}
              >
                {name}
              </div>
              <div style={{ fontSize: 28, lineHeight: 1.35 }}>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TemplateDataSwap: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 34,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label>Data Swap</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>資料換掉，版型不動</PageTitle>
        </div>
        <Subline>同一個 React 模板，只要換一組 JSON，就能產出不同活動的貼文。</Subline>
        <div
          style={{
            marginTop: 32,
            padding: 26,
            borderRadius: 22,
            background: '#1f1b16',
            color: '#fff8ed',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 23,
            lineHeight: 1.55,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`{
  title: "AI 公益講座",
  theme: "warm",
  personX: 62,
  cta: "留言拿報名連結"
}`}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {[
          {
            title: 'AI 公益講座',
            kicker: 'FREE AI TALK',
            note: '手把手實作',
            cta: '留言拿連結',
            bg: '#f1d39a',
            accent: palette.gold,
            mark: 'AI',
          },
          {
            title: '地方創生工作坊',
            kicker: 'LOCAL CREATION',
            note: '雲林 × 臺中',
            cta: '報名工作坊',
            bg: '#dcefe8',
            accent: palette.accent,
            mark: '↗',
          },
        ].map((card) => (
          <div
            key={card.title}
            style={{
              position: 'relative',
              height: 420,
              borderRadius: 26,
              overflow: 'hidden',
              border: `1px solid ${palette.line}`,
              background: card.bg,
              boxShadow: '0 26px 60px rgba(61, 39, 15, 0.12)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 24,
                border: '1px solid rgba(29, 27, 24, 0.18)',
                borderRadius: 20,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 38,
                left: 36,
                right: 36,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  letterSpacing: '0.16em',
                  color: 'rgba(29, 27, 24, 0.62)',
                }}
              >
                {card.kicker}
              </div>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 18,
                  display: 'grid',
                  placeItems: 'center',
                  background: palette.text,
                  color: palette.surface,
                  fontSize: 24,
                  fontWeight: 900,
                }}
              >
                {card.mark}
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                left: 36,
                right: 36,
                top: 126,
                fontFamily: 'var(--osd-font-display)',
                fontSize: 48,
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: '-0.05em',
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                position: 'absolute',
                left: 36,
                right: 36,
                bottom: 112,
                padding: '14px 18px',
                borderRadius: 18,
                background: 'rgba(255, 252, 247, 0.7)',
                border: '1px solid rgba(29, 27, 24, 0.14)',
                fontSize: 26,
                fontWeight: 800,
                color: card.accent,
              }}
            >
              {card.note}
            </div>
            <div
              style={{
                position: 'absolute',
                left: 36,
                right: 36,
                bottom: 36,
                padding: '14px 18px',
                borderRadius: 999,
                background: palette.text,
                color: palette.surface,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              {card.cta}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DialogueReplacement: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div style={contentPad}>
      <Label color={palette.gold}>Lazy Mode · Dialogue Replace</Label>
      <div style={{ marginTop: 24 }}>
        <PageTitle>更偷懶：只用對話替換元素</PageTitle>
      </div>
      <Subline>
        不碰程式碼也可以，直接說你要換什麼。背後可以是 AI 改圖，也可以是 Codex 幫你改模板資料。
      </Subline>
      <div
        style={{
          marginTop: 46,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
        }}
      >
        {[
          [
            '換文字',
            '把標題改成「AI 公益講座」，副標改成「一小時手把手實作」。',
            '改資料最穩，適合模板化後使用。',
          ],
          [
            '換人物',
            '把人物換成這張照片，放右下角，不要遮到報名資訊。',
            '若要精準位置，回到 React 模板調 x/y。',
          ],
          [
            '換風格',
            '背景改成暖色公益感，保留清楚資訊層級。',
            '風格可用對話先探索，再固化成樣式。',
          ],
          [
            '換尺寸',
            '輸出 IG 4:5、限動 9:16、簡報 16:9 三個版本。',
            '大量輸出時，模板化最省時間。',
          ],
        ].map(([title, prompt, note]) => (
          <div
            key={title}
            style={{
              padding: 28,
              borderRadius: 24,
              background: palette.surface,
              border: `1px solid ${palette.line}`,
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 800 }}>{title}</div>
            <div style={{ marginTop: 16, fontSize: 27, lineHeight: 1.5 }}>{prompt}</div>
            <div style={{ marginTop: 18, fontSize: 21, lineHeight: 1.45, color: palette.muted }}>
              {note}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AdvancedChoice: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Label>Which Path?</Label>
      <div style={{ marginTop: 24 }}>
        <PageTitle>先用對話探索，再把常用版型模板化</PageTitle>
      </div>
      <div
        style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
        }}
      >
        {[
          ['對話替換', '快', '臨時改一張圖、換文字、換人物、探索風格。'],
          ['React 模板', '準', '固定品牌、固定版型、大量產圖、需要精準位置。'],
        ].map(([title, badge, body]) => (
          <div
            key={title}
            style={{
              position: 'relative',
              padding: 36,
              minHeight: 260,
              borderRadius: 28,
              background: title === 'React 模板' ? palette.accentSoft : palette.surface,
              border: `1px solid ${palette.line}`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 28,
                right: 28,
                width: 70,
                height: 70,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                background: palette.text,
                color: palette.surface,
                fontSize: 30,
                fontWeight: 800,
              }}
            >
              {badge}
            </div>
            <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
            <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.5, color: palette.muted }}>
              {body}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RemotionIntro: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 44,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Remotion</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>對話式拍片工具</PageTitle>
        </div>
        <Subline>
          剪輯、字幕、配音、音樂、封面縮圖、特效，都可以變成一句一句對話完成的影片工作流。
        </Subline>
      </div>
      <div
        style={{
          borderRadius: 34,
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          padding: 44,
          boxShadow: '0 30px 80px rgba(61, 39, 15, 0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 34,
          }}
        >
          <div style={{ position: 'relative', width: 170, height: 132, flexShrink: 0 }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '42% 58% 54% 46%',
                background: '#dceefe',
                transform: 'rotate(-8deg)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 20,
                borderRadius: '42% 58% 54% 46%',
                background: '#8fcef9',
                transform: 'rotate(-8deg)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 52,
                top: 34,
                width: 76,
                height: 64,
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                borderRadius: 10,
                background: '#1586ee',
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 900,
                letterSpacing: '-0.06em',
                lineHeight: 1,
              }}
            >
              remotion
            </div>
            <div style={{ marginTop: 10, fontSize: 24, color: '#0979f2' }}>
              make videos programmatically
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 34,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
          }}
        >
          {[
            ['剪輯', '把素材拆段，安排節奏與轉場。'],
            ['字幕', '逐字稿、斷句、強調字都能調。'],
            ['配音', '指定語氣、速度與角色聲線。'],
            ['音樂', '描述情緒，自動搭配背景氛圍。'],
            ['封面縮圖', '產出直式封面與社群縮圖。'],
            ['特效', '加光暈、粒子、動態轉場。'],
          ].map(([title, body]) => (
            <div
              key={title}
              style={{
                padding: 18,
                borderRadius: 20,
                background: palette.accentSoft,
                border: `1px solid ${palette.line}`,
              }}
            >
              <div style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.2 }}>{title}</div>
              <div style={{ marginTop: 8, fontSize: 19, lineHeight: 1.42, color: palette.muted }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AiShortVideoWorkflow: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Label color={palette.gold}>Question</Label>
      <div style={{ marginTop: 32, maxWidth: 1320 }}>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 132,
            lineHeight: 1.06,
            fontWeight: 900,
            letterSpacing: '-0.06em',
          }}
        >
          如何用 AI 拍短影音？
        </div>
        <div
          style={{
            marginTop: 34,
            maxWidth: 1020,
            fontSize: 39,
            lineHeight: 1.45,
            color: palette.muted,
            fontWeight: 700,
          }}
        >
          下一步不是先剪影片，而是先把「影片要長什麼樣子」講成 AI 聽得懂的結構。
        </div>
      </div>
    </div>
  </div>
);

const InstallRemotionWithAgent: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '1.04fr 0.96fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Install with Agent</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>如何安裝 Remotion？</PageTitle>
        </div>
        <Subline>不用自己先讀完整文件。先找到官方 GitHub，直接把網址交給你的 AI Agent。</Subline>
        <div
          style={{
            marginTop: 34,
            borderRadius: 26,
            overflow: 'hidden',
            background: '#f7fafc',
            border: `1px solid ${palette.line}`,
            boxShadow: '0 26px 62px rgba(61, 39, 15, 0.12)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 18px',
              borderBottom: '1px solid rgba(107, 98, 88, 0.18)',
              background: '#ffffff',
            }}
          >
            {['#ef4444', '#f59e0b', '#22c55e'].map((color) => (
              <span
                key={color}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: color,
                  display: 'block',
                }}
              />
            ))}
            <span
              style={{
                marginLeft: 10,
                color: palette.muted,
                fontSize: 17,
                fontWeight: 800,
                letterSpacing: 0.2,
              }}
            >
              github.com/remotion-dev/remotion
            </span>
          </div>
          <img
            src={remotionGithubRepo}
            alt="Remotion GitHub 官方倉庫畫面"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>
      <div style={{ display: 'grid', gap: 16 }}>
        {[
          ['1', '搜尋 Remotion', 'Google 搜尋 remotion，確認是官方網站或 GitHub。'],
          ['2', '找到 GitHub 倉庫', '官方 repo：github.com/remotion-dev/remotion'],
          ['3', '貼給 AI Agent', '把網址丟給 Codex、Claude Code，請它依 repo 建立專案。'],
        ].map(([num, title, body]) => (
          <div
            key={num}
            style={{
              display: 'grid',
              gridTemplateColumns: '78px 1fr',
              gap: 20,
              alignItems: 'center',
              padding: 24,
              borderRadius: 24,
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              boxShadow: '0 20px 48px rgba(61, 39, 15, 0.08)',
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 18,
                display: 'grid',
                placeItems: 'center',
                background: palette.accentSoft,
                color: palette.accent,
                fontSize: 30,
                fontWeight: 900,
              }}
            >
              {num}
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 900 }}>{title}</div>
              <div style={{ marginTop: 8, fontSize: 24, lineHeight: 1.45, color: palette.muted }}>
                {body}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            padding: 26,
            borderRadius: 24,
            background: '#1f1b16',
            color: '#fff8ed',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 23,
            lineHeight: 1.58,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`請參考這個官方 repo：
https://github.com/remotion-dev/remotion

幫我建立一個 Remotion 專案，
我要做 1080×1920 的短影音模板。`}
        </div>
      </div>
    </div>
  </div>
);

const RemotionStudioPreview: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gap: 34,
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.88fr 1.12fr',
          gap: 42,
          alignItems: 'end',
        }}
      >
        <div>
          <Label color={palette.gold}>Remotion Studio</Label>
          <div style={{ marginTop: 20 }}>
            <PageTitle>裝好後會看到這個工作畫面</PageTitle>
          </div>
        </div>
        <Subline>
          Studio 不是傳統剪輯軟體，而是把 React 影片模板變成可以預覽、調時間軸、最後 Render
          的工作台。
        </Subline>
      </div>
      <div
        style={{
          position: 'relative',
          borderRadius: 32,
          overflow: 'hidden',
          background: '#111827',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 34px 90px rgba(17, 24, 39, 0.28)',
        }}
      >
        <img
          src={remotionStudioPreview}
          alt="Remotion Studio 編輯介面截圖"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {[
          ['Compositions', '左側選影片模板', '6%', '16%'],
          ['Preview', '中央即時預覽畫面', '51%', '12%'],
          ['Timeline', '下方控制每段出現時間', '38%', '83%'],
          ['Render', '右上輸出影片', '88%', '63%'],
        ].map(([title, body, left, top]) => (
          <div
            key={title}
            style={{
              position: 'absolute',
              left,
              top,
              transform: 'translate(-50%, -50%)',
              minWidth: 170,
              padding: '14px 16px',
              borderRadius: 18,
              background: 'rgba(255, 252, 247, 0.92)',
              border: `1px solid ${palette.line}`,
              boxShadow: '0 18px 44px rgba(0, 0, 0, 0.18)',
            }}
          >
            <div style={{ color: palette.accent, fontSize: 18, fontWeight: 900 }}>{title}</div>
            <div style={{ marginTop: 4, color: palette.text, fontSize: 18, fontWeight: 800 }}>
              {body}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HyperframesVideoFrame = ({
  src,
  poster,
  label,
  ratio = '16 / 9',
}: {
  src: string;
  poster: string;
  label: string;
  ratio?: string;
}) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      borderRadius: 28,
      overflow: 'hidden',
      border: `1px solid ${palette.line}`,
      background: '#0f172a',
      boxShadow: '0 30px 80px rgba(15, 23, 42, 0.22)',
    }}
  >
    <div className="hyperframes-video-live" style={{ width: '100%', height: '100%' }}>
      <video
        src={src}
        autoPlay
        muted
        loop
        controls
        playsInline
        preload="auto"
        aria-label={label}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'contain',
          background: '#0f172a',
        }}
      >
        <track kind="captions" label="無旁白" src={noCaptionsTrack} srcLang="zh-TW" default />
      </video>
    </div>
    <img
      className="hyperframes-video-static"
      src={poster}
      alt={label}
      style={{
        display: 'none',
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
        background: 'rgba(15, 23, 42, 0.68)',
        color: '#fff',
        fontSize: 15,
        fontWeight: 800,
      }}
    >
      {label}
    </div>
  </div>
);

const HyperframesUseCases: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div style={contentPad}>
      <Label color={palette.gold}>Use Cases</Label>
      <div style={{ marginTop: 18 }}>
        <PageTitle>Remotion 適合做什麼？</PageTitle>
      </div>
      <Subline>
        它能把圖片、截圖、網頁，甚至既有影片，轉成可控制、可重複修改的動畫格式；但不適合硬做長片剪輯。
      </Subline>
      <div
        style={{
          marginTop: 34,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
        }}
      >
        {[
          {
            title: '特別擅長',
            subtitle: '3–5 分鐘短片動畫',
            color: palette.accent,
            bg: palette.accentSoft,
            items: ['圖片轉動畫', '截圖教學', '網頁錄影整理'],
          },
          {
            title: '不適合',
            subtitle: '10 分鐘以上長片',
            color: '#b45309',
            bg: '#f8ead7',
            items: ['Vlog', '真人剪輯', '長片敘事'],
          },
        ].map((section) => (
          <div
            key={section.title}
            style={{
              padding: 28,
              borderRadius: 28,
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              boxShadow: '0 24px 60px rgba(61, 39, 15, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 22,
                  display: 'grid',
                  placeItems: 'center',
                  background: section.bg,
                  color: section.color,
                  fontSize: 34,
                  fontWeight: 900,
                }}
              >
                {section.title === '特別擅長' ? '✓' : '×'}
              </div>
              <div>
                <div style={{ fontSize: 36, fontWeight: 900, color: section.color }}>
                  {section.title}
                </div>
                <div style={{ marginTop: 4, fontSize: 23, color: palette.muted, fontWeight: 700 }}>
                  {section.subtitle}
                </div>
              </div>
            </div>
            <div style={{ marginTop: 24, display: 'grid', gap: 12 }}>
              {section.items.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '18px 20px',
                    borderRadius: 18,
                    background: section.bg,
                    border: `1px solid ${palette.line}`,
                    fontSize: 30,
                    fontWeight: 800,
                    color: palette.text,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HyperframesQuestionBridge: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateRows: '1fr auto',
        gap: 34,
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Label color={palette.gold}>Before Prompting</Label>
        <div style={{ marginTop: 24, maxWidth: 1360 }}>
          <PageTitle>
            如果我不知道怎麼把想拍的影片
            <br />
            用自然語言表達怎麼辦？
          </PageTitle>
        </div>
      </div>
      <div
        style={{
          padding: '26px 30px',
          borderRadius: 26,
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          display: 'flex',
          alignItems: 'center',
          gap: 22,
          boxShadow: '0 24px 60px rgba(61, 39, 15, 0.08)',
        }}
      >
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            background: palette.accentSoft,
            color: palette.accent,
            fontSize: 32,
            fontWeight: 900,
            flexShrink: 0,
          }}
        >
          ?
        </div>
        <div style={{ fontSize: 30, lineHeight: 1.5, color: palette.muted, fontWeight: 700 }}>
          先參考模板庫：看版型、節奏、畫面語言，再把模糊想法整理成可以交給 AI Agent 的提示詞。
        </div>
      </div>
    </div>
  </div>
);

const HyperframesTemplatesAndPrompts: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <style>{exportCaptureStyles}</style>
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.2fr',
        gap: 36,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label>Template & Prompt</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>模板與提示詞</PageTitle>
        </div>
        <Subline>
          模板網頁可以當作參考庫：先看版型、節奏、畫面語言，再把想做的內容整理成可交給 AI Agent
          的提示詞。
        </Subline>
        <div
          style={{
            marginTop: 28,
            padding: 24,
            borderRadius: 22,
            background: '#1f1b16',
            color: '#fff8ed',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 22,
            lineHeight: 1.58,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`請參考這個模板網站的影片節奏：

1. 保留直式短影音比例
2. 把標題、字幕、CTA 做成可替換資料
3. 描述每段進場時間與動畫方式
4. 請產出 Remotion 元件結構與 props 規格`}
        </div>
      </div>
      <HyperframesVideoFrame
        src={hyperframesTemplateShowcase}
        poster={hyperframesTemplateShowcasePoster}
        label="模板網頁錄影"
        ratio="16 / 10"
      />
    </div>
  </div>
);

const RemotionVideoPromptExample: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <style>{exportCaptureStyles}</style>
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.92fr 1.08fr',
        gap: 40,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Remotion</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>對話式拍片工具</PageTitle>
        </div>
        <Subline>先看一支成品影片，再請 AI 整理畫面分層、時間軸、動效與可替換參數。</Subline>
        <div
          style={{
            marginTop: 30,
            padding: 26,
            borderRadius: 24,
            background: '#1f1b16',
            color: '#fff8ed',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 22,
            lineHeight: 1.58,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`請參考這支短影音，整理成 Remotion 模板規格：

1. 影片尺寸、秒數、主要場景
2. 畫面元素：背景、主圖、標題、字幕、CTA
3. 每個元素的進場時間與動畫方式
4. 哪些文字、圖片、顏色適合做成 props
5. 請產出可交給 Codex 實作的 Remotion prompt`}
        </div>
      </div>
      <div
        style={{
          width: '100%',
          maxWidth: 430,
          justifySelf: 'center',
          aspectRatio: '9 / 16',
          borderRadius: 34,
          overflow: 'hidden',
          border: `1px solid ${palette.line}`,
          background: '#0f172a',
          boxShadow: '0 30px 80px rgba(15, 23, 42, 0.22)',
        }}
      >
        <img
          src={remotionAiAdPoster}
          alt="Remotion 短影音成品示範封面"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      </div>
    </div>
  </div>
);

const RemotionIsCodeFirst: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.82fr 1.18fr',
        gap: 44,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Important Mindset</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>Remotion 不是剪輯軟體</PageTitle>
        </div>
        <Subline>
          它比較像「用寫程式的方法設計影片」：把畫面拆成元件，把時間拆成片段，再用資料和參數控制內容。
        </Subline>
      </div>
      <div style={{ display: 'grid', gap: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {[
            ['傳統剪輯軟體', '拖影片、切片段、拉時間軸、手動調字幕與音樂。'],
            ['Remotion 做法', '寫 React 元件、定義資料、排 Sequence、最後 Render 成影片。'],
          ].map(([title, body], index) => (
            <div
              key={title}
              style={{
                minHeight: 246,
                padding: 30,
                borderRadius: 28,
                background: index === 0 ? '#f8efe3' : palette.surface,
                border: `1px solid ${palette.line}`,
                boxShadow: '0 22px 54px rgba(61, 39, 15, 0.1)',
              }}
            >
              <div
                style={{
                  color: index === 0 ? palette.muted : palette.accent,
                  fontSize: 32,
                  fontWeight: 950,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  marginTop: 22,
                  color: palette.text,
                  fontSize: 30,
                  lineHeight: 1.45,
                  fontWeight: 800,
                }}
              >
                {body}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            padding: 28,
            borderRadius: 26,
            background: '#1f1b16',
            color: '#fff8ed',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 24,
            lineHeight: 1.58,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`提示詞重點：
不要只說「幫我剪一支影片」。
要說「請把影片拆成 React 元件、資料 props、
Sequence 時間段、字幕軌與音軌安排」。`}
        </div>
      </div>
    </div>
  </div>
);

const _ReelsPhoneMock = ({
  title = 'Air Max 2026',
  label = '1080 × 1920',
}: {
  title?: string;
  label?: string;
}) => (
  <div
    style={{
      position: 'relative',
      width: 312,
      height: 555,
      borderRadius: 38,
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #f1d39a 0%, #dcefe8 100%)',
      border: `1px solid ${palette.line}`,
      boxShadow: '0 30px 70px rgba(61, 39, 15, 0.16)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 24,
        border: '1px solid rgba(29, 27, 24, 0.18)',
        borderRadius: 28,
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 38,
        left: 28,
        right: 28,
        fontSize: 17,
        letterSpacing: '0.16em',
        color: 'rgba(29, 27, 24, 0.62)',
      }}
    >
      {label}
    </div>
    <div
      style={{
        position: 'absolute',
        top: 86,
        left: 28,
        right: 28,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 46,
        fontWeight: 900,
        lineHeight: 1.02,
        letterSpacing: '-0.05em',
      }}
    >
      {title}
    </div>
    <img
      src={socialSlide4}
      alt="產品圖片示意"
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 76,
        width: 190,
        height: 190,
        objectFit: 'cover',
        borderRadius: 32,
        transform: 'translateX(-50%)',
        filter: 'drop-shadow(0 22px 26px rgba(61, 39, 15, 0.25))',
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: 28,
        right: 28,
        bottom: 28,
        padding: '14px 16px',
        borderRadius: 999,
        background: palette.text,
        color: palette.surface,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 800,
      }}
    >
      了解更多
    </div>
  </div>
);

const ShortVideoCoverMock = ({
  label = '1080 × 1920',
  image = shortVideoCoverExample,
  showOverlay = true,
}: {
  label?: string;
  image?: string;
  showOverlay?: boolean;
}) => (
  <div
    style={{
      position: 'relative',
      width: 312,
      height: 555,
      borderRadius: 38,
      overflow: 'hidden',
      background: palette.surface,
      border: `1px solid ${palette.line}`,
      boxShadow: '0 30px 70px rgba(61, 39, 15, 0.16)',
    }}
  >
    <img
      src={image}
      alt="用 AI 設計連續圖文的短影音封面"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
    {showOverlay ? (
      <>
        <div
          style={{
            position: 'absolute',
            left: 92,
            right: 92,
            bottom: 150,
            height: 140,
            borderRadius: 26,
            background:
              'linear-gradient(180deg, rgba(245, 238, 227, 0.96) 0%, rgba(241, 231, 217, 0.98) 100%)',
            boxShadow: '0 12px 30px rgba(61, 39, 15, 0.12)',
            border: '1px solid rgba(188, 166, 136, 0.42)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 110,
            right: 110,
            bottom: 214,
            height: 2,
            background: 'rgba(188, 166, 136, 0.58)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 110,
            right: 110,
            bottom: 178,
            height: 2,
            background: 'rgba(188, 166, 136, 0.58)',
          }}
        />
      </>
    ) : null}
    <div
      style={{
        position: 'absolute',
        top: 18,
        right: 18,
        padding: '8px 12px',
        borderRadius: 999,
        background: 'rgba(29, 27, 24, 0.78)',
        color: palette.surface,
        fontSize: 17,
        fontWeight: 800,
        letterSpacing: '0.08em',
      }}
    >
      {label}
    </div>
  </div>
);

const LectureReelsMock = ({
  title,
  label,
  color,
  variant,
}: {
  title: string;
  label: string;
  color: string;
  variant: 'video' | 'design' | 'local';
}) => (
  <div
    style={{
      position: 'relative',
      width: 312,
      height: 555,
      borderRadius: 38,
      overflow: 'hidden',
      background: color,
      border: `1px solid ${palette.line}`,
      boxShadow: '0 30px 70px rgba(61, 39, 15, 0.16)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 24,
        border: '1px solid rgba(29, 27, 24, 0.18)',
        borderRadius: 28,
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 38,
        left: 28,
        right: 28,
        fontSize: 16,
        letterSpacing: '0.16em',
        color: 'rgba(29, 27, 24, 0.62)',
      }}
    >
      {label}
    </div>
    <div
      style={{
        position: 'absolute',
        top: 96,
        left: 28,
        right: 28,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 44,
        fontWeight: 900,
        lineHeight: 1.06,
        letterSpacing: '-0.05em',
      }}
    >
      {title}
    </div>
    <svg
      viewBox="0 0 240 170"
      aria-hidden
      style={{
        position: 'absolute',
        left: 36,
        right: 36,
        bottom: 130,
        width: 240,
        height: 170,
        overflow: 'visible',
      }}
    >
      <rect x="8" y="8" width="224" height="154" rx="30" fill="rgba(255,252,247,0.58)" />
      <rect x="8" y="8" width="224" height="154" rx="30" fill="none" stroke="rgba(29,27,24,0.16)" />
      {variant === 'video' ? (
        <>
          <rect x="42" y="38" width="156" height="94" rx="24" fill="#1d1b18" opacity="0.9" />
          <path d="M105 64 L105 106 L144 85 Z" fill="#fff8ed" />
          <path d="M42 140 H198" stroke="#0c7c59" strokeWidth="10" strokeLinecap="round" />
          <circle cx="76" cy="140" r="8" fill="#d28b28" />
        </>
      ) : null}
      {variant === 'design' ? (
        <>
          <rect x="42" y="34" width="68" height="74" rx="18" fill="#0c7c59" opacity="0.9" />
          <rect x="126" y="34" width="72" height="34" rx="16" fill="#d28b28" opacity="0.9" />
          <rect x="126" y="82" width="72" height="26" rx="13" fill="#1d1b18" opacity="0.85" />
          <path
            d="M46 132 H194"
            stroke="#1d1b18"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.72"
          />
          <path
            d="M62 148 H152"
            stroke="#0c7c59"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.72"
          />
        </>
      ) : null}
      {variant === 'local' ? (
        <>
          <path
            d="M34 116 C58 72 82 92 104 62 C132 24 154 68 178 42 C194 26 210 40 222 26"
            fill="none"
            stroke="#0c7c59"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.86"
          />
          <path
            d="M42 136 C78 112 104 134 132 106 C162 76 188 98 212 76"
            fill="none"
            stroke="#d28b28"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.82"
          />
          <circle cx="78" cy="106" r="10" fill="#1d1b18" opacity="0.86" />
          <circle cx="154" cy="78" r="10" fill="#1d1b18" opacity="0.86" />
          <circle cx="204" cy="74" r="10" fill="#1d1b18" opacity="0.86" />
        </>
      ) : null}
    </svg>
    <div
      style={{
        position: 'absolute',
        left: 28,
        right: 28,
        bottom: 28,
        padding: '14px 16px',
        borderRadius: 999,
        background: palette.text,
        color: palette.surface,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 800,
      }}
    >
      自動產出
    </div>
  </div>
);

const RemotionVideoAnatomy: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.88fr 1.12fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Video Anatomy</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>Remotion 會把一支影片拆成哪些元素？</PageTitle>
        </div>
        <Subline>
          先不要急著寫程式。請 AI Agent
          做影片時，要先把「影片規格、場景、時間軸、字幕軌、音軌」講清楚。
        </Subline>
        <div
          style={{
            marginTop: 32,
            padding: 26,
            borderRadius: 24,
            background: '#1f1b16',
            color: '#fff8ed',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 22,
            lineHeight: 1.58,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`提示詞可以這樣下：
請用 Remotion 幫我規劃一支 15 秒直式短影音。
先列出 Composition 規格、3 個 Sequence 場景、
每段時間軸、字幕出現時間、背景音樂與音效安排。`}
        </div>
      </div>
      <div style={{ display: 'grid', gap: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          {[
            ['規格', 'Composition', '尺寸、fps、總長度'],
            ['場景', 'Sequence', '封面、問題、教學、CTA'],
            ['時間軸', 'Timeline', '每段從幾秒開始'],
            ['字幕軌', 'Captions', '哪一句話何時出現'],
            ['音軌', 'Audio', '配樂、旁白、音效'],
          ].map(([title, term, body]) => (
            <div
              key={title}
              style={{
                minHeight: 162,
                padding: '20px 16px',
                borderRadius: 22,
                background: palette.surface,
                border: `1px solid ${palette.line}`,
                boxShadow: '0 18px 44px rgba(61, 39, 15, 0.08)',
              }}
            >
              <div style={{ color: palette.accent, fontSize: 29, fontWeight: 950 }}>{title}</div>
              <div style={{ marginTop: 6, color: palette.gold, fontSize: 18, fontWeight: 900 }}>
                {term}
              </div>
              <div style={{ marginTop: 16, color: palette.muted, fontSize: 20, lineHeight: 1.38 }}>
                {body}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            padding: 28,
            borderRadius: 30,
            background: palette.surface,
            border: `1px solid ${palette.line}`,
            boxShadow: '0 24px 60px rgba(61, 39, 15, 0.1)',
          }}
        >
          {[
            ['影片規格', '1080×1920 / 30fps / 15s', '#1f1b16', '100%'],
            ['場景 Sequence', '封面 0–3s ｜ 教學 3–11s ｜ CTA 11–15s', palette.accent, '82%'],
            ['字幕軌 Captions', '一句一句跟著畫面節奏出現', palette.gold, '68%'],
            ['音軌 Audio', '背景音樂 + 轉場音效 + 旁白', '#7c3aed', '58%'],
          ].map(([label, text, color, width]) => (
            <div key={label} style={{ marginBottom: 18 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 24,
                  color: palette.muted,
                  fontSize: 20,
                  fontWeight: 800,
                }}
              >
                <span>{label}</span>
                <span>{text}</span>
              </div>
              <div
                style={{
                  marginTop: 9,
                  height: 30,
                  borderRadius: 999,
                  background: '#efe4d4',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width,
                    height: '100%',
                    borderRadius: 999,
                    background: color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const RemotionReelsExample: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.92fr 1.08fr',
        gap: 44,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label>Reels Product Card</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>直式短影音封面圖例</PageTitle>
        </div>
        <Subline>
          這張圖已經是 1080×1920，可以直接當短影音封面，也可以拆成 Remotion 的背景、人物、文字與
          CTA。
        </Subline>
      </div>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <ShortVideoCoverMock
          image={remotionReelsPage24Cover}
          label="Cover Example"
          showOverlay={false}
        />
      </div>
    </div>
  </div>
);

const RemotionCompositionSetup: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label>Step 1</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>先定義 Composition（影片規格／總畫布）</PageTitle>
        </div>
        <Subline>
          Composition 可以先理解成「這支影片的總設定」：尺寸、fps、總長度、要播放哪個 React
          元件，都在這裡決定。
        </Subline>
      </div>
      <div
        style={{
          display: 'grid',
          gap: 20,
        }}
      >
        <div
          style={{
            padding: 28,
            borderRadius: 24,
            background: '#1f1b16',
            color: '#fff8ed',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 24,
            lineHeight: 1.6,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`<Composition
  id="taichung-reel"
  component={TaichungVideo}
  width={1080}
  height={1920}
  fps={30}
  durationInFrames={450}
/>`}
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {[
            ['中文意思', 'Composition = 影片規格／總畫布。'],
            ['尺寸', '1080×1920 是整支片的直式畫布。'],
            ['fps', '30 fps 代表 1 秒 = 30 frames。'],
          ].map(([title, body]) => (
            <div
              key={title}
              style={{
                padding: '18px 18px',
                borderRadius: 18,
                background: palette.surface,
                border: `1px solid ${palette.line}`,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, color: palette.accent }}>{title}</div>
              <div style={{ marginTop: 8, fontSize: 22, lineHeight: 1.45, color: palette.muted }}>
                {body}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            padding: 22,
            borderRadius: 22,
            background: palette.surface,
            border: `1px solid ${palette.line}`,
            boxShadow: '0 18px 44px rgba(61, 39, 15, 0.08)',
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 900, color: palette.gold }}>提示詞可以這樣下</div>
          <div
            style={{
              marginTop: 10,
              fontSize: 22,
              lineHeight: 1.55,
              color: palette.muted,
              whiteSpace: 'pre-wrap',
            }}
          >
            {`請先幫我建立一個 Remotion Composition：
尺寸 1080×1920、fps 30、總長 15 秒，
component 叫 TaichungVideo。`}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RemotionLayerPlan: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div style={contentPad}>
      <Label>Step 2</Label>
      <div style={{ marginTop: 24 }}>
        <PageTitle>再用 Sequence（場景段落）安排時間</PageTitle>
      </div>
      <Subline>
        Sequence 可以先理解成「影片裡的一段場景」。同一個 Composition 裡會放多個 Sequence，
        每段指定從第幾幀開始、停留多久。
      </Subline>
      <div
        style={{
          marginTop: 44,
          display: 'grid',
          gridTemplateColumns: '0.78fr 1.22fr',
          gap: 34,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            padding: 30,
            borderRadius: 24,
            background: '#f8efe3',
            border: `1px solid ${palette.line}`,
            display: 'grid',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: '0.16em', color: palette.gold }}>
            場景切分示意
          </div>
          {[
            ['01', 'Cover Scene', '影片開頭，先交代主題與吸引點。'],
            ['02', 'Problem Scene', '第二段講痛點，讓觀眾知道這支片要解決什麼。'],
            ['03', 'Demo Scene', '第三段開始示範，接住前面的問題。'],
          ].map(([num, title, body]) => (
            <div
              key={num}
              style={{
                padding: '18px 20px',
                borderRadius: 18,
                background: 'rgba(255, 252, 247, 0.78)',
                border: `1px solid ${palette.line}`,
                display: 'grid',
                gridTemplateColumns: '68px 1fr',
                gap: 16,
                alignItems: 'start',
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color: palette.accent }}>{num}</div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>{title}</div>
                <div style={{ marginTop: 8, fontSize: 22, lineHeight: 1.5, color: palette.muted }}>
                  {body}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', alignContent: 'center' }}>
          <div
            style={{
              padding: 24,
              borderRadius: 22,
              background: '#1f1b16',
              color: '#fff8ed',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: 21,
              lineHeight: 1.55,
              whiteSpace: 'pre-wrap',
              boxShadow: '0 22px 54px rgba(61, 39, 15, 0.16)',
            }}
          >
            {`提示詞：
請把影片拆成 3 個 Sequence：
0–3 秒 CoverScene，3–7 秒 ProblemScene，
7–15 秒 DemoScene。每段用 from 和 durationInFrames 表示。`}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RemotionBatchTemplate: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 42,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label>Template Output</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>最後變成可批次產片的模板</PageTitle>
        </div>
        <Subline>
          同一支 Remotion 影片，只要換資料，就能輸出不同講座主題、不同文案、不同 CTA。
        </Subline>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        {[
          ['短影音講座', 'VIDEO CLASS', '#f1d39a', 'video'],
          ['設計圖文講座', 'DESIGN CLASS', '#dcefe8', 'design'],
          ['地方創生講座', 'LOCAL CLASS', '#f7c7a3', 'local'],
        ].map(([title, label, bg, variant], index) => (
          <div
            key={title}
            style={{
              transform: `translateY(${index === 1 ? 24 : 0}px)`,
            }}
          >
            <LectureReelsMock
              title={title}
              label={label}
              color={bg}
              variant={variant as 'video' | 'design' | 'local'}
            />
            <div
              style={{
                marginTop: 12,
                height: 10,
                borderRadius: 999,
                background: bg,
                border: `1px solid ${palette.line}`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ClosingQA: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.92fr 1.08fr',
        gap: 36,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label color={palette.gold}>Closing</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>今天的 Q&amp;A</PageTitle>
        </div>
        <Subline>
          如果大家對 ChatGPT 生圖、Canva 修圖、Remotion
          短影音，或整個實作流程有問題，現在可以直接提問。
        </Subline>
      </div>
      <div
        style={{
          display: 'grid',
          gap: 18,
        }}
      >
        <div
          style={{
            padding: 26,
            borderRadius: 24,
            background: palette.surface,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: '0.16em', color: palette.accent }}>
            Q&amp;A
          </div>
          <div style={{ marginTop: 14, fontSize: 34, lineHeight: 1.55 }}>
            發問一些你現在最卡的問題，
            <br />
            我們直接用今天的案例回答。
          </div>
        </div>
        <div
          style={{
            padding: 28,
            borderRadius: 24,
            background: '#1f1b16',
            color: '#fff8ed',
            border: `1px solid rgba(255,248,237,0.14)`,
            boxShadow: '0 22px 54px rgba(61, 39, 15, 0.16)',
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: '0.18em', color: '#f1d39a' }}>NEXT</div>
          <div style={{ marginTop: 16, fontSize: 42, fontWeight: 700, lineHeight: 1.25 }}>
            接下來直接帶大家實作
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 26,
              lineHeight: 1.6,
              color: 'rgba(255,248,237,0.84)',
            }}
          >
            先回答問題，再現場一步一步把圖文、修圖和短影音流程跑一次。
          </div>
        </div>
      </div>
    </div>
  </div>
);

const JoinOfficialLine: Page = () => (
  <div style={frame}>
    <div style={shell} />
    <div
      style={{
        ...contentPad,
        display: 'grid',
        gridTemplateColumns: '0.96fr 0.84fr',
        gap: 48,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div>
        <Label>Connect</Label>
        <div style={{ marginTop: 24 }}>
          <PageTitle>請掃描加入官方賴</PageTitle>
        </div>
        <Subline>
          掃描右側 QR code，直接加入官方 LINE。
          <br />
          後續活動通知、教材資訊與聯絡方式都會整理在這裡。
        </Subline>
        <div
          style={{
            marginTop: 44,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 18,
            padding: '18px 26px',
            borderRadius: 999,
            background: palette.accent,
            color: '#f8fff9',
            boxShadow: '0 18px 40px rgba(12, 124, 89, 0.22)',
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: '0.18em' }}>LINE</div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>現在加入</div>
        </div>
      </div>
      <div
        style={{
          justifySelf: 'end',
          width: 660,
          padding: 30,
          borderRadius: 40,
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          boxShadow: '0 28px 68px rgba(61, 39, 15, 0.12)',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={lineGainfriendsQr}
          alt="官方 LINE QR code"
          style={{
            width: '100%',
            display: 'block',
            borderRadius: 24,
          }}
        />
      </div>
    </div>
  </div>
);

export default [
  Cover,
  SpeakerIntro,
  PublicTalks,
  PrivateCoaching,
  WhyChatGPT,
  WhyChatGPTAnswer,
  HowToOperate,
  MaterialExample,
  DemoPrompt,
  StepTwo,
  StepTwoTips,
  StepThree,
  GoldenRule,
  Closing,
  CanvaDemo,
  RepeatUntilDone,
  ShortVideoPrompt,
  ImageBeforeVideo,
  ScreenshotMaterialPitfalls,
  ShortVideoSafeZone,
  TemplateMindset,
  TemplateLayers,
  TemplateDataSwap,
  RemotionReelsExample,
  DialogueReplacement,
  AdvancedChoice,
  AiShortVideoWorkflow,
  RemotionIntro,
  RemotionVideoPromptExample,
  RemotionIsCodeFirst,
  HyperframesUseCases,
  InstallRemotionWithAgent,
  RemotionVideoAnatomy,
  RemotionStudioPreview,
  RemotionCompositionSetup,
  HyperframesQuestionBridge,
  RemotionLayerPlan,
  HyperframesTemplatesAndPrompts,
  RemotionBatchTemplate,
  ClosingQA,
  JoinOfficialLine,
] satisfies Page[];
