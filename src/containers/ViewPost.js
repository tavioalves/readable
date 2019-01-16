import React, { Component } from "react";
import Loading from '../components/Loading';
import PostDetail from '../components/PostDetail';
import { connect } from "react-redux";
import { getPostDetail, getPostComments, votePost, editPost, deletePost } from '../actions/PostAction';

class ViewPost extends Component {
  componentDidMount = () => {
    const postId = this.props.match.params.id;

    this.props.getPostDetail(postId);
    this.props.getPostComments(postId);
  }

  render() {
    return (
      <>
        <Loading isTrue={this.props.loading} />
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <PostDetail
                post={this.props.post}
                votePost={this.props.votePost}
                editPost={this.props.editPost}
                deletePost={this.props.deletePost}
              />
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.post.loading,
    post: state.post.post,
    postDetail: state.post.postDetail,
    postComments: state.post.comments,
  }
}

export default connect(mapStateToProps, {
  votePost,
  editPost,
  deletePost,
  getPostDetail,
  getPostComments,
})(ViewPost);