export interface DASHSegmentTemplate {
  duration: number;
  initialization: string;
  media: string;
  presentationTimeOffset: number;
  startNumber: string;
  timescale: number;
}

export interface DASHRepresentation {
  SegmentTemplate: DASHSegmentTemplate | DASHSegmentTemplate[];
  codecs: string; // "avc1.4D401E"
  frameRate: string; // "30000/1001"
  height: number; // 432
  id: string; // "v1_257"
  mimeType: string; // "video/mp4"
  sar: string; // "1:1"
  scanType: string; // "progressive"
  startWithSAP: number; // 1
  width: number; // 768
  bandwidth: number; // 1200000
}

export interface DASHAdaptationSet {
  Representation: DASHRepresentation | DASHRepresentation[];
  Representation_asArray: DASHRepresentation[];
  SegmentTemplate: DASHSegmentTemplate | DASHSegmentTemplate[];
  SegmentTemplate_asArray: DASHSegmentTemplate[];
  maxFrameRate: string;
  maxHeight: number;
  maxWidth: number;
  mimeType: string;
  par: string;
  segmentAlignment: string;
  startWithSAP: number;
}

export interface DASHPeriod {
  AdaptationSet: DASHAdaptationSet | DASHAdaptationSet[];
  AdaptationSet_asArray: DASHAdaptationSet[];
  __children: DASHAdaptationSet[];
  id: string; // "period0";
}

export interface DASHManifestRaw {
  Period: DASHPeriod | DASHPeriod[];
  Period_asArray: DASHPeriod[];
  availabilityStartTime: string;
  maxSegmentDuration: string; // PT2.005S;
  mediaPresentationDuration: number; // 193.68;
  minBufferTime: number; // 5;
  profiles: string; // "urn:mpeg:dash:profile:isoff-live:2011";
  protocol: string; // "DASH";
  type: string; // "static";
  xmlns: string; // "urn:mpeg:dash:schema:mpd:2011";
  'xmlns:scte35': string; // "http://www.scte.org/schemas/35/2014SCTE35.xsd";
  'xmlns:xsi': string; // "http://www.w3.org/2001/XMLSchema-instance";
  'xsi:schemaLocation': string; // "urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd";
}

/**
 * playlist-loader._handleMasterPlaylist()에서 파싱한 raw level
 */
export interface HLSLevelRaw {
  attrs: { [key: string]: any };
  audioCodec: string; // "mp4a.40.2"
  bitrate: number; // 2149280
  height: number; // 720
  name: string; // "720"
  unknownCodecs: any[];
  url: string; // 'https://test-streams.mux.dev/x36xhzz/url_0/193039199_mp4_h264_aac_hd_7.m3u8';
  videoCodec: string; // "avc1.64001f"
  width: number; // 1280,
  details: HLSLevelDetails;
}

export interface HLSSessionData {}

export interface HLSManifest {
  levels: HLSLevelRaw[];
  sessionData: any;
}

export interface ElementaryStreams {
  audio: boolean;
  video: boolean;
}

export interface Loading {
  start: number;
  first: number;
  end: number;
}

export interface Stats {
  loaded: number;
  retry: number;
  total: number;
  loading: Loading;
}

export interface HLSTag {
  [tag: string]: any;
}

export interface HLSFragment {
  autoLevel: boolean; // true
  backtracked: boolean; // false
  baseurl: string; // "https://test-streams.mux.dev/x36xhzz/url_0/193039199_mp4_h264_aac_hd_7.m3u8"
  bitrateTest: boolean;
  false;
  cc: number; // 0
  deltaPTS: number; // 0.02322222222222222
  dropped: number; // 0
  duration: number; // 10.023211111111111
  endDTS: number; // 10.007800453514703
  endPTS: number; // 10.023211111111111
  level: number; // 3
  levelkey: any; // undefined
  loaded: number; // 1915156
  loader: any; // undefined
  maxStartPTS: number; // 0.02322222222222222
  programDateTime: any; // null
  rawProgramDateTime: any; // null
  relurl: string; // "url_462/193039199_mp4_h264_aac_hd_7.ts"
  sn: number; // 0
  start: number; // 0
  startDTS: number; // 0
  startPTS: number; // 0
  stats: Stats;
  tagList: HLSTag[];
  title: string; // null
  type: string; // "main"
  urlId: number; // 0
  _byteRange: any; // null
  _decryptdata: any; // null
  _elementaryStreams: ElementaryStreams;
  _url: string; // "https://test-streams.mux.dev/x36xhzz/url_0/url_462/193039199_mp4_h264_aac_hd_7.ts"
  byteRange: any;
  byteRangeEndOffset: any;
  byteRangeStartOffset: any;
  decryptdata: any;
  encrypted: any;
  endProgramDateTime: any;
  url: any;
}

