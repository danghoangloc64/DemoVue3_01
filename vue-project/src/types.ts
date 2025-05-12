/**
 * @file types.ts
 * @brief Defines the types and interfaces used throughout the application.
 * @author IVC
 * @date 2025/01/24
 * @details This file contains the type definitions and interfaces for various data structures used in the application, including system logs, contractor data, and related entities.
 */

export interface ErrorObject {
  isShow: boolean;
  message: string;
}

export interface Type {
  type: "camera" | "recorder" | "gateway" | "folder" | "file" | "company";
}

export enum Role {
  Customer = "Customer",
  CustomerAdmin = "CustomerAdmin",
  BusinessOwner = "BusinessOwner",
  Seller = "Seller",
}

export interface AccountData {
  data: Array<AccountData>;
  accountInfor?: {
    role: Role;
    registerNo?: number;
    name?: string;
    read?: string;
    postalCode?: string;
    address?: string;
    faxNo?: string;
    controllerId?: string;
    controllerModel?: string;
    lineType?: string;
    signalPattern?: string;
    installationDate?: string;
    serviceStartDate?: string;
    remarks?: string;
    camera?: boolean;
    busnet?: boolean;
    controllerID?: string;
    businessOwner?: string;
    sellerName?: string;
    customerManager?: string;
  };
  emailAddressRegister?: Array<{
    emailName?: string;
    emailType?: string;
    emailTypeSetting?: string[];
  }>;
  cardList?: Array<{
    cardNo?: number;
    isUse?: boolean;
    cardId?: string;
    cardType?: string;
    isSecurityAuthorized?: boolean;
    isElectricLockAuthorized?: boolean;
    userName?: string;
    routeSelect?: Array<{
      routeName?: string;
    }>;
  }>;

  phoneNumberRegister?: Array<{
    phoneName?: string;
    phoneNumber?: string;
    smsTypeSetting?: string[];
  }>;
  ipConnectionPermission?: Array<{
    name?: string;
    ipType?: string;
    ipAddress?: string;
    subnetMask?: string;
  }>;
  accountManagement?: Array<{
    accountId?: string;
    accountName?: string;
    accountPermission?: string;
  }>;
}

interface Status {
  status: "online" | "offline";
}

interface Route {
  routeName?: string;
  isSharing?: boolean;
  isTeleComunicationCompatible?: boolean;
  isSwitchingOperation?: boolean;
  securityDelayTime?: string;
  alarmDelayTime?: string;
  alarmOutputTime?: string;
  alarmOutputMethod?: "延長なし" | "リアルタイム延長" | "オフディレイ";
  abnormalOPutputMethod?: "延長なし" | "リアルタイム延長";
  chimeOutputMethod?: "延長なし" | "リアルタイム延長";
  routeStatus?: string;
}
interface EmailNotificationList {
  emailReportTitle?: string;
  emailReportName?: string;
  emailReportEmail?: string;
  emailReportContent?: string;
  emailReportStatus?: string;
  emailAbnormal?: boolean;
  emailAlert?: boolean;
  emailResetPassword?: boolean;
  emailReportTime?: string;
}
interface Sensor {
  id: number;
  sensorName: string;
  loopStatus: "normal" | "abnormal";
  blockStatus?: "blocked" | "";
}
interface Card {
  no: number;
  isUse: boolean;
  cardType: string;
  cardID: string;
  pinCode: string;
  routeSelect: string;
  customerId: string;
  userName: string;
  code: string;
  type: string;
}

// --------------------------------------------------------- DATA FOR リモートコントロール画面
export interface remoteControlData {
  id?: string;
  customerName?: string;
  status?: "connected" | "disconnected";
  sellerName?: string;
  adminName?: string;
  ipAddress?: string;
  checkTime1?: string;
  checkTime2?: string;
  routerList?: Route[];
  emailNotificationList?: EmailNotificationList[];
  wiredSensorList?: Sensor[];
  wirelessSensorList?: Sensor[];
  busnetSensorList?: Sensor[];
  cardList?: Card[];
  BatteryList?: Battery[];
}

// --------------------------------------------------------- DATA FOR 通報履歴画面(全時系列)
export interface remoteHistoryData {
  historyDataFulltime: historyData[];
  historyDataAbnormality: historyDataAbnormality[];
  historyDataAlert: historyData[];
  historyDataMaintenance: historyDataMaintenance[];
  historyDataMaintainEmail: histortyDataEmail[];
  historyDataAlertEmail: histortyDataEmail[];
}

export interface HistoryData {
  timeReceivedCall: string;
  timeOfOccurence: string;
  controllerID: string;
  customerName: string;
  historyName: string;
  numsOfCallReceived: string;
  operatorName: string;
  sellerName: string;
  adminName: string;
}

export interface HistoryDataAbnormality {
  historyData: historyData;
  gatewayName: string;
  cameraName: string;
  playback: string;
}

export interface historyDataMaintenance {
  historyData: historyData;
  sensor: Sensor;
}

