import DOMPurify from "isomorphic-dompurify"

const allowedTags = ["h1","h2","h3","h4","p","strong","em","a","ul","ol","li","blockquote","pre","code","table","thead","tbody","tr","th","td","img","hr","br","div","span"]
const allowedAttrs = ["href","target","rel","src","alt","title","class"]

export function sanitizeHtml(content: string) {
  return DOMPurify.sanitize(content, { ALLOWED_TAGS: allowedTags, ALLOWED_ATTR: allowedAttrs, FORBID_ATTR: ["style"], ALLOW_DATA_ATTR: false })
}
