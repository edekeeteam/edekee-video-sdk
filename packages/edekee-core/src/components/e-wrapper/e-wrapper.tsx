import {Component, h, Host, Prop, State, Event, Listen} from '@stencil/core';

@Component({
  tag: 'e-wrapper',
  styleUrl: 'e-wrapper.css',
  shadow: true,
})
export class EWrapper {

  @State() isPaused: boolean = false;

  @Prop() tags: []

  @Event() toggleTags: EventEmitter;

  @Listen('toggleTags')
  toggleTagsListener(event: CustomEvent) {
    console.log('Toggle Tags: ', event.detail);
  }

  handlePause = () => {
    this.isPaused = true;
  }

  render() {
    return (
      <Host onpause={this.handlePause}>
        <slot></slot>
        {
          this.isPaused && this.tags.map((t) =>
            <e-tag xPos={t.xPos}/>
          )
        }
      </Host>
    );
  }

}
