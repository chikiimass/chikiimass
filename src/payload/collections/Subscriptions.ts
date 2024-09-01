import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_SUBSCRIPTIONS } from "./config";

export const Subscriptions: CollectionConfig = {
    slug: COLLECTION_SLUG_SUBSCRIPTIONS,
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true
        },
        {
            name: 'tier',
            type: 'select',
            options: ['free',
                'basic', 'premium'],
            required: true
        },
        {
            name: 'startDate',
            type: 'date',
            required: true
        },
        {
            name: 'endDate',
            type: 'date'
        },
    ],
};