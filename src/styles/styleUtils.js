export const styleUtils = {
  remToPx: (rem) => {
    if (rem.includes("rem")) {
      return `${parseFloat(rem.replace("rem", "")) * 16}px`;
    }
    return rem;
  },
  pxToRem: (px) => {
    if (px.includes("px")) {
      return `${parseFloat(px.replace("px", "")) / 16}rem`;
    }
    return px;
  },
};
