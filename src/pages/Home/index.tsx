import { lazy } from "react";
import MotivationContent from "../../content/MotivationContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";
import ProductContent from "../../content/ProductContent.json";               

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        button={MissionContent.button}
        icon="market.svg"
        id="mission"
      />
      <MiddleBlock
        title={MotivationContent.title}
        content={MotivationContent.text}
        button={MotivationContent.button}
        id="motivation"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="increase.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={ProductContent.title}
        content={ProductContent.text}
        button={ProductContent.button}
        icon="mobile.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
