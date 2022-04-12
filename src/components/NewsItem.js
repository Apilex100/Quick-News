import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // let { title, description, imageURL, newsURL } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left:'90%',zIndex:'1'}} >
            {this.props.source}
          </span>
          <img src={this.props.imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}...</h5>
            <p className="card-text">{this.props.description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {this.props.author ? this.props.author : "Unknown"} on{" "}
                {new Date(this.props.date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={this.props.newsURL}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
