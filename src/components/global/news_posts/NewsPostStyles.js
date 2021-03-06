import styled from "styled-components";
import Img from "gatsby-image";

export const StyledImg = styled(Img)`
  img {
    z-index: 1;
    max-height: 200px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: block;

    -moz-transition: all 0.3s !important;
    -webkit-transition: all 0.3s !important;
    transition: all 0.3s !important;

    @media (min-width: 768px) {
      max-height: 300px;
    }
  }
`;

export const NewsPostArticle = styled.article`
  width: 100%;
  position: relative;
`;

export const NewPostArticleDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0 0;
  font-size: 0.9rem;

  a {
    color: black;
    font-weight: bold;
    font-family: "Montserrat";
  }

  a:hover {
    color: #999;
  }

  img {
    border-radius: 99px;
    display: block;
    width: 17%;
    height: 100%;
    margin: 5px 10px 0 0;
  }
`;

export const SmallText = styled.p`
  font-size: 12px;
  margin: 5px 0;

  a {
    font-weight: normal;
  }
`;

export const ReadMoreBtn = styled.a`
  background-color: #ffb400;
  color: white !important;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-family: "Open sans";
  font-weight: 600 !important;
  margin: 10px 0 0;
  display: inline-block;
  transition: all 0.3s;

  :hover {
    background-color: #ff9600;
  }
`;
