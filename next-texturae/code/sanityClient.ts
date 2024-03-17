import { createClient } from 'next-sanity'
import {PROJECT_ID, DATASET, TOKEN} from './constVariables'

/** 
 * variables permettant d'effectuer des modifications vers le CMS Sanity
*/

export const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    token: TOKEN,
    useCdn: true,
    apiVersion: '2022-03-02'
  })