import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import post from './schemas/post'
import author from './schemas/author'
import profile from './schemas/profile'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, profile],
}
