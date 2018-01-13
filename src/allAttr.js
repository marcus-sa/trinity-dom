// From https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

const GLOBAL_ATTR = '@@global'

export default {
  accept: ['form', 'input'],
  acceptCharset: {
    name: 'accept-charset',
    tags: ['form']
  },
  accessKey: {
    name: 'accesskey',
    tags: GLOBAL_ATTR
  },
  action: ['form'],
  align: ['applet', 'caption', 'col', 'colgroup', 'hr', 'iframe', 'img', 'table', 'tbody', 'td', 'foot', 'th', 'thead', 'tr'
  ],
  alt: ['applet, area', 'img', 'input'],
  async: ['script'],
  autoComplete: {
    name: 'autocomplete',
    tags: ['form', 'input']
  },
  autoFocus: {
    name: 'autofocus',
    tags: ['button', 'input', 'keygen', 'select', 'textarea']
  },
  autoPlay: {
    name: 'autoplay',
    tags: ['audio', 'video']
  },
  bgColor: {
    name: 'bgcolor',
    tags: ['body', 'col', 'colgroup', 'marquee', 'table', 'tbody', 'tfoot', 'td', 'th', 'tr']
  },
  border: ['img', 'object', 'table'],
  buffered: ['audio', 'video'],
  challenge: ['keygen'],
  charSet: {
    name: 'charset',
    tags: ['meta', 'script']
  },
  checked: ['command', 'input'],
  cite: ['blockquote', 'del', 'ins', 'q'],
  className: {
    name: 'class',
    tags: GLOBAL_ATTR
  },
  code: ['applet'],
  codeBase: {
    name: 'codebase',
    tags: ['applet']
  },
  color: ['basefont', 'font', 'hr'],
  cols: ['textarea'],
  colSpan: {
    name: 'colspan',
    tags: ['td', 'th']
  },
  content: ['meta'],
  contentEditable: {
    name: 'contenteditable',
    tags: GLOBAL_ATTR
  },
  contextMenu: {
    name: 'contextmenu',
    tags: GLOBAL_ATTR
  },
  controls: ['audio', 'video'],
  coords: ['area'],
  crossOrigin: {
    name: 'crossorigin',
    tags: ['audio', 'img', 'link', 'script', 'video']
  },
  data: ['object'],
  'data-*': GLOBAL_ATTR,
  dateTime: {
    name: 'datetime',
    tags: ['del', 'ins', 'time']
  },
  default: ['track'],
  defer: ['script'],
  dir: GLOBAL_ATTR,
  dirName: {
    name: 'dirname',
    tags: ['input', 'textarea']
  },
  disabled: ['button', 'command', 'fieldset', 'input', 'keygen', 'optgroup', 'option', 'select', 'textarea'],
  download: ['a', 'area'],
  draggable: GLOBAL_ATTR,
  dropZone: {
    name: 'dropzone',
    tags: GLOBAL_ATTR
  },
  encType: {
    name: 'enctype',
    tags: ['form']
  },
  htmlFor: {
    name: 'for',
    tags: ['label', 'output']
  },
  form: ['button', 'fieldset', 'input', 'keygen', 'label', 'meter', 'object', 'output', 'progress', 'select', 'textarea'],
  formAction: {
    name: 'formaction',
    tags: ['input', 'button']
  },
  headers: ['td', 'th'],
  height: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
  hidden: GLOBAL_ATTR,
  high: ['meter'],
  href: ['a', 'area', 'base', 'link'],
  hrefLang: {
    name: 'hreflang',
    tags: ['a', 'area', 'link']
  },
  httpEquiv: {
    name: 'http-equiv',
    tags: ['meta']
  },
  icon: ['command'],
  id: GLOBAL_ATTR,
  integrity: ['link', 'script'],
  isMap: {
    name: 'ismap',
    tags: ['img']
  },
  itemProp: {
    name: 'itemprop',
    tags: GLOBAL_ATTR
  },
  keyType: {
    name: 'keytype',
    tags: ['keygen']
  },
  kind: ['track'],
  label: ['track'],
  lang: GLOBAL_ATTR,
  language: ['script'],
  list: ['input'],
  loop: ['audio', 'bgsound', 'marquee', 'video'],
  low: ['meter'],
  manifest: ['html'],
  max: ['input', 'meter', 'progress'],
  maxLength: {
    name: 'maxlength',
    tags: ['input', 'textarea']
  },
  minLength: {
    name: 'minlength',
    tags: ['input', 'textarea']
  },
  media: ['a', 'area', 'link', 'source', 'style'],
  method: ['form'],
  min: ['input', 'meter'],
  multiple: ['input', 'select'],
  muted: ['audio', 'video'],
  name: ['button', 'form', 'fieldset', 'iframe', 'input', 'keygen', 'object', 'output', 'select', 'textarea', 'map', 'meta', 'param'],
  noValidate: {
    name: 'novalidate',
    tags: ['form']
  },
  open: ['details'],
  optimum: ['meter'],
  pattern: ['input'],
  ping: ['a', 'area'],
  placeholder: ['input', 'textarea'],
  poster: ['video'],
  preload: ['audio', 'video'],
  radioGroup: {
    name: 'radiogroup',
    tags: ['command']
  },
  readOnly: {
    name: 'readonly',
    tags: ['input', 'textarea']
  },
  rel: ['a', 'area', 'link'],
  required: ['input', 'select', 'textarea'],
  reversed: ['ol'],
  rows: ['textarea'],
  rowSpan: {
    name: 'rowspan',
    tags: ['td', 'th']
  },
  sandbox: ['iframe'],
  scope: ['th'],
  scoped: ['style'],
  seamless: ['iframe'],
  selected: ['option'],
  shape: ['a', 'textarea'],
  size: ['input', 'select'],
  sizes: ['link', 'img', 'source'],
  slot: GLOBAL_ATTR,
  span: ['col', 'colgroup'],
  spellCheck: {
    name: 'spellcheck',
    tags: GLOBAL_ATTR
  },
  src: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
  srcDoc: {
    name: 'srcdoc',
    tags: ['iframe']
  },
  srcLang: {
    name: 'srclang',
    tags: ['track']
  },
  srcSet: {
    name: 'srcset',
    tags: ['img']
  },
  start: ['ol'],
  step: ['input'],
  style: GLOBAL_ATTR,
  summary: ['table'],
  tabIndex: {
    name: 'tabindex',
    tags: GLOBAL_ATTR
  },
  target: ['a', 'area', 'base', 'form'],
  title: GLOBAL_ATTR,
  type: ['button', 'input', 'command', 'embed', 'object', 'script', 'source', 'style', 'menu'],
  useMap: {
    name: 'usemap',
    tags: ['img', 'input', 'img', 'object']
  },
  value: ['button', 'option', 'input', 'li', 'meter', 'progress', 'param'],
  width: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
  wrap: ['textarea']
}