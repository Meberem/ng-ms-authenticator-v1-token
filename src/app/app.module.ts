import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MsalModule } from "@azure/msal-angular";
import { TestComponent } from "./test/test.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot({
      clientID: environment.appId,
      authority: `https://login.microsoftonline.com/${environment.tennantId}/`,
      consentScopes: ["/.default"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
