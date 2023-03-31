import { newSpecPage } from '@stencil/core/testing';
import { ETag } from '../e-tag';

describe('e-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ETag],
      html: `<e-tag></e-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <e-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-tag>
    `);
  });
});
