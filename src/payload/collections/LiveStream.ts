import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_LIVESTREAMS } from "./config";


export const LiveStreams: CollectionConfig = {
    slug: COLLECTION_SLUG_LIVESTREAMS,
    fields: [
      { name: 'title', type: 'text', required: true },
      { name: 'description', type: 'textarea' },
      { name: 'scheduledStartTime', type: 'date', required: true },
      { name: 'actualStartTime', type: 'date' },
      { name: 'actualEndTime', type: 'date' },
      { name: 'videoUrl', type: 'text' },
      {
        name: 'statistics',
        type: 'group',
        fields: [
          { name: 'concurrentViewers', type: 'number', defaultValue: 0 },
          { name: 'viewCount', type: 'number', defaultValue: 0 },
          { name: 'likeCount', type: 'number', defaultValue: 0 },
          { name: 'dislikeCount', type: 'number', defaultValue: 0 },
          { name: 'commentCount', type: 'number', defaultValue: 0 },
        ],
      },
      {
        name: 'status',
        type: 'select',
        options: ['upcoming', 'live', 'online', 'offline','ended'],
        defaultValue: 'upcoming',
      },
    ],
  };