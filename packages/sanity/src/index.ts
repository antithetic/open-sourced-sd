import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { taxonomyManager } from 'sanity-plugin-taxonomy-manager'
import { media } from 'sanity-plugin-media'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Open Sourced',

  projectId: 'u0y4587v',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    taxonomyManager({}),
    media(),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },
})
