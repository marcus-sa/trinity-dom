import allAttr, { GLOBAL_ATTR } from './allAttr'
import allHtmlTags from './allHtmlTags'
import allEvents from './allEvents'
import cachedTags from './index'

export default function Render({ Component }) {
  allHtmlTags.forEach(htmlTag => {
    cachedTags[htmlTag] = renderHtmlTag.bind(null, htmlTag, Component)
  })

  cachedTags['fragment'] = (...children) => children.join('')

  return (...children) => children.join('')
}

function renderHtmlTag(htmlTag, Component, ...args) {
  const id = Math.random().toString(36).slice(-5)
  const selector = '[data-trinity="'+ id +'"]'
  const _attr = []

  function constructHtml(html) {
    return `<${htmlTag} data-trinity="${id}" ${_attr.join(' ')}>${html}</${htmlTag}>`
  }

  if (typeof args[0] !== 'object') {
    return constructHtml(args.join(''))
  } else {
    Object.keys(args[0]).forEach(name => {
      const attrVal = args[0][name]
      const attr = allAttr[name]

      if (attr && attrVal) {
      if (!Array.isArray(attr)) {
        if (attr.tags === GLOBAL_ATTR || attr.tags.includes(htmlTag)) {
          _attr.push(`${attr.name}="${attrVal}"`)
        } else {
          throw new Error(`Attribute ${name} doesn't belong to ${htmlTag}`)
        }
      } else if (attr === GLOBAL_ATTR || attr.includes(htmlTag)) {
        _attr.push(`${name}="${attrVal}"`)
      } else {
        throw new Error(`Attribute ${name} doesn't belong to ${htmlTag}`)
      }

      delete args[0][name]
    }
  })

    Component.promise.then(() => {
      Object.keys(args[0]).forEach(event => {
        const realEvent = allEvents[event]
        const handler = args[0][event]

        if (realEvent && typeof handler === 'function') {
          document.querySelector(selector).addEventListener(realEvent, handler, false)
        }
      })
    })

    return (...children) => constructHtml(children.join(''))
  }
}