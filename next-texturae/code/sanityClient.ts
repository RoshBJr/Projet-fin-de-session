import {createClient} from '@sanity/client'
import {PROJECT_ID, DATASET, TOKEN} from './constVariables'

export const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    token: TOKEN,
    useCdn: false,
    apiVersion: '2022-03-02'
  })