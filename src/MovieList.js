import React from 'react';
import PropTypes from 'prop-types';

// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
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

const MovieList = ({ item, imgUrl, imgSize, expanded }) => {
  const imagePath = `${imgUrl}${imgSize}${item.poster_path}`;

  return (
    <Card>
      <CardHeader title={item.name} subheader={item.first_air_date} />
      <img src={imagePath} alt={item.name} />
      <CardContent>
        <Typography component="p">{item.overview}</Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          // onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        />
      </CardActions>
    </Card>
  );
};

MovieList.propTypes = {
  item: PropTypes.object,
  imgUrl:PropTypes.string,
  imgSize: PropTypes.string,
  expanded: PropTypes.bool
};

export default MovieList;
