import { ReactElement } from "react";

export const cssAddCross = (element: any) => {
  element.style.background = `url(
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='red' stroke-width='4'/><path d='M0 0 L100 100 ' stroke='red' stroke-width='4'/></svg>"
      )`;
  element.style.backgroundColor = "white";

  element.style.backgroundRepeat = "no-repeat";
  element.style.backgroundPosition = "center center";
  element.style.backgroundSize = "100% 100% auto";
};
