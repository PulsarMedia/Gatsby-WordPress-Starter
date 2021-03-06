import React from "react";
import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import { BreadCrumbContainer, BreadCrumbWrapper } from "./BreadCrumbStyles";

const Breadcrumbs = ({ parent }) => (
  <BreadCrumbContainer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <BreadCrumbWrapper>
            <Link to="/">
              <span>Home</span>
            </Link>
            <span className="divider">/</span>
            {parent ? (
              <>
                <Link to={parent.path}>
                  <span dangerouslySetInnerHTML={{ __html: parent.title }} />
                </Link>
              </>
            ) : null}
          </BreadCrumbWrapper>
        </div>
      </div>
    </div>
  </BreadCrumbContainer>
);

Breadcrumbs.propTypes = {
  parent: PropTypes.object,
};

export default Breadcrumbs;
