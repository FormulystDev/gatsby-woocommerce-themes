import React from "react";
import { isEmpty } from "lodash";
import "./style.scss";
import { sanitize } from "../../utils/functions";

const Page = (props) => {
  const { data } = props;

  // const hasImagesSizes =
  //   null !== data.featuredImage &&
  //   !isEmpty(data.featuredImage.node) &&
  //   !isEmpty(data.featuredImage.node.mediaDetails.sizes);
  // const imgSrcUrl = hasImagesSizes
  //   ? data.featuredImage.node.mediaDetails.sizes[0].sourceUrl
  //   : "";
  // const imgWidth = hasImagesSizes
  //   ? data.featuredImage.node.mediaDetails.sizes[0].width
  //   : 450;
  // const imgHeight = hasImagesSizes
  //   ? data.featuredImage.node.mediaDetails.sizes[0].height
  //   : 450;

  return (
    <>
      {!isEmpty(data) ? (
        <div className="cs-page-content-body">
        <article id={`post-${data.id}`} className="page type-page status-publish hentry">
          {/* ${console.log(data)} */}

          {!isEmpty(data.title) ? (
            <div className="container-fluid cs-page-head-text">
              <div className="flex head">{data.title}</div>
            </div>
          ) : null}
          <div className="container-fluid cs-page-content-text">
            {!isEmpty(data.content) ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitize( data.content ),
                }}
              />
            ) : null}
          </div>
        </article>
      </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Page;
