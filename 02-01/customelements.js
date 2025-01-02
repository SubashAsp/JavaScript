// Connected Callback
class newElement extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML="This is a customed element"
    }
}
customElements.define("welcome-ele",newElement)

// attributeChangedCallback
class myCustomElement extends HTMLElement{
    static observedAttributes=["size"];

    constructor(){
        super();

    }
    attributeChangedCallback(size, oldValue, newValue){

    }
}
customElements.define("my-custom-element",myCustomElement);
