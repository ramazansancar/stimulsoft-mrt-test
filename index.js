// Stimulsoft Reports module
var Stimulsoft = require('stimulsoft-reports-js');
var fs = require('fs');
// Loading fonts
Stimulsoft.Base.StiFontCollection.addOpentypeFontFile("Roboto-Black.ttf");
// Creating new report
//var viewer = new Stimulsoft.Viewer.StiViewer();
var report = new Stimulsoft.Report.StiReport();
// Loading report template
report.loadFile("SimpleList.mrt");
report.dictionary.databases.clear();

var dataSet = new Stimulsoft.System.Data.DataSet("Demo");
dataSet.readJsonFile("Demo.json");

report.regData("Demo", "Demo", dataSet);
/*var demoData = {
    "irsaliye1": {
      "kod": "Foo",
      "irsaliye_seri_no": "Bar",
      "irsaliye_no": "CCN-Maschine reparieren",
      "tarih": "13993",
      "saat": "999393",
      "metrekup": "Zicker Gülle GmbH",
      "otomatik": "Biomasse",
      "kullanici": "Gülen Str.",
      "hazir_miktar": "Postweiler",
      "geri_donen": "83838",
      "geri_donen_kod": "Klinge",
      "agrega1_ist": "Mekus",
      "agrega1_tart": "3333",
      "agrega1_ver": "CCN-Maschine SL-373",
      "agrega2_ist": "Verschleißteile getauscht",
      "agrega2_tart": "03.11.2016",
      "agrega2_ver": "10:00",
      "agrega3_ist": "17:30",
      "agrega3_tart": "7:30",
      "agrega3_ver": "ACTIVITY",
      "agrega4_ist": "83838",
      "agrega4_tart": "Klinge",
      "agrega4_ver": "Mekus",
      "agrega4_ver": "3333",
      "agrega5_tart": "CCN-Maschine SL-373",
      "agrega5_ver": "Verschleißteile getauscht",
      "agrega6_ist": "03.11.2016",
      "agrega6_tart":"sdasdsaf",
      "agrega6_ver":"Int64",
      "agrega7_ist":"Int64",
      "agrega7_tart":"Int64",
      "agrega7_ver":"Int64",
      "agrega8_ist":"Int64",
      "agrega8_tart":"Int64",
      "agrega8_ver":"Int64",
      "cimento1_ist":"Int64",
      "cimento1_ver":"Int64",
      "cimento2_ist":"Int64",
      "cimento2_ver":"Int64",
      "cimento3_ist":"Int64",
      "cimento3_ver":"Int64",
      "cimento4_ist":"Int64",
      "cimento4_ver":"Int64",
      "su1_ist":"Int64",
      "su1_tart":"Int64",
      "su1_ver":"Int64",
      "su2_ist":"Int64",
      "su2_tart":"Int64",
      "su2_ver":"Int64",
      "katki1_ist":"Single",
      "katki1_ver":"Single",
      "katki2_ist":"Single",
      "katki2_ver":"Single",
      "katki3_ist":"Single",
      "katki3_ver":"Single",
      "katki4_ist":"Single",
      "katki4_ver":"Single",
      "silo1ad":"String",
      "silo2ad":"String",
      "silo3ad":"String",
      "silo4ad":"String",
      "silo5ad":"String",
      "silo6ad":"String",
      "silo7ad":"String",
      "silo8ad":"String",
      "silo9ad":"String",
      "silo10ad":"String",
      "silo11ad":"String",
      "silo12ad":"String",
      "silo13ad":"String",
      "silo14ad":"String",
      "silo15ad":"String",
      "silo16ad":"String",
      "silo17ad":"String",
      "silo18ad":"String",
      "baslangic_saati":"DateTime",
      "bitis_saati":"DateTime",
      "extra1_ist":"Single",
      "extra1_ver":"Single",
      "silo19ad":"String",
      "kamyon_km":"Int64",
      "santral_id":"Int32"
    },
    "irsaliye2":{
      "recete_kod":"Int64",
      "recete_index":"String",
      "recete_ad":"String",
      "recete_slump":"String",
      "recete_granulite":"String",
      "recete_mukavemet":"String",
      "recete_aciklama1":"String",
      "recete_aciklama2":"String",
      "recete_aciklama3":"String",
      "recete_aciklama4":"String",
      "recete_sucimorani":"Single",
      "musteri_kod":"Int64",
      "musteri_index":"String",
      "musteri_ad":"String",
      "musteri_telefon":"String",
      "musteri_faks":"String",
      "musteri_adres":"String",
      "musteri_vergi_dairesi":"String",
      "musteri_vergi_no":"String",
      "musteri_ilce":"String",
      "musteri_sehir":"String",
      "santiye_kod":"Int64",
      "santiye_ad":"String",
      "santiye_telefon":"String",
      "santiye_faks":"String",
      "santiye_adres":"String",
      "santiye_ilgili":"String",
      "santiye_uzaklik":"String",
      "santiye_ilce":"String",
      "santiye_sehir":"String",
      "kamyon_kod":"Int64",
      "kamyon_plk":"String",
      "kamyon_kapasite":"Single",
      "surucu_kod":"Int64",
      "surucu_ad":"String",
      "hizmet1_kod":"Int64",
      "hizmet1_ad":"String",
      "hizmet2_kod":"Int64",
      "hizmet2_ad":"String",
      "santral_id":"Int32"
    },
    "irsaliye_ayar":{
      "kayittan_basim":"String",
      "uretim_sonu":"String",
      "aciklama1":"String",
      "aciklama2":"String",
      "aciklama3":"String",
      "aciklama4":"String",
      "aciklama5":"String",
      "aciklama6":"String",
      "aciklama7":"String",
      "aciklama8":"String",
      "aciklama9":"String",
      "aciklama10":"String",
      "uretim_basi":"String",
      "kayittan_basim2":"String",
      "uretim_sonu2":"String",
      "uretim_basi2":"String",
      "printer2":"String",
      "printer1":"String"
    },
    "tesis":{
      "kod":"Int64",
      "ad":"String",
      "irsaliye_seri_no":"String",
      "irsaliye_no":"Int64",
      "irsaliye_basim_onay":"String",
      "ses_onay":"String",
      "agrega_tolerans":"Decimal",
      "cimento_tolerans":"Decimal",
      "su1_tolerans":"Decimal",
      "su2_tolerans":"Decimal",
      "katki1_tolerans":"Decimal",
      "katki2_tolerans":"Decimal",
      "kul_tolerans":"Decimal",
      "buz_tolerans":"Decimal",
      "boya_tolerans":"Decimal",
      "toz_tolerans":"Decimal",
      "yedek_tolerans":"Decimal",
      "mikser1_kapasite":"Decimal",
      "mikser2_kapasite":"Decimal",
      "checkbox3":"String",
      "checkbox4":"String",
      "checkbox5":"String",
      "checkbox6":"String",
      "checkbox7":"String",
      "checkbox8":"String",
      "santral_id":"Int32",
    }
};*/
//report.regData("DataSet", "", dataSet);

