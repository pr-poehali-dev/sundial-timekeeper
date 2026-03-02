import { Hero } from "@/components/Hero";
import { Pill } from "@/components/Pill";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const AVATAR = "https://cdn.poehali.dev/projects/f7eecd3c-efef-4990-bd6c-36031573c509/bucket/10a2c391-1584-486d-b9f5-e5dbe7ed6d21.jpeg";

const players = [
  { nick: "xinto666", role: "Star Player", reserve: false, faceit: 10, rating: "1.00" },
  { nick: "xleb666", role: "AWP", reserve: false, faceit: 8, rating: "1.00" },
  { nick: "duwick", role: "Entry Fragger", reserve: false, faceit: 4, rating: "1.00" },
  { nick: "mef0mu", role: "Support", reserve: false, faceit: 5, rating: "1.00" },
  { nick: "laky", role: "Opornik B", reserve: false, faceit: 4, rating: "1.00" },
  { nick: "kyllize", role: "Entry Fragger", reserve: true, faceit: 10, rating: "1.00" },
  { nick: "floss", role: "Entry Fragger", reserve: true, faceit: 4, rating: "1.00" },
];

function faceitColor(lvl: number) {
  if (lvl >= 10) return "text-red-500";
  if (lvl >= 7) return "text-orange-400";
  if (lvl >= 5) return "text-yellow-400";
  return "text-foreground/50";
}

const news = [
  {
    date: "01 MAR 2026",
    tag: "Состав",
    title: "Официальный состав SANCE TEAM сформирован",
    text: "В наш состав переходят mef0mu, xinto, xleb, duwick, laky, floss и kyllize. Команда в полной боевой готовности к предстоящему сезону.",
    link: null,
  },
  {
    date: "25 FEB 2026",
    tag: "Турнир",
    title: "Выступаем на StarLadder",
    text: "Наш предстоящий турнир — StarLadder. Мы покажем оппонентам настоящее соперничество и попробуем пройти в финал.",
    link: null,
  },
  {
    date: "02 MAR 2026",
    tag: "Соцсети",
    title: "Мы в Telegram — подписывайтесь!",
    text: "Следите за новостями клана, анонсами матчей и результатами в нашем официальном Telegram-канале SANCE TEAM.",
    link: "https://t.me/sanceteam",
  },
];


type Player = typeof players[number];

function PlayerModal({ player, onClose }: { player: Player; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative border border-border/60 bg-background p-8 w-full max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/40 hover:text-foreground transition-colors"
        >
          <Icon name="X" size={18} />
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-2 border-primary/60">
            <img src={AVATAR} alt={player.nick} className="w-full h-full object-cover object-top" />
          </div>
          <p className="font-mono font-bold text-primary text-xl">{player.nick}</p>
          <p className="font-mono text-xs text-foreground/50 uppercase mt-1 mb-6">{player.role}</p>

          <div className="w-full border border-border/20 divide-y divide-border/20">
            <div className="flex items-center justify-between px-5 py-3">
              <span className="font-mono text-xs text-foreground/40 uppercase">HLTV Rating</span>
              <span className="font-mono text-sm font-bold text-primary">{player.rating}</span>
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <span className="font-mono text-xs text-foreground/40 uppercase">FACEIT</span>
              <span className={`font-mono text-sm font-bold ${faceitColor(player.faceit!)}`}>LVL {player.faceit}</span>
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <span className="font-mono text-xs text-foreground/40 uppercase">Статус</span>
              <span className="font-mono text-xs text-green-400 uppercase">{player.reserve ? "Запас" : "Основа"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const mainPlayers = players.filter((p) => !p.reserve);
  const reservePlayers = players.filter((p) => p.reserve);

  return (
    <>
      <Hero />

      {selectedPlayer && (
        <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
      )}

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
                onClick={() => setSelectedPlayer(p)}
                className="border border-border/40 p-6 hover:border-primary/60 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto border-2 border-border/40 group-hover:border-primary/60 transition-colors duration-300">
                  <img src={AVATAR} alt={p.nick} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-center">
                  <p className="font-mono font-bold text-primary">{p.nick}</p>
                  <p className="font-mono text-xs text-foreground/50 uppercase mt-1">{p.role}</p>
                  <div className="mt-3 pt-3 border-t border-border/20 space-y-1">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="font-mono text-xs text-foreground/30">FACEIT</span>
                      <span className={`font-mono text-xs font-bold ${faceitColor(p.faceit!)}`}>LVL {p.faceit}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="font-mono text-xs text-foreground/30">HLTV</span>
                      <span className="font-mono text-xs font-bold text-foreground/70">{p.rating}</span>
                    </div>
                  </div>
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
                    onClick={() => setSelectedPlayer(p)}
                    className="border border-border/20 p-5 hover:border-primary/40 transition-colors duration-300 group w-40 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-3 mx-auto border border-border/30 group-hover:border-primary/40 transition-colors duration-300 opacity-60 group-hover:opacity-90">
                      <img src={AVATAR} alt={p.nick} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="text-center">
                      <p className="font-mono font-bold text-foreground/60 text-sm group-hover:text-primary transition-colors">{p.nick}</p>
                      <p className="font-mono text-xs text-foreground/30 uppercase mt-1">{p.role}</p>
                      <div className="mt-2 pt-2 border-t border-border/20 space-y-1">
                        <div className="flex items-center justify-center gap-1">
                          <span className="font-mono text-xs text-foreground/20">FACEIT</span>
                          <span className={`font-mono text-xs font-bold ${faceitColor(p.faceit!)}`}>LVL {p.faceit}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <span className="font-mono text-xs text-foreground/20">HLTV</span>
                          <span className="font-mono text-xs font-bold text-foreground/50">{p.rating}</span>
                        </div>
                      </div>
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
                {n.link ? (
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.203-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
                    </svg>
                    <span className="font-mono text-xs uppercase">Перейти в Telegram</span>
                    <Icon name="ArrowRight" size={14} />
                  </a>
                ) : (
                  <div className="mt-6 flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-300">
                    <span className="font-mono text-xs uppercase">Читать</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                )}
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
          <div className="flex flex-col items-center justify-center py-20 border border-border/20">
            <Icon name="Swords" size={48} className="text-foreground/20 mb-6" />
            <p className="font-mono text-foreground/30 uppercase text-sm tracking-widest">Матчей пока нет</p>
            <p className="font-mono text-foreground/20 text-xs mt-2">Скоро здесь появятся результаты и расписание</p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="relative z-10 py-24 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="text-center mb-16">
            <Pill className="mb-6">Клан</Pill>
            <h2 className="text-4xl md:text-5xl font-sentient">
              Достижения <i className="font-light">команды</i>
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center py-20 border border-border/20">
            <Icon name="Trophy" size={48} className="text-foreground/20 mb-6" />
            <p className="font-mono text-foreground/30 uppercase text-sm tracking-widest">Достижений пока нет</p>
            <p className="font-mono text-foreground/20 text-xs mt-2">Мы только начинаем — скоро здесь будут трофеи</p>
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