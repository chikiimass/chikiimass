import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_MOVIES, COLLECTION_SLUG_USER, COLLECTION_SLUG_VIEW_HISTORY } from "./config";

export const ViewHistory: CollectionConfig = {
    slug: COLLECTION_SLUG_VIEW_HISTORY,
    fields: [
      { name: 'user', type: 'relationship', relationTo: COLLECTION_SLUG_USER, required: true },
      { name: 'content', type: 'relationship', relationTo: [COLLECTION_SLUG_MOVIES, 'series', 'episodes', 'livestreams', 'podcasts', 'radio'], required: true },
/*       { name: 'viewedAt', type: 'date', defaultValue: () => new Date() }, */
    ],
  };
  

  