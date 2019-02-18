import React from 'react';
import PropTypes from 'prop-types';

// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const style = theme => ({
//   card: {
//     maxWidth: 400
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%'
//   }
// });
const strTruncate = (str, length) => str.substring(0, (str + ' ').lastIndexOf(' ', length));
const strRestrictedCount = 50;

const MovieList = ({ item, imgUrl, imgSize }) => {
  const imagePath = `${imgUrl}${imgSize}${item.poster_path}`;

  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={imagePath} alt={item.name} className="responsive-img" />
        </div>
        <div className="card-content">
          <span className="card-title pink-text">{item.name}</span>
          <span>{item.first_air_date}</span>
          <p>{strTruncate(item.overview, strRestrictedCount)}</p>
        </div>
        <div className="card-action show-more">
          <a href="#">Show more</a>
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  item: PropTypes.object,
  imgUrl: PropTypes.string,
  imgSize: PropTypes.string
};

export default MovieList;
