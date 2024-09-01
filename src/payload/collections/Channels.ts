import { CollectionConfig } from "payload";
import { COLLECTION_SLUG_CHANNELS } from "./config";


export const Channels: CollectionConfig = {
  slug: COLLECTION_SLUG_CHANNELS,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter the channel name (e.g., Citizen TV Live)',
      },
    },
    {
      name: 'iconType',
      type: 'select',
      options: [
        { label: 'Upload Image', value: 'upload' },
        { label: 'URL', value: 'url' },
      ],
      required: true,
      defaultValue: 'url',
      admin: {
        description: 'Choose whether to upload an image or provide a URL for the icon.',
      },
    },
    {
      name: 'iconUpload',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data.iconType === 'upload',
        description: 'Upload the icon image here if "Upload Image" is selected above.',
      },
    },
    {
      name: 'iconUrl',
      type: 'text',
      admin: {
        condition: (data) => data.iconType === 'url',
        placeholder: 'https://example.com/icon.png',
      },
    },
    {
      name: 'thumbnailType',
      type: 'select',
      options: [
        { label: 'Upload Image', value: 'upload' },
        { label: 'URL', value: 'url' },
      ],
      required: true,
      defaultValue: 'url',
      admin: {
        description: 'Choose whether to upload an image or provide a URL for the thumbnail.',
      },
    },
    {
      name: 'thumbnailUpload',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data.thumbnailType === 'upload',
        description: 'Upload the thumbnail image here if "Upload Image" is selected above.',
      },
    },
    {
      name: 'thumbnailUrl',
      type: 'text',
      admin: {
        condition: (data) => data.thumbnailType === 'url',
        placeholder: 'https://example.com/thumbnail.png',
      },
    },
    {
      name: 'streamUrls',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'https://example.com/stream.m3u8',
          },
        },
      ],
      admin: {
        description: 'Add one or more stream URLs for the channel.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        placeholder: 'Enter a brief description of the channel.',
      },
    },
    {
      name: 'social',
      type: 'group',
      fields: [
        {
          name: 'thumbnail',
          type: 'text',
          admin: {
            placeholder: 'https://example.com/social-thumbnail.png',
          },
        },
        {
          name: 'socialLinks',
          type: 'array',
          fields: [
            {
              name: 'platform',
              type: 'select',
              options: [
                { label: 'Facebook', value: 'Facebook' },
                { label: 'Twitter', value: 'Twitter' },
                { label: 'Instagram', value: 'Instagram' },
                { label: 'YouTube', value: 'YouTube' },
                { label: 'Website', value: 'Website' },
                { label: 'App', value: 'App' },
                { label: 'WhatsApp', value: 'WhatsApp' },
                { label: 'Other', value: 'Other' },
              ],
              required: true,
            },
            {
              name: 'customPlatformName',
              type: 'text',
              admin: {
                condition: (data) => data.platform === 'Other',
                placeholder: 'Enter the name of the platform',
              },
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: {
                placeholder: 'https://example.com',
              },
            },
          ],
          admin: {
            description: 'Add social media links related to the channel. Choose "Other" and specify a custom platform name if needed.',
          },
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Online', value: 'online' },
        { label: 'Offline', value: 'offline' },
      ],
      defaultValue: 'offline',
      admin: {
        condition: ({ streamUrls }) => !(streamUrls && streamUrls.length > 0),
      },
    },
    {
      name: 'views',
      type: 'number',
      defaultValue: 0,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.streamUrls && data.streamUrls.length > 0) {
          data.status = 'online';
        }
        if (data.jsonInput) {
          try {
            const parsedData = JSON.parse(data.jsonInput);
            data.name = parsedData.name;
            data.iconType = parsedData.iconType;
            data.iconUrl = parsedData.iconUrl;
            data.thumbnailType = parsedData.thumbnailType;
            data.thumbnailUrl = parsedData.thumbnailUrl;
            data.streamUrls = parsedData.streamUrls;
            data.description = parsedData.description;
            data.social = parsedData.social;
            data.status = parsedData.status;
            data.views = parsedData.views;
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        }
        return data;
      },
    ],
  },
};

export default Channels;
