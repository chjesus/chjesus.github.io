import React from 'react';
import { Divider, Grid } from 'antd';
import { useTranslation } from 'react-i18next';

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
  const [t] = useTranslation('Experience');
  const alternate = md ? 'alternate' : 'left';

  return (
    <DivContainer color="hight" id="experience">
      <Container>
        <H2>{t('title')}</H2>
        <Divider orientation="left" />
        <Timeline mode={alternate}>
          {ExperienceList.map((experience, index) => (
            <TimelineItem key={experience.id}>
              <CardExperience
                id={experience.id}
                title={experience.title}
                dateStart={experience.date_start}
                dateEnd={experience.date_end}
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
