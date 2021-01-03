import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  postBlog(header, body, numer) {
    if (numer < 0 || numer == null) {
      let outputPlace = document.getElementById("BlogPost");
      let obal = document.createElement("div");
      let headrelem = document.createElement("h3");
      headrelem.innerText = header;
      obal.appendChild(headrelem);
      let bodyelem = document.createElement("p");
      bodyelem.innerText = body;
      obal.appendChild(bodyelem);
      outputPlace.appendChild(obal);
    } else {
      if (header == "" && body == "") {
        document.getElementById("BlogPost").removeChild(numer);
      } else {
        let outputPlace = document.getElementById("BlogPost").childNodes[numer];
        outputPlace.childNodes[0].textContent = header;
        outputPlace.childNodes[1].textContent = body;
      }
    }

  }
}
