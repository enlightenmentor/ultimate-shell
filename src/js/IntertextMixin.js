const IntertextMixin = (superclass) => class extends superclass {
  fire(name, detail) {
    this.dispatchEvent(new CustomEvent(name, {
      composed: true,
      bubbles: true,
      detail: detail
    }))
  }
  deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach((prop) => {
      if (o.hasOwnProperty(prop) &&
        o[prop] !== null &&
        (typeof o[prop] === "object" || typeof o[prop] === "function") &&
        !Object.isFrozen(o[prop])) {
        this.deepFreeze(o[prop]);
      }
    });
    return o;
  }
}