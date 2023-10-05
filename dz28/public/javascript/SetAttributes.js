class SetAttributes {

    static setAttributes(elem, attributes) {
        for (let attribute in attributes) {
            elem.setAttribute(attribute, attributes[attribute]);
        }
    }
}