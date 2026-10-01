import React from "react";
import { sharedStyles } from "../styles";
import { postLabel } from "../data/posts";

const C = sharedStyles.colors;

// Small pill naming a post's type: navy for Between Tides issues, soft blue for
// blog posts, so the two read apart at a glance wherever posts are listed.
const PostTag = ({ post }) => {
  const newsletter = post.type === "newsletter";
  return (
    <span
      style={{
        ...sharedStyles.typography.eyebrow,
        fontSize: "0.72rem",
        padding: "4px 10px",
        borderRadius: "999px",
        backgroundColor: newsletter ? C.navy : C.accentSoft,
        color: newsletter ? C.white : C.navy,
        whiteSpace: "nowrap",
      }}
    >
      {postLabel(post)}
    </span>
  );
};

export default PostTag;
