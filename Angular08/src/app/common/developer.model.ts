import {Skill} from './skill.model';

export class developer{
    public lastname: string;
    public firstname: string;
    public age: number;
    public sexe: string;
    public bio: string;
    public skill: Skill[] = [];

constructor(param_lastname:string, param_firstname:string, param_age:number, param_sexe:string, param_bio:string, param_skill){
    this.lastname=param_lastname;
    this.firstname=param_firstname;
    this.age=param_age;
    this.sexe=param_sexe;
    this.bio=param_bio;
    this.skill=param_skill;

}
}

