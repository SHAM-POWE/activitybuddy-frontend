import React, { Component } from 'react';
import ShowActivity from '../Activities/ShowActivity';
import ActivityUsers from '../ActivityUsers/ShowActivityUsers';
import ModeratorController from '../ActivityUsers/moderatorcontroller';

class ShowContainer extends Component {
  render() {
    {console.log(this.props)}
    return (
      <div>
        {this.props.user.email}
        <ShowActivity activityId={this.props.match.params.id} />
        <ModeratorController activityId={this.props.match.params.id}/>
        <ActivityUsers activityId={this.props.match.params.id}/>
      </div>
    )
  }
}

 
export default ShowContainer;
