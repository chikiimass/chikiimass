/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    comments: Comment;
    categories: Category;
    tags: Tag;
    episodes: Episode;
    series: Series;
    genres: Genre;
    movies: Movie;
    ratings: Rating;
    livestreams: Livestream;
    podcasts: Podcast;
    radio: Radio;
    'related-content': RelatedContent;
    subscriptions: Subscription;
    'view-history': ViewHistory;
    watchlist: Watchlist;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  imageUrl?: string | null;
  role?: ('admin' | 'user') | null;
  emailVerified?: string | null;
  stripeCustomerId?: string | null;
  accounts?:
    | {
        provider?: string | null;
        providerAccountId?: string | null;
        id?: string | null;
      }[]
    | null;
  verificationTokens?:
    | {
        identifier?: string | null;
        token?: string | null;
        expires?: string | null;
        id?: string | null;
      }[]
    | null;
  watchHistory?:
    | {
        content?:
          | ({
              relationTo: 'movies';
              value: string | Movie;
            } | null)
          | ({
              relationTo: 'series';
              value: string | Series;
            } | null)
          | ({
              relationTo: 'episodes';
              value: string | Episode;
            } | null)
          | ({
              relationTo: 'livestreams';
              value: string | Livestream;
            } | null)
          | ({
              relationTo: 'podcasts';
              value: string | Podcast;
            } | null)
          | ({
              relationTo: 'radio';
              value: string | Radio;
            } | null);
        id?: string | null;
      }[]
    | null;
  watchlist?:
    | (
        | {
            relationTo: 'movies';
            value: string | Movie;
          }
        | {
            relationTo: 'series';
            value: string | Series;
          }
        | {
            relationTo: 'episodes';
            value: string | Episode;
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "movies".
 */
export interface Movie {
  id: string;
  title: string;
  description?: string | null;
  releaseDate: string;
  duration: number;
  genres?:
    | {
        genre?: string | null;
        id?: string | null;
      }[]
    | null;
  cast?:
    | {
        actor?: string | null;
        id?: string | null;
      }[]
    | null;
  director?: string | null;
  thumbnails: string | Media;
  trailerUrl?: string | null;
  rating: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
  languages?:
    | {
        language?: string | null;
        id?: string | null;
      }[]
    | null;
  statistics?: {
    viewCount?: number | null;
    likeCount?: number | null;
    dislikeCount?: number | null;
    commentCount?: number | null;
  };
  status?: ('available' | 'unavailable' | 'upcoming') | null;
  isTrending?: string | null;
  isPopular?: string | null;
  isLatest?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  title?: string | null;
  rawContent?: string | null;
  alt?: string | null;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "series".
 */
export interface Series {
  id: string;
  title: string;
  description?: string | null;
  releaseDate: string;
  seasons?:
    | {
        seasonNumber: number;
        episodes?: (string | Episode)[] | null;
        id?: string | null;
      }[]
    | null;
  Genres?: (string | Genre)[] | null;
  cast?:
    | {
        actor?: string | null;
        id?: string | null;
      }[]
    | null;
  director?: string | null;
  thumbnails: string | Media;
  trailerUrl?: string | null;
  rating: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
  languages?:
    | {
        language?: string | null;
        id?: string | null;
      }[]
    | null;
  statistics?: {
    viewCount?: number | null;
    likeCount?: number | null;
    dislikeCount?: number | null;
    commentCount?: number | null;
  };
  status?: ('available' | 'unavailable' | 'upcoming') | null;
  isTrending?: string | null;
  isPopular?: string | null;
  isLatest?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "episodes".
 */
export interface Episode {
  id: string;
  title: string;
  description?: string | null;
  episodeNumber: number;
  duration: number;
  releaseDate: string;
  videoUrl: string;
  statistics?: {
    viewCount?: number | null;
    likeCount?: number | null;
    dislikeCount?: number | null;
    commentCount?: number | null;
  };
  status?: ('available' | 'unavailable' | 'upcoming') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "genres".
 */
export interface Genre {
  id: string;
  name: (
    | 'action'
    | 'adventure'
    | 'comedy'
    | 'drama'
    | 'thriller'
    | 'horror'
    | 'science-fiction'
    | 'romance'
    | 'crime'
    | 'mystery'
    | 'sci-fi-fantasy'
    | 'comedy-drama'
    | 'political-drama'
    | 'historical-drama'
    | 'superhero'
    | 'legal-drama'
    | 'fantasy'
    | 'slice-of-life'
    | 'mecha'
    | 'dark-fantasy'
    | 'sports'
    | 'reality-competition'
    | 'variety-shows'
    | 'music'
    | 'documentary-live'
    | 'religious-services'
  )[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "livestreams".
 */
export interface Livestream {
  id: string;
  title: string;
  description?: string | null;
  scheduledStartTime: string;
  actualStartTime?: string | null;
  actualEndTime?: string | null;
  videoUrl?: string | null;
  statistics?: {
    concurrentViewers?: number | null;
    viewCount?: number | null;
    likeCount?: number | null;
    dislikeCount?: number | null;
    commentCount?: number | null;
  };
  status?: ('upcoming' | 'live' | 'online' | 'offline' | 'ended') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "podcasts".
 */
export interface Podcast {
  id: string;
  title: string;
  description?: string | null;
  episodeNumber?: number | null;
  host?: string | null;
  guests?:
    | {
        guest?: string | null;
        id?: string | null;
      }[]
    | null;
  duration: number;
  releaseDate: string;
  audioUrl: string;
  thumbnails: string | Media;
  statistics?: {
    viewCount?: number | null;
    likeCount?: number | null;
    dislikeCount?: number | null;
    commentCount?: number | null;
  };
  status?: ('available' | 'unavailable') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "radio".
 */
export interface Radio {
  id: string;
  title: string;
  description?: string | null;
  scheduledStartTime: string;
  actualStartTime?: string | null;
  actualEndTime?: string | null;
  audioUrl: string;
  statistics?: {
    concurrentListeners?: number | null;
    listenerCount?: number | null;
    likeCount?: number | null;
    dislikeCount?: number | null;
    commentCount?: number | null;
  };
  status?: ('upcoming' | 'live' | 'online' | 'offline' | 'ended') | null;
  isTrending?: string | null;
  isPopular?: string | null;
  isLatest?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "comments".
 */
export interface Comment {
  id: string;
  content: string;
  author: string | User;
  timestamp?: string | null;
  relatedMovie?: (string | null) | Movie;
  relatedEpisode?: (string | null) | Episode;
  relatedLiveStream?: (string | null) | Livestream;
  relatedPodcast?: (string | null) | Podcast;
  relatedRadio?: (string | null) | Radio;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name: (
    | 'blockbusters'
    | 'indie-films'
    | 'classics'
    | 'documentaries'
    | 'family'
    | 'foreign-films'
    | 'biopics'
    | 'musicals'
    | 'reality-shows'
    | 'sitcoms'
    | 'talk-shows'
    | 'game-shows'
    | 'news-current-affairs'
    | 'daytime-drama'
    | 'late-night-shows'
    | 'anthology-series'
    | 'limited-series'
    | 'miniseries'
    | 'web-series'
    | 'crime-series'
    | 'historical-series'
    | 'fantasy-series'
    | 'teen-dramas'
    | 'procedural-dramas'
    | 'anime'
    | 'cartoons'
    | 'animated-features'
    | 'stop-motion'
    | 'cgi-animation'
    | '2d-animation'
    | 'family-animation'
    | 'adult-animation'
    | 'sports'
    | 'live-events'
    | 'concerts'
    | 'award-shows'
    | 'religious-programming'
  )[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  name: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ratings".
 */
export interface Rating {
  id: string;
  user: string | User;
  content:
    | {
        relationTo: 'movies';
        value: string | Movie;
      }
    | {
        relationTo: 'series';
        value: string | Series;
      }
    | {
        relationTo: 'episodes';
        value: string | Episode;
      };
  rating: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "related-content".
 */
export interface RelatedContent {
  id: string;
  content: (
    | {
        relationTo: 'movies';
        value: string | Movie;
      }
    | {
        relationTo: 'series';
        value: string | Series;
      }
    | {
        relationTo: 'episodes';
        value: string | Episode;
      }
    | {
        relationTo: 'livestreams';
        value: string | Livestream;
      }
    | {
        relationTo: 'podcasts';
        value: string | Podcast;
      }
    | {
        relationTo: 'radio';
        value: string | Radio;
      }
  )[];
  relatedContent?:
    | (
        | {
            relationTo: 'movies';
            value: string | Movie;
          }
        | {
            relationTo: 'series';
            value: string | Series;
          }
        | {
            relationTo: 'episodes';
            value: string | Episode;
          }
        | {
            relationTo: 'livestreams';
            value: string | Livestream;
          }
        | {
            relationTo: 'podcasts';
            value: string | Podcast;
          }
        | {
            relationTo: 'radio';
            value: string | Radio;
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "subscriptions".
 */
export interface Subscription {
  id: string;
  user: string | User;
  tier: 'free' | 'basic' | 'premium';
  startDate: string;
  endDate?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "view-history".
 */
export interface ViewHistory {
  id: string;
  user: string | User;
  content:
    | {
        relationTo: 'movies';
        value: string | Movie;
      }
    | {
        relationTo: 'series';
        value: string | Series;
      }
    | {
        relationTo: 'episodes';
        value: string | Episode;
      }
    | {
        relationTo: 'livestreams';
        value: string | Livestream;
      }
    | {
        relationTo: 'podcasts';
        value: string | Podcast;
      }
    | {
        relationTo: 'radio';
        value: string | Radio;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "watchlist".
 */
export interface Watchlist {
  id: string;
  user: string | User;
  content: (
    | {
        relationTo: 'movies';
        value: string | Movie;
      }
    | {
        relationTo: 'series';
        value: string | Series;
      }
    | {
        relationTo: 'episodes';
        value: string | Episode;
      }
  )[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}