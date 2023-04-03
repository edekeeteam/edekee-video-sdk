import { newSpecPage } from '@stencil/core/testing';
import { EWrapper } from '../e-wrapper';

describe('e-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EWrapper],
      html: `<e-wrapper></e-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <e-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-wrapper>
    `);
  });
});
