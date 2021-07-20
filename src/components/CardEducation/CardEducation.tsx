import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AxiosResponse, AxiosError } from 'axios';
import { Row, Col, Card, Avatar } from 'antd';

import Api from '../../utils/Api';
import {
  Div,
  Span,
  H3,
  H4,
  Text,
  Link,
  Modal,
  CertificateContainer,
  CarrouselItem,
  FigureImage,
  Image,
  Carousel,
} from './styledCardEducation';
import CustomScrollBars from '../../utils/CustomScroballBars';
interface Education {
  id: string;
  dateStart: string;
  dateEnd: string;
  certificate: string | boolean;
}

interface Course {
  map(arg0: (course: Course) => React.ReactNode): React.ReactNode;
  badge: string;
  career: string;
  diploma_link: string;
  id: number;
  title: string;
  url: string;
}

const { Meta } = Card;

const CardEducation: React.FC<Education> = (props) => {
  const { id, dateStart, dateEnd, certificate } = props;

  const [t] = useTranslation('Education');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [courses, setCourses] = useState<Course | null>();

  useEffect(() => {
    if (certificate) {
      Api()
        .then((response: AxiosResponse) => {
          const {
            data: { userData },
          } = response;

          setCourses(userData.courses);
        })
        .catch((error: AxiosError) => {
          setCourses(null);
          console.log(error);
        });
    }
  }, []);

  return (
    <Div>
      <Row gutter={[0, 8]}>
        <Col span="24">
          <H3>{t(`${id}.title`)}</H3>
        </Col>
        <Col span="24">
          <H4>
            {dateStart} - {dateEnd}
          </H4>
        </Col>
        <Col span="24">
          <Text>
            {t(`${id}.description`)}
            {certificate && (
              <Link rel="noreferrer" onClick={() => setModalVisible(true)}>
                {t('btn')}
              </Link>
            )}
          </Text>
        </Col>
      </Row>
      <Modal
        centered
        width={1200}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <CertificateContainer>
          <Row align="middle" justify="center">
            <Col xs={{ span: '24' }} xl={{ span: '10' }}>
              {!courses && <button>Reiniciar</button>}
              <CustomScrollBars
                style={{ width: '100%', height: 'calc(100vh - 200px)' }}
              >
                {courses &&
                  courses.map((course: Course) => (
                    <Card
                      key={course.id}
                      style={{ backgroundColor: 'transparent', border: 0 }}
                    >
                      <Meta
                        avatar={<Avatar src={course.badge} />}
                        title={course.title}
                        description={
                          <Link
                            href={`https://platzi.com${course.diploma_link}`}
                            target="_blank"
                          >
                            Certificado
                          </Link>
                        }
                      />
                    </Card>
                  ))}
              </CustomScrollBars>
            </Col>
            <Col xs={{ span: '24' }} xl={{ span: '14' }}>
              <Carousel autoplay effect="fade">
                <CarrouselItem>
                  <FigureImage>
                    <Image src="https://res.cloudinary.com/chjesus/image/upload/v1623642868/CV/Certificates/diploma-react_ywfehk.jpg" />
                  </FigureImage>
                </CarrouselItem>
                <CarrouselItem>
                  <FigureImage>
                    <Image src="https://res.cloudinary.com/chjesus/image/upload/v1623642867/CV/Certificates/diploma-arquitecto-frontend-old_xrhjkp.jpg" />
                  </FigureImage>
                </CarrouselItem>
                <CarrouselItem>
                  <FigureImage>
                    <Image src="https://res.cloudinary.com/chjesus/image/upload/v1623642869/CV/Certificates/diploma-react-ejs_w0d1fy.jpg" />
                  </FigureImage>
                </CarrouselItem>
              </Carousel>
            </Col>
          </Row>
        </CertificateContainer>
      </Modal>
      <Span />
      <Span />
      <Span />
      <Span />
    </Div>
  );
};

export default CardEducation;
