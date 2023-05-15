const Ziggy = {"url":"http:\/\/localhost\/dParking\/public","port":null,"defaults":{},"routes":{"LaravelInstaller::welcome":{"uri":"install","methods":["GET","HEAD"]},"LaravelInstaller::environment":{"uri":"install\/environment","methods":["GET","HEAD"]},"LaravelInstaller::environmentWizard":{"uri":"install\/environment\/wizard","methods":["GET","HEAD"]},"LaravelInstaller::environmentSaveWizard":{"uri":"install\/environment\/saveWizard","methods":["POST"]},"LaravelInstaller::environmentClassic":{"uri":"install\/environment\/classic","methods":["GET","HEAD"]},"LaravelInstaller::environmentSaveClassic":{"uri":"install\/environment\/saveClassic","methods":["POST"]},"LaravelInstaller::requirements":{"uri":"install\/requirements","methods":["GET","HEAD"]},"LaravelInstaller::permissions":{"uri":"install\/permissions","methods":["GET","HEAD"]},"LaravelInstaller::database":{"uri":"install\/database","methods":["GET","HEAD"]},"LaravelInstaller::final":{"uri":"install\/final","methods":["GET","HEAD"]},"LaravelUpdater::welcome":{"uri":"update","methods":["GET","HEAD"]},"LaravelUpdater::overview":{"uri":"update\/overview","methods":["GET","HEAD"]},"LaravelUpdater::database":{"uri":"update\/database","methods":["GET","HEAD"]},"LaravelUpdater::final":{"uri":"update\/final","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"]},"password.email":{"uri":"password\/email","methods":["POST"]},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"]},"password.update":{"uri":"password\/reset","methods":["POST"]},"verification.notice":{"uri":"email\/verify","methods":["GET","HEAD"]},"verification.verify":{"uri":"email\/verify\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.resend":{"uri":"email\/resend","methods":["POST"]},"site.home":{"uri":"\/","methods":["GET","HEAD"]},"home":{"uri":"home","methods":["GET","HEAD"]},"user.profile":{"uri":"profile","methods":["GET","HEAD"]},"user.profile.update":{"uri":"profile\/{user}","methods":["PUT"]},"user.list":{"uri":"user-list","methods":["GET","HEAD"]},"user.status":{"uri":"user-status\/{user}","methods":["GET","HEAD"],"bindings":{"user":"id"}},"userListJson":{"uri":"user\/getListForDataTable","methods":["GET","HEAD"]},"user.create":{"uri":"user-create","methods":["GET","HEAD"]},"user.store":{"uri":"user-create","methods":["POST"]},"user.edit":{"uri":"user-edit\/{user}","methods":["GET","HEAD"],"bindings":{"user":"id"}},"user.update":{"uri":"user-edit\/{user}","methods":["PUT"],"bindings":{"user":"id"}},"category.index":{"uri":"category","methods":["GET","HEAD"]},"category.create":{"uri":"category\/create","methods":["GET","HEAD"]},"category.store":{"uri":"category","methods":["POST"]},"category.edit":{"uri":"category\/{category}\/edit","methods":["GET","HEAD"],"bindings":{"category":"id"}},"category.update":{"uri":"category\/{category}","methods":["PUT","PATCH"],"bindings":{"category":"id"}},"category.destroy":{"uri":"category\/{category}","methods":["DELETE"],"bindings":{"category":"id"}},"tariff.index":{"uri":"tariff","methods":["GET","HEAD"]},"tariff.create":{"uri":"tariff\/create","methods":["GET","HEAD"]},"tariff.store":{"uri":"tariff","methods":["POST"]},"tariff.edit":{"uri":"tariff\/{tariff}\/edit","methods":["GET","HEAD"],"bindings":{"tariff":"id"}},"tariff.update":{"uri":"tariff\/{tariff}","methods":["PUT","PATCH"],"bindings":{"tariff":"id"}},"tariff.destroy":{"uri":"tariff\/{tariff}","methods":["DELETE"],"bindings":{"tariff":"id"}},"reports.index":{"uri":"reports","methods":["GET","HEAD"]},"reports.pdf_report":{"uri":"reports\/pdf","methods":["GET","HEAD"]},"settings.create":{"uri":"general-settings","methods":["GET","HEAD"]},"settings.store":{"uri":"general-settings","methods":["POST"]},"floors.index":{"uri":"floors","methods":["GET","HEAD"]},"floors.create":{"uri":"floors\/create","methods":["GET","HEAD"]},"floors.store":{"uri":"floors","methods":["POST"]},"floors.edit":{"uri":"floors\/{floor}\/edit","methods":["GET","HEAD"],"bindings":{"floor":"id"}},"floors.update":{"uri":"floors\/{floor}","methods":["PUT","PATCH"],"bindings":{"floor":"id"}},"floors.destroy":{"uri":"floors\/{floor}","methods":["DELETE"],"bindings":{"floor":"id"}},"floors.status_changes":{"uri":"floors\/change-status\/{floor}","methods":["GET","HEAD"],"bindings":{"floor":"id"}},"parking_settings.index":{"uri":"parking-settings","methods":["GET","HEAD"]},"parking_settings.create":{"uri":"parking-settings\/create","methods":["GET","HEAD"]},"parking_settings.store":{"uri":"parking-settings","methods":["POST"]},"parking_settings.show":{"uri":"parking-settings\/{parking_setting}","methods":["GET","HEAD"],"bindings":{"parking_setting":"id"}},"parking_settings.edit":{"uri":"parking-settings\/{parking_setting}\/edit","methods":["GET","HEAD"],"bindings":{"parking_setting":"id"}},"parking_settings.update":{"uri":"parking-settings\/{parking_setting}","methods":["PUT","PATCH"],"bindings":{"parking_setting":"id"}},"parking_settings.destroy":{"uri":"parking-settings\/{parking_setting}","methods":["DELETE"],"bindings":{"parking_setting":"id"}},"parking_settings.status_changes":{"uri":"parking-settings\/change-status\/{parking_setting}","methods":["GET","HEAD"],"bindings":{"parking_setting":"id"}},"parking.index":{"uri":"parking-crud","methods":["GET","HEAD"]},"parking.create":{"uri":"parking-crud\/create","methods":["GET","HEAD"]},"parking.store":{"uri":"parking-crud","methods":["POST"]},"parking.edit":{"uri":"parking-crud\/{parking_crud}\/edit","methods":["GET","HEAD"],"bindings":{"parking_crud":"id"}},"parking.update":{"uri":"parking-crud\/{parking_crud}","methods":["PUT","PATCH"],"bindings":{"parking_crud":"id"}},"parking.destroy":{"uri":"parking-crud\/{parking_crud}","methods":["DELETE"],"bindings":{"parking_crud":"id"}},"parking.current_list":{"uri":"parking\/get-current","methods":["GET","HEAD"]},"parking.ended_list":{"uri":"parking\/get-ended","methods":["GET","HEAD"]},"parking.end":{"uri":"parking\/{parking}\/end","methods":["GET","HEAD"],"bindings":{"parking":"id"}},"parking.barcode":{"uri":"parking\/{parking}\/barcode","methods":["GET","HEAD"],"bindings":{"parking":"id"}},"parking.pay":{"uri":"parking\/{parking}\/pay","methods":["POST"],"bindings":{"parking":"id"}},"parking.quick_end":{"uri":"parking\/quick-end","methods":["POST"]},"parking.slot":{"uri":"parking\/slot\/{category_id}","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };