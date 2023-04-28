import {Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State} from '@stencil/core';

@Component({
  tag: 'e-wrapper',
  styleUrl: 'e-wrapper.css',
  shadow: true,
})
export class EWrapper {
  @State() vidId?: string;
  @Prop() apikey?: string;
  @Prop() tags?: string[] = [];
  // @Prop({mutable: true}) show?: boolean = false;
  @State() isPaused: boolean = false;

  @Listen('click', {capture: false})
  handleClick() {
    // whenever a click event occurs on
    // the component, update `isOpen`,
    // triggering the rerender
    this.isPaused = !this.isPaused;
    this.showTags.emit();
  }

  @Element() hostElement!: HTMLElement;
  @Prop({mutable: true}) videoPlayer?: HTMLElement;

  componentDidLoad() {
    if (this.videoPlayer) {
      // Get the video container element and append it to the host element
      this.hostElement.appendChild(this.videoPlayer);
    }
  }

  @Event(
    {
      eventName: 'showTags',
      composed: true,
      cancelable: true,
      bubbles: true,
    }
  ) showTags: EventEmitter;

  @Listen('showTags', {capture: true})
  showTagsHandler(ev) {
    // this.showTags.emit();
    console.log(ev)
  }

  @Method()
  async showTag(e){
    console.log(e)
  }

  render() {
    return (
      <Host>
        <slot name="video-player"/>
        {this.isPaused && <e-tag xPos={50} yPos={50}/>}
      </Host>
    );
  }
}
