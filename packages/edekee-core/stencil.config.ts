import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'core',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      // esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      componentCorePackage: '@edekee-sdk/core',
      proxiesFile: '../edekee-react/lib/components.ts',
      includeDefineCustomElements: true,
      excludeComponents: [
        'e-tag'
      ],
      // includeImportCustomElements: true
    }),
  ],
};
