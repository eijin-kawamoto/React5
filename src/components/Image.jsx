import React from "react";

const dogImageUrl = "URL_TO_YOUR_DOG_IMAGE";

export default function Image() {
    return (
          <figure className="image">
            <img
              src="{dogImageUrl}"
              alt="your shibe"
            />
          </figure>
    );
  }