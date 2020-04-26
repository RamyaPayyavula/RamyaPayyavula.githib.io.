import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../src/utils/DropDown";
import { connect } from "react-redux";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
    };
    this.renderDesktopNavigation = this.renderDesktopNavigation.bind(this);
    this.renderMobileNavigation = this.renderMobileNavigation.bind(this);
    this.onClickCallback = this.onClickCallback.bind(this);
  }

  onClickCallback() {
    this.props.isMobile
      ? this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen })
      : null;
  }
  renderDesktopNavigation() {
    const teachingDropDownList = [
      { label: "Courses", link: "/courses" },
      { label: "Labs", link: "/labs" },
    ];

    const researchDropDownList = [
      { label: "Publications", link: "/publications" },
      { label: "Conference", link: "/conference" },
      { label: "Resume", link: "/resume" },
    ];

    const activitiesDropDownList = [
      {
        label: "Professional meetings",
        link: "/meetings",
      },
      {
        label: "Student advising",
        link: "/advising",
      },
      { label: "professional training", link: "/training" },
    ];

    const accoladesDropDownList = [
      { label: "Awards", link: "/awards" },
      { label: "Scholarships", link: "/scholarships" },
      { label: "Grants", link: "/grants" },
      { label: "Memberships", link: "/memberships" },
    ];

    const serviceDropDownList = [
      { label: "University Service", link: "/university-service" },
      { label: "Community Service", link: "/community-service" },
    ];
    const customClassName = this.props.isMobile
      ? "mobile-nav-bar-list"
      : "desktop-nav-bar-list";

    return (
      <ul className={customClassName}>
        <li className="list-item">
          <Link
            to={"/home"}
            className="dropdown-wrapper"
            onClick={this.onClickCallback}
          >
            Home
          </Link>
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={teachingDropDownList}
            header="Teaching"
            showIcon={false}
            onClickCallback={this.onClickCallback}
          />
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={researchDropDownList}
            header="Research"
            showIcon={false}
            onClickCallback={this.onClickCallback}
          />
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={activitiesDropDownList}
            header="Professional Activities"
            showIcon={false}
            onClickCallback={this.onClickCallback}
          />
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={accoladesDropDownList}
            header="Accolades"
            showIcon={false}
            onClickCallback={this.onClickCallback}
          />
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={serviceDropDownList}
            header="Service"
            showIcon={false}
            onClickCallback={this.onClickCallback}
          />
        </li>
      </ul>
    );
  }

  renderMobileNavigation() {
    return (
      <div className="mobile-nav-menu-container">
        <div
          className="mobile-nav-menu"
          onClick={() =>
            this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen })
          }
        ></div>
        {this.state.isMobileMenuOpen ? this.renderDesktopNavigation() : null}
      </div>
    );
  }

  render() {
    return (
      <div className="header-container">
        <nav className="nav-bar">
          {this.props.isMobile
            ? this.renderMobileNavigation()
            : this.renderDesktopNavigation()}
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    isMobile: state.isMobile,
  };
}

export default connect(mapStateToProps)(Navigation);
