import { newE2EPage } from '@stencil/core/testing';

describe('e-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-wrapper></e-wrapper>');

    const element = await page.find('e-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
