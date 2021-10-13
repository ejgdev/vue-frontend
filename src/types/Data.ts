/* eslint-disable camelcase */

export interface Platform {
  name: string;
  has_content: boolean;
}

export default interface Data {
  format: string;
  selected_assets?: number;
  total_assets?: number;
  thumbnail_url: string | null;
  message: string;
  platforms: Platform[];
}
