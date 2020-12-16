'use strict';

module.exports = {
  name: 'Nightscout'
  , version: '0.8.0'
  , apiEnabled: true
  , careportalEnabled: true
  , head: 'ae71dca'
  , settings: {
    units: 'mmol/L'
    , timeFormat: 24
    , nightMode: false
    , showRawbg: 'noise'
    , customTitle: 'Test Title'
    , theme: 'colors'
    , alarmUrgentHigh: true
    , alarmHigh: true
    , alarmLow: true
    , alarmUrgentLow: true
    , alarmTimeagoWarn: true
    , alarmTimeagoWarnMins: 15
    , alarmTimeagoUrgent: true
    , alarmTimeagoUrgentMins: 30
    , language: 'zh_cn'
    , enable: 'devicestatus rawbg upbat careportal iob profile cage bage avg cob basal treatments sage boluscalc pump openaps iage speech'
    , showPlugins: 'iob'
    , alarmTypes: 'predict'
    , thresholds: {
      bgHigh: 200
      , bgTargetTop: 170
      , bgTargetBottom: 80
      , bgLow: 55
    }
    , extendedSettings: { }
  }
};
