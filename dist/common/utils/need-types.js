'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  employerAndJobs: {
    action: 'requestEmployerAndJobs',
    stateDataPoint: 'employer'
  },
  bookingAndValidation: {
    action: 'requestBookingAndValidation',
    actionV3: 'getBookingV3',
    stateDataPoint: 'booking'
  },
  employersDraftJobs: {
    action: 'requestEmployersDraftJobs',
    actionV3: 'getAllDraftsV3',
    stateDataPoint: 'employersDraftJobs',
    dependsOn: 'userOrgs'
  },
  agencyStaff: {
    action: 'requestAgencyStaff',
    stateDataPoint: 'agencyStaff'
  },
  pendingAndDraftJobs: {
    action: 'requestPendingAndDraftJobs',
    actionV3: 'getAllPendingAndDraftsV3',
    stateDataPoint: 'pendingJobs',
    dependsOn: 'employerAndJobs'
  },
  jobStats: {
    action: 'requestJobStats',
    stateDataPoint: 'jobStats',
    dependsOn: 'employerAndJobs'
  },
  jobApplications: {
    action: 'requestJobApplications',
    stateDataPoint: 'jobApplications'
  },
  employerAssets: {
    action: 'requestEmployerAssets',
    stateDataPoint: 'assetsForEdit'
  },
  assetNotifications: {
    action: 'requestAssetNotifications',
    stateDataPoint: 'assetNotifications'
  },
  cmsContent: {
    action: 'requestCmsContent',
    stateDataPoint: 'subscriptionCmsContent',
    dependsOn: 'employerAndJobs'
  },
  cmsHelpContent: {
    action: 'requestCmsHelpContent',
    stateDataPoint: 'cmsHelpContent'
  },
  userOrgs: {
    action: 'requestUserOrgs'
  }
};
module.exports = exports['default'];
//# sourceMappingURL=need-types.js.map