import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_EPISODES, COLLECTION_SLUG_MOVIES, COLLECTION_SLUG_SERIES, COLLECTION_SLUG_WATCHLIST } from "./config";


export const Watchlist: CollectionConfig = {
    slug: COLLECTION_SLUG_WATCHLIST,
    fields: [
      { name: 'user', type: 'relationship', relationTo: 'users', required: true },
      { name: 'content', type: 'relationship', relationTo: [ COLLECTION_SLUG_MOVIES, COLLECTION_SLUG_SERIES, COLLECTION_SLUG_EPISODES], hasMany: true, required: true },
    ],
  };
  