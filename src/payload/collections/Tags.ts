import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_TAGS } from "./config";

export const Tags: CollectionConfig = {
    slug: COLLECTION_SLUG_TAGS,
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true
        },
    ],
};