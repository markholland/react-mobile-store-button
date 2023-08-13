import React from 'react';
import PropTypes from 'prop-types';

const imageLinks = {
  ios: 'https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg',
  android: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
};

class MobileStoreButton extends React.Component {
  static propTypes = {
    store: PropTypes.oneOf(['ios', 'android']).isRequired,
    url: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    linkStyles: PropTypes.object,
    linkProps: PropTypes.object,
  };
  static defaultProps = {
    height: 75,
    width: 255,
  };

  render() {
    const {
      store,
      url,
      height,
      width,
      linkStyles,
      linkProps,
      ...props
    } = this.props;

    const defaultLinkStyles = {
      background: `url(${imageLinks[store]}) no-repeat`,
      backgroundSize: 'contain',
      display: 'inline-block',
      overflow: 'hidden',
      textDecoration: 'none',
      height: '100%',
      width: '100%',
      padding: '5px',
      ...linkStyles,
    };

    return (
      <div style={{ height, width, display: 'inline-block' }} {...props}>
        <a
          style={defaultLinkStyles}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          &nbsp;
        </a>
      </div>
    );
  }
}

export default MobileStoreButton;
