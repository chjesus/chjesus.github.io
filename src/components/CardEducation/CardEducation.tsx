import React, { useState, useEffect } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { Row, Col, Modal } from 'antd';
import Api from '../../utils/Api';
import { Div, Span, H3, H4, Text, Link } from './styledCardEducation';

// import { AxiosResponse } from 'axios';
interface Education {
  title: string;
  dateStart: string;
  dateEnd: string;
  content: string;
  certificate: string | boolean;
}

interface Course {
  map(arg0: (course: Course) => React.ReactNode): React.ReactNode;
  badge: string;
  career: string;
  diplomaLink: string;
  id: number;
  title: string;
  url: string;
}

const CardEducation: React.FC<Education> = (props) => {
  const { title, dateStart, dateEnd, content, certificate } = props;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [courses, setCourses] = useState<Course>();

  useEffect(() => {
    if (certificate) {
      Api()
        .then((response: AxiosResponse) => {
          const {
            data: { userData },
          } = response;
          setCourses(userData.courses);
          console.log(userData.courses);

          console.log(courses);
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <Div>
      <Row gutter={[0, 8]}>
        <Col span="24">
          <H3>{title}</H3>
        </Col>
        <Col span="24">
          <H4>
            {dateStart} - {dateEnd}
          </H4>
        </Col>
        <Col span="24">
          <Text>
            {content}
            {certificate && (
              <Link rel="noreferrer" onClick={() => setModalVisible(true)}>
                Learn More
              </Link>
            )}
            {courses && courses.map((course: Course) => 1)}
          </Text>
        </Col>
      </Row>
      <Modal title="asdas" visible={modalVisible}>
        <Row>
          <Col span="6">1212</Col>
          <Col span="16"></Col>
        </Row>
      </Modal>
      <Span />
      <Span />
      <Span />
      <Span />
    </Div>
  );
};

export default CardEducation;
