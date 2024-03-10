import {defineCliConfig} from 'sanity/cli'
import {PROJECT_ID, DATASET} from '../nxt-texturae/code/constVariables';

export default defineCliConfig({
  api: {
    projectId: PROJECT_ID,
    dataset: DATASET
  }
})