export interface historyDataEmail {
  timeReceivedCall: string;
  timeOfOccurence: string;
  controllerID: string;
  customerName: string;
  historyName: string;
  sensor: Sensor;
  sentDate: string;
  destinationEmail: string[];
}
// --------------------------------------------------------- DATA FOR 通報履歴画面(全時系列)
export interface cameraDetail extends Type, Status {
  cameraName: string;
  cameraModel: string;
  cameraIpAddress: string;
  cameraFrameRate: string;
  cameraResolution: string;
  cameraBitRate: string;
  cameraAudioCodec: string;
  cameraVideoCodec: string;
}

// --------------------------------------------------------- DATA FOR 簡易集計 (Simple Tally Layout BatteryInfo )
export interface Battery {
  registrationNo: string;
  customerName: string;
  sellerName: string;
  customerAdmin: string;
  controllerName: string;
  installationDate: string;
  plannedReplacementDate: string;
  replacementDate: string;
}

// --------------------------------------------------------- DATA FOR EMAIL PATTERN SETTINGS (Operation Setting)
export interface EmailPatternSetting {
  isAbnormal: boolean;
  signalName: string;
  patternSetting: [
    {
      title?: string;
      value?: boolean;
    },
  ];
}

export interface Maintenance {
  maintenanceTime: string;
  maintenanceDetail?: string;
  implementationStatus: "";
  implementationTime: string;
  note?: string;
}

export interface MaintenanceInfo {
  maintenanceId: string;
  scheduledStartAt: string;
  scheduledEndAt: string;
  maintenanceText: string;
  executionFlg: string;
  executionStartAt: string;
  executionEndAt: string;
  announcementAt: string;
  note: string;
}

export interface SystemLog {
  logDate: string;
  logOperationAccount: string;
  logInformation: string;
  logNote?: string;
}
export interface ContractorData {
  controlerId?: string;
  customerName?: string;
  contractorName?: string;
  logList?: Log[];
  mornitorList?: Mornitor[];
  cardList?: ContractorCard[];
  routeSelect?: Route[];
  contactInput?: ContactInput[];
  contactOutput?: ContactOutput[];
  lowPowerWirelessModule?: LowPowerWirelessModule[];
  busNetModule?: BusNetModule[];
  communicationControl?: CommunicationControl[];
  cardReader?: CardReader[];
}

interface Log {
  logName: string;
  logContent: string;
}
interface Mornitor {
  mornitorDate: string;
}
interface ContractorCard {
  cardNo: number;
  isUse: boolean;
  cardId?: string;
  cardType: string;
  isSecurityAuthorized: boolean;
  isElectricLockAuthorized: boolean;
  routeSelect?: Route[];
  userName: string;
}
interface ContactInput {
  inputContactName: string;
  routeSelect: Route[];
  inputContactLogic: "a接点" | "b接点";
  inputContactType: "警報" | null;
  alarmDelayTime: "ルート設定時間" | "即警備";
  isBlock: boolean;
}
interface ContactOutput {
  outputContactName: string;
  outputContactLogic: "a接点" | "b接点";
  outputFactor: MultipleOption | SingleOption;
  isBlock: boolean;
  routeSelect: Route[];
}
interface MultipleOption {
  isSingle: false;
  value: ("警報" | "非常" | "タンパー異常" | "テレコン")[];
}
interface SingleOption {
  isSingle: true;
  value: ["警備解除"];
}
interface LowPowerWirelessModule {
  wirelessName: string;
  wirelessBulkSetting: "F1" | "F2" | "F3" | "F4";
  isBlock: boolean;
  deviceCode: string;
  transmitterCode?: "携帯型" | "パッシブ型" | "接点入力型" | "リモコン" | "未登録";
  routeSelect: Route[];
  alarmSignalAssociation?: "警報" | "非常" | "チャイム" | "強制停止";
  transmissionMoritoring: boolean;
  sensitivityMornitoring: boolean;
  alarmDelaySetting: "ルート設定時間" | "即警備";
  securityDelaySetting: "ルート設定時間" | "即警備";
}
interface BusNetModule {
  busNetName: string;
  deviceId: string;
  routeSelect: Route[];
  alarmSignalAssociation?: "警報" | "非常" | "チャイム" | "強制停止";
  alarmDelaySetting: "ルート設定時間" | "即警備";
  isBlock: boolean;
  loopMoritoring: [] | null;
  outputFactor: MultipleOption | SingleOption;
  securityDelaySetting: "ルート設定時間" | "即警備";
}

interface CommunicationControl {
  alarmDelaySetting: "ルート設定時間" | "即警備";
  securityDelaySetting: "ルート設定時間" | "即警備";
}
interface CardReader {
  cardName: string;
  isUse: boolean;
  routeSelect: Route[];
  isBlock: boolean;
}

// --------------------------------------------------------- DATA FOR GatewayData

