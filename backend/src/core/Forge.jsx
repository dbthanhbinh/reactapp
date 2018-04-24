'use strict'

var Forge = {
    ALPHANUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ID_LENGTH: 8,

    /**
     * Responsible for building the dom object based on parameters that are passed in as options.
     * If any of the options aren't supported, they are simply ignored.
     *
     * @param {Object} options:  Json Object of Option for DOM Object
     * @return {Object} Corresponding DOM Object according to options.
     */

    build: function(options){
        var node = document.createElement(options.dom);
        if(options.type) {
            node.setAttribute('type', options.type);
        }
        if (options.id) {
            node.setAttribute('id', options.id)
        }
        if (options.class) {
        node.setAttribute('class', options.class)
        }
        if (options.style) {
        node.setAttribute('style', options.style)
        }
        if (options.url) {
        node.setAttribute('url', options.url)
        }
        if (options.src) {
        node.setAttribute('src', options.src)
        }
        if (options.alt) {
        node.setAttribute('alt', options.alt)
        }
        if (options.a) {
        node.setAttribute('a', options.a)
        }
        if (options.value) {
        node.setAttribute('value', options.value)
        }
        if (options.placeholder) {
        node.setAttribute('placeholder', options.placeholder)
        }
        if (options.rel) {
        node.setAttribute('rel', options.rel)
        }
        if (options.for) {
        node.setAttribute('for', options.for)
        }       
        if (options.text) {
            var textNode = document.createTextNode(options.text)
            node.appendChild(textNode)
        }

        return node;
    },

    template: function (mold) {
        var box = Forge.build({'dom': 'div'})
        return box
    },

    buildInput: function (mold) {        
        let inputContainer = Forge.build({'dom':'div', 'class': 'form-group'});
        let titleLabel  = Forge.build({'dom':'label', 'text': mold.label});        
        let textInput   = Forge.build({'dom': mold.type, 'class': 'form-control', 'placeholder': mold.placeholder});

        inputContainer.appendChild(titleLabel);
        inputContainer.appendChild(textInput);

        return inputContainer;
    }
}

export default Forge;