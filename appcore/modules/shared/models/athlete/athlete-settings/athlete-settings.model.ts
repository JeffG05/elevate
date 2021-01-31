import { UserLactateThresholdModel } from "./user-lactate-threshold.model";

export class AthleteSettingsModel {
  public static readonly DEFAULT_MAX_HR: number = 190;
  public static readonly DEFAULT_REST_HR: number = 65;
  public static readonly DEFAULT_WEIGHT: number = 70;
  public static readonly DEFAULT_CYCLING_FTP: number = null;
  public static readonly DEFAULT_RUNNING_FTP: number = null;
  public static readonly DEFAULT_SWIM_FTP: number = null;

  public static readonly DEFAULT_MODEL: AthleteSettingsModel = new AthleteSettingsModel(
    AthleteSettingsModel.DEFAULT_MAX_HR,
    AthleteSettingsModel.DEFAULT_REST_HR,
    UserLactateThresholdModel.DEFAULT_MODEL,
    AthleteSettingsModel.DEFAULT_CYCLING_FTP,
    AthleteSettingsModel.DEFAULT_RUNNING_FTP,
    AthleteSettingsModel.DEFAULT_SWIM_FTP,
    AthleteSettingsModel.DEFAULT_WEIGHT
  );

  constructor(
    public maxHr: number,
    public restHr: number,
    public lthr: UserLactateThresholdModel,
    public cyclingFtp: number,
    public runningFtp: number,
    public swimFtp: number,
    public weight: number
  ) {}
}