/**
 * playlist-loader._handleTrackOrLevelPlaylist() 에서 파싱
 */
export interface HLSLevelDetails {
  PTSKnown: boolean; // true
  averagetargetduration: number; // 9.915375
  endCC: number; // 0
  endSN: number; // 63
  fragments: HLSFragment[];
  initSegment: any; // null
  live: boolean; // false
  needSidxRanges: boolean; // false
  startCC: number; // 0
  startSN: number; // 0
  startTimeOffset: any; // null
  targetduration: number; // 11
  tload: number; // 5169.105000095442
  totalduration: number; // 634.584
  type: string; // "VOD"
  url: string; // "https://test-streams.mux.dev/x36xhzz/url_0/193039199_mp4_h264_aac_hd_7.m3u8"
  version: number;
  3;
}

/**
 * level-controller.onManifestParsed()에서 정제한 Level
 */
export interface HLSLevelResolved {
  audioCodec: string; // "mp4a.40.5"
  bitrate: number; // 246440
  fragmentError: boolean; // false
  height: number; // 184
  loadError: number; // 0
  name: string; // "240"
  unknownCodecs: any[];
  url: string[]; // ["https://test-streams.mux.dev/x36xhzz/url_2/193039199_mp4_h264_aac_ld_7.m3u8"]
  urlId: number; // 0
  videoCodec: string; // "avc1.42000d"
  width: number; // 320
}

export default class ManifestConverter {
  public convert (dashManifest: DASHManifestRaw, baseurl: string): HLSManifest {
    const segmentTemplate =
      dashManifest.Period_asArray[0].AdaptationSet_asArray[0]
        .SegmentTemplate_asArray[0];

    const levels: HLSLevelRaw[] = dashManifest.Period_asArray[0].AdaptationSet_asArray[0].Representation_asArray.map(
      (rep: DASHRepresentation, idx: number): HLSLevelRaw => {
        const convertedRawLevel: Partial<HLSLevelRaw> = {
          videoCodec: rep.codecs,
          width: rep.width,
          height: rep.height,
          url: '',
          bitrate: rep.bandwidth,
          name: rep.id,
          unknownCodecs: [],
          audioCodec: '',
          attrs: {}
        };

        const levelDetails: Partial<HLSLevelDetails> = {
          needSidxRanges: false,
          endCC: 0,
          endSN: -1, // TODO:
          type: 'VOD',
          live: false,
          startSN: 0,
          startCC: 0,
          averagetargetduration: segmentTemplate.duration,
          fragments: createFragments(
            segmentTemplate,
            rep,
            idx,
            baseurl,
            Number.parseFloat(dashManifest.maxSegmentDuration.replace(/.*PT/, ''))
          ) as HLSFragment[]
        };

        convertedRawLevel.details = levelDetails as HLSLevelDetails;

        return convertedRawLevel as HLSLevelRaw;
      }
    );

    const result: Partial<HLSManifest> = {
      levels: levels,
      sessionData: null
    };

    return result as HLSManifest;
  }
}

function createFragments (
  segTemplate: DASHSegmentTemplate,
  rep: DASHRepresentation,
  level: number,
  baseurl: string, segDuration:number
): Partial<HLSFragment>[] {
  const { media: chunkTemplate, startNumber } = segTemplate;

  const endNumber = 98; // TODO 어떻게 알지?

  const { id } = rep;

  const fragments: Partial<HLSFragment>[] = [];

  for (let i = Number.parseInt(startNumber); i < endNumber; i++) {
    const relurl = chunkTemplate
      .replace('$RepresentationID$', rep.id)
      .replace('$Number$', i.toString());

    fragments.push({
      type: 'main',
      level,
      cc: 0,
      urlId: level,
      baseurl,
      start: (i - 1) * segDuration,
      sn: i,
      title: id,
      duration: segDuration,
      url: `${baseurl.replace('/manifest.mpd', '')}/${relurl}`,
      relurl
    });
  }

  return fragments;
}
