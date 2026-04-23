import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name = '';
  total = 0;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.queryParamMap.get('name') || '';
    this.total = Number(this.route.snapshot.queryParamMap.get('total')) || 0;
  }
}
