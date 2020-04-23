import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NoneChildComponent } from './viewEncapsulationDemo/none-child/none-child.component';
import { NoneParentComponent } from './viewEncapsulationDemo/none-parent/none-parent.component';
import { EmulatedParentComponent } from './viewEncapsulationDemo/emulated-parent/emulated-parent.component';
import { EmulatedChildComponent } from './viewEncapsulationDemo/emulated-child/emulated-child.component';
import { ElementRefDemoComponent } from './element-ref-demo/element-ref-demo.component';
import { ViewChildDemoComponent } from './view-child-demo/view-child-demo.component';
import { ViewChildrenDemoComponent } from './view-children-demo/view-children-demo.component';
import { ParentComponent } from './Content-Child/parent/parent.component';
import { ChildComponent } from './Content-Child/child/child.component';
import { ParentDemoComponent } from './Content-Children/parent-demo/parent-demo.component';
import { ChildDemoComponent } from './Content-Children/child-demo/child-demo.component';
import { ContentProjectionParentComponent } from './ContentProjectionDemo/content-projection-parent/content-projection-parent.component';
import { ContentProjectionChildComponent } from './ContentProjectionDemo/content-projection-child/content-projection-child.component';


@NgModule({
  declarations: [
    AppComponent,
    NoneChildComponent,
    NoneParentComponent,
    EmulatedParentComponent,
    EmulatedChildComponent,
    ElementRefDemoComponent,
    ViewChildDemoComponent,
    ViewChildrenDemoComponent,
    ParentComponent,
    ChildComponent,
    ParentDemoComponent,
    ChildDemoComponent,
    ContentProjectionParentComponent,
    ContentProjectionChildComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
