function callRestaurant() {
  window.location.href = "tel:+447860153327";
}

function orderOnline() {
  var uberAppUrl = "uber://deeplink?action=openStorefront&storeUuid=9CP0txrFSk-FtuKgjdn67g";
  var uberWebUrl = "https://www.ubereats.com/store/peri-chicken/9CP0txrFSk-FtuKgjdn67g";

  window.location.href = uberAppUrl;

  setTimeout(function() {
      window.location.href = uberWebUrl;
  }, 2000);
}
