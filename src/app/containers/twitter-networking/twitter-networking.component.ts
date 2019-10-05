import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TwitterService } from '../../services/twitter/twitter.service';

@Component({
  selector: 'twitter-networking',
  templateUrl: './twitter-networking.component.html',
  styleUrls: ['./twitter-networking.component.css']
})
export class TwitterNetworkingComponent implements OnInit {
  userForm: FormGroup;
  resultJSON = [];
  submitButtonEnabled = true;

  constructor(
    public formBuilder: FormBuilder,
    public twitterService: TwitterService
  ) { } 

  ngOnInit() {
    this.userForm = this.formBuilder.group({
  		artist: ['', Validators.required],
  		song: ['', Validators.required],
      search_count: ['', Validators.required],
      min_likes: ['', Validators.required],
      min_retweets: ['', Validators.required],
      min_followers: ['', Validators.required],
      inital_message: ['']
  	});
  }

  submit(max_id?: number) {
    this.submitButtonEnabled = false;

    if (!max_id) {
      this.resultJSON = [];
    }

    this.twitterService.getUsers({
      artist: this.userForm.get('artist').value,
      song: this.userForm.get('song').value,
      search_count: this.userForm.get('search_count').value - this.resultJSON.length,
      min_retweets: this.userForm.get('min_retweets').value,
      min_likes: this.userForm.get('min_likes').value,
      min_followers: this.userForm.get('min_followers').value,
      max_id: max_id
    }).subscribe(res => {
      res.data.forEach(element => {
        this.resultJSON.push(element);
      });

      if (this.resultJSON.length < this.userForm.get('search_count').value) {
        this.submit(res.max_id);
      } else {
        this.submitButtonEnabled = true;
      }
    });
  }

  sendMessage() {
    this.twitterService.sendMessage({}).subscribe(res => {
      alert(res);
    });;
  }

  clearAll() {
    this.userForm.reset();
    this.resultJSON = [];
  }

  public get isFormValid() {
    return this.userForm.valid;
  }

}
