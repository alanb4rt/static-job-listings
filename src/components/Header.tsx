import bgHeaderDesktop from "../assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "../assets/images/bg-header-mobile.svg";

export default function Header() {
  return (
    <header>
      <picture className="block h-40 bg-[var(--color-primary)]">
        <source
          className="w-full h-full object-cover"
          srcSet={bgHeaderDesktop}
          media="(min-width: 768px)"
        />
        <img
          className="w-full h-full object-cover"
          src={bgHeaderMobile}
          alt=""
        />
      </picture>
    </header>
  );
}
