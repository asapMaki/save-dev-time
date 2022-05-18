/**
 * Generated by orval
 * Do not edit manually.
 */
export type EpisodeGetParams = {page?: number};

export type CharacterGetParams = {page?: number; name?: string};

export interface Episode {
  id?: number;
  name?: string;
  air_date?: string;
  episode?: string;
}

export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  image?: string;
}

export interface Info {
  count?: number;
  pages?: number;
}

export interface EpisodeList {
  info?: Info;
  results?: Episode[];
}

export interface CharacterList {
  info?: Info;
  results?: Character[];
}

export interface ErrorModel {
  message: string;
  code: number;
}
