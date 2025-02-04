import { NavLink, Outlet } from "react-router-dom";

const Contract = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-sky-300 p-3 rounded-2xl shadow-2xl w-96">
        <div>
          <h1>I'm contract </h1>
          <p>
            Contract Agreement This agreement is made between Sufiyan, a
            dedicated student from Koytoba, and any interested party. 1.
            Background: Sufiyan is in his final year of studies with a strong
            passion for technology and web development. He actively works with
            tools like React and Node.js, continuously improving his skills. 2.
            Commitment: Despite financial challenges, Sufiyan remains committed
            to learning and professional growth. He also has a keen interest in
            general knowledge and self-improvement. 3. Objective: This contract
            serves as a declaration of Sufiyan’s dedication to his goals and
            future opportunities. Signed by: Sufiyan Date: [Insert Date]
          </p>
          <NavLink to={"inputpage"}>Next Page</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contract;
