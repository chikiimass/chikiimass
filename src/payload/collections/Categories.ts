import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'select',
      options: [
        { label: 'Blockbusters', value: 'blockbusters' },
        { label: 'Indie Films', value: 'indie-films' },
        { label: 'Classics', value: 'classics' },
        { label: 'Documentaries', value: 'documentaries' },
        { label: 'Family', value: 'family' },
        { label: 'Foreign Films', value: 'foreign-films' },
        { label: 'Biopics', value: 'biopics' },
        { label: 'Musicals', value: 'musicals' },
        { label: 'Reality Shows', value: 'reality-shows' },
        { label: 'Sitcoms', value: 'sitcoms' },
        { label: 'Talk Shows', value: 'talk-shows' },
        { label: 'Game Shows', value: 'game-shows' },
        { label: 'News & Current Affairs', value: 'news-current-affairs' },
        { label: 'Daytime Drama', value: 'daytime-drama' },
        { label: 'Late Night Shows', value: 'late-night-shows' },
        { label: 'Anthology Series', value: 'anthology-series' },
        { label: 'Limited Series', value: 'limited-series' },
        { label: 'Miniseries', value: 'miniseries' },
        { label: 'Web Series', value: 'web-series' },
        { label: 'Crime Series', value: 'crime-series' },
        { label: 'Historical Series', value: 'historical-series' },
        { label: 'Fantasy Series', value: 'fantasy-series' },
        { label: 'Teen Dramas', value: 'teen-dramas' },
        { label: 'Procedural Dramas', value: 'procedural-dramas' },
        { label: 'Anime', value: 'anime' },
        { label: 'Cartoons', value: 'cartoons' },
        { label: 'Animated Features', value: 'animated-features' },
        { label: 'Stop Motion', value: 'stop-motion' },
        { label: 'CGI Animation', value: 'cgi-animation' },
        { label: '2D Animation', value: '2d-animation' },
        { label: 'Family Animation', value: 'family-animation' },
        { label: 'Adult Animation', value: 'adult-animation' },
        { label: 'Sports', value: 'sports' },
        { label: 'Live Events', value: 'live-events' },
        { label: 'Concerts', value: 'concerts' },
        { label: 'Award Shows', value: 'award-shows' },
        { label: 'Religious Programming', value: 'religious-programming' }
      ],
      required: true,
      hasMany: true,
    }
  ]
}
