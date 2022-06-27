import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Best Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5hbK4zehLGbKdtTDrC2Y5MaHFaUEZMDxUg&usqp=CAU';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJY3Xhu411o7qXDQXeGcdnF0mmut811342BLIa2QtK7xsXx3qEuxO4LufwEHPGt-oJ_k&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}