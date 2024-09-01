import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_EPISODES, COLLECTION_SLUG_MOVIES, COLLECTION_SLUG_RATINGS, COLLECTION_SLUG_SERIES, COLLECTION_SLUG_USER } from "./config";

export const Ratings: CollectionConfig = {
    slug: COLLECTION_SLUG_RATINGS,
    fields: [
      { name: 'user', type: 'relationship', relationTo: COLLECTION_SLUG_USER, required: true },
      { name: 'content', type: 'relationship', relationTo: [COLLECTION_SLUG_MOVIES, COLLECTION_SLUG_SERIES, COLLECTION_SLUG_EPISODES], required: true },
      { name: 'rating', type: 'number', min: 1, max: 5, required: true },
    ],
  };
