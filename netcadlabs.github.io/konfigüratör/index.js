/**
 * @author - tunCode
 * @description - developed to easily determine the user's needs
 */

Survey
    .StylesManager
    .applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
var json = {
    showQuestionNumbers: "on",
    "completedHtml": `
    <h2 style="margin-top:100px">Netcad Digital Universe</h2>
    <p style="margin-bottom:100px"><em> Anketi doldurduğunuz için teşekkürler ..</em></p>
    <img src="./ndu-white-text.svg" width="650px" height="200">
    `,

    "pages": [{
        "name": "page2",
        "elements": [{
                "type": "radiogroup",
                "name": "firstlyTask",
                "isRequired": true,
                "title": "Sizin için bir akıllı direğin en önemli/öncelikli görevi ne olmalıdır ?",
                "colCount": 1,
                "choices": [
                    "Güvenliği arttırmak",
                    "Konfor şartlarını iyileştirmek",
                    "Aydınlatma giderlerinden tasarruf etmek",
                    "Afet durumunda kriz yönetimine destek sunmak",
                    "Temiz enerji kullanımını desteklemek",
                ]
            },


            //************************************************************************************************************************************************************************** 
            //! Afet durumunda kriz yönetimine destek sunmak

            {
                "type": "checkbox",
                "name": "afet-durum-kriz-yonetimi",
                "isRequired": true,
                "visibleIf": "{firstlyTask}='Afet durumunda kriz yönetimine destek sunmak'",
                "title": "Afet durumlarında hangi hizmetleri sunmak istersiniz ? ",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Wi-Fi",
                    "Aydınlatma",
                    "Bilgilendirme afet alanına yönlendirme",
                    "Telefon şarjı"
                ]
            },

            {
                "type": "checkbox",
                "name": "elektrik-sebesi-durumu",
                "isRequired": true,
                "visibleIf": "{afet-durum-kriz-yonetimi} notempty",
                "title": "Direğin monte edileceği yerde elektrik şebekesi var mı ? ",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },

            //! Afet durumunda kriz yönetimine destek sunmak

            //************************************************************************************************************************************************************************** 
            //! TEMİZ ENERJİ KULLANIMINI DESTEKLEMEK
            {
                "type": "radiogroup",
                "name": "temiz-enerji-kullanım-destegi",
                "isRequired": true,
                "visibleIf": "{firstlyTask}='Temiz enerji kullanımını desteklemek'",
                "title": "Temiz enerji kullanımını desteklemek mi istiyorsunuz ? ",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },

            //! TEMİZ ENERJİ KULLANIMINI DESTEKLEMEK

            //************************************************************************************************************************************************************************** 
            //! KONFOR ŞARTLARINI İYİLEŞTİRMEK

            {
                "type": "radiogroup",
                "name": "konfor-icin-olcum",
                "isRequired": true,
                "visibleIf": "{firstlyTask}='Konfor şartlarını iyileştirmek'",
                "title": "Konfor için aşağıdaki alanlarda sürekli ölçümler yapılmasını ister misiniz  ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 3,
                "choices": [
                    "Konfor",
                    "Nem",
                    "Gürültü",
                    "Hava kalitesi",
                    "UV Endeksi"
                    //! AŞAĞIDAKİ HANGİ ALANLAR ? 
                ]
            },

            {
                "type": "radiogroup",
                "name": "partikul-olcme",
                "isRequired": true,
                "visibleIf": "{konfor-icin-olcum} notempty",
                "title": "Havadaki partikülleri ölçmek ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 3,
                "choices": [
                    "Evet",
                    "Hayır",
                ]
            },

            {
                "type": "checkbox",
                "name": "sarj-secimi",
                "isRequired": true,
                "visibleIf": "{partikul-olcme}='Evet'",
                "title": "Aşağıdakilerden hangilerini şarj etmek istersiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 4,
                "choices": [
                    "Araç",
                    "Bisiklet",
                    "Engelli aracı",
                    "Telefon",
                    "CEVAPLANDIKTAN SONRA --> aydınlatma giderlerinden tasarruf etmek -> Renkli ledler panik buton yada herhangi başka bir senaryoya bağlı çalışsın ister misiniz? sorusuna bağlanmalı"
                ]
            },

            {
                "type": "radiogroup",
                "name": "ivme-olcer-direk-kontrol",
                "isRequired": true,
                "visibleIf": "{firstlyTask}='Konfor şartlarını iyileştirmek'",
                "title": "Direğin güvenliğini ivme ölçer ile kontrol etmek ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },

            {
                "type": "radiogroup",
                "name": "direk-panel-ofgrit-calisma",
                "isRequired": true,
                "visibleIf": "{firstlyTask}='Konfor şartlarını iyileştirmek'",
                "title": "Güneş paneli ile direğin of grit çalışmasını ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },

            {
                "type": "panel",
                "name": "ofgrit-gun",
                "title": "Kaç gün ofgrit çalışma gerekli ?",
                "visibleIf": "{direk-panel-ofgrit-calisma}='Evet'",
                "isRequired": true,
                "elements": [{
                    "type": "text",
                    "name": "ofgrit-gun",
                    "inputType": "tel",
                    "title": "Lütfen gün sayısı giriniz"
                }]
            },

            //! KONFOR ŞARTLARINI İYİLEŞTİRMEK


            //************************************************************************************************************************************************************************** 
            //! Aydınlatma giderlerinden tasarruf etmek
            {
                "type": "radiogroup",
                "name": "armatur-sayisi",
                "isRequired": true,
                "visibleIf": "{firstlyTask}='Aydınlatma giderlerinden tasarruf etmek'",
                "title": "Kaç tane armatür kullanmak istersiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 3,
                "choices": [
                    "1",
                    "2",
                    "3"
                ]
            },
            {
                "type": "radiogroup",
                "name": "armatur-kıs-ac",
                "isRequired": true,
                "visibleIf": "{armatur-sayisi} notempty",
                "title": "Armatürleri uzaktan kısmak/açmak  ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 3,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "armatur-arayuz-gosterimi",
                "isRequired": true,
                "visibleIf": "{armatur-kıs-ac} notempty",
                "title": "Armatürlerin harcadıkları enerjiyi ara yüzden görmek ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "saate-baglı-program",
                "isRequired": true,
                "visibleIf": "{armatur-arayuz-gosterimi} notempty",
                "title": "Saate bağlı program yapmak ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "hareketle-ac-kapa",
                "isRequired": true,
                "visibleIf": "{saate-baglı-program} notempty",
                "title": "Hareket bağlı açılıp kapanmasını ister misiniz ? ",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "ortam-ısıgına-baglı-calısma",
                "isRequired": true,
                "visibleIf": "{hareketle-ac-kapa} notempty",
                "title": "Ortam Işığına bağlı otomatik çalışma ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "renkli-aydınlatma-armatürü",
                "isRequired": true,
                "visibleIf": "{hareketle-ac-kapa} notempty",
                "title": "Renkli aydınlatma armatürü ister misiniz ? ",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "senaryoya-baglı-led",
                "isRequired": true,
                "visibleIf": "{renkli-aydınlatma-armatürü}='Evet'",
                "title": " Renkli ledler panik buton yada herhangi başka bir senaryoya bağlı çalışsın ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "elektrik-kacagı-uyarı-sekli",
                "isRequired": true,
                "visibleIf": "{ortam-ısıgına-baglı-calısma} notempty",
                "title": "Direkte elektrik kaçağı olduğunda sesli ve görüntülü uyarı  vermesini ster misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "arıza-anlık-arayuz-bildirimi",
                "isRequired": true,
                "visibleIf": "{elektrik-kacagı-uyarı-sekli} notempty",
                "title": "Arıza bildirimlerini anlık olarak arayüzden takp etmek ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },

            //! Aydınlatma giderlerinden tasarruf etmek
            //************************************************************************************************************************************************************************** 

            //************************************************************************************************************************************************************************** 
            {
                "type": "radiogroup",
                "name": "guvenligi-arttirmak",
                "isRequired": true,
                "visibleIf": "{firstlyTask}='Güvenliği arttırmak'",
                "title": "Güvenliği sağlanacak alanda aşağıdakilerden hangisi daha çok ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "İnsanlar",
                    "Araçlar",
                ]
            },
            //! GÜVENLİĞİ SAĞLAMAK --> İNSANLAR

            {
                "type": "radiogroup",
                "name": "programa-gore-gelme",
                "isRequired": true,
                "visibleIf": "{guvenligi-arttirmak}='İnsanlar'",
                "title": "Bu insanlar tiyatro salonu, okul , cami gibi  günün belli saatlerinde belli bir programa göre mi bir araya geliyorlar? Alışveriş merkezi , çalışma alanı gibi bir alanda sürekli ve değişen yoğunluklarda mı bulunuyorlar ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Belirli bir programa göre geliyorlar",
                    "Belirli bir programa göre gelmiyorlar" //* BURAYI YAP
                ]
            },
            {
                "type": "radiogroup",
                "name": "nasıl-bir-alan",
                "isRequired": true,
                "visibleIf": "{programa-gore-gelme}='Belirli bir programa göre gelmiyorlar'",
                "title": "Alışveriş merkezi, sosyal tesis, gibi bir alan mı,yoksa Liman, fabrika gibi bir çalışma alanı mı ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "AVM,Sosyal tesis vb bir alan",
                    "Liman,fabrika gibi bir çalışma alanı"
                ]
            },
            {
                "type": "radiogroup",
                "name": "yonelim-haritasi",
                "isRequired": true,
                "visibleIf": "{nasıl-bir-alan}='AVM,Sosyal tesis vb bir alan'",
                "title": "Kalabalık yönelim haritaları oluşturmak ve incelemek ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır",
                ]
            },
            {
                "type": "radiogroup",
                "name": "panik-button",
                "isRequired": true,
                "visibleIf": "{yonelim-haritasi}='Evet'",
                "title": "Herhangi bir acil durumda destek istenebilecek panik butonları kullanılmasını ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır",
                ]
            },
            {
                "type": "radiogroup",
                "name": "whatsapp",
                "isRequired": true,
                "visibleIf": "{panik-button}='Evet'",
                "title": "Bu panik butonlara basıldığında ilgili telefon numaralarına whatsapp mesajı atılsın mı ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 3,
                "choices": [
                    "Evet",
                    "Hayır",
                    "Panik butona basıldığında olay yeri ile kontrol merkezi arasında sesli iletişim kurulmasını ister misiniz ?"
                    //! BU BİR SEÇENEK Mİ YOKSA AYRI BİR SORU MU ?
                ]
            },
            {
                "type": "radiogroup",
                "name": "reklam-oynatımı",
                "isRequired": true,
                "visibleIf": "{yonelim-haritasi}='Evet'",
                "title": "Kalabalık-hareket analizine göre reklam oynatılmasını ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır",
                ]
            },
            {
                "type": "checkbox",
                "name": "fabrika-vb-alan",
                "isRequired": true,
                "visibleIf": "{nasıl-bir-alan}='Liman,fabrika gibi bir çalışma alanı'",
                "title": "Aşağıdaki alanlarda  için tespitler yapılmasını ister misiniz?",
                "choicesFromQuestionMode": "selected",
                "colCount": 4,
                "choices": [
                    "Baret",
                    "Maske",
                    "Sosyal mesafe",
                    "Plaka-okuma , araç-tanıma",
                    "Terk edilmiş şüpheli eşya",
                    "Dumansız hava sahası",
                    "Geçilmemesi gereken sınır",
                    "Diğer"
                ]
            },

            {
                "type": "checkbox",
                "name": "ses-tespiti",
                "isRequired": true,
                "visibleIf": "{fabrika-vb-alan} notempty",
                "title": "Aşağıdaki alanlarda için tespitler yapılmasını ister misiniz",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Silah sesi",
                    "Çığlık sesi",
                ]
            },
            {
                "type": "checkbox",
                "name": "direk-kullanım-alanı",
                "isRequired": true,
                "visibleIf": "{programa-gore-gelme}='Belirli bir programa göre gelmiyorlar'",
                "title": "Aşağıdakilerden hangisi akıllı direklerin kullanılacağı alana daha çok benziyor",
                "choicesFromQuestionMode": "selected",
                "colCount": 5,
                "choices": [
                    "Yol",
                    "Cadde",
                    "Sokak",
                    "Park",
                    "Otopark",
                    "Bahçe",
                    "Liman",
                    "Stadyum",
                    "Tatil köyü,otel",
                    "Cami",
                    "Okul",
                    "Hastahane"
                ]
            },
            {
                "type": "radiogroup",
                "name": "belirli-bir-programa-gore-gelme",
                "isRequired": true,
                "visibleIf": "{programa-gore-gelme}='Belirli bir programa göre geliyorlar'",
                "title": "Aşağıdakilerden hangisi ya da hangilerinin yapılmasını istersiniz?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Takip edilmelerini örneğin toplam katılımcı sayısının belirlenmesini",
                    "Sınır ihalelerinin tespit edilmesi ve uyarı verilmesi",
                    "Çıkış kapıları, etkinlik saatleri gibi duyuruların yapılması",
                    "Video gösterilmesi"
                ]
            },
            {
                "type": "radiogroup",
                "name": "wifi-hizmeti",
                "isRequired": true,
                "visibleIf": "{belirli-bir-programa-gore-gelme} notempty",
                "title": "Katılımcılara ücretsiz Wi-Fi hizmeti sunmak ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "panel",
                "name": "cihaz-sayısı",
                "title": "Kaç kişinin ağdan aynı anda faydalanması gerekli?",
                "visibleIf": "{wifi-hizmeti}='Evet'",
                "isRequired": true,
                "elements": [{
                    "type": "text",
                    "name": "cihaz-sayisi",
                    "inputType": "tel",
                    "title": "Please, Enter a numeric value"
                }]
            },
            {
                "type": "panel",
                "name": "hizmet-alani",
                "title": "Bu hizmetin sunulacağı alan ne kadar genişlikte bir açık alan?",
                "visibleIf": "{cihaz-sayisi} notempty",
                "isRequired": true,
                "elements": [{
                    "type": "text",
                    "name": "hizmet-alani",
                    "inputType": "tel",
                    "title": "Please, Enter a numeric value"
                }]
            },
            {
                "type": "radiogroup",
                "name": "bina-agac",
                "isRequired": true,
                "visibleIf": "{hizmet-alani} notempty",
                "title": "Bu alanda yüksek binalar ya da ağaçlar var mı ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 1,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },

            //! GÜVENLİĞİ SAĞLAMAK --> İNSANLAR

            //************************************************************************************************************************************************************************** 

            //! GÜVENLİĞİ SAĞLAMAK --> ARAÇLAR
            {
                "type": "radiogroup",
                "name": "araclar",
                "isRequired": true,
                "visibleIf": "{guvenligi-arttirmak}='Araçlar'",
                "title": "Bu araçlar otoyol, havalimanı gibi bu alandan geçip giden araçlar mı? Fabrika vinçleri, forkliftler gibi sürekli aynı alanda çalışan araçlar mı?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Geçip giden araçlar",
                    "Aynı alandaki araçlar",
                ]
            },
            {
                "type": "radiogroup",
                "name": "gecip-giden-araclar",
                "isRequired": true,
                "visibleIf": "{araclar}='Geçip giden araçlar'",
                "title": "Yol şartları hakkında bilgi toplamak ve buzlanma riski gibi riskler için uyarı oluşturmak ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "konum",
                "isRequired": true,
                "visibleIf": "{araclar}='Aynı alandaki araçlar'",
                "title": "Konum Tespiti yapmak ister misiniz ?",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "bileklik-anahtarlık",
                "isRequired": true,
                "visibleIf": "{konum}='Evet'",
                "title": "Bileklik anahtarlık ile konum tespiti yaparak ziyaret edilebilecek alanları kısıtlamak ve aksi durumlarda uyarı oluşturmak ister misiniz? ",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            },
            {
                "type": "radiogroup",
                "name": "kullanıcılarla-paylasım",
                "isRequired": true,
                "visibleIf": "{bileklik-anahtarlık}='Evet'",
                "title": "Takip edilen konumları farklı kullanıcılar ile paylaşmak bu bilgiyi ücret karşılığı satmak ister misiniz? ",
                "choicesFromQuestionMode": "selected",
                "colCount": 2,
                "choices": [
                    "Evet",
                    "Hayır"
                ]
            }
            //! GÜVENLİĞİ SAĞLAMAK --> ARAÇLAR
        ]
    }]
};

window.survey = new Survey.Model(json);

survey.onComplete
    .add(function(result) {
        document
            .querySelector('#surveyResult')
            // .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
        console.log("Result JSON:\n" + JSON.stringify(result.data, null, 3));
    });

$("#surveyElement").Survey({ model: survey });