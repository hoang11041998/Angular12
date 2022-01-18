import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public class = 'class';
  public categories = 'categories';
  public categories2 = 'categories2';
  public question = 'question';
  public ans1 = 'Ans1';
  public ans2 = 'Ans2';
  public ans3 = 'Ans3';
  public ans4 = 'Ans4';
  public ans = 'Ans';
  public hint = 'Hint';
  public explanation = 'Explanation';
  public duration = 'Duration'
  
  constructor() { }

  ngOnInit(): void {
  }

}
