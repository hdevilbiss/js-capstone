const PhotoCredit = ({ bgArtistLink, bgArtistName, bgPhotoLink, bgPhotoVendor  }) => {
  return (
    <div className="photo-credit">
      Photo by <a href={bgArtistLink}>{bgArtistName}</a> on <a href={bgPhotoLink}>{bgPhotoVendor}</a>
    </div>
  );
}

export default PhotoCredit;
