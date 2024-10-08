import { COLLECTION_SLUG_MEDIA } from '@/payload/collections/config'
import type { CollectionConfig } from 'payload'
import { addContentHashToFile } from './hooks/addContentHashToFile'
import { handleSvgUpload } from './hooks/handleSvgUpload'
import { updateCacheControl } from './hooks/updateCacheControl'
import { isAdmin, isAdminOrPublished, isAnyone } from '@/payload/access'
import { slateEditor } from '@payloadcms/richtext-slate'

export const media: CollectionConfig = {
  slug: COLLECTION_SLUG_MEDIA,
  upload: {
    imageSizes: [
      {
        name: 'thumbnail',
        width: 1280,
        height: 720,
        position: 'centre'
      }
    ],
    adminThumbnail: ({ doc: media }) => (media?.sizes as any)?.thumbnail?.url || media.url
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin
  },
  admin: {
    useAsTitle: 'alt'
  },
  hooks: {
    beforeOperation: [addContentHashToFile],
    afterChange: [updateCacheControl, handleSvgUpload]
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        style: { display: 'none' },
        readOnly: true
      }
    },
    {
      name: 'rawContent',
      type: 'textarea',
      admin: {
        disabled: true,
        readOnly: true
      }
    },
    {
      name: 'alt',
      label: 'Alt',
      type: 'text'
    },
    {
      name: 'caption',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: ['link']
        }
      })
    }
  ]
}
