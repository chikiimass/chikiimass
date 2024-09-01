import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_RELATED_CONTENT } from "./config";

export const RelatedContent: CollectionConfig = {
    slug: COLLECTION_SLUG_RELATED_CONTENT,
    fields: [
      { name: 'content', type: 'relationship', relationTo: ['movies', 'series', 'episodes', 'livestreams', 'podcasts', 'radio'], hasMany: true, required: true },
      { name: 'relatedContent', type: 'relationship', relationTo: ['movies', 'series', 'episodes', 'livestreams', 'podcasts', 'radio'], hasMany: true },
    ],
  };