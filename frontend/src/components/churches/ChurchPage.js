import React from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

class ChurchPage extends React.Component {
  state = {
    church: {},
    members: [],
    seeMore: false
  };

  getSingleChurch = () => {
    axios
      .get(`/churches/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ church: res.data.church });
      })
      .catch(er => {
        console.log(er, "single church err");
      });
  };

  getAllMembers = () => {
    axios
      .get("/members")
      .then(res => {
        this.setState({
          members: res.data.members
        });
      })
      .catch(er => {
        console.log(er, "member error");
      });
  };

  componentDidMount() {
    this.getSingleChurch();
    this.getAllMembers();
  }

  toggle = () => {
    this.setState({ seeMore: !this.state.seeMore });
  };

  render() {
    let theMembers = this.state.members.filter(mem => {
      return parseInt(this.props.match.params.id) === mem.church_id;
    });

    let memberDisplay;
    if (theMembers.length) {
      if (!this.state.seeMore) {
        memberDisplay = theMembers.slice(0, 3).map(one => {
          return (
            <ul key={one.id}>
              <span>
                <Link to={`/local-member/${one.id}`}>
                  <strong>
                    <p>{one.name}</p>
                  </strong>
                </Link>
              </span>
              {one.profile_pic}
              <p>{one.links}</p>
            </ul>
          );
        });
      } else {
        memberDisplay = theMembers.map(one => {
          return (
            <ul key={one.id}>
              <span>
                <Link to={`/local-member/${one.id}`}>
                  <strong>
                    <p>{one.name}</p>
                  </strong>
                </Link>
              </span>
              {one.profile_pic}
              <p>{one.links}</p>
            </ul>
          );
        });
      }
    }

    return (
      <div className="churches">
        <div className="church-head">
          <h1>{this.state.church.name}</h1>
          <p>{this.state.church.location}</p>
          <h3>{this.state.church.pastor}</h3>
          <p>{this.state.church.website}</p>
        </div>
        <div className="my-sections">
          <section className="left-section-1">
            <div>
              <h2>Weekly anouncement</h2>
              <p>bible study: </p>
              <p>Service Prayer: </p>
              <p>Children Ministry: </p>
              <p>Sunday Service: </p>
            </div>
            <div>
              <h2>Connect with members</h2>
              {memberDisplay}
              <button onClick={this.toggle}>
                {!this.state.seeMore ? "see more..." : "see less"}
              </button>
            </div>
          </section>
          <section className="right-section-2">
            <div>
              <h2>Special Anouncement</h2>
              <p>any special anouncement</p>
            </div>
            <div>
              <h2>Sister Churches</h2>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(ChurchPage);
