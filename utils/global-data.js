export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'mdwp';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Blog about No-Code and AI';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : `All rights reserved.<br/>
Meinolf Droste</br>
Tel.:  02331 62 85 27 3</br>
Mobil: 0151 241 262 32`;

  return {
    name,
    blogTitle,
    footerText,
  };
};
