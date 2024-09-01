import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_EPISODES } from "../config";

export const Episodes: CollectionConfig = {
    slug: COLLECTION_SLUG_EPISODES,
    fields: [
      { name: 'title', type: 'text', required: true },
      { name: 'description', type: 'textarea' },
      { name: 'episodeNumber', type: 'number', required: true },
      { name: 'duration', type: 'number', required: true },
      { name: 'releaseDate', type: 'date', required: true },
      { name: 'videoUrl', type: 'text', required: true },
      {
        name: 'statistics',
        type: 'group',
        fields: [
          { name: 'viewCount', type: 'number', defaultValue: 0 },
          { name: 'likeCount', type: 'number', defaultValue: 0 },
          { name: 'dislikeCount', type: 'number', defaultValue: 0 },
          { name: 'commentCount', type: 'number', defaultValue: 0 },
        ],
      },
      {
        name: 'status',
        type: 'select',
        options: ['available', 'unavailable', 'upcoming'],
        defaultValue: 'available',
      },
    ],
  };
  