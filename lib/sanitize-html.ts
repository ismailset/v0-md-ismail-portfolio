import sanitize from "sanitize-html"

const allowedTags = ["h1", "h2", "h3", "h4", "p", "strong", "em", "a", "ul", "ol", "li", "blockquote", "pre", "code", "table", "thead", "tbody", "tr", "th", "td", "img", "hr", "br", "div", "span"]
const allowedAttributes = {
  a: ["href", "target", "rel", "title", "class"],
  img: ["src", "alt", "title", "class"],
  code: ["class"],
  div: ["class"],
  span: ["class"],
}

export function sanitizeHtml(content: string) {
  return sanitize(content, {
    allowedTags,
    allowedAttributes,
    disallowedTagsMode: "discard",
    allowedSchemes: ["http", "https", "mailto"],
    allowProtocolRelative: false,
    enforceHtmlBoundary: true,
  })
}
