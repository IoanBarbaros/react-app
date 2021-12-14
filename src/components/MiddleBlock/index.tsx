import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { useHistory } from 'react-router-dom';
interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
  id: string;
}

const MiddleBlock = ({ title, content, button, t, id }: MiddleBlockProps) => {
  const history = useHistory();
  const handleClick = () => history.push('/about');
  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button  onClick={handleClick}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
