import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit  {

    user: any;
    repos: any;
    username: string;


 title = 'Git';
  constructor(private _profileService: ProfileService) {
      console.log('Profile Component Init...');

  }

  search() {
    this._profileService.updateUsername(this.username);

    this._profileService.getUser().subscribe(user => {
        console.log(user);
        this.user = user;
    });

    this._profileService.getRepos().subscribe(repos => {
      console.log(repos);
        this.repos = repos;
    });
  }

  ngOnInit() {
  }
}
