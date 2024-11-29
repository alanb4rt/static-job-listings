import LogoCompagny from "../assets/images/myhome.svg";

export default function JobCard() {
  return (
    <div className="flex items-center gap-8 p-8 bg-white shadow-lg rounded">
      <img src={LogoCompagny} alt="Logo compagny" />
      <div className="flex flex-1 flex-col justify-between">
        <p className="text-[var(--color-primary)] font-bold">MyHome</p>
        <h2 className="text-xl font-bold">Junior Frontend Developer</h2>
        <div className="flex items-center gap-4 text-[var(--dark-grayish-cyan)]">
          <p>5d ago</p>
          <p>Contract</p>
          <p>USA only</p>
        </div>
      </div>
      <ul className="flex items-center gap-4">
        <li>Frontend</li>
        <li>Junior</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </div>
  );
}
/*
<!-- Item Start -->
  MyHome
  Junior Frontend Developer
  5d ago
  Contract
  USA only
  <!-- Role -->
  Frontend
  <!-- Level -->
  Junior
  <!-- Languages -->
  CSS
  JavaScript
  <!-- Item End -->
  */
