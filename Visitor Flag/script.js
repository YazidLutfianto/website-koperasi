function getVisitorData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  var response = UrlFetchApp.fetch('YOUR_API_URL'); // Ganti dengan URL API Anda
  var json = JSON.parse(response.getContentText());
  
  sheet.clear(); // Bersihkan data lama
  sheet.appendRow(['Country', 'Visits']); // Tambahkan header

  json.data.forEach(function(visitor) {
    sheet.appendRow([visitor.country, visitor.visits]);
  });
}

function doGet() {
  var template = HtmlService.createTemplateFromFile('Index');
  var data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data").getRange("A2:B").getValues();
  template.data = data;
  return template.evaluate();
}