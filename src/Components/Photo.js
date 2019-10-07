import React from "react"
import PropTypes from "prop-types"

function Photo(props) {
                const post = props.post;
                return (
                  <figure className="figure">
                    <img
                      className="photo"
                      src={post.imageLink}
                      alt={post.description}
                    />
                    <figcaption className="">
                      <p>{post.description}</p>
                    </figcaption>
                    <div className="button-container">
                      <button className="remove-button" onClick={() => {
                          props.onRemovePhoto(post)
                      }}>Remove</button>
                    </div>
                  </figure>
                );
}

Photo.PropType = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

// class Photo extends Component {
//     render() {

//     }
// }

export default Photo