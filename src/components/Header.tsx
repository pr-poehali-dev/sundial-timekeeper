import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <a href="/">
          <Logo className="w-[120px] md:w-[150px]" />
        </a>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { label: "Состав", href: "#roster" },
            { label: "Новости", href: "#news" },
            { label: "Матчи", href: "#matches" },
            { label: "Достижения", href: "#achievements" },
          ].map((item) => (
            <a
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
          href="#matches"
        >
          [Расписание]
        </a>
        <MobileMenu />
      </header>
    </div>
  );
};