import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import { PageHero } from "../components/global/pagehero";

const LinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 30px 0 0;
`;
const LinkBtn = styled(Link)`
  border: 1px solid #ccc;
  padding: 6px 12px;
  text-decoration: none;
  color: #aaa;

  :hover {
    background-color: #ff9600;
    border: 1px solid #ff9600;
    color: white;
  }
`;

const PostImg = styled.img`
  width: 100%;
`;

const Post = ({ data: { currentPage }, pageContext }) => {
  const { next, prev } = pageContext;
  return (
    <Layout>
      <SEO title={pageContext.title} />
      {currentPage.acf.page_hero_img.source_url !== null ? (
        <PageHero
          img={currentPage.acf.page_hero_img.source_url}
          title={pageContext.title}
        />
      ) : null}
      <div className="container body">
        <div className="row">
          <div className="col-lg-12">
            <small className="post-date">
              Posted: {pageContext.date} | Author:{" "}
              <Link to={pageContext.author.path}>
                {pageContext.author.name}
              </Link>
            </small>
            <PostImg
              src={pageContext.source_url}
              alt={pageContext.title}
              className="mt-10 mb-30"
            />
            <p>
              Posted in:{" "}
              {pageContext.categories.map((cat, index) => (
                <Link
                  className="cat-link"
                  key={index}
                  to={`/category/${cat.slug}`}
                >
                  {cat.name}{" "}
                </Link>
              ))}
            </p>
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
            <p>
              {pageContext.tags[0].id !== "undefined" ? "Tagged in: " : ""}
              {pageContext.tags[0].id !== "undefined" &&
                pageContext.tags.map((tag, index) => (
                  <Link
                    className="tag-link"
                    key={index}
                    to={`/tag/${tag.slug}`}
                  >
                    {tag.name}{" "}
                  </Link>
                ))}
            </p>
            <LinksWrapper>
              {prev && (
                <LinkBtn className="post-prev-link" to={`/post/${prev.slug}`}>
                  Prev
                </LinkBtn>
              )}
              {next && (
                <LinkBtn className="post-next-link" to={`/post/${next.slug}`}>
                  Next
                </LinkBtn>
              )}
            </LinksWrapper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query($id: String) {
    currentPage: wordpressPost(id: { eq: $id }) {
      id
      acf {
        page_hero_img {
          source_url
        }
      }
    }
  }
`;
