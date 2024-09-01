import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_MOVIES } from "./config";

export const Movies: CollectionConfig = {
    slug: COLLECTION_SLUG_MOVIES,
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'releaseDate', type: 'date', required: true },
        { name: 'duration', type: 'number', required: true },
        { name: 'genres', type: 'array', fields: [{ name: 'genre', type: 'text' }] },
        { name: 'cast', type: 'array', fields: [{ name: 'actor', type: 'text' }] },
        { name: 'director', type: 'text' },
        { name: 'thumbnails', type: 'upload', relationTo: 'media', required: true },
        { name: 'trailerUrl', type: 'text' },
        { name: 'rating', type: 'select', options: ['G', 'PG', 'PG-13', 'R', 'NC-17'], required: true },
        { name: 'languages', type: 'array', fields: [{ name: 'language', type: 'text' }] },
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
        { name: 'isTrending', type: 'text', defaultValue: 'false' },
        { name: 'isPopular', type: 'text', defaultValue: 'false' },
        { name: 'isLatest', type: 'text', defaultValue: 'false' },
    ],
};