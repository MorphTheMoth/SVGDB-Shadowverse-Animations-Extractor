/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TokenText } from '../styles/cardStyles';

const propTypes = {
  token: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
};

const TokenContainer = ({ token, language }) => {
  const [tokenJson, setTokenJson] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/cards/${language}/${token}`)
      .then((res) => res.json())
      .then((resJson) => setTokenJson(resJson));
  }, [token, language]);
  return tokenJson && (
    <Link to={`/cards/${tokenJson.id_}`}>
      <div style={{ border: '1px solid pink', padding: '10px' }}>
        <p style={{ marginTop: '5px' }}><b>{tokenJson.name_}</b></p>
        <div style={{ display: 'flex' }}>
          <img src={`${process.env.REACT_APP_ASSETS_URL}/thumbnails/C_${tokenJson.id_}.png`} alt="" style={{ float: 'left', paddingRight: '5px' }} />
          {tokenJson.type_ === 'Follower'
            ? (
              <TokenText>
                <b>Base: </b><br />
                {tokenJson.baseEffect_} <br />
                <b>Evo: </b><br />
                {tokenJson.evoEffect_}
              </TokenText>
            )
            : (
              <TokenText>
                {tokenJson.baseEffect_}
              </TokenText>
            )}

        </div>
      </div>
    </Link>
  );
};

TokenContainer.propTypes = propTypes;

export default TokenContainer;
