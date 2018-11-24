import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JsonpropdemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jsonpropdemo',
  templateUrl: 'jsonpropdemo.html',
})
export class JsonpropdemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonpropdemoPage');
    console.log(this.data.properties["Take Selection"].values[0]);
    console.log(this.data.properties["Take Selection"].values[1]);
  }

  data={"required":["Load_Type","Company Name","Consigner","Dagerous Godds","Take Selection"],
  "properties":{
    "Load_Type":{"lable":"Load Type",
                  "type":"text",
                  "class":'"secondry-content"',
                  "values":["Load1","Load2"]
                },
     "Company Name":{"lable":"Company Name",
                  "type":"text",
                  "class":'"secondry-content"',
                  
              },
    "Consigner":{"lable":"Consigner",
              "type":"text",
              "class":'"secondry-content"',
              
          },
   "Dagerous Godds":{"lable":"Dagerous Godds",
              "type":"text",
              "class":'"secondry-content"',
              "values":["10","20"]
              
          },
   "Take Selection":{"lable":"Take Selection",
              "type":"text",
              "class":"'secondry-content'",
              "values":["10","20"]
          },
    "Ticket Type":{"lable":"Ticket Type",
              "type":"text",
              "class":"'secondry-content'",
              "values":["ticket1","ticket2"]
          },
      "Product Type":
          {"lable":"Product Type",
          "type":"text",
          "class":"'secondry-content'",
          "values":["Product1","Product2"]
          } , 
     "Arrival Time":
          {"lable":"Arrival Time",
          
          "class":"'secondry-content'",
          
          }  ,
          "Start Time":
          {"lable":"Start Time",
          
          "class":"'secondry-content'",
          
          }  ,
          "Start Guage":
          {"lable":"Start Guage",
          
          "class":"'secondry-content'",
          "values":["Guage1","Guage2"]
          }  ,
          "Finish Guage":
          {"lable":"Finish uage",
          
          "class":"'secondry-content'",
          "values":["FGuage1","FGuage2"]
          }  ,

  }

}


}
