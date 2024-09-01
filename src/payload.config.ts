// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Categories, Comments, Episodes, Genres, LiveStreams, media, Movies, Podcasts, Radio, Ratings, RelatedContent, Series, Subscriptions, Tags, users, ViewHistory, Watchlist } from './payload/collections'
import { COLLECTION_SLUG_MEDIA } from './payload/collections/config'
import { S3_PLUGIN_CONFIG } from './payload/plugins/s3'
import { s3Storage as s3StoragePlugin } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [users, media, Comments, Categories, Tags, Episodes, Series, Genres, Movies, Ratings, LiveStreams, Podcasts, Radio, RelatedContent, Subscriptions, ViewHistory, Watchlist],
  cors: ['https://checkout.stripe.com', `${process.env.NEXT_PUBLIC_SITE_URL}` || ''],
  csrf: ['https://checkout.stripe.com', process.env.NEXT_PUBLIC_SITE_URL || ''],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()]
  }),
  secret: process.env.AUTH_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
/*   db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }), */
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || ''
  }),
  /*   db: sqliteAdapter({
    client: {
      url: process.env.SQLDATABASE_URI
    }
  }), */
  /*db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || ''
    }
  }),*/
  serverURL: process.env.NEXT_PUBLIC_SITE_URL,
  sharp,
  plugins: [
    s3StoragePlugin({
      ...S3_PLUGIN_CONFIG,
      collections: {
        [COLLECTION_SLUG_MEDIA]: {
          disableLocalStorage: true,
          generateFileURL: (args: any) => {
            //return `https://${process.env.NEXT_PUBLIC_S3_HOSTNAME}/${args.prefix}/${args.filename}`
            return `https://pub-2af5a0856a4a42c3b267a44f15493caf.r2.dev/chikiimass/${args.prefix}/${args.filename}`
          },
          prefix: process.env.NEXT_PUBLIC_UPLOAD_PREFIX || 'media'
        }
      }
    }),
  ],
})
