import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    { id: 1, name: '待办', tasks: [
      { id: 1, desc: '任务一:去星巴克买杯咖啡', owner: {id:1, name: '张三', avatar: 'avatar-1'}, dueDate: new Date() },
      { id: 2, desc: '任务二:完成老板布置的ppt作业', owner: {id:1, name: '张三', avatar: 'avatar-1'}, dueDate: new Date() }
    ] },
    { id: 2, name: '进行中', tasks: [
      { id: 1, desc: '任务三:项目代码审核', owner: {id:2, name: '李四', avatar: 'avatar-2'}, dueDate: new Date() },
      { id: 2, desc: '任务四:制定项目计划', owner: {id:2, name: '李四', avatar: 'avatar-2'}, dueDate: new Date() }
    ] },
  ]

  constructor() { }

  ngOnInit() {
  }

}
