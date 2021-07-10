import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { TestDirective } from './test.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'template';
  showPrimary = true;

  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  public container!: ViewContainerRef;
  @ViewChild('primary', { static: true })
  public primary!: TemplateRef<any>;
  @ViewChild(TestDirective, { static: true })
  public secondary!: TestDirective;

  ngOnInit(): void {
    // let primaryView: ViewRef, secondaryView: ViewRef;
    // setInterval(() => {
    //   this.container.detach();
    //   if (this.showPrimary) {
    //     if (primaryView) {
    //       this.container.insert(primaryView);
    //     } else {
    //       primaryView = this.container.createEmbeddedView(this.primary, {
    //         text: 'Primary',
    //         theme1: 'btn-primary',
    //       });
    //     }
    //   } else {
    //     if (secondaryView) {
    //       this.container.insert(secondaryView);
    //     } else {
    //       secondaryView = this.container.createEmbeddedView(
    //         this.secondary.template,
    //         {
    //           $implicit: 'Secondary',
    //         }
    //       );
    //     }
    //   }
    //   this.showPrimary = !this.showPrimary;
    // }, 1000);
    // setInterval(() => {
    //   this.showPrimary = !this.showPrimary;
    // }, 2000);
  }
  ngAfterViewInit(): void {}
}
