import { newE2EPage } from '@stencil/core/testing';

describe('e-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-tag></e-tag>');

    const element = await page.find('e-tag');
    expect(element).toHaveClass('hydrated');
  });
});
