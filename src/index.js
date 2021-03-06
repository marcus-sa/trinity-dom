import allAttr from './allAttr'
import allHtmlTags from './allHtmlTags'
import allEvents from './allEvents'
import camelCaseStyleProps from './camelCaseStyleProps'

export default function Render(cachedTags) {
  return ({ Component }) => {
    Object.keys(allHtmlTags).forEach(htmlTag => {
      cachedTags[htmlTag] = renderHtmlTag.bind(null, htmlTag, Component)
    })

    cachedTags['fragment'] = (...children) => children.join('')
  }
}

function renderHtmlTag(htmlTag, Component, ...args) {
  const id = Math.random().toString(36).slice(-5)
  const selector = '[data-trinity="'+ id +'"]'
  const _attr = []

  function constructHtml(html = '') {
    const rest = `data-trinity="${id}" ${_attr.join(' ')}`

    if (allHtmlTags[htmlTag]) {
      return `<${htmlTag} ${rest}>${html}</${htmlTag}>`
    } else {
      return `<${htmlTag} ${rest} />`
    }
  }

  if (typeof args[0] !== 'object') {
    return constructHtml(args.join(''))
  } else {
    Object.keys(args[0]).forEach(name => {
      const attrVal = args[0][name]
      const attr = allAttr[name]

      if (attr && attrVal) {
        if (name === 'data') {
          Object.keys(attrVal).forEach(dataAttr => {
            const val = attrVal[dataAttr]

            _attr.push(`${name}-${dataAttr}="${val}"`)
          })
        } else if (name === 'style') {
          const styles = Object.keys(attrVal).reduce((styles, style) => {
            const prop = camelCaseStyleProps[style] || style
            const val = attrVal[style]

            return styles.concat([`${prop}:${val};`])
          }, [])

          _attr.push(`style="${styles.join('')}"`)
        } else if (!Array.isArray(attr) && typeof attr === 'object') {
          if (attr.tags === '@@global' || attr.tags.includes(htmlTag)) {
            _attr.push(`${attr.name}="${attrVal}"`)
          } else {
            throw new Error(`Attribute ${name} doesn't belong to ${htmlTag}`)
          }
        } else if (attr === '@@global' || attr.includes(htmlTag)) {
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

    if (!allHtmlTags[htmlTag]) {
      return constructHtml()
    }

    return (...children) => constructHtml(children.join(''))
  }
}