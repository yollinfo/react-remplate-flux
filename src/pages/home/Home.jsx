import { Link, Navigate } from 'react-router';
import Logo from '../../components/Logo.jsx';
import NavButton from '../../components/NavButton.jsx';

function Home() {
  return (
    <>
      <h1 className="text-center mt-5 text-body-secondary fw-bold">
        Uh, I guess you dont have anything to show yet on Home Page?
      </h1>
      <Logo />
      <div className="text-center">
        <NavButton to="/about" text={'> About'} />
        <NavButton to="/demo" text="> Demo" />
      </div>
    </>
  );
}

export default Home;
