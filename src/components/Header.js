import React, { Component } from 'react';

class Header extends Component {
  render () {
    let {user} = this.props
    return(
      <div>
        <a href={user.resume}>Resume</a>
        <br/>
        <a href={user.bio}>Bio</a>
      </div>
    )
  }
}

export default Header;
