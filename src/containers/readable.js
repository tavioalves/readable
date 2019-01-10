import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Post from '../components/Post';
import { connect } from "react-redux";
import { getPosts, votePost } from '../actions/PostAction';
import { getComments } from '../actions/CommentsAction';

class Readable extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  }

  renderPosts = () => {
    return (
      <>
        {this.props.posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
              votePost={this.props.votePost}
            />
          )
        })}
      </>
    )
  }

  render() {
    return (
      <>
        <Navbar />
        <Loading isTrue={this.props.loading} />
        <div className="container">
          {this.renderPosts()}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    comments: state.comment.comments,
    loading: state.post.loading,
  }
}

export default connect(mapStateToProps, {
  getPosts,
  votePost,
  getComments,
})(Readable);