import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../anims/route.anim';
import { listAnimation } from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight,
    listAnimation
  ]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state = '';

  projects = [
    { id: 1,name: "企业协作平台", desc: "这是一个企业内部项目", coverImg: "assets/img/covers/0.jpg" },
    { id: 2,name: "企业协作平台", desc: "这是一个企业内部项目", coverImg: "assets/img/covers/1.jpg" },
    { id: 3,name: "企业协作平台", desc: "这是一个企业内部项目", coverImg: "assets/img/covers/0.jpg" },
    { id: 4,name: "企业协作平台", desc: "这是一个企业内部项目", coverImg: "assets/img/covers/1.jpg" },
    { id: 5,name: "企业协作平台", desc: "这是一个企业内部项目", coverImg: "assets/img/covers/0.jpg" },
    { id: 6,name: "企业协作平台", desc: "这是一个企业内部项目", coverImg: "assets/img/covers/1.jpg" },
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: {title: '新增项目'}})
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [ ...this.projects, { id: this.projects.length + 1, name: '一个新项目', desc: '这是一个新项目', coverImg: "assets/img/covers/1.jpg" } ]
    })
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent);
  }

  launchEditDialog() {
    this.dialog.open(NewProjectComponent, { data: {title: '编辑项目'}})
  }

  launchConfirmDailog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除项目', content: '您确认该项目吗？' } });
    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(result)
        if (result) {
          this.projects = this.projects.filter(p => p.id !== project.id);
        }
      });
  }
}
