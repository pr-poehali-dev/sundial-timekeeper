import { Hero } from "@/components/Hero";
import { Pill } from "@/components/Pill";
import Icon from "@/components/ui/icon";

const AVATAR = "https://cdn.poehali.dev/projects/f7eecd3c-efef-4990-bd6c-36031573c509/bucket/10a2c391-1584-486d-b9f5-e5dbe7ed6d21.jpeg";

const players = [
  { nick: "xinto666", role: "Star Player", reserve: false },
  { nick: "xleb666", role: "AWP", reserve: false },
  { nick: "duwick", role: "Entry Fragger", reserve: false },
  { nick: "mef0mu", role: "Support", reserve: false },
  { nick: "laky", role: "Opornik B", reserve: false },
  { nick: "kyllize", role: "Entry Fragger", reserve: true },
  { nick: "floss", role: "Entry Fragger", reserve: true },
];

const news = [
  {
    date: "01 MAR 2026",
    tag: "Состав",
    title: "Официальный состав SANCE TEAM сформирован",
    text: "В наш состав переходят mef0mu, xinto, xleb, duwick, laky, floss и kyllize. Команда в полной боевой готовности к предстоящему сезону.",
  },
  {
    date: "25 FEB 2026",
    tag: "Турнир",
    title: "Выступаем на StarLadder",
    text: "Наш предстоящий турнир — StarLadder. Мы покажем оппонентам настоящее соперничество и попробуем пройти в финал.",
  },
  {
    date: "10 FEB 2026",
    tag: "Цель",
    title: "Путь в ESEA League начинается",
    text: "Главная цель сезона — квалификация в ESEA League и выступление на профессиональных киберспортивных матчах.",
  },
];

const matches = [
  {
    date: "20 MAR 2026",
    opponent: "TBD",
    event: "StarLadder",
    map: "TBD",
    status: "upcoming",
  },
  {
    date: "05 MAR 2026",
    opponent: "NOVA SQUAD",
    event: "ESEA Qualifier",
    map: "Inferno",
    status: "upcoming",
  },
  {
    date: "28 FEB 2026",
    opponent: "APEX FORCE",
    event: "ESL Pro League",
    map: "Dust2",
    status: "win",
    score: "16:9",
  },
  {
    date: "21 FEB 2026",
    opponent: "IRON WOLVES",
    event: "Online League",
    map: "Nuke",
    status: "win",
    score: "16:11",
  },
  {
    date: "14 FEB 2026",
    opponent: "BLADE TEAM",
    event: "Online League",
    map: "Overpass",
    status: "loss",
    score: "12:16",
  },
];

export default function Index() {
  const mainPlayers = players.filter((p) => !p.reserve);
  const reservePlayers = players.filter((p) => p.reserve);

  return (
    <>
      <Hero />

      {/* ROSTER */}
      <section id="roster" className="relative z-10 py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <Pill className="mb-6">Игроки</Pill>
            <h2 className="text-4xl md:text-5xl font-sentient">
              Состав <i className="font-light">клана</i>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {mainPlayers.map((p) => (
              <div
                key={p.nick}
                className="border border-border/40 p-6 hover:border-primary/60 transition-colors duration-300 group"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto border-2 border-border/40 group-hover:border-primary/60 transition-colors duration-300">
                  <img src={AVATAR} alt={p.nick} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-center">
                  <p className="font-mono font-bold text-primary">{p.nick}</p>
                  <p className="font-mono text-xs text-foreground/50 uppercase mt-1">{p.role}</p>
                </div>
              </div>
            ))}
          </div>

          {reservePlayers.length > 0 && (
            <div>
              <p className="font-mono text-xs text-foreground/40 uppercase mb-4 text-center">Запас</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {reservePlayers.map((p) => (
                  <div
                    key={p.nick}
                    className="border border-border/20 p-5 hover:border-primary/40 transition-colors duration-300 group w-40"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-3 mx-auto border border-border/30 group-hover:border-primary/40 transition-colors duration-300 opacity-60 group-hover:opacity-90">
                      <img src={AVATAR} alt={p.nick} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="text-center">
                      <p className="font-mono font-bold text-foreground/60 text-sm group-hover:text-primary transition-colors">{p.nick}</p>
                      <p className="font-mono text-xs text-foreground/30 uppercase mt-1">{p.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="relative z-10 py-24 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="text-center mb-16">
            <Pill className="mb-6">Клан</Pill>
            <h2 className="text-4xl md:text-5xl font-sentient">
              Последние <i className="font-light">новости</i>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n) => (
              <div
                key={n.title}
                className="border border-border/40 p-8 hover:border-primary/60 transition-colors duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-primary uppercase">{n.tag}</span>
                  <span className="font-mono text-xs text-foreground/40">{n.date}</span>
                </div>
                <h3 className="font-sentient text-xl mb-3 group-hover:text-primary/90 transition-colors duration-300 leading-snug">
                  {n.title}
                </h3>
                <p className="font-mono text-sm text-foreground/50 leading-relaxed">{n.text}</p>
                <div className="mt-6 flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-300">
                  <span className="font-mono text-xs uppercase">Читать</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCHES */}
      <section id="matches" className="relative z-10 py-24 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="text-center mb-16">
            <Pill className="mb-6">Расписание</Pill>
            <h2 className="text-4xl md:text-5xl font-sentient">
              Матчи <i className="font-light">и результаты</i>
            </h2>
          </div>
          <div className="space-y-3">
            {matches.map((m) => (
              <div
                key={m.date + m.opponent}
                className="border border-border/40 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-foreground/40 w-24 shrink-0">{m.date}</span>
                  <div>
                    <p className="font-mono font-bold text-foreground uppercase">vs {m.opponent}</p>
                    <p className="font-mono text-xs text-foreground/40 mt-0.5">{m.event} · {m.map}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {m.status === "upcoming" ? (
                    <span className="font-mono text-xs text-primary uppercase border border-primary/40 px-3 py-1">Предстоит</span>
                  ) : m.status === "win" ? (
                    <>
                      <span className="font-mono text-lg font-bold text-green-400">{m.score}</span>
                      <span className="font-mono text-xs text-green-400 uppercase border border-green-400/40 px-3 py-1">Победа</span>
                    </>
                  ) : (
                    <>
                      <span className="font-mono text-lg font-bold text-red-400">{m.score}</span>
                      <span className="font-mono text-xs text-red-400 uppercase border border-red-400/40 px-3 py-1">Поражение</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border/20 py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-foreground/30 uppercase">© 2026 SANCE TEAM · CS2 Clan</p>
          <p className="font-mono text-xs text-foreground/30 uppercase">Counter-Strike 2</p>
        </div>
      </footer>
    </>
  );
}