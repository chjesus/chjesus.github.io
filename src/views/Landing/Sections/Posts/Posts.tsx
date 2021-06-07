import React from 'react';

import { Row, Col, Divider } from 'antd';
import Card from '../../../../components/Card';

import {
  DivContainer,
  Container,
  H2,
} from '../../../../utils/styledComponents';

import { PostsList } from '../../../../utils/Data';

const Posts: React.FC = () => {
  return (
    <DivContainer color="hight">
      <Container>
        <H2>Posts</H2>
        <Divider orientation="left" />
        <Row gutter={[32, 32]}>
          {PostsList.map((post) => (
            <Col key={post.id} xs={24} sm={24} md={12} lg={12} xl={8}>
              <Card type="posts" />
            </Col>
          ))}
        </Row>
      </Container>
    </DivContainer>
  );
};

export default Posts;
