import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Eshop";

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get("/api/categories")
      .subscribe((c) => {
        console.log(c);
      });
  }
}
