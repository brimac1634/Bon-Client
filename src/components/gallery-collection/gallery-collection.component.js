import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import GalleryItem from "../../components/gallery-item/gallery-item.component";

import { selectGalleryItems } from "../../redux/gallery/gallery.selectors";

import "./gallery-collection.styles.scss";

const mapStateToProps = createStructuredSelector({
  gallery: selectGalleryItems
});

const GalleryCollection = ({ gallery }) => (
  <div className="gallery-collection">
    {gallery.map(({ ...data }, i) => (
      <div key={i}>
        <GalleryItem {...data} />
      </div>
    ))}
  </div>
);

export default connect(mapStateToProps)(GalleryCollection);
