import React from "react"

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

// class Photo extends Component {
//     render() {

//     }
// }

export default Photo