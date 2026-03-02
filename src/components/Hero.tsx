import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">COUNTER STRIKE 2</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Наша команда стремится <br />
          <i className="font-light">пробиться в ESEA League</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[500px] mx-auto">
          Профессиональный клан CS2 — точность, командная игра, результат
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-14">
          <a href="#roster">
            <Button
              variant="outline"
              className="font-mono uppercase"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Состав]
            </Button>
          </a>
          <a href="#news">
            <Button
              variant="outline"
              className="font-mono uppercase"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Новости]
            </Button>
          </a>
          <a href="#matches">
            <Button
              className="font-mono uppercase"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Матчи]
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
