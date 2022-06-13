import React from "react";
import { isEmpty } from "lodash";
import "./style.scss";
import { sanitize } from "../../../utils/functions";

const CustomPage = (props) => {
  const { data } = props;

  return (
    <>
      {!isEmpty(data) ? (
        <div className="cs-page-content-body">
          <article id={`post-${data.id}`} className="page type-page status-publish hentry">
            {/* ${console.log(data)} */}
            {!isEmpty(data.content) ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitize( data.content ),
                }}
              />
            ) : null}
          </article>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default CustomPage;
