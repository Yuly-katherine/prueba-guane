import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jsonPrueba: {
      graph_conversation_id: "",
      graph_id: "1234123412341234",
      is_active: true,
      assigned_to: "JJ",
      is_assigned: true,
      message:
        "Good afternoon FTL team  Please help us with this quote request Please quote / Share FTL Pick up place:  4748 Lewis RdStone Mountain  GA 30083, EE  UU CARGO:  ACRYLIC POLYMERS IN PRIMARY FORMS (GENERAL CARGO) not DG WEIGHT:  16.8 tons / 14 pallets Delivery to :  HANKYU HANSHIN EXPRESS (USA) INC  10219 NW 62nd Street  Doral  FL 33178 Best regards  Alonso Salazar Branch Manager Latin America Trade Lane Manager HANKYU HANSHIN EXPRESS (USA) INC  10219 NW 62 nd Street  Doral  FL 33178 Office :  (786) 288 0962 ext 102 Direct :  (786) 629 6643 Mobil:  786-376-9538 Email:  a salazar @ us hh-express com URL :  www.hhe-global.com / usa",
      client_email: "guane@guane.com.co",
      client_name: "guane",
      client_domain: "guane.com.co",
      subject: "GA 30083 to FL 33178",
      html: "",
      message_graph:
        '<html><head>\r\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta content="text/html; charset=us-ascii"><meta name="Generator" content="Microsoft Word 15 (filtered medium)"><style>\r\n<!--\r\n@font-face\r\n\t{font-family:Wingdings}\r\n@font-face\r\n\t{font-family:"Cambria Math"}\r\n@font-face\r\n\t{font-family:Calibri}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0in;\r\n\tfont-size:11.0pt;\r\n\tfont-family:"Calibri",sans-serif}\r\nspan.EmailStyle17\r\n\t{font-family:"Calibri",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-family:"Calibri",sans-serif}\r\n@page WordSection1\r\n\t{margin:1.0in 1.0in 1.0in 1.0in}\r\ndiv.WordSection1\r\n\t{}\r\nol\r\n\t{margin-bottom:0in}\r\nul\r\n\t{margin-bottom:0in}\r\n-->\r\n</style></head><body lang="EN-US" link="#0563C1" vlink="#954F72" style="word-wrap:break-word"><div class="WordSection1"><p class="MsoNormal">Good afternoon FTL team,</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">Please help us with this quote request</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">Please quote / Share FTL</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">Pick up place: 4748 Lewis RdStone Mountain, GA 30083, EE. UU</p><p class="MsoNormal">CARGO: ACRYLIC POLYMERS IN PRIMARY FORMS (GENERAL CARGO) not DG</p><p class="MsoNormal">WEIGHT: 16.8 tons / 14 pallets</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">Delivery to : </p><p class="MsoNormal">HANKYU HANSHIN EXPRESS (USA) INC.</p><p class="MsoNormal">10219 NW 62nd Street, Doral, FL 33178</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">Best regards,</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal"><span style="font-size:12.0pt"><img width="111" height="56" id="Picture_x0020_1" src="cid:image001.png@01D6CCA9.187EC9B0" style="width:1.1574in; height:.5833in"></span></p><p class="MsoNormal"><span style="font-size:12.0pt">&nbsp;</span></p><p class="MsoNormal"><span style="font-size:12.0pt; color:#1F497D">Alonso Salazar&nbsp; </span></p><p class="MsoNormal"><span style="color:#1F497D">Branch Manager </span></p><p class="MsoNormal"><span style="color:#1F497D">Latin America Trade Lane Manager </span></p><p class="MsoNormal"><b><span style="color:#1F497D">HANKYU HANSHIN EXPRESS (USA) INC.</span></b><span style="color:#1F497D"></span></p><p class="MsoNormal"><span style="color:#1F497D">10219 NW 62<sup>nd</sup> Street, Doral, FL 33178</span></p><p class="MsoNormal"><span style="color:#1F497D">Office : (786) 288 0962 ext 102</span></p><p class="MsoNormal"><span style="color:#1F497D">Direct : (786) 629 6643 </span></p><p class="MsoNormal"><span style="color:#1F497D">Mobil: 786-376-9538&nbsp;</span></p><p class="MsoNormal"><span style="color:#1F497D">Email: </span><a href="mailto:guane@guane.com.co"><span style="color:#1F497D">guane@guane.com.co</span></a><span style="color:#1F497D"></span></p><p class="MsoNormal"><span style="color:#1F497D">URL : </span><a href="http://www.hhe-global.com/usa"><span style="color:#1F497D">www.hhe-global.com/usa</span></a><span style="color:#1F497D"></span></p><p class="MsoNormal">&nbsp;</p></div></body></html>',
      hauls: [
        {
          guid: "c983676527664b04b77318f0fb74db2b",
          zip_from: "30083",
          zip_to: "33178",
          city_from: "Stone Mountain, GA",
          state_from: "",
          state_to: "",
          city_to: "Miami, FL",
          accessorials_from: ["Non-Hazmat"],
          accessorials_to: ["Non-Hazmat"],
          accessorials: ["Non-Hazmat"],
          commodity: [
            {
              nmfc: "",
              nmfc_calculated: "",
              dimensions: "48.0 x 48.0 x 48.0 inch",
              hu_count: "1 Pallet",
              weight: "37479.0 lb",
              description: "",
              contribution: "100%",
              oversize: false
            }
          ],
          commercial_value: "",
          linear_feet: "",
          mode_id: "",
          mode: "",
          route: {
            dat: {
              min: "2.70",
              max: "3.62",
              average: "3.04",
              suggested: "2,039"
            },
            rate_iq: {
              dat: "3.04",
              truckStop_posted: "2.78",
              truckStop_paid: "3.13",
              total_historic_rate: "3.0116666666666667"
            },
            pc_miler: {
              tolls: "70.58",
              miles: "669.708"
            }
          },
          oversize: null,
          equipmentType: "V"
        }
      ],
      model_response: {
        message:
          "Good afternoon FTL team  Please help us with this quote request Please quote / Share FTL Pick up place:  4748 Lewis RdStone Mountain  GA 30083, EE  UU CARGO:  ACRYLIC POLYMERS IN PRIMARY FORMS (GENERAL CARGO) not DG WEIGHT:  16.8 tons / 14 pallets Delivery to :  HANKYU HANSHIN EXPRESS (USA) INC  10219 NW 62nd Street  Doral  FL 33178 Best regards  guane",
        entities: {
          weight: ["16.8 tons"],
          zip_to: ["33178"],
          city_to: [],
          hu_count: [],
          zip_from: ["30083"],
          city_from: [],
          commodity: ["ACRYLIC POLYMERS", "PRIMARY FORMS", "GENERAL CARGO"],
          dimensions: [],
          accessorials: ["not DG"]
        },
        probability: {
          weight: [["16.8 tons", 0.994, 225, 234, "37479 lb", 2]],
          zip_to: [["33178", 0.999, 329, 334, "33178", 0]],
          city_to: [],
          hu_count: [["1 Pallet", -1, -1, -1, "1 Pallet", 0]],
          zip_from: [["30083", 0.585, 137, 142, "30083", 0]],
          city_from: [],
          commodity: [
            ["ACRYLIC POLYMERS", 0.998, 159, 175, "Acrylic Polymers", 0],
            ["PRIMARY FORMS", 0.953, 179, 192, "Primary Forms", 0],
            ["GENERAL CARGO", 0.892, 194, 207, "General Cargo", 0]
          ],
          dimensions: [
            [
              "48.0 x 48.0 x 48.0 inch",
              -1,
              -1,
              -1,
              "48.0 x 48.0 x 48.0 inch",
              0
            ]
          ],
          accessorials: [["not DG", 0.981, 209, 215, "Non-Hazmat", 2]]
        }
      }
    }
  },
  mutations: {},
  getters: {
    jsonPrueba(state) {
      return state.jsonPrueba
    }
  },
  actions: {},
  modules: {}
});
