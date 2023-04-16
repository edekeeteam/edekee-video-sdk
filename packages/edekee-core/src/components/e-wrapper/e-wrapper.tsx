import {Component, h, Host, Prop, State} from '@stencil/core';

@Component({
  tag: 'e-wrapper',
  styleUrl: 'e-wrapper.css',
  shadow: true,
})
export class EWrapper {

  @State() isPaused: boolean = false;
  @State() edekeeApi: string
  @Prop() apikey: string

  @Prop() tags: []

  // @Event() toggleTags: EventEmitter;
  //
  // @Listen('toggleTags')
  // toggleTagsListener(event: CustomEvent) {
  //   console.log('Toggle Tags: ', event.detail);
  // }

  handlePause = () => {
    this.isPaused = true;
  }

  componentWillLoad() {

  }

  render() {
    return (
      <Host onpause={this.handlePause}>
        <slot></slot>
        {
          this.isPaused && <e-tag xPos={40} yPos={70}/>
        }
      </Host>
    );
  }

}
