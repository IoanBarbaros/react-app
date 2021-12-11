import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { useHistory } from 'react-router-dom';

import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
    const history = useHistory();
    const handleClick = () => history.push('/about');
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={handleClick}>
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="75%" height="75%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
