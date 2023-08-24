import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Thumbnail.css';
import { Link } from 'react-router-dom';

function Thumbnail({ image, title, itemId }) {
  return (
    <Link className="thumbnail-component" to={`/details/${itemId}`}>
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </Link>
  );
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Thumbnail;
