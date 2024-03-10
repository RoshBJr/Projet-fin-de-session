import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {PROJECT_ID, DATASET} from '../next-texturae/code/constVariables';

export default defineConfig({
  name: 'default',
  title: 'texturae',

  projectId: PROJECT_ID,
  dataset: DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
