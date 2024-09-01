import { CollectionConfig } from 'payload'
import { COLLECTION_SLUG_GENRES } from './config'

export const Genres: CollectionConfig = {
  slug: COLLECTION_SLUG_GENRES,
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'select',
      options: [
        { label: 'Action', value: 'action' },
        { label: 'Adventure', value: 'adventure' },
        { label: 'Comedy', value: 'comedy' },
        { label: 'Drama', value: 'drama' },
        { label: 'Thriller', value: 'thriller' },
        { label: 'Horror', value: 'horror' },
        { label: 'Science Fiction', value: 'science-fiction' },
        { label: 'Romance', value: 'romance' },
        { label: 'Crime', value: 'crime' },
        { label: 'Mystery', value: 'mystery' },
        { label: 'Sci-Fi & Fantasy', value: 'sci-fi-fantasy' },
        { label: 'Comedy-Drama', value: 'comedy-drama' },
        { label: 'Political Drama', value: 'political-drama' },
        { label: 'Historical Drama', value: 'historical-drama' },
        { label: 'Superhero', value: 'superhero' },
        { label: 'Legal Drama', value: 'legal-drama' },
        { label: 'Fantasy', value: 'fantasy' },
        { label: 'Slice of Life', value: 'slice-of-life' },
        { label: 'Mecha', value: 'mecha' },
        { label: 'Dark Fantasy', value: 'dark-fantasy' },
        { label: 'Sports', value: 'sports' },
        { label: 'Reality Competition', value: 'reality-competition' },
        { label: 'Variety Shows', value: 'variety-shows' },
        { label: 'Music', value: 'music' },
        { label: 'Documentary Live', value: 'documentary-live' },
        { label: 'Religious Services', value: 'religious-services' }
      ],
      required: true,
      hasMany: true
    }
  ]
}
