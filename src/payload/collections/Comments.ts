import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_COMMENTS, COLLECTION_SLUG_LIVESTREAMS } from "./config";

export const Comments: CollectionConfig = {
    slug: COLLECTION_SLUG_COMMENTS,
    fields: [
      { name: 'content', type: 'textarea', required: true },
      { name: 'author', type: 'relationship', relationTo: 'users', required: true },
      { name: 'timestamp', type: 'date', defaultValue: () => new Date() },
      { name: 'relatedMovie', type: 'relationship', relationTo: 'movies', required: false },
      { name: 'relatedEpisode', type: 'relationship', relationTo: 'episodes', required: false },
      { name: 'relatedLiveStream', type: 'relationship', relationTo: COLLECTION_SLUG_LIVESTREAMS, required: false },
      { name: 'relatedPodcast', type: 'relationship', relationTo: 'podcasts', required: false },
      { name: 'relatedRadio', type: 'relationship', relationTo: 'radio', required: false },
    ],
  };
