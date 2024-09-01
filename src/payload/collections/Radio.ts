import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_RADIO } from "./config";

export  const Radio: CollectionConfig = {
  slug: COLLECTION_SLUG_RADIO,
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'scheduledStartTime', type: 'date', required: true },
    { name: 'actualStartTime', type: 'date' },
    { name: 'actualEndTime', type: 'date' },
    { name: 'audioUrl', type: 'text', required: true },
    {
      name: 'statistics',
      type: 'group',
      fields: [
        { name: 'concurrentListeners', type: 'number', defaultValue: 0 },
        { name: 'listenerCount', type: 'number', defaultValue: 0 },
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
    { name: 'isTrending', type: 'text', defaultValue: 'false' },
    { name: 'isPopular', type: 'text', defaultValue: 'false' },
    { name: 'isLatest', type: 'text', defaultValue: 'false' },
  ],
};