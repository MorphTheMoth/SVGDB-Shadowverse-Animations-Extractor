/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { StyledContentDiv } from '../styles/globalStyles';
import { StyledCardImageContainer, StyledButton } from '../styles/cardStyles';
import LeaderAudioContainer from './LeaderAudioContainer';

const propTypes = {
  t: PropTypes.func.isRequired,
};

const Leader = ({ t }) => {
  const { leaderId } = useParams();
  const [win, setWin] = useState('win');
  const [zoom, setZoom] = useState('profile');
  return leaderId && (
    <StyledContentDiv>
      <StyledCardImageContainer>
        <a
          target="_blank"
          href={`${process.env.REACT_APP_ASSETS_URL}/leader/class_${leaderId}_${zoom}.png`}
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.REACT_APP_ASSETS_URL}/leader/class_${leaderId}_${zoom}.png`}
            alt=""
            style={{ maxWidth: '512px' }}
          />
        </a>
        <a
          target="_blank"
          href={`${process.env.REACT_APP_ASSETS_URL}/leader/class_${leaderId}_base_${win}.png`}
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.REACT_APP_ASSETS_URL}/leader/class_${leaderId}_base_${win}.png`}
            alt=""
            style={{ maxWidth: '512px' }}
          />
        </a>
      </StyledCardImageContainer>
      <StyledButton
        style={{ marginRight: '25vw', marginTop: '20px' }}
        onClick={() => (zoom === 'profile' ? setZoom('base') : setZoom('profile'))}
      >
        {t('Toggle Zoom')}
      </StyledButton>
      <StyledButton
        style={{ marginTop: '20px' }}
        onClick={() => (win === 'win' ? setWin('lose') : setWin('win'))}
      >
        {t('Toggle Win/Lose')}
      </StyledButton>
      <LeaderAudioContainer leaderId={leaderId} />
    </StyledContentDiv>
  );
};

Leader.propTypes = propTypes;

export default withTranslation()(Leader);
