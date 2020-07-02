import M3U8Parser from '../loader/m3u8-parser';
import { MediaPlaylist } from '../types/media-playlist';
import DashParser from './DashParser';
import { HLSManifest } from './ManifestConverter';

export interface ManifestParser {
  parseMasterPlaylist: (data: string, url: string) => HLSManifest;
  parseMasterPlaylistMedia: (
    data: string,
    url: string,
    type: string,
    somthing?: any
  ) => MediaPlaylist[];
}

export default class ParserFactory {
  public static getParser (url: string): ManifestParser | null {
    if (/\.m3u8$/.test(url)) {
      return M3U8Parser as ManifestParser;
    } else if (/.mpd$/.test(url)) {
      return new DashParser() as ManifestParser;
    }
    return null;
  }
}
