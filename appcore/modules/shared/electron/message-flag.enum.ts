export enum MessageFlag {
  // From renderer to main
  START_SYNC,
  STOP_SYNC,
  LINK_STRAVA_CONNECTOR,
  GET_RUNTIME_INFO,
  COMPUTE_ACTIVITY,

  // From main to renderer
  SYNC_EVENT,
  FIND_ACTIVITY,
  FIND_ACTIVITY_STREAMS
}
