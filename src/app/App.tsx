import { Coffee, Utensils, MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1763689389852-3f050e1750a3?w=1600&h=1000&fit=crop&auto=format";
const DIVIDER_IMAGE =
  "https://images.unsplash.com/photo-1785057687789-7364ccc00a5d?w=1600&h=700&fit=crop&auto=format";

const menuItems = [
  {
    type: "coffee" as const,
    name: "ブレンドコーヒー",
    sub: "House Blend",
    desc: "深みとコクのある自家ブレンド。毎朝丁寧に焙煎しております",
    price: "¥600",
  },
  {
    type: "coffee" as const,
    name: "本日のコーヒー",
    sub: "Single Origin",
    desc: "産地を厳選したシングルオリジン。本日の豆はお気軽にお尋ねください",
    price: "¥700",
  },
  {
    type: "food" as const,
    name: "サンドウィッチ",
    sub: "Sandwich",
    desc: "地元の新鮮な食材を使った手作りのサンドウィッチです",
    price: "¥800",
  },
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="w-10 h-px bg-accent" />
      <div className="w-1.5 h-1.5 rotate-45 border border-accent" />
      <div className="w-10 h-px bg-accent" />
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Noto Serif JP', serif" }}
    >
      {/* ────────────────────────────────────────
          HERO
      ──────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex flex-col overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        />
        {/* Layered warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1008]/65 via-[#2C1A0E]/45 to-[#2C1A0E]/75" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6">
          <p
            className="text-[10px] tracking-[0.55em] text-[#D4B896]/75 mb-7 uppercase"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            Ehime &nbsp;·&nbsp; Imabari &nbsp;·&nbsp; Est. 1962
          </p>

          <h1
            className="text-[#FAF7F0] tracking-[0.18em] mb-3 font-semibold text-[64px]"
            style={{ fontFamily: "'Shippori Mincho B1', serif" }}
          ><span className=""><span className="">SUNAB</span>A</span></h1>
          <p
            className="text-2xl sm:text-3xl md:text-4xl text-[#FAF7F0]/85 tracking-[0.45em] font-normal mb-8"
            style={{ fontFamily: "'Shippori Mincho B1', serif" }}
          >
            Coffee
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-px bg-[#B8956A]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#B8956A]" />
            <div className="w-14 h-px bg-[#B8956A]" />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-[#E8DCCA]/90 leading-relaxed max-w-lg tracking-wide">
            海を眺めながら、ゆっくりした時間を
            <br className="hidden sm:block" />
            コーヒーと共に
          </p>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex justify-center pb-10">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[9px] tracking-[0.5em] text-[#B8956A]/65 uppercase">scroll</p>
            <div className="w-px h-10 bg-gradient-to-b from-[#B8956A]/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          MENU
      ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-[9px] tracking-[0.65em] text-muted-foreground mb-5 uppercase">
              Menu
            </p>
            <h2
              className="text-3xl md:text-4xl text-foreground mb-5 tracking-wider"
              style={{ fontFamily: "'Shippori Mincho B1', serif" }}
            >
              コーヒーへのこだわり
            </h2>
            <Ornament />
            <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide">
              世界各地から厳選した豆をお届けします。
            </p>
          </div>

          {/* Items */}
          <div className="border-t border-border">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between py-7 border-b border-border gap-6 group transition-colors hover:bg-card/60"
              >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="shrink-0 mt-1 w-5 flex justify-center">
                    {item.type === "coffee" ? (
                      <Coffee size={17} className="text-accent" strokeWidth={1.5} />
                    ) : (
                      <Utensils size={17} className="text-accent" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-lg text-foreground leading-snug tracking-wide"
                      style={{ fontFamily: "'Shippori Mincho B1', serif" }}
                    >
                      {item.name}
                    </p>
                    <p className="text-[9px] tracking-[0.35em] text-accent mt-0.5 uppercase">
                      {item.sub}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed tracking-wide">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <p
                  className="text-xl text-primary shrink-0 pt-0.5 tracking-wide"
                  style={{ fontFamily: "'Shippori Mincho B1', serif" }}
                >
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          PHOTO DIVIDER
      ──────────────────────────────────────── */}
      <div className="h-60 md:h-80 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${DIVIDER_IMAGE})` }}
          role="img"
          aria-label="窓の外に広がる瀬戸内の海"
        />
        <div className="absolute inset-0 bg-[#2C1A0E]/35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="text-[11px] tracking-[0.7em] text-[#FAF7F0]/60 uppercase"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            Seto Inland Sea
          </p>
        </div>
      </div>

      {/* ────────────────────────────────────────
          SHOP INFO
      ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-[9px] tracking-[0.65em] text-muted-foreground mb-5 uppercase">
              Shop Info
            </p>
            <h2
              className="text-3xl md:text-4xl text-foreground tracking-wider"
              style={{ fontFamily: "'Shippori Mincho B1', serif" }}
            >
              店舗情報
            </h2>
            <div className="mt-5">
              <Ornament />
            </div>
          </div>

          {/* Info rows */}
          <div className="space-y-9 mb-12">
            <div className="flex gap-6 items-start">
              <div className="shrink-0 mt-1">
                <Clock size={16} className="text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[9px] tracking-[0.45em] text-muted-foreground uppercase mb-2">
                  営業時間
                </p>
                <p
                  className="text-xl text-foreground tracking-wider"
                  style={{ fontFamily: "'Shippori Mincho B1', serif" }}
                >
                  10:00 〜 17:00
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0 mt-1">
                <Calendar size={16} className="text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[9px] tracking-[0.45em] text-muted-foreground uppercase mb-2">
                  定休日
                </p>
                <p
                  className="text-xl text-foreground tracking-wider"
                  style={{ fontFamily: "'Shippori Mincho B1', serif" }}
                >
                  水曜日
                </p>
              </div>
            </div>
          </div>

          {/* Reservation note */}
          <div className="border border-border/70 px-6 py-5 bg-background/60 relative">
            <span className="absolute -top-2.5 left-5 bg-secondary px-2 text-[9px] tracking-[0.4em] text-accent uppercase">
              Note
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
              ※ お席のご予約承ります。ご予約はお電話にてお願いします。
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          FOOTER / CONTACT
      ──────────────────────────────────────── */}
      <footer className="py-20 md:py-28 bg-[#2C1A0E]">
        <div className="max-w-xl mx-auto px-6">

          {/* Logo */}
          <div className="text-center mb-14">
            <h2
              className="text-3xl text-[#FAF7F0] tracking-[0.25em] mb-4"
              style={{ fontFamily: "'Shippori Mincho B1', serif" }}
            >SUNABA Coffee</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-px bg-[#B8956A]/50" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#B8956A]/50" />
              <div className="w-10 h-px bg-[#B8956A]/50" />
            </div>
          </div>

          {/* Contact items */}
          <div className="space-y-8 mb-16">
            <div className="flex gap-5 items-start">
              <MapPin size={15} className="text-[#B8956A] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[9px] tracking-[0.45em] text-[#B8956A]/65 uppercase mb-1.5">
                  住所
                </p>
                <p className="text-sm text-[#E8DCCA] leading-relaxed tracking-wide">
                  愛媛県今治市〜〜〜〜〜
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <Phone size={15} className="text-[#B8956A] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[9px] tracking-[0.45em] text-[#B8956A]/65 uppercase mb-1.5">
                  Tel
                </p>
                <a
                  href="tel:0898000000"
                  className="text-sm text-[#E8DCCA] tracking-widest hover:text-[#FAF7F0] transition-colors duration-200"
                >
                  0898-00-0000
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <Mail size={15} className="text-[#B8956A] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[9px] tracking-[0.45em] text-[#B8956A]/65 uppercase mb-1.5">
                  お問い合わせ
                </p>
                <a
                  href="mailto:info@sunabacoffee.jp"
                  className="text-sm text-[#E8DCCA] hover:text-[#FAF7F0] transition-colors duration-200"
                >
                  info@sunabacoffee.jp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="border-t border-[#B8956A]/15 pt-8 text-center">
            <p className="text-[9px] tracking-[0.35em] text-[#B8956A]/40 uppercase">
              © 2024 SUNABA Coffee &nbsp;·&nbsp; All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
