/**
 * Created by govind on 9/10/18.
 */


var Settings = {
  init: function(){

  },

  getallsettings: function(){

    console.log("Settings: getallsettings: ");
    let settings_temp = {availableIntegrations:
      [
        {serviceName: "Nagios", version: "v1.0.0"},
        {serviceName: "ServiceNow Incident Management", version: "v1.1.0"},
        {serviceName: "Splunk", version: "v1.2.0"}
      ]
    };

    return settings_temp;
  }
  
};

module.exports = Settings;