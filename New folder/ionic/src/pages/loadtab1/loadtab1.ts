import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the Loadtab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loadtab1',
  templateUrl: 'loadtab1.html',
})
export class Loadtab1Page {
  demo:string="hello";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Loadtab1Page');
    console.log(this.data);
    console.log(this.data.properties["Load_Type"].lable);

    console.log("demo "+this.demo);
  }
  data={"required":["Load_Type","Company Name","Consigner","Dagerous Godds","Take Selection"],
  "properties":{
    "Load_Type":{"lable":"Load Type",
                  "type":"text",
                  "class":'"secondry-content"'
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
              
          },
          "Take Selection":{"lable":"Take Selection",
              "type":"text",
              "class":"'secondry-content'",
              
          }
  }
  
    
        
}

}
