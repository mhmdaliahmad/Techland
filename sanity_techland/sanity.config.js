import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'techland',

  projectId: '711cfosx',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (prev, context) => {
      console.log(prev)
      // logs array of templates for existing types
      console.log(context);
      // logs: schema, currentUser, getClient, dataset, projectId
      return prev;
    }
  },
})
