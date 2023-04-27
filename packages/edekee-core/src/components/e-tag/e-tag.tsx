import {Component, h, Host, Prop, State} from "@stencil/core";

@Component({
  tag: "e-tag",
  styleUrl: "e-tag.css",
  shadow: true,
  assetsDirs: ["assets"]
})

export class ETag {
  /*** yPos is the coordinate of Vertical Axis */
  @Prop() yPos: number | string;

  /*** xPos is the coordinate of Horizontal Axis */
  @Prop() xPos: number | string;

  /*** desc is the description of the tag */
  @Prop() desc: string;

  /*** price is the price of the product in the tag */
  @Prop() price: number | string;

  /*** imageUrl is the url to the Image for the tag opened */
  @Prop() imageUrl: string;

  /*** isOpen is a boolean to check the state of the tag , open or closed */
    // @Prop() isOpen: boolean = true;
  @State() isOpen: boolean = false;

  @Prop() image = "cancel.svg";

  // @Element() el: HTMLElement;


  private menuToggle(bool) {
    this.isOpen = bool;
  }


  render() {
    // const cancelSrc = getAssetPath(`./assets/${this.image}`);

    return (
      <Host style={{top: `${this.yPos}%`, left: `${this.xPos}%`}} onClick={() => this.menuToggle(true)}
            class={{"is-open": this.isOpen}}>
        <div class={`tag-content ${this.isOpen ? "is-open" : ""}`}
             onClick={(e) => e.stopPropagation()}>
          <img onClick={(e) => {
            e.stopPropagation();
            this.menuToggle(false);
          }}
               class="cancel-btn"
            // src={cancelSrc}
               alt="cancel"
          />
          <p class="heading-text">Product Details</p>
          <img
            src={this.imageUrl}
            class="image-box"
          ></img>
          <p class="product-itle">
            {this.desc}
          </p>
          <div class="price-section">
            <p class="price-text">
              {this.price}
              {/*$ {addCommasToNumber(Math.round(price / 450))}*/}
            </p>
            {/*<div*/}
            {/*  onClick={(e) => {*/}
            {/*    e.stopPropagation();*/}
            {/*    // setIsOpen(false);*/}
            {/*  }}*/}
            {/*  class="buyButton"*/}
            {/*>*/}
            {/*  Buy*/}
            {/*</div>*/}
          </div>
        </div>
      </Host>);
  }
}

