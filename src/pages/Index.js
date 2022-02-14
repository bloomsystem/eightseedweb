import { Information } from '../components/Information';
import { MainView } from '../components/MainView';
import NavbarPart from '../components/NavbarPart';
import { Works } from '../components/Works';
import { Service } from '../components/Service';
import { Associate } from '../components/Associate';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

export const Index = () => {
  return (
    <>
      <NavbarPart istop={true} />
      <MainView />
      <Information />
      <Works />
      <Service />
      <Associate />
      <Contact />
      <Footer />
    </>
  );
};
