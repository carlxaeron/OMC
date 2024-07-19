import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import { defaultDocumentNodeResolver } from './deskStructure.js'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'OMC',

  projectId: 'd8mthu96',
  dataset: 'production',

  plugins: [structureTool({
    structure: defaultDocumentNodeResolver,
  }), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

