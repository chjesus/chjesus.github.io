import React from 'react';
import { Divider, Grid } from 'antd';

import {
  DivContainer,
  Container,
  H2,
} from '../../../../utils/styledComponents';
import { Timeline, TimelineItem } from './styledExperience';

import CardExperience from '../../../../components/CardExperience';
import { ExperienceList } from '../../../../utils/Data';

const { useBreakpoint } = Grid;

const Experience: React.FC = () => {
  const { md } = useBreakpoint();
  const alternate = md ? 'alternate' : 'left';

  return (
    <DivContainer color="hight" id="experience">
      <Container>
        <H2>Experience</H2>
        <Divider orientation="left" />
        <Timeline mode={alternate}>
          {ExperienceList.map((experience, index) => (
            <TimelineItem key={experience.id}>
              <CardExperience
                title={experience.title}
                dateStart={experience.date_start}
                dateEnd={experience.date_end}
                content={experience.content}
                position={index % 2 !== 0 ? (md ? 'right' : 'left') : 'left'}
              />
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </DivContainer>
  );
};

export default Experience;
