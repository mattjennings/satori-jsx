export const h = (tag, props, ...children) => {
  // custom component
  if (typeof tag === "function") {
    return tag({ ...props, children })
  }

  if (tag === "Fragment") {
    return children
  }

  return {
    type: tag,
    props: {
      ...props,
      // if empty array, return undefined, otherwise yoga complains
      children: children.length > 0 ? children : undefined,
    },
  }
}

export const Fragment = "Fragment"
