import { Component, OnInit, Input } from '@angular/core';
import {developer} from '../common/developer.model';
import {Skill} from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer = new developer ("James", "Smith", 21, "Male", "Use my brain to create",
  [
    new Skill("CSS","https://s14-eu5.startpage.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTLrJTpBquQjjTVttYYsARcblisqL8QtlVQQ1O_jv3ouReSUZfa&sp=5f5e5eca88167df67d2d38a6a0ae17f0&anticache=776580", "https://www.w3schools.com/html/"),
    new Skill("HTML5","https://i.goopics.net/0Rl38.png","https://www.w3schools.com/html/")
  ])

  constructor() { }

  ngOnInit() {
  }

}