//viewer.report = report;
// Renreding report
report.renderAsync(() => {
    console.log("Report rendered. Pages count: ", report.renderedPages.count);
    // Export to PDF
    report.exportDocumentAsync((pdfData) => {
    // Converting Array into buffer
    var buffer = Buffer.from(pdfData)
    // Saving string with rendered report in PDF into a file
    var namePdf = 'exports/SimpleList-'+Math.floor(Math.random(1000000,1000000000000) * (1000000))+'.pdf';
    const encoded = Buffer.from(pdfData, 'binary').toString('base64')
    fs.writeFileSync('exports/test-'+Math.floor(Math.random(10000000,10000000000000) * (1000000))+'.txt', 'data:application/pdf;base64,'+encoded);
    //window.open('data:application/pdf;base64,'+encoded, '_blank');
    fs.writeFileSync(namePdf, buffer);
    console.log("Rendered report saved into PDF-file. Name: "+namePdf);
    },Stimulsoft.Report.StiExportFormat.Pdf);

    var htmlString = report.exportDocument(Stimulsoft.Report.StiExportFormat.Html);

    // Saving string with rendered report in HTML into a file
    var nameHtml = 'exports/SimpleList-'+Math.floor(Math.random(10000000,10000000000000) * (1000000))+'.html';
    fs.writeFileSync(nameHtml, htmlString);
    console.log("Rendered report saved into HTML-file. Name: "+nameHtml);
});