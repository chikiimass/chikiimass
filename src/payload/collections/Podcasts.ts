import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_PODCASTS } from "./config";

export const Podcasts: CollectionConfig = {
    slug: COLLECTION_SLUG_PODCASTS,
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'episodeNumber', type: 'number' },
        { name: 'host', type: 'text' },
        { name: 'guests', type: 'array', fields: [{ name: 'guest', type: 'text' }] },
        { name: 'duration', type: 'number', required: true },
        { name: 'releaseDate', type: 'date', required: true },
        { name: 'audioUrl', type: 'text', required: true },
        { name: 'thumbnails', type: 'upload', relationTo: 'media', required: true },
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
            options: ['available', 'unavailable'],
            defaultValue: 'available',
        },],
};