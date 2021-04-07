import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  leftBarDatas = [
    {item: "Hari Haran", icon: "https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.6435-1/p148x148/145630507_2911264832488941_8149604583928497108_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=14aUO8FsbMwAX8C8Klb&_nc_oc=AQlVE6KkA9JPW3F1Xsm6IGCtXceYsJVGZD_JnygPHEwfRE1pgxeCaBp794SrBEQ411Y43ObkbBZ_fZozLIiAs0xn&_nc_ht=scontent.fmaa2-1.fna&tp=6&oh=6f360c13514e43f86f93952796c02910&oe=60931563"},
    {item: "COVID 19",  icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/FZK_jEWapM0.png"},
    {item: "Friends",  icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"},
    {item: "Most recent", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/vEc1FLp5rSK.png"},
    {item: "Favourites", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png"},
    {item: "Groups", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"},
    {item: "Marketplace", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"},
    {item: "Watch", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png"},
    {item: "Events", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png"},
    {item: "Memories", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/Uy-TOlM5VXG.png"}
  ]

  contactDatas = [
    {name: "Suriya Prasath", img: ""},
    {name: "Sarath Kumar", img: ""},
    {name: "Gokul Krish", img: ""},
    {name: "Aishwarya Kotharu", img: ""},
    {name: "Rahul", img: ""},
    {name: "Rajini Nirmal", img: ""},
    {name: "Roshini Sekar", img: ""},
    {name: "Vignesh Prasath", img: ""},
    {name: "Fareed Ahamed", img: ""},
    {name: "Subramani", img: ""},
    {name: "Haaris Infotech", img: ""},
    {name: "Hamsa Vardhan", img: ""},
    {name: "Kokila Elangovan", img: ""},
    {name: "Haris Kumar", img: ""},
    {name: "Joseph", img: ""},
    {name: "Gowtham", img: ""}
  ]
  constructor() { }
}
