import Companies from '../Companies/Companies';
import Contact from '../Contact/Contact';
import Extra from '../Extra/Extra';
import Residencies from '../Residencies/Residencies';
import Value from '../Value/Value';


function Home() {
  return (
    <>
      <Extra />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
    </>
  );
}

export default Home;