export interface gatewayData {
  gatewayType: string;
  gatewayIPAddress: string;
  gatewayMACAddress: string;
  gatewayVersion: string;
  gatewayID: string;
  gatewayStatus: string;
  gatewayStorageTotal: string;
  gatewayStorageUsed: string;
  gatewayMicroSdUsed: string;
  gatewayMicroSdTotal: string;
  gatewayLifeSpan: string;
  gatewayLog: gatewayLog[];
  gatewayCamera: gatewayCamera[];
}
export interface gatewayLog {
  logDate: string;
  logAlert: string;
  logComment: string;
}
export interface gatewayCamera {
  cameraName: string;
  cameraType: string;
  RTSPURL: string;
  cameraIP: string;
}

// --------------------------------------------------------- DATA FOR Maintenances Data on Home Screen
export interface Maintenances {
  maintenanceId: string;
  scheduledStart: Date;
  scheduledEnd: Date;
  maintenanceText: string;
  executionFlg: boolean;
  executionStart: Date;
  executionEnd: Date;
  announcementAt: Date;
  note: string;
}
// <summary>
// Type of Authority Account Login
// </summary>
export enum AuthorityType {
  BusinessOwner = "BusinessOwner",
  Seller = "Seller",
  CustomerAdmin = "CustomerAdmin",
  Customer = "Customer",
  Contractor = "Contractor"
}

// --------------------------------------------------------- DATA FOR Route Operation Screen
export interface RouteOperationData {
  routeNumber: number,
  routeName: string,
  commonArea: boolean,
  teleconverter: boolean,
  chime: boolean,
  securityDelayTimer: number,
  reportDelayTimer: number,
  reportOutputTimer: number,
  reportOutputMethodExtension: 0 | 1,
  errorOutputMethodExtension: 0 | 1,
  chimeOutputMethodExtension: 0 | 1,
}

// --------------------------------------------------------- DATA FOR Notification Settings Data on Notification Settings Screen
export interface NotificationSettings {
  alarmNotificationSound: boolean;
  alarmRedFrame: boolean;
  // TODO: This is a temporary response while waiting for the official data type of API IF-RA-38 and IF-RA-39 (sequence G011)
  notificationToneDuration: 5 | 10 | 20 | 30 | 60;
  redFrameDisplayDuration: 5 | 10 | 20 | 30 | 60;
}

export interface MailAddresses {
  name: string,
  mailAddresses: string,
  maintenanceReceive: boolean
}

export interface PhoneNumbers {
  name: string,
  phoneNumber: string,
  maintenanceReceive: boolean
}

export interface IpAddresses {
  name: string,
  ipAddressType: string,
  ipAddress: string,
  subnetMask: string
}

export interface LoginAcounts {
  loginId: string
  password: string
  mailAddress: string
  userName: string
  permissions?: number
}

// <summary>
// Registering basic information about a seller account
// </summary>
export interface RegisteringSellerAccount {
  companyName: string;
  companyNameKana: string;
  postalCode: string;
  address: string;
  department: string;
  fax: string;
  callCenter: boolean;
  ownerId: string;
  mailAddresses: MailAddresses[];
  phoneNumbers: PhoneNumbers[];
  ipAddresses: IpAddresses[];
  loginAcounts: LoginAcounts[];
}

export interface GateWay
{
  gatewayId: string; // UUIDv4
  gatewayName: string; // Maxlength 80
}
export interface Controller
{
  controllerId: string; // UUIDv4
  controllerName: string; // Maxlength 80
}

export interface Camera
{
  cameraId: string; // UUIDv4
  cameraName: string; // Maxlength 80
  cameraUrl: string;
  note: string;
}

export interface GateWayInfo {
  gatewayId: String;
  modelName: String;
  gatewayName: String;
  ip: String;
  subnetMask: String;
  deviceId: String;
  version: String;
  connectionStatus: String;
  controllers: Controller[];
}

export interface GwStorageInfo {
  builtInStorage: StorageInfo;
  microSD: StorageInfo | null;
  timestamp: Date;
  sessionId: String;
}

export interface StorageInfo {
  maxCapacity: number;
  usedCapacity: number;
  lifespanPrediction: Date;
}

export interface ViewCameraGatewayInfor {
  gatewayId: string;
  modelName: string;
  gatewayName: string;
  ip: string;
  version: string;
  cameras: Camera[];
  controllers: Controller[];
}

export interface UpdateIoTCertificateRequest {
  deviceIds: string[]; // List of UUIDv4
  deviceType: DeviceType;
}

export enum DeviceType {
  Controller = 0,
  CameraGateway = 1,
}

export interface ViewCameraGatewayFirmwareInfor {
  gatewayId: string;
  gatewayName: string;
  firmwareVersion: string;
}

export interface UpdateCameraGWFirmwareRequest {
  fileKey: string;
  gateways: {
    gatewayId: string;
  }[];
}

export interface MessageStatus
{
  isShow: boolean;
  text: string;
  title?: string;
  iconify?: string;
  img?: string;
  isError?: boolean;
}

export enum LogMessageType {
  Warn,
  Info,
  Error,
  Other,
}

export interface LogMessageInfo {
  type: LogMessageType;
  name: string;
  value: any;
}