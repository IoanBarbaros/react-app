import { Row } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import i18n from "../../translation";
import { LanguageSwitch, LanguageSwitchContainer } from "../Footer/styles";
import {
  HeaderSection,
  LogoContainer,
} from "./styles";

const Header2 = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="180px" height="100px" />
          </LogoContainer>
          <LanguageSwitchContainer>
              <LanguageSwitch onClick={() => handleChange("en")}>
              <SvgIcon
              src="us.svg"
              aria-label="homepage"
              width="30px"
              height="30px"
                />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="ro.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
        </Row>
      </Container>
    </HeaderSection>
    
  );
};

export default withTranslation()(Header2);

