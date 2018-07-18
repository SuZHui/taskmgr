import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    { id: 1, name: '待办', tasks: [
      { id: 1, desc: '任务一:去星巴克买杯咖啡', priority: 3, completed: false, owner: {id:1, name: '张三', avatar: 'avatar-1'}, dueDate: new Date(), reminder: new Date() },
      { id: 2, desc: '任务二:完成老板布置的ppt作业', priority: 2, completed: false, owner: {id:1, name: '张三', avatar: 'avatar-1'}, dueDate: new Date() }
    ] },
    { id: 2, name: '进行中', tasks: [
      { id: 1, desc: '任务三:项目代码审核', priority: 1, completed: true, owner: {id:2, name: '李四', avatar: 'avatar-2'}, dueDate: new Date(), reminder: new Date() },
      { id: 2, desc: '任务四:制定项目计划', priority: 2, completed: true, owner: {id:2, name: '李四', avatar: 'avatar-2'}, dueDate: new Date() }
    ] },
  ]

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, { data: { title: '新建任务' } });
  }

  launchCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } });
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: '修改任务', task } })
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除任务列表', content: '您确认删除该任务列表吗？' } })
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '更改列表名称' } })
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '新建列表' } })
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
