import { Row } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
} from "./styles";

const Header2 = ({ t }: any) => {

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="180px" height="100px" />
          </LogoContainer>
        </Row>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header2);
